<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hall extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'rows',
        'cols',
        'is_active',
        'price_standard',
        'price_vip',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function sessions(): HasMany
    {
        return $this->hasMany(Session::class, 'hall_id');
    }

    public function seats(): HasMany
    {
        return $this->hasMany(Seat::class, 'hall_id');
    }
}
