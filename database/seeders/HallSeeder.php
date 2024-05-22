<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('halls')->insert([
            'name' => 'Зал 1',
            'rows' => 6,
            'cols' => 6,
            'price_standard' => 300,
            'price_vip' => 400,
        ]);

        DB::table('halls')->insert([
            'name' => 'Зал 2',
            'rows' => 15,
            'cols' => 10,
            'price_standard' => 350,
            'price_vip' => 450,
            'is_active' => 1,
        ]);

        DB::table('halls')->insert([
            'name' => 'Зал 3',
            'rows' => 11,
            'cols' => 9,
            'price_standard' => 500,
            'price_vip' => 700,
        ]);
    }
}
