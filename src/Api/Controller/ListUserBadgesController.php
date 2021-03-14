<?php

namespace V17Development\FlarumUserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumUserBadges\Api\Serializer\UserBadgeSerializer;
use V17Development\FlarumUserBadges\UserBadge\UserBadge;

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
