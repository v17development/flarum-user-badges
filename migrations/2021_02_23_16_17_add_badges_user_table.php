<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('badge_user')) {
            $schema->create('badge_user', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('user_id')->unsigned();
                $table->integer('badge_id')->unsigned();
                $table->text('description')->nullable();
                $table->boolean('is_primary')->default(0);
                $table->dateTime('assigned_at');

                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('badge_id')->references('id')->on('badges')->onDelete('cascade');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->drop('badge_user');
    },
];
