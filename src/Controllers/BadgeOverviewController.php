<?php

namespace V17Development\FlarumUserBadges\Controllers;

// Flarum classes
use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class BadgeOverviewController
{
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        return $document;
    }
}
