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
    <div class="row m-1 justify-content-between ">

        @can('update', $gallery)

        <form action={{ url("gallery/" . $gallery->id . "/edit") }} method="post"
            enctype="multipart/form-data"
            class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1 create-gallery">
            @method('put')
            @csrf

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control @error('title') is-invalid @enderror"
                    id="title" name="title" value='{{$gallery->title}}'>
                @error('title')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control @error('description') is-invalid @enderror "
                    id="description" rows="3"
                    name="description">{{$gallery->description}}</textarea>
                @error('description')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>

            <div class="form-group">
                <input type="file" id="cover"
                    class="form-control @error('cover') is-invalid @enderror"
                    placeholder="Upload file" name="cover" aria-label="Upload file"
                    aria-describedby="basic-addon2">
                @error('cover')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                <small class="form-text text-muted" for="cover">Click to Upload Cover Image for
                    Gallery</small>
                @enderror
            </div>


            <div class="form-group">
                <h5 class="card-title">Update Gallery</h5>
                <p class="card-text">Fill up the form to update a gallery</p>
                <button type="submit" class="btn btn-primary">Update Gallery</button>
            </div>
        </form>

        @endcan

    </div>
</body>

</html>