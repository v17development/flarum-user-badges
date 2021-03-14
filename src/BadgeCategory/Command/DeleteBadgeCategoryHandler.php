<?php

namespace V17Development\FlarumBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumBadges\BadgeCategory\BadgeCategory;

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
