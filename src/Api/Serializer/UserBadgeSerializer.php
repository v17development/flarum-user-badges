<?php

namespace V17Development\FlarumBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;

class UserBadgeSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'userBadge';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($userBadge)
    {
        return [
            'description'   => $userBadge->description,
            'isPrimary'     => $userBadge->is_primary,
            'createdAt'     => $this->formatDate($userBadge->created_at),
        ];
    }

    protected function badge($badge) {
        return $this->hasOne($badge, BadgeSerializer::class);
    }

    protected function user($user) {
        return $this->hasOne($user, UserSerializer::class);
    }
}
