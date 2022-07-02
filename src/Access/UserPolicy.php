<?php

namespace V17Development\FlarumUserBadges\Access;

use Carbon\Carbon;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    public function editUserCardBadges(User $actor, User $user)
    {
        if (($actor->id === $user->id
                && $actor->hasPermission('badges.editOwnUserCardBadges')
                && !$this->isSuspended($user))
            || $actor->hasPermission('badges.editUserCardBadges')
        ) {
            return $this->allow();
        }

        return $this->deny();
    }

    protected function isSuspended(User $user): bool
    {
        return $user->suspended_until !== null
            && $user->suspended_until instanceof Carbon
            && $user->suspended_until->isFuture();
    }
}
