<?php

namespace V17Development\FlarumUserBadges\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use V17Development\FlarumUserBadges\Badge\Command\DeleteBadge;

class DeleteBadgeController extends AbstractDeleteController
{
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
    protected function delete(ServerRequestInterface $request)
    {
        return $this->bus->dispatch(
            new DeleteBadge(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id'),
            )
        );
    }
}
