<?php

namespace V17Development\FlarumUserBadges;

use Flarum\Extend;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\User\User;
use Flarum\Api\Controller as FlarumController;
use Askvortsov\AutoModerator\Extend\AutoModerator as AutoModeratorExtender;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\Event\Saving;

$extend = [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less')
        ->route('/badges', 'badges.overview', Controllers\BadgeOverviewController::class)
        ->route('/badges/{id}', 'badges.item', Controllers\BadgeOverviewController::class),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    (new Extend\Routes('api'))
        // Badges
        ->get('/badges', 'badges.overview', Api\Controller\ListBadgesController::class)
        ->post('/badges', 'badges.create', Api\Controller\CreateBadgeController::class)
        ->post('/badges/order', 'badges.order', Api\Controller\OrderBadgesController::class)
        ->get('/badges/{id}', 'badges.show', Api\Controller\ShowBadgeController::class)
        ->patch('/badges/{id}', 'badges.update', Api\Controller\UpdateBadgeController::class)
        ->delete('/badges/{id}', 'badges.delete', Api\Controller\DeleteBadgeController::class)

        // Badge categories
        ->get('/badge_categories', 'badge.categories.overview', Api\Controller\ListBadgeCategoriesController::class)
        ->post('/badge_categories', 'badge.categories.create', Api\Controller\CreateBadgeCategoryController::class)
        ->post('/badge_categories/order', 'badge.categories.order', Api\Controller\OrderBadgeCategoriesController::class)
        ->patch('/badge_categories/{id}', 'badge.categories.update', Api\Controller\UpdateBadgeCategoryController::class)
        ->delete('/badge_categories/{id}', 'badge.categories.delete', Api\Controller\DeleteBadgeCategoryController::class)

        // User badges
        ->get('/user_badges', 'badge.users.overview', Api\Controller\ListUserBadgesController::class)
        ->post('/user_badges', 'badge.users.create', Api\Controller\CreateUserBadgeController::class)
        ->patch('/user_badges/{id}', 'badge.users.update', Api\Controller\UpdateUserBadgeController::class)
        ->delete('/user_badges/{id}', 'badge.users.delete', Api\Controller\DeleteUserBadgeController::class),

    // Extension permissions
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canGiveBadge', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.giveBadge");
        })
        ->attribute('canViewDetailedBadgeUsers', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.canViewDetailedUsers");
        })
        ->attribute('editOwnUserCardBadges', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.editOwnUserCardBadges");
        })
        ->attribute('editUserCardBadges', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("badges.editUserCardBadges");
        }),

    // Badges relation with User
    (new Extend\Model(User::class))
        ->relationship('userBadges', function ($user) {
            return $user->hasMany(UserBadge\UserBadge::class, 'user_id');
        })
        ->relationship('userPrimaryBadge', function ($user) {
            return $user->hasOne(UserBadge\UserBadge::class, 'user_id', null)->where('is_primary', true);
        }),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->hasMany('userBadges', Api\Serializer\UserBadgeSerializer::class)
        ->hasOne('userPrimaryBadge', Api\Serializer\UserBadgeSerializer::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->hasMany('userBadges', Api\Serializer\UserBadgeSerializer::class),

    (new Extend\ApiController(FlarumController\ListUsersController::class))
        ->addInclude(['userBadges', 'userBadges.badge']),
    (new Extend\ApiController(FlarumController\ShowUserController::class))
        ->addInclude(['userBadges', 'userBadges.badge', 'userBadges.badge.category']),
    (new Extend\ApiController(FlarumController\UpdateUserController::class))
        ->addInclude(['userBadges', 'userBadges.badge', 'userBadges.badge.category']),
    (new Extend\ApiController(FlarumController\CreateUserController::class))
        ->addInclude(['userBadges', 'userBadges.badge', 'userBadges.badge.category']),
    (new Extend\ApiController(FlarumController\ShowDiscussionController::class))
        ->addInclude(['posts.user.userBadges', 'posts.user.userBadges.badge']),
    (new Extend\ApiController(FlarumController\ListDiscussionsController::class))
        ->addInclude(['user.userBadges', 'user.userBadges.badge']),

    (new Extend\Filter(UserBadge\Filter\UserBadgeFilterer::class))
        ->addFilter(Query\FilterUserBadgesByBadge::class),

    (new Extend\Notification())
        ->type(Notification\BadgeReceivedBlueprint::class, Api\Serializer\UserBadgeSerializer::class, ['alert']),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\SaveSelectedBadges::class),

    (new Extend\Policy())
        ->modelPolicy(User::class, Access\UserPolicy::class),

    (new Extend\Settings)
        ->serializeToForum('showBadgesOnUserCard', 'v17development-user-badges.show_badges_on_user_card', 'boolval')
        ->serializeToForum('numberOfBadgesOnUserCard', 'v17development-user-badges.number_of_badges_on_user_card', 'intval')
        ->default('v17development-user-badges.number_of_badges_on_user_card', 5),
];

/**
 * Initialize Auto Moderator functionalities when installed
 */
if (class_exists("Askvortsov\AutoModerator\Extend\AutoModerator")) {
    $extend[] =
        (new AutoModeratorExtender())
        ->actionDriver('give_badge', AutoModerator\Action\GiveBadge::class)
        ->actionDriver('remove_badge', AutoModerator\Action\RemoveBadge::class)
        ->requirementDriver('has_badge', AutoModerator\Requirement\HasBadge::class)
        ->metricDriver('badges_received', AutoModerator\Metric\BadgesReceived::class);
}

return $extend;
