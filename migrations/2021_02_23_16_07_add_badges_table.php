<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('badges')) {
            $schema->create('badges', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 46);
                $table->string('icon', 100)->nullable();
                $table->integer('order')->default(0);
                $table->text('image')->nullable();
                $table->text('description')->nullable();
                $table->boolean('is_visible')->default(1);
                $table->dateTime('created_at');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->drop('badges');
    },
];
