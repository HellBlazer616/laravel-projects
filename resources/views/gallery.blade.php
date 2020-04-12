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

    <div class="row m-1 justify-content-center ">
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src="https://picsum.photos/seed/picsum/500/500" class="card-img-top"
                alt="gallery image">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the
                    bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src="https://picsum.photos/seed/picsum/500/500" class="card-img-top"
                alt="gallery image">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the
                    bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src="https://picsum.photos/seed/picsum/500/500" class="card-img-top"
                alt="gallery image">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the
                    bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 m-1">
            <img src="https://picsum.photos/seed/picsum/500/500" class="card-img-top"
                alt="gallery image">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the
                    bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</body>

</html>