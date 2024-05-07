<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Movie;
use App\Models\Session;
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
        // dd($id);
        return Inertia::render('User/HallPageContent', [
            // 'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'session' => Session::where('id', $id)->with(['hall', 'movie'])->get(),
        ]);
    }

    public function paymentPage(): Response
    {
        return Inertia::render('User/PaymentPageContent', [
            'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'sessions' => Session::orderBy('start_time')->with(['hall', 'movie'])->get(),
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
