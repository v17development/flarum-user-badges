<?php

namespace V17Development\FlarumUserBadges\UserBadge\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;
use Illuminate\Support\Arr;

class UpdateUserBadgeHandler
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
     * @param UpdateUserBadge $command
     */
    public function handle(UpdateUserBadge $command)
    {
        $badge = UserBadge::findOrFail($command->id);

        // Make sure the person can update a badge from another user
        if($badge->user !== $command->actor) {
            $command->actor->assertCan('badges.giveBadge');
        }

        // Set badge primary
        if(Arr::get($command->data, "attributes.isPrimary", false)) {
            $badge->is_primary = Arr::get($command->data, "attributes.isPrimary", false);

            // Make sure there is only one primary badge
            UserBadge::where('user', $badge->user)
                ->update(['is_primary' => false]);
        }

        // Update earned reason
        if($command->actor->can('badges.giveBadge') && Arr::has($command->data, "attributes.description")) {
            $description = Arr::get($command->data, "attributes.description", null);

            $badge->description = $description !== "" ? $description : null;
        }

        $badge->save();

        return $badge;
    }
}
