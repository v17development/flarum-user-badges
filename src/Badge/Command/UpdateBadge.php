<?php

namespace V17Development\FlarumUserBadges\Badge\Command;

use Flarum\User\User;

class UpdateBadge
{
    public $actor;

    public $id;

    public $data;

    public function __construct(User $actor, $id, $data)
    {
        $this->actor = $actor;
        $this->id = $id;
        $this->data = $data;
    }
}
