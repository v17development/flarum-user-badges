<?php

namespace V17Development\FlarumUserBadges\BadgeCategory\Command;

use Flarum\User\User;

class OrderBadgeCategories
{
    public $actor;

    public $order;

    public function __construct(User $actor, $order)
    {
        $this->actor = $actor;
        $this->order = $order;
    }
}
