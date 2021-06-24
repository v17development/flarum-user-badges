<?php

namespace V17Development\FlarumUserBadges\BadgeCategory\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumUserBadges\BadgeCategory\BadgeCategory;
use V17Development\FlarumUserBadges\BadgeCategory\BadgeCategoryValidator;
use Illuminate\Support\Arr;

class UpdateBadgeCategoryHandler
{
    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var BadgeCategoryValidator
     */
    protected $validator;

    /**
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     * @param BadgeCategoryValidator $validator
     */
    public function __construct(
        TranslatorInterface $translator,
        SettingsRepositoryInterface $settings,
        BadgeCategoryValidator $validator
    ) {
        $this->translator = $translator;
        $this->settings = $settings;
        $this->validator = $validator;
    }

    /**
     * @param UpdateBadgeCategory $command
     */
    public function handle(UpdateBadgeCategory $command)
    {
        $command->actor->assertAdmin();

        $badgeCategory = BadgeCategory::findOrFail($command->id);

        // Update name
        if(Arr::has($command->data, "attributes.name")) {
            $badgeCategory->name = Arr::get($command->data, "attributes.name", null);
        }

        // Update description
        if(Arr::has($command->data, "attributes.description")) {
            $badgeCategory->description = Arr::get($command->data, "attributes.description", null);
        }

        // Update is table
        if(Arr::has($command->data, "attributes.isTable")) {
            $badgeCategory->is_table = Arr::get($command->data, "attributes.isTable", false);
        }

        // Update is enabled
        if(Arr::has($command->data, "attributes.isEnabled")) {
            $badgeCategory->is_enabled = Arr::get($command->data, "attributes.isEnabled", null);
        }

        // Validate
        $this->validator->assertValid($badgeCategory->getDirty());

        // Create category
        $badgeCategory->save();

        return $badgeCategory;
    }
}
