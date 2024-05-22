<?php

namespace App\Http\Controllers;

use App\Http\Requests\HallRequest;
use App\Models\Hall;
use App\Models\Seat;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Hall::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HallRequest $request): void
    {
        $hall = Hall::create($request->validated());
        for ($ind = 0; $ind < 16; $ind++) {
            $seat = [
                'number' => $ind + 1,
                'status' => 'standart',
                'hall_id' => $hall->id,
            ];

            Seat::create($seat);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Hall $hall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hall $hall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HallRequest $request, Hall $hall)
    {
        // dd($request->all());
        $hall->fill($request->validated());

        $hall->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hall $hall)
    {
        $hall->delete();
        // $hall->truncate();
    }
}
