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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SeatRequest $request)
    {
        // dd($request);
        Seat::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Seat $seat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seat $seat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $seatsReq = $request->input('data');
        // $seatsTable = Seat::where('hall_id', $id)->get();

        foreach ($seatsReq as $value) {
            // dd($value['status']);

            Seat:: updateOrCreate([
                'hall_id' => $id,
                'number' => $value['number'],
            ], [
                'status' => $value['status'],
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seat $seat)
    {
        //
    }
}
