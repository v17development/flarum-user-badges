<?php

namespace V17Development\FlarumUserBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;

class UserBadgeSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'userBadges';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($userBadge)
    {
        return [
            'description'   => $userBadge->description,
            'isPrimary'     => $userBadge->is_primary,
            'assignedAt'     => $this->formatDate($userBadge->assigned_at),
            'inUserCard'     => $userBadge->in_user_card === 1,
        ];
    }

    protected function badge($badge)
    {
        return $this->hasOne($badge, BadgeSerializer::class);
    }

    protected function user($user)
    {
        return $this->hasOne($user, UserSerializer::class);
    }
}
