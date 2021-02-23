<?php

namespace V17Development\FlarumBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBadges\Api\Serializer\BadgeCategorySerializer;
use V17Development\FlarumBadges\BadgeCategory\BadgeCategory;

class ListBadgeCategoriesController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = BadgeCategorySerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ["badgeCategory"];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        return BadgeCategory::all();
    }
}
