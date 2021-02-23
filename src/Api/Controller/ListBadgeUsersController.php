<?php

namespace V17Development\FlarumBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBadges\Api\Serializer\BadgeUserSerializer;
use V17Development\FlarumBadges\BadgeUser\BadgeUser;

class ListBadgeUsersController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeUserSerializer::class;

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

        return BadgeUser::all();
    }
}
