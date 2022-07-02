<?php

namespace V17Development\FlarumUserBadges\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;

class SaveSelectedBadges
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Saving $event
     *
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        // Update user badges in card
        if (Arr::has($attributes, "userCardBadges") && is_array($attributes['userCardBadges'])) {
            $actor->assertCan('editUserCardBadges', $user);

            // First, validate the amount of selected badges
            if (count($attributes['userCardBadges']) > $this->settings->get('v17development-user-badges.number_of_badges_on_user_card')) {
                throw new \Error("Too many badges selected");
            }

            // Then, get current selected badges
            $currentBadges = UserBadge::where([
                "user_id" => $user->id,
                "in_user_card" => 1
            ])->get();

            // Remove current badges that are not in the new list
            foreach ($currentBadges as $currentBadge) {
                // Remove current user badge
                if (!in_array($currentBadge->id, $attributes['userCardBadges'])) {
                    $currentBadge->in_user_card = 0;
                    $currentBadge->save();
                }
            }

            // Set selected badges
            foreach ($attributes['userCardBadges'] as $selectedBadgeId) {
                // Make sure users can only edit their own badges
                $selectedBadge = UserBadge::where([
                    "user_id" => $user->id,
                    "id" => $selectedBadgeId
                ])->first();

                // Not selected earlier yet, update!
                if ($selectedBadge && !$selectedBadge->in_user_card) {
                    $selectedBadge->in_user_card = 1;
                    $selectedBadge->save();
                }
            }
        }
    }
}
