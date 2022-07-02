<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'badges.editOwnUserCardBadges' => Group::MEMBER_ID
]);
