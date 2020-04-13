<?php

namespace App;

use App\Gallery;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'images[]', 'galleryId', 'path', 'title', 'gallery_id',
    ];

    public function gallery()
    {
        return $this->belongsTo(Gallery::class);
    }
}
