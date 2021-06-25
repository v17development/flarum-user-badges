<?php

namespace V17Development\FlarumUserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Query\QueryCriteria;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumUserBadges\UserBadge\Filter\UserBadgeFilterer;
use V17Development\FlarumUserBadges\Api\Serializer\UserBadgeSerializer;

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
    public $sortFields = ['assignedAt'];

    /**
     * @var UserBadgeFilterer
     */
    protected $filterer;

    public function __construct(UserBadgeFilterer $filterer)
    {
        $this->filterer = $filterer;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $filters = $this->extractFilter($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $include = $this->extractInclude($request);
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);

        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);

        $results = $this->filterer->filter($criteria, $limit, $offset);

        $results = $results->getResults();

        $this->loadRelations($results, $include);

        return $results;
    }
}
