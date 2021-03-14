<?php

namespace V17Development\FlarumBadges\BadgeCategory;

use Flarum\Database\AbstractModel;
use V17Development\FlarumBadges\Badge\Badge;

class BadgeCategory extends AbstractModel
{
    protected $table = 'badge_category';

    protected $dates = ['created_at'];

    public static function build($name, $description, $isEnabled)
    {
        $badgeCategory = new static();
        $badgeCategory->name = $name;
        $badgeCategory->description = $description;
        $badgeCategory->is_enabled = $isEnabled;

        return $badgeCategory;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badges()
    {
        return $this->hasMany(Badge::class);
    }
}
