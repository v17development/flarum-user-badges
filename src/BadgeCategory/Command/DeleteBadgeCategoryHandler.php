<?php

namespace V17Development\FlarumUserBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumUserBadges\BadgeCategory\BadgeCategory;

class DeleteBadgeCategoryHandler
{
    /**
     * @param DeleteBadgeCategory $command
     */
    public function handle(DeleteBadgeCategory $command)
    {
        $command->actor->assertAdmin();

        $badgeCategory = BadgeCategory::findOrFail($command->id);

        $badgeCategory->delete();
    }
}
