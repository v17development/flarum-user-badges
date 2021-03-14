<?php

namespace V17Development\FlarumBadges\BadgeCategory;

use Flarum\Foundation\AbstractValidator;

class BadgeCategoryValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'name' => ['string', 'min:0'],
        'order' => ['numeric', 'min:0'],
        'description' => ['string', 'nullable'],
        'is_enabled' => ['boolean']
    ];
}