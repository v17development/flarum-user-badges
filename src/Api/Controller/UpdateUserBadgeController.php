<?php

namespace V17Development\FlarumBadges\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumBadges\UserBadge\Command\UpdateUserBadge;
use V17Development\FlarumBadges\Api\Serializer\UserBadgeSerializer;

class UpdateUserBadgeController extends AbstractShowController
{
    public $serializer = UserBadgeSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document) 
    {
        return $this->bus->dispatch(
            new UpdateUserBadge(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
