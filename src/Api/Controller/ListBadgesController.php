<?php

namespace V17Development\FlarumBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBadges\Api\Serializer\BadgeSerializer;
use V17Development\FlarumBadges\Badge\Badge;

class ListBadgesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["category", "users"];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        return Badge::all();
    }
}
