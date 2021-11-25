<?php

namespace V17Development\FlarumUserBadges\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class BadgeCategorySerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'badgeCategories';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($badgeCategory)
    {
        return [
            'name'          => $badgeCategory->name,
            'description'   => $badgeCategory->description,
            'order'         => $badgeCategory->order,
            'isEnabled'     => (bool) $badgeCategory->is_enabled,
            'isTable'       => (bool) $badgeCategory->is_table,
            'createdAt'     => $this->formatDate($badgeCategory->created_at),
        ];
    }

    protected function badges($badge)
    {
        return $this->hasMany($badge, BadgeSerializer::class);
    }
}
