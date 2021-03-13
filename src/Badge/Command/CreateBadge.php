<?php

namespace V17Development\FlarumBadges\Badge\Command;

use Flarum\User\User;

class CreateBadge
{
    public $actor;

    public $data;

    public function __construct(User $actor, $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
