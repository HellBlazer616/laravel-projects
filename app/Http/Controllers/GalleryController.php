<?php

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = Gallery::all();
        return view('gallery')->with('galleries', $galleries);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'cover' => 'required|mimes:jpeg,jpg,png|max:2000',
        ]);
        $galleryCoverPath = $request->file('cover')->store('galleryCover');

        Gallery::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'cover' => $galleryCoverPath,
            'user_id' => auth()->id(),
        ]);

        $galleries = Gallery::all();

        return \redirect('/gallery')->with('status', 'A Gallery Has been created')->with('galleries', $galleries);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        $images = $gallery->images;

        return view('galleryShow')->with('gallery', $gallery)->with('images', $images);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        return \view('galleryEdit')->with('gallery', $gallery);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery)
    {
        $this->authorize('update', $gallery);

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'cover' => 'required|mimes:jpeg,jpg,png|max:2000',
        ]);
        $galleryCoverPath = $request->file('cover')->store('galleryCover');

        $gallery->update([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'cover' => $galleryCoverPath,
        ]);

        return redirect()->action('GalleryController@index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        $this->authorize('delete', $gallery);

        $gallery->delete();

        return \redirect('/gallery')->with('statusDelete', $gallery->title . ' has been deleted');
    }
}
