<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionRequest;
use App\Models\Session;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): array|string
    {
        return Session::all();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(SessionRequest $request): void
    {
        Session::create($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Session $session)
    {
        $session->delete();
    }
}
