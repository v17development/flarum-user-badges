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
    protected $type = 'badge';

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
            'isVisible'     => $badge->is_visible,
            'createdAt'     => $this->formatDate($badge->created_at),
        ];
    }

    protected function badgeCategory($badgeCategory) {
        return $this->hasOne($badgeCategory, BadgeCategorySerializer::class);
    }

    protected function badgeUsers($badgeUsers) {
        return $this->hasMany($badgeUsers, BadgeUserSerializer::class);
    }
}
