<?php

namespace V17Development\FlarumBadges\BadgeUser;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use V17Development\FlarumBadges\Badge\Badge;

class BadgeUser extends AbstractModel
{
    protected $table = 'badge_user';

    protected $dates = ['assigned_at'];

    public static function build($userId, $badgeId, $description = null)
    {
        $badgeUser = new static();
        $badgeUser->user_id = $userId;
        $badgeUser->badge_id = $badgeId;
        $badgeUser->description = $description;

        return $badgeUser;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badge()
    {
        return $this->belongsTo(Badge::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
