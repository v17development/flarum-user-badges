<?php

namespace V17Development\FlarumBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use V17Development\FlarumBadges\Badge\Badge;

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
