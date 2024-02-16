<?php

namespace App\Http\Controllers;

use App\Models\Hall;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/AdminPageContent', [
            'halls' => Hall::all(),
            'movies' => Movie::all(),
        ]);
    }
}
