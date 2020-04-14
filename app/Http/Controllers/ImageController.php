<?php

namespace App\Http\Controllers;

use App\Gallery;
use App\Image;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Gallery $gallery)
    {
        $this->authorize('create', $gallery);

        $request->validate([
            'images.*' => 'mimes:jpeg,jpg,png',
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                $title = $gallery->title . "'s Images";

                $path = $image->store('galleryImages');

                Image::create([
                    'title' => $title,
                    'gallery_id' => $gallery->id,
                    'path' => $path,
                ]);
            }
        }

        return redirect()->action('GalleryController@show', $gallery);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        $this->authorize('delete', $image);

        $gallery = $image->gallery;

        $image->delete();

        return redirect()->action('GalleryController@show', $gallery);
    }
}
