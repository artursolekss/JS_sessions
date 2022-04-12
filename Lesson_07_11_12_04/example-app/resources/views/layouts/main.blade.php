<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Hello World Application</title>
</head>

<body>
    <h1>Hello!</h1>
    <div class="container">
        @yield('content')
    </div>
</body>

</html>