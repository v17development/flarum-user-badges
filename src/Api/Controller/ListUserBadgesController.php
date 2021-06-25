<?php

namespace V17Development\FlarumUserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
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
     * {@inheritdoc}
     */
    public $limit = 18;

    /**
     * @var UserBadgeFilterer
     */
    protected $filterer;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(UserBadgeFilterer $filterer, UrlGenerator $url)
    {
        $this->filterer = $filterer;
        $this->url = $url;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertCan('badges.canViewDetailedUsers');

        $filters = $this->extractFilter($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $include = $this->extractInclude($request);
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);

        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);

        $results = $this->filterer->filter($criteria, $limit, $offset);

        $document->addPaginationLinks(
            $this->url->to('api')->route('badge.users.overview'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        $results = $results->getResults();

        $this->loadRelations($results, $include);

        return $results;
    }
}
