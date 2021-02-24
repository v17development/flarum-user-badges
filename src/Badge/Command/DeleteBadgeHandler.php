<?php

namespace V17Development\FlarumBadges\Badge\Command;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Component\Translation\TranslatorInterface;
use V17Development\FlarumBadges\Badge\Badge;

class DeleteBadgeHandler
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
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(TranslatorInterface $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }

    /**
     * @param DeleteBadge $command
     */
    public function handle(DeleteBadge $command)
    {
        // Make sure the person can remove a badge from a user 
        $command->actor->assertAdmin();

        $badge = Badge::findOrFail($command->id);

        $badge->delete();
    }
}
