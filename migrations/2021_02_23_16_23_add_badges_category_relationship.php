<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('badges')) {
            $schema->table('badges', function (Blueprint $table) {
                $table->integer('badge_category_id')->unsigned()->nullable();

                $table->foreign("badge_category_id")->references('id')->on('badge_category')->onDelete('set null');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('badges', function (Blueprint $table) {
            $table->dropForeign('badge_category_id');
        });
    },
];
