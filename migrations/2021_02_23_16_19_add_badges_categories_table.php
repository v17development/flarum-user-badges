<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('badge_category')) {
            $schema->create('badge_category', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 46);
                $table->integer('order')->default(0);
                $table->text('description')->nullable();
                $table->boolean('is_enabled')->default(1);
                $table->dateTime('created_at');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->drop('badge_category');
    },
];
