<?php

namespace V17Development\FlarumUserBadges\UserBadge;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class UserBadgeRepository
{
    /**
     * Get a new query builder for the badge_user table.
     *
     * @return Builder
     */
    public function query()
    {
        return UserBadge::query();
    }

    /**
     * Find a user badge by ID, optionally making sure it is visible to a certain
     * user, or throw an exception.
     *
     * @param int $id
     * @return UserBadge
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id)
    {
        return UserBadge::where('id', $id)->findOrFail();
    }

    /**
     * Find all badge_user, optionally making sure they are visible to a
     * certain user.
     *
     * @param User|null $user
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all(User $user = null)
    {
        return UserBadge::query()->get();
    }

    /**
     * Scope a query to only include records that are visible to a user.
     *
     * @param Builder $query
     * @param User $user
     * @return Builder
     */
    protected function scopeVisibleTo(Builder $query, User $user = null)
    {
        if ($user !== null) {
            $query->whereVisibleTo($user);
        }

        return $query;
    }
}
