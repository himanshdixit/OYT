<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>OYT Travelling</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="js/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="/css/pc.css">
    <link rel="stylesheet" href="/css/mobile.css">

    <link rel="stylesheet" href="/css/slider.css">

    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    
  <link href='https://fonts.googleapis.com/css?family=Bagel Fat One' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Cherry Bomb One' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Geologica' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Konkhmer Sleokchher' rel='stylesheet'>
  
      <!-- UIkit CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.21/dist/css/uikit.min.css" />
  
  <!-- UIkit JS -->
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.21/dist/js/uikit.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.21/dist/js/uikit-icons.min.js"></script>

  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

  <style>
  
  /* body,h1,h2,h3,h4,h5,h6,p,i,b,li,ul {
    font-family:"Montserrat,sans-serif";
  } */

    .mtxt {
    font-family:"Bagel Fat One";
  }
  
  
  /* @media (min-width: 992px){
    .dropdown-menu .dropdown-toggle:after{
      border-top: .3em solid transparent;
        border-right: 0;
        border-bottom: .3em solid transparent;
        border-left: .3em solid;
    }
    .dropdown-menu .dropdown-menu{
      margin-left:0; margin-right: 0;
    }
    .dropdown-menu li{
      position: relative;
    }
    .nav-item .submenu{
      display: none;
      position: absolute;
      left:100%; top:-7px;
    }
    .nav-item .submenu-left{
      right:100%; left:auto;
    }
    .dropdown-menu > li:hover{ background-color: #f1f1f1 }
    .dropdown-menu > li:hover > .submenu{
      display: block;
    }
  
  } */
  
  
  .dropdown-submenu {
    position: relative;
  }
  
  .dropdown-menu{
  min-width:200px;
  }
  
  .dropdown-submenu>a:after {
    content: "\f0da";
    float: right;
    border: none;
    font-family: 'FontAwesome';
  }
  
  .dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: 0px;
    margin-left: 0px;
  }
  
  </style>

<script>
      $(function() {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      $(this).siblings().toggleClass("show");
  
  
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
    });
  });
  
      </script>

    </head>

    <body>

    <div id="app"></div>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

    </body>

    <script src="js/slider.js"></script>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


</html>
