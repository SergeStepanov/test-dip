<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Movie;
use App\Models\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/AdminPageContent', [
            'halls' => Hall::with('seats')->get(),
            'movies' => Movie::all(),
            'sessions' => Hall::select('id', 'name')->with('sessions')->get(),
        ]);
    }
}
