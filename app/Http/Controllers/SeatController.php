<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Seat::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SeatRequest $request)
    {
        Seat::create($request->validated());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $seatsReq = $request->input('data');

        foreach ($seatsReq as $value) {
            Seat::updateOrCreate([
                'hall_id' => $id,
                'number' => $value['number'],
            ], [
                'status' => $value['status'],
            ]);
        }
    }
}
