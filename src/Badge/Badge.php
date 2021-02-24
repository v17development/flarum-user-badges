<?php

namespace V17Development\FlarumBadges\Badge;

use Flarum\Database\AbstractModel;
use V17Development\FlarumBadges\BadgeCategory\BadgeCategory;
use V17Development\FlarumBadges\UserBadge\UserBadge;

class Badge extends AbstractModel
{
    protected $table = 'badges';

    protected $dates = ['created_at'];

    public static function build($icon, $name, $image, $order = 0, $description = null, $isVisible = 0)
    {
        $badge = new static();
        $badge->icon = $icon;
        $badge->name = $name;
        $badge->order = $order;
        $badge->image = $image;
        $badge->description = $description;
        $badge->is_visible = $isVisible;

        return $badge;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badgeCategory()
    {
        return $this->belongsTo(BadgeCategory::class, 'badge_category_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badgeUsers()
    {
        return $this->hasMany(UserBadge::class, 'badge_id');
    }
}
