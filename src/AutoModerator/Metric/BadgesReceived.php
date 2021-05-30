<?php

namespace V17Development\FlarumUserBadges\AutoModerator\Metric;

use Askvortsov\AutoModerator\Metric\MetricDriverInterface;
use Flarum\User\User;

class BadgesReceived implements MetricDriverInterface
{
    public function translationKey(): string
    {
        return 'v17development-flarum-badges.admin.auto_moderator.metric_drivers.badges_received';
    }

    public function extensionDependencies(): array
    {
        return [];
    }

    public function eventTriggers(): array
    {
        return [];
    }

    public function getValue(User $user): int
    {
        return $user->userBadges()->count();
    }
}