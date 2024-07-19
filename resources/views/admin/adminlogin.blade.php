<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="{{ asset('js/jquery.min.js ') }}"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <title>OYT - Admin Panel</title>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
  </head>


<body class="animsition" style="background-color:#f1f1f1;">

    <center>
        <div class="page-wrapper" >
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap" >
                    <div class="login-content" style="border:2px solid #f5640a;padding:10px;margin-top:10%;background-color:white;">
                        <div class="login-logo">
                           <h3 style="font-weight:700;color:#3c77c9;">OYT Admin Login</h3>
                        </div>
                         @if(session()->has('error'))
                                <div class="sufee-alert alert with-close alert-danger alert-dismissible fade show">
                                    {{session('error')}}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                @endif
                        <div class="login-form">
                            <div style="text-align:center;margin-left:auto;margin-right:auto;"><img src="{{asset('images/logo.png') }}" style="height:100px;width:200px;margin:15px;" class="img-fluid" alt="Immense"/></div>
                            <form action="/admin/login_submit" method="post">
                                @csrf
                                <div class="form-group">
                                    <label>Username</label>
                                    <input class="au-input au-input--full" type="text" name="username" placeholder="Username" required>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" name="password" placeholder="Password" required>
                                </div>

                                <button class="btn btn-primary" type="submit">Login</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</center>

</body>
</html>
