<?php

namespace V17Development\FlarumUserBadges\BadgeCategory\Command;

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
