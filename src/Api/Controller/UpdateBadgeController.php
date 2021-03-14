<?php

namespace V17Development\FlarumUserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use V17Development\FlarumUserBadges\Badge\Command\UpdateBadge;
use V17Development\FlarumUserBadges\Api\Serializer\BadgeSerializer;

class UpdateBadgeController extends AbstractShowController
{
    public $serializer = BadgeSerializer::class;

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
            new UpdateBadge(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id'),
                Arr::get($request->getParsedBody(), 'data', null)
            )
        );
    }
}
