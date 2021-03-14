<?php

namespace V17Development\FlarumUserBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumUserBadges\BadgeCategory\BadgeCategory;

class OrderBadgeCategoriesHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(OrderBadgeCategories $command)
    {
        $command->actor->assertAdmin();
        
        foreach($command->order as $badgePosition => $categoryId) {
            BadgeCategory::where('id', $categoryId)->update([
                'order' => $badgePosition
            ]);
        }

        return BadgeCategory::all();
    }
}
