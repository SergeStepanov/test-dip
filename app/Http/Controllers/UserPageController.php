<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Movie;
use App\Models\Seat;
use App\Models\Session;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Inertia\Response;

class UserPageController extends Controller
{
    public function index(): Response
    {
        $resHalls = Hall::with('sessions')->select('id', 'name')->where('is_active', 1)->get();

        $resSessions = Session::whereHas('hall', function (Builder $query) {
            $query->where('is_active', 1);
        })->get();

        $resMovies = Movie::whereIn('id', $resSessions->pluck('movie_id'))->get();

        return Inertia::render('User/UserHomeContent', [
            'hallsActive' => $resHalls,
            'movies' => $resMovies,
        ]);
    }

    public function hallPage(Request $request): Response
    {
        $id = $request->input('id');
        $session = Session::where('id', $id)->with(['hall', 'movie'])->first();

        $sessionDate = new Carbon($request->input('date') . $session->start_time);

        $takenSeats = Arr::collapse(Ticket::where('session_id', $session->id)
            ->where('dateTime', $sessionDate)
            ->pluck('seatsNumber'));

        $seats = Seat::where('hall_id', $session->hall_id)->get();

        foreach ($seats as $seat) {
            foreach ($takenSeats as $value) {
                if ($seat->number === $value) {
                    $seat->status = 'taken';
                }
            }
        }

        // dd($takenSeats);

        return Inertia::render('User/HallPageContent', [
            'session' => $session,
            'seats' => $seats,
            'sessionDate' => $sessionDate->format('Y-m-d H:i'),
        ]);
    }

    public function paymentTicketPage(int $id): Response
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return abort(404);
        }

        $session = Session::where('id', $ticket->session_id)->with('hall', 'movie')->first();

        return Inertia::render('User/PaymentTicketPage', [
            'ticket' => $ticket,
            'session' => $session,
        ]);
    }
}
