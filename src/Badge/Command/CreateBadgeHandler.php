<?php

namespace V17Development\FlarumUserBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumUserBadges\Badge\Badge;
use V17Development\FlarumUserBadges\Badge\BadgeValidator;
use Illuminate\Support\Arr;

class CreateBadgeHandler
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
     * @var BadgeValidator
     */
    protected $validator;

    /**
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(
        TranslatorInterface $translator,
        SettingsRepositoryInterface $settings,
        BadgeValidator $validator
    ) {
        $this->translator = $translator;
        $this->settings = $settings;
        $this->validator = $validator;
    }

    /**
     * @param CreateBadge $command
     */
    public function handle(CreateBadge $command)
    {
        $command->actor->assertAdmin();

        $badge = Badge::build(
            Arr::get($command->data, "attributes.icon", null),
            Arr::get($command->data, "attributes.name", null),
            Arr::get($command->data, "attributes.image", null),
            Arr::get($command->data, "attributes.order", 0),
            Arr::get($command->data, "attributes.description", null),
            Arr::get($command->data, "attributes.isVisible", true),
            Arr::get($command->data, "attributes.backgroundColor", null),
            Arr::get($command->data, "attributes.iconColor", null),
            Arr::get($command->data, "attributes.labelColor", null)
        );

        $badge->created_at = time();

        // Validate
        $this->validator->assertValid($badge->getDirty());


        // Save
        $badge->save();

        return $badge;
    }
}
