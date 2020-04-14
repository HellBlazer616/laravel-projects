<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href={{ asset('css/app.css') }}>
    <link rel="stylesheet" href={{ asset('css/welcome.css') }}>
    <title>Gallery</title>
</head>

<body>
    <x-navbar />
    <div class="hero ">
        <img src="../image/welcome.svg" alt="welcome.svg" class="hero__img img-fluid ">
        <div class="tag">
            <h1>Awesome Gallery</h1>
            <p>Create, Upload, Share...</p>
        </div>
    </div>
</body>

</html>