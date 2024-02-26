<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($seat = 1; $seat = 36; $seat++) {
            if ($seat == 19 || $seat == 20 || $seat == 21 || $seat == 22) {
                $status = 'vip';
            } elseif ($seat == 1 || $seat == 6) {
                $status = 'disabled';
            } else {
                $status = 'standart';
            }

            DB::table('seats')->insert([
                'number' => $seat,
                'status' => $status,
                'hall_id' => 1,
            ]);
        }

        for ($seat = 1; $seat = 150; $seat++) {
            if ($seat == 19 || $seat == 20 || $seat == 21 || $seat == 22) {
                $status = 'vip';
            } elseif ($seat == 70 || $seat == 96 || $seat == 111 || $seat == 147) {
                $status = 'disabled';
            } else {
                $status = 'standart';
            }

            DB::table('seats')->insert([
                'number' => $seat,
                'status' => $status,
                'hall_id' => 3,
            ]);
        }

        for ($seat = 1; $seat = 99; $seat++) {
            if ($seat == 60 || $seat == 20 || $seat == 21 || $seat == 72) {
                $status = 'vip';
            } elseif ($seat == 2 || $seat == 26 || $seat == 41 || $seat == 69) {
                $status = 'disabled';
            } else {
                $status = 'standart';
            }

            DB::table('seats')->insert([
                'number' => $seat,
                'status' => $status,
                'hall_id' => 3,
            ]);
        }
    }
}
