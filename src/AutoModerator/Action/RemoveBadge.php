<?php

namespace V17Development\FlarumUserBadges\AutoModerator\Action;

use Askvortsov\AutoModerator\Action\ActionDriverInterface;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Contracts\Support\MessageBag;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;
use Flarum\User\User;

class RemoveBadge implements ActionDriverInterface
{
    public function translationKey(): string
    {
        return 'v17development-flarum-badges.admin.auto_moderator.action_drivers.remove_badge';
    }

    public function availableSettings(): array {
        return [
            'badge_id' => 'v17development-flarum-badges.admin.auto_moderator.action_drivers.badge_id'
        ];
    }

    public function validateSettings(array $settings, Factory $validator): MessageBag {
        return $validator->make($settings, [
            'badge_id' => 'required|integer',
        ])->errors();
    }

    public function extensionDependencies(): array
    {
        return [];
    }

    public function execute(User $user, array $settings = [], User $lastEditedBy) {
        // Find badge if given previously
        $badge = UserBadge::where([
            "user_id" => $user->id,
            "badge_id" => $settings['badge_id']
        ]);

        // Badge found, take badge from user
        if($badge) {
            $badge->delete();
        }
    }
}