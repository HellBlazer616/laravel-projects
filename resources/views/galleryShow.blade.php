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
    <link href="{{ asset('css/gallery.show.css') }}" rel="stylesheet">
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



    <div class="row m-1 justify-content-between">
        @auth
        @if ($gallery->user_id === auth()->user()->id)
        <form action={{ url('/picture') . '/' . $gallery->id }} method="post"
            enctype="multipart/form-data"
            class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1 create-gallery">
            @csrf
            <x-form-upload-images />
        </form>
        @endif
        @endauth

        @if (isset($images))
        @foreach ($images as $image)
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src={{ asset('storage') .'/'. $image['path'] }} class="card-img-top" alt="..."
                loading='lazy'>
            <div class="card-body">
                <h5 class="card-title">{{$image->title}}</h5>
            </div>
            @can('delete', $image)
            <div class="flex delete">
                <form action="/gallery/" method="post" class="form__delete">
                    @method('delete')
                    @csrf
                    <button type="submit" class="btn btn-danger">Delete Image</button>
                </form>
            </div>
            @endcan


        </div>
        @endforeach
        @endif
    </div>
</body>

</html>