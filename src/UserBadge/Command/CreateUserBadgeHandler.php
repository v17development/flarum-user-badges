<?php

namespace V17Development\FlarumUserBadges\UserBadge\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Component\Translation\TranslatorInterface;
use V17Development\FlarumUserBadges\Badge\Badge;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;
use Flarum\User\User;
use Illuminate\Support\Arr;

class CreateUserBadgeHandler
{
    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(TranslatorInterface $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }

    /**
     * @param CreateUserBadge $command
     */
    public function handle(CreateUserBadge $command)
    {
        $command->actor->assertCan('badges.giveBadge');

        // Find badge
        $badge = Badge::findOrFail(Arr::get($command->data, "relationships.badge.data.id", null));

        // Find selected user
        $user = User::findOrFail(Arr::get($command->data, "relationships.user.data.id", null));

        // Make sure the user doesn't have this badge already
        if(
            UserBadge::where([
                'badge_id' => $badge->id,
                'user_id' => $user->id
            ])->count() !== 0
        ) {
            throw new ValidationException([
                'message' => $this->translator->trans('v17development-flarum-badges.forum.user_has_badge')
            ]);
        }

        // Create badge
        $badgeUser = new UserBadge;
        $badgeUser->badge_id = $badge->id;
        $badgeUser->user_id = $user->id;
        
        // Set earned reason
        if(Arr::has($command->data, "attributes.description")) {
            $badgeUser->description = Arr::get($command->data, "attributes.description", null);
        }

        $badgeUser->save();

        return $badgeUser;
    }
}
