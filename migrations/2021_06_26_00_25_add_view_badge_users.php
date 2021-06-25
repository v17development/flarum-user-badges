<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'badges.canViewDetailedUsers' => Group::GUEST_ID
]);
