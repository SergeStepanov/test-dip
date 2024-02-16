<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/UserHomeContent', [
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
