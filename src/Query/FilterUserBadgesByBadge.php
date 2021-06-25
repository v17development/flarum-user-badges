<?php

namespace V17Development\FlarumUserBadges\Query;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;

class FilterUserBadgesByBadge implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'badge';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $filterState->getQuery()->where('badge_id', $filterValue);
    }
}
