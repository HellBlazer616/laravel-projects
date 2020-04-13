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
        $validatedData = $request->validate([
            'images.*' => 'mimes:jpeg,jpg,png',
        ]);

        $imagesPath = [];
        $data = [];

        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                $title = $gallery->title . "'s Images";

                $path = $image->store('galleryImages');
                $imagesPath[] = $path;

                $image = Image::create([
                    'title' => $title,
                    'gallery_id' => $gallery->id,
                    'path' => $path,
                ]);
            }
        }

        $images = Image::all()->where('gallery_id', '=', $gallery->id);

        return \redirect()->back()->with('status', 'A Gallery Has been created')->with('images', $images)->with('gallery', $gallery);
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
        //
    }
}
