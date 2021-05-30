<?php

namespace V17Development\FlarumUserBadges\AutoModerator\Requirement;

use Askvortsov\AutoModerator\Requirement\RequirementDriverInterface;
use Flarum\User\User;
use Illuminate\Contracts\Support\MessageBag;
use Illuminate\Contracts\Validation\Factory;

class HasBadge implements RequirementDriverInterface
{
    public function translationKey(): string {
        return 'v17development-flarum-badges.admin.auto_moderator.requirement_drivers.has_badge';
    }

    public function availableSettings(): array
    {
        return [
            'badge_id' => 'v17development-flarum-badges.admin.auto_moderator.action_drivers.badge_id'
        ];
    }

    public function validateSettings(array $settings, Factory $validator): MessageBag
    {
        return $validator->make($settings, [
            'badge_id' => 'required|integer',
        ])->errors();
    }

    public function extensionDependencies(): array {
        return [];
    }

    public function eventTriggers(): array {
        return [];
    }

    public function userSatisfies(User $user, array $settings = []): bool {
        return $user->userBadges()->where('badge_id', $settings['badge_id'])->exists();
    }
}