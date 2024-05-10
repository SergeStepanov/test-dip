<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Movie;
use App\Models\Seat;
use App\Models\Session;
use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
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

        $seats = Seat::where('hall_id', $session->hall_id)->get();
        // dd($sessionDate->format('Y-m-d H:i'));
        return Inertia::render('User/HallPageContent', [
            // 'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'session' => $session,
            'seats' => $seats,
            'sessionDate' => $sessionDate->format('Y-m-d H:i'),
        ]);
    }

    public function paymentPage(Request $request): Response
    {
        $id = $request->input('id');
        $sessionDate = $request->input('sessionDate');
        $seatsNumber = $request->input('seatsNumber');
        $session = Session::where('id', $id)->with(['hall', 'movie'])->first();


        // dd($request->all());
        // var_dump($sessionDate);
        // dd($seatsNumber);

        return Inertia::render('User/PaymentPageContent', [
            'seatsNumber' => $seatsNumber,
            'session' => $session,
            'sessionDate' => $sessionDate,
        ]);
    }

    public function ticketPage(): Response
    {
        return Inertia::render('User/TicketPageContent', [
            'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'sessions' => Session::orderBy('start_time')->with(['hall', 'movie'])->get(),
        ]);
    }
}
