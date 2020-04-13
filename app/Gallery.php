<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = [
        'title', 'description', 'cover', 'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
