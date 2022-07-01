<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('badge_user')) {
            $schema->table('badge_user', function (Blueprint $table) {
                $table->boolean('in_user_card')->default(0);
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('badge_user', function (Blueprint $table) {
            $table->dropColumn('in_user_card');
        });
    },
];
