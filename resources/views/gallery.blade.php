<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gallery</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/gallery.css') }}" rel="stylesheet">
</head>

<body>
    <x-navbar />
    @if (session('statusDelete'))
    <div class="alert alert-success alert-dismissible fade show">
        {{ session('statusDelete') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    @endif
    <div class="row m-1 justify-content-between ">

        @auth
        <form action="/gallery" method="post" enctype="multipart/form-data"
            class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1 create-gallery">
            @csrf
            <x-form-gallery />
            @error('title')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors }}</strong>
            </span>
            @enderror
        </form>
        @endauth

        @foreach ($galleries as $gallery)
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src={{ asset('storage') .'/'. $gallery['cover'] }} class="card-img-top"
                alt="gallery image">
            <div class="card-body flex ">
                <h5 class="card-title">{{$gallery['title']}}</h5>
                <p class="card-text">{{$gallery['description']}}</p>
            </div>

            <div class="flex">
                <a href={{'gallery/' . $gallery['id']}} class="btn btn-primary">Visit Gallery</a>
                @can('delete', $gallery)
                <form action="/gallery/{{$gallery->id}}" method="post" class="form__delete">
                    @method('delete')
                    @csrf
                    <button type="submit" class="btn btn-danger">Delete Gallery</button>
                </form>
                @endcan
                @can('update', $gallery)
                <a href={{"gallery/" . $gallery->id . "/edit"}} class="btn btn-info">Edit
                    Gallery</a>
                @endcan
            </div>

        </div>
        @endforeach

</body>

</html>