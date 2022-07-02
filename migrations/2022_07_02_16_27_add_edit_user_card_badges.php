<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'badges.editUserCardBadges' => Group::MODERATOR_ID
]);
