<?php

namespace V17Development\FlarumBadges\Badge\Command;

use Flarum\User\User;

class DeleteBadge
{
    public $actor;

    public $id;

    public function __construct(User $actor, $id)
    {
        $this->actor = $actor;
        $this->id = $id;
    }
}
