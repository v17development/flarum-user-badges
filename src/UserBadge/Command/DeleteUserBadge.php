<?php

namespace V17Development\FlarumUserBadges\UserBadge\Command;

use Flarum\User\User;

class DeleteUserBadge
{
    public $actor;

    public $id;

    public function __construct(User $actor, $id)
    {
        $this->actor = $actor;
        $this->id = $id;
    }
}
