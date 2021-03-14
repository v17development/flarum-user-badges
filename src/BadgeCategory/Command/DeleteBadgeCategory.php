<?php

namespace V17Development\FlarumBadges\BadgeCategory\Command;

use Flarum\User\User;

class DeleteBadgeCategory
{
    public $actor;

    public $id;

    public function __construct(User $actor, $id)
    {
        $this->actor = $actor;
        $this->id = $id;
    }
}
