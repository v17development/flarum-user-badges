<?php

namespace V17Development\FlarumBadges\UserBadge\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumBadges\UserBadge\UserBadge;

class DeleteUserBadgeHandler
{
    /**
     * @param DeleteUserBadge $command
     */
    public function handle(DeleteUserBadge $command)
    {
        // Make sure the person can remove a badge from a user 
        $command->actor->assertCan('badges.delete');

        $badge = UserBadge::findOrFail($command->id);

        $badge->delete();
    }
}
