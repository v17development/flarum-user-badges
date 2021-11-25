<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('badges')) {
            $schema->table('badges', function (Blueprint $table) {
                $table->string('background_color', 50)->nullable();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('badges', function (Blueprint $table) {
            $table->dropColumn('background_color');
        });
    },
];
