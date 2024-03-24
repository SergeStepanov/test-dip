<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/UserHomeContent', [
            'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'sessions' => Session::orderBy('start_time')->with(['hall', 'movie'])->get(),
        ]);
    }

    public function hallPage(): Response
    {
        return Inertia::render('User/HallPageContent', [
            // 'halls' => Hall::where('is_active', 1)->with('sessions')->get(),
            'sessions' => Session::orderBy('start_time')->with(['hall', 'movie'])->get(),
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
