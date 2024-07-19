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
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>@yield('page_title')</title>

  </head>

<body>


<div class="subnav deskContent">
<div class="col-lg-12">
<div class="row">
<div class="col-lg-4">
    <center>
<a href="https://www.youtube.com/channel/UCP1HVu-q00tA-A9QiuaI6Jw"><i class="fa fa-youtube" style="font-size:20px;font-weight:400;background-color:#fff;color:#5353ad;padding:8px;border-radius:50%;margin:5px;"></i></a>
<a href="https://in.pinterest.com/yuturntownhouse/"><i class="fa fa-pinterest" style="font-size:20px;font-weight:400;background-color:#fff;color:#5353ad;padding:8px;border-radius:50%;margin:5px;"></i></a>
<a href="https://twitter.com/yuturntownhouse"><i class="fa fa-twitter" style="font-size:20px;font-weight:400;background-color:#fff;color:#5353ad;padding:8px;border-radius:50%;margin:5px;"></i></a>
<a href="https://www.facebook.com/townhouseyuturn"><i class="fa fa-facebook-square" style="font-size:20px;font-weight:400;background-color:#fff;color:#5353ad;padding:8px;border-radius:50%;margin:5px;"></i></a>
</center>
</div>
<div class="col-lg-4">
    <center style="margin-top:10px;"><a href="tel:+91 844855600" style="color:white;font-size: 16px;"><i class="fa fa-phone" ></i>&nbsp;&nbsp;&nbsp;&nbsp;+91 844855600</a>
</center>
</div>
<div class="col-lg-4">
    <center style="margin-top:10px;"><a href="mailto:feedback@immense.in" style="color:white;font-size: 16px;"><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;feedback@immense.in</a>
</center>
</div>
</div>
</div>
</div>

<nav class="navbar navbar-expand-lg navbar-light tmynav">
<a class="navbar-brand" href="{{ url('/')}}"><img class="logoalign" src="{{asset('image/logo.png')}}"  style="height:100px;width:200px;" alt="Immense" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fa fa-bars" style="font-size:25px;"></span>
  </button>
  <div class="collapse navbar-collapse knav" id="navbarNav" style="line-height:40px;">
    <ul class="navbar-nav" style="margin-left:auto;">

      <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin')}}"><b class="bb"><i class="fa fa-home"></i>&nbsp;&nbsp;Dashboard</b></a>
      </li>
      <li class="nav-item">
      <a href="{{ url('admin/logout')}}"><button class="btn btn-primary bb" style="margin-left:10px;margin-right:10px;padding-top:15px;padding-bottom:15px;"><i class="fa fa-power-off"></i>&nbsp;&nbsp;LOGOUT</button></a>
      </li>

    </ul>
  </div>
</nav>

<!-- -------------------------------------------End DeskTop Menu------------------------ -->
</header>

<div class="container admin-hh">
@section('container')
        @show
</div>

<br>
<br>
<!-- -----------------------------------Start Footer -------------- -->

<footer style="background-color:#e6dddc;">
<div style="text-align:center;margin-left:auto;margin-right:auto;">
  <div class="p-3"
         style="background-color: rgba(0, 0, 0, 0.2) margin-left:0px;margin-right:0px;"
         >
      &nbsp;&nbsp;&nbsp;&nbsp;© 2020 Copyright
      <a   href="#">LTS</a><br/>

    </div>
    </div>

</footer>

<!-- End of .container -->

</body>

<script>
    /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
    </script>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


</html>
