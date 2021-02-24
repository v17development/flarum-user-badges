<?php

namespace V17Development\FlarumBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;

class BadgeSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'badges';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($badge)
    {
        return [
            'name'          => $badge->name,
            'icon'          => $badge->icon,
            'order'         => $badge->order,
            'image'         => $badge->image,
            'description'   => $badge->description,
            'earnedAmount'  => $badge->earnedCount(),
            'isVisible'     => $badge->is_visible,
            'createdAt'     => $this->formatDate($badge->created_at),
        ];
    }

    protected function category($badgeCategory) {
        return $this->hasOne($badgeCategory, BadgeCategorySerializer::class);
    }

    protected function users($badgeUsers) {
        return $this->hasMany($badgeUsers, UserBadgeSerializer::class);
    }
}
