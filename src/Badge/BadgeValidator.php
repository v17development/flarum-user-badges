<?php

namespace V17Development\FlarumBadges\Badge;

use Flarum\Foundation\AbstractValidator;

class BadgeValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'name' => ['string', 'min:0'],
        'icon' => ['string', 'nullable'],
        'order' => ['numeric', 'min:0'],
        'image' => ['string', 'nullable'],
        'description' => ['string', 'nullable'],
        'is_visible' => ['boolean']
    ];
}