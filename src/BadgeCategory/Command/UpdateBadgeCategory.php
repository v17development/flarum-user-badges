<?php

namespace V17Development\FlarumBadges\BadgeCategory\Command;

use Flarum\User\User;

class UpdateBadgeCategory
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
