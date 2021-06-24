<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('badges')) {
            $schema->table('badges', function (Blueprint $table) {
                $table->integer('points')->default(0);
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('badges', function (Blueprint $table) {
            $table->dropColumn('points');
        });
    },
];
