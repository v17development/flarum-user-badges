<?php

namespace V17Development\FlarumUserBadges\UserBadge\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Notification\NotificationSyncer;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumUserBadges\Badge\Badge;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;
use Flarum\User\User;
use Illuminate\Support\Arr;
use V17Development\FlarumUserBadges\Notification\BadgeReceivedBlueprint;

class CreateUserBadgeHandler
{
    /**
     * @var NotificationSyncer
     */
    protected $notifications;

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
     * @param NotificationSyncer $notifications
     */
    public function __construct(TranslatorInterface $translator, SettingsRepositoryInterface $settings, NotificationSyncer $notifications)
    {
        $this->translator = $translator;
        $this->settings = $settings;
        $this->notifications = $notifications;
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
        $badgeUser->assigned_at = time();

        // Set earned reason
        if(Arr::has($command->data, "attributes.description")) {
            $badgeUser->description = Arr::get($command->data, "attributes.description", null);
        }

        $badgeUser->save();

        // Send notification
        $this->notifications->sync(
            new BadgeReceivedBlueprint($badgeUser),
            [$user]
        );

        return $badgeUser;
    }
}
