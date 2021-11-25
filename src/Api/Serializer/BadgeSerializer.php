<?php

namespace V17Development\FlarumUserBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

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
            'name'              => $badge->name,
            'icon'              => $badge->icon,
            'order'             => $badge->order,
            'image'             => $badge->image,
            'description'       => $badge->description,
            'earnedAmount'      => $badge->earnedCount(),
            'isVisible'         => $badge->is_visible,
            'backgroundColor'   => $badge->background_color,
            'iconColor'         => $badge->icon_color,
            'labelColor'        => $badge->label_color,
            'createdAt'         => $this->formatDate($badge->created_at),
        ];
    }

    protected function category($badgeCategory)
    {
        return $this->hasOne($badgeCategory, BadgeCategorySerializer::class);
    }

    protected function users($badgeUsers)
    {
        return $this->hasMany($badgeUsers, UserBadgeSerializer::class);
    }
}
