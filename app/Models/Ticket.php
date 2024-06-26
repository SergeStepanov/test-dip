<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'totalSum',
        'dateTime',
        'seatsNumber',
        'qrCode',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    protected $casts = [
        'seatsNumber' => 'array'
    ];

    public function sesion(): BelongsTo
    {
        return $this->belongsTo(Session::class, 'session_id');
    }

    public function seats(): BelongsToMany
    {
        return $this->belongsToMany(Seat::class);
    }
}
