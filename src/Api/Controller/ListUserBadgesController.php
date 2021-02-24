<?php

namespace V17Development\FlarumBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBadges\Api\Serializer\UserBadgeSerializer;
use V17Development\FlarumBadges\UserBadge\UserBadge;

class ListUserBadgesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = UserBadgeSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["badge", "user"];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        return UserBadge::all();
    }
}
