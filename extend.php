<?php

namespace V17Development\FlarumBadges;

use Flarum\Extend;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\User\User;
use Flarum\Api\Controller as FlarumController;

return [
    // (new Extend\Frontend('forum'))
    //     ->js(__DIR__.'/js/dist/forum.js')
    //     ->css(__DIR__ . '/less/Forum.less')
    // ,
    // (new Extend\Frontend('admin'))
    //     ->js(__DIR__.'/js/dist/admin.js')
    //     ->css(__DIR__ . '/less/Admin.less'),

    (new Extend\Routes('api'))
        ->get('/badges', 'badges.overview', Api\Controller\ListBadgesController::class)
        ->get('/badge_categories', 'badge.categories.overview', Api\Controller\ListBadgeCategoriesController::class)
        ->get('/badge_users', 'badge.users.overview', Api\Controller\ListBadgeUsersController::class)
    ,

    (new Extend\Model(User::class))
        ->belongsToMany('userBadges', BadgeUser\BadgeUser::class, 'badge'),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->hasMany('userBadges', Api\Serializer\BadgeUserSerializer::class),

    (new Extend\ApiController(FlarumController\ShowUserController::class))
        ->addInclude('userBadges'),

    (new Extend\ApiController(FlarumController\ListUsersController::class))
        ->addInclude('userBadges'),

    new Extend\Locales(__DIR__ . '/locale'),
];
