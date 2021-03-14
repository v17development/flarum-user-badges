<?php

namespace V17Development\FlarumUserBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumUserBadges\Badge\Badge;

class DeleteBadgeHandler
{
    /**
     * @param DeleteBadge $command
     */
    public function handle(DeleteBadge $command)
    {
        $command->actor->assertAdmin();

        $badge = Badge::findOrFail($command->id);

        $badge->delete();
    }
}
