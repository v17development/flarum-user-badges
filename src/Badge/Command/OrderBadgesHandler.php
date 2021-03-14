<?php

namespace V17Development\FlarumUserBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumUserBadges\Badge\Badge;

class OrderBadgesHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(OrderBadges $command)
    {
        $command->actor->assertAdmin();
        
        foreach($command->order as $category) {
            foreach($category['children'] as $badgePosition => $badgeId) {
                Badge::where('id', $badgeId)->update([
                    'order' => $badgePosition,
                    'badge_category_id' => $category['id']
                ]);
            }
        }

        return Badge::all();
    }
}
