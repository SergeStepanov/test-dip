<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Models\Session;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): array|string
    {
        return Ticket::all();
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
    public function store(TicketRequest $request)
    {

        $res = Ticket::create($request->validated());

        return redirect()->route('paymentpage', ['id' => $res->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $ticket = Ticket::find($request->input('id'));
        $session = Session::where('id', $ticket->session_id)->with('hall', 'movie')->first();
        $codeText = 'Билет: ' . $ticket->id . '. Зал: ' . $session->hall->name . '. Время: ' . $ticket->dateTime . '. Места: ' . Arr::join($ticket->seatsNumber, ', ') . '.';

        $qr = QrCode::size(300)->format('png')->encoding('UTF-8')->generate($codeText);
        Storage::disk('public')
            ->put('/qr/' . $ticket->id . '.png', $qr);

        $contents = Storage::get('/public/qr/' . $ticket->id . '.png');

        $ticket->qrCode = $ticket->id . '.png';

        $ticket->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
