<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sessions')->insert([
            'name' => 'Зал 1',
            'start_time' => '12:00',
            'hall_id' => 1,
            'movie_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 1',
            'start_time' => '09:00',
            'hall_id' => 1,
            'movie_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 1',
            'start_time' => '17:00',
            'hall_id' => 1,
            'movie_id' => 3,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 2',
            'start_time' => '12:00',
            'hall_id' => 2,
            'movie_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 2',
            'start_time' => '09:00',
            'hall_id' => 2,
            'movie_id' => 3,
        ]);
        
        DB::table('sessions')->insert([
            'name' => 'Зал 2',
            'start_time' => '18:00',
            'hall_id' => 2,
            'movie_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 3',
            'start_time' => '10:00',
            'hall_id' => 3,
            'movie_id' => 2,
        ]);

        DB::table('sessions')->insert([
            'name' => 'Зал 3',
            'start_time' => '14:00',
            'hall_id' => 3,
            'movie_id' => 1,
        ]);
        
        DB::table('sessions')->insert([
            'name' => 'Зал 3',
            'start_time' => '21:00',
            'hall_id' => 3,
            'movie_id' => 2,
        ]);
    }
}
