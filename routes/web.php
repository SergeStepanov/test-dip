<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\HallController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [UserPageController::class, 'index'])->name('homepage');
Route::get('/hall-seats', [UserPageController::class, 'hallPage'])->name('hallpage');

Route::post('/hall-seats', [TicketController::class, 'store'])->name('storeticket');

Route::get('/payment-ticket/{id}', [UserPageController::class, 'paymentTicketPage'])->name('paymentpage');

Route::patch('/payment-ticket', [TicketController::class, 'update'])->name('addqrticket');


Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminPageController::class, 'index'])->name('admin');

    Route::resources([
        'hall' => HallController::class,
        'movie' => MovieController::class,
        'seat' => SeatController::class,
        'session' => SessionController::class,
    ]);
});

require __DIR__ . '/auth.php';
