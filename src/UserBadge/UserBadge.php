<?php

namespace V17Development\FlarumUserBadges\UserBadge;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use V17Development\FlarumUserBadges\Badge\Badge;

class UserBadge extends AbstractModel
{
    protected $table = 'badge_user';

    protected $dates = ['assigned_at'];

    public static function build($userId, $badgeId, $description = null)
    {
        $userBadge = new static();
        $userBadge->user_id = $userId;
        $userBadge->badge_id = $badgeId;
        $userBadge->description = $description;
        $userBadge->assigned_at = time();

        return $userBadge;
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
