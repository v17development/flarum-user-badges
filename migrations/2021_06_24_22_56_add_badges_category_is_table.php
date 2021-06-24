<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('badge_category')) {
            $schema->table('badge_category', function (Blueprint $table) {
                $table->boolean('is_table')->default(1);
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('badge_category', function (Blueprint $table) {
            $table->dropColumn('is_table');
        });
    },
];
