<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\HallController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserPageController;
use App\Models\Hall;
use App\Models\Movie;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/admin', function () {
//     return Inertia::render('Admin/AdminPage');
// })->middleware('auth')->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminPageController::class, 'index'])->name('admin');

    Route::resources([
        'hall' => HallController::class,
        'movie' => MovieController::class,
    ]);
    // Route::name('hall')->group(function () {
    //     Route::post('/admin', [HallController::class, 'store'])->name('store');
    //     Route::post('/admin', [HallController::class, 'update'])->name('update');
    //     Route::delete('/admin', [HallController::class, 'destroy'])->name('destroy');
    // });
    // Route::name('movie')->group(function () {
    //     Route::post('/admin', [MovieController::class, 'store'])->name('store');
    // });
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
