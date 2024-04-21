<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'duration',
        'description',
        'country',
        'poster',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function sessions(): HasMany
    {
        return $this->hasMany(Session::class, 'movie_id')
            ->orderBy('start_time')
            ->with('hall');
    }
}
