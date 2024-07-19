@extends('admin/layoutinner')
@section('page_title','OYT-Dashboard')

@section('container')

<style>
    .btn{
        padding: 2px 15px !important;
    }

    .btn-outline-danger{
        background-color:#fff;
        border:1px solid #ff3d00;
        color:#ff3d00;
    }

    .btn-outline-danger:hover{
        background-color:#ff3d00;
        border:1px solid #ff3d00;
        color:#fff;
    }

    .btn-outline-primary{
        border:1px solid #3c77c9;
        color:#3c77c9;
    }

    .btn-outline-primary:hover{
        background-color:#3c77c9;
        border:1px solid #3c77c9;
        color:#fff;
    }

</style>

<main id="main" class="main">

<div class="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Home</a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div><!-- End Page Title -->
<?php
$date = Carbon\Carbon::now('Asia/Kolkata');
        $audit_date= $date->format('d-m-Y & H:i:s');
        $created_at = $audit_date;
        echo ($created_at);
?>
<section class="section dashboard">
  <div class="row">

    <!-- Left side columns -->
    <div class="col-lg-8">
      <div class="row">

      <!-- Customers Card -->
      <div class="col-xxl-4 col-xl-12">

<div class="card info-card sales-card">

  <div class="card-body">
    <h5 class="card-title">Cruise Section</h5>

<div class="row">

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Cruise Items</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/cruise_items/add-cruise_items')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/cruise_items')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-shopping-bag"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Cruise Accessories</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/items/add-items')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/items')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-photo"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Blogs</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/blogs/add-blogs')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/blogs')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-hotel"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Hotels</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/hotels/add-hotels')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/hotels')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>


<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-star"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Weddings</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/weddings/add-weddings')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/weddings')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-glass"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Wine</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/wine/add-wine')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/wine')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-car"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Caravan</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/caravan/add-caravan')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/caravan')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-heart"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Honeymoon</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/honeymoon/add-honeymoon')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/honeymoon')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>


<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-street-view"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Holiday Packages</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/holiday/add-holiday')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/holiday')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-home"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Resorts</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/resort/add-resort')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/resort')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-plane"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Charted Planes</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/plane/add-plane')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/plane')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-trophy"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Golfs</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/golf/add-golf')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/golf')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>







</div>


  </div>
</div>

</div><!-- End Customers Card -->
    

      <!-- Customers Card -->
      <!-- <div class="col-xxl-4 col-xl-12">

<div class="card info-card sales-card">

  <div class="card-body">
    <h5 class="card-title">Blogs</h5>

    <div class="d-flex align-items-center">
      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
        <i class="bi bi-plus"></i>
      </div>
      <div class="ps-3">
      <h6>Blogs</h6>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/blogs/add-blogs')}}"><button type="button" class="btn btn-primary" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/blogs')}}"><button type="button" class="btn btn-secondary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
      </div>
    </div>

  </div>
</div>

</div> -->

<!-- End Customers Card -->


    <!-- Customers Card -->
    <!-- <div class="col-xxl-4 col-xl-12">

<div class="card info-card sales-card">

  <div class="card-body">
    <h5 class="card-title">Gallery</h5>

    <div class="d-flex align-items-center">
      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
        <i class="bi bi-plus"></i>
      </div>
      <div class="ps-3">
      <h6>Gallery</h6>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/gallery/add-gallery')}}"><button type="button" class="btn btn-primary" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/gallery')}}"><button type="button" class="btn btn-secondary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
      </div>
    </div>


  </div>
</div>

</div> -->

<!-- End Customers Card -->

    <!-- Customers Card -->
    <!-- <div class="col-xxl-4 col-xl-12">

<div class="card info-card sales-card">

  <div class="card-body">
    <h5 class="card-title">Videos</h5>

    <div class="d-flex align-items-center">
      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
        <i class="bi bi-plus"></i>
      </div>
      <div class="ps-3">
      <h6>Videos</h6>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('admin/videos/add-videos')}}"><button type="button" class="btn btn-primary" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('admin/videos')}}"><button type="button" class="btn btn-secondary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
      </div>
    </div>


    

  </div>
</div>

</div> -->

<!-- End Customers Card -->

      </div>
    </div><!-- End Left side columns -->

    <!-- Right side columns -->
    <div class="col-lg-4">

      <!-- Website Traffic -->
      <div class="card">


        <div class="card-body pb-0">
          <h5 class="card-title">OYT ADMIN</h5>

          <div style="text-align:center;min-height: auto;width:100%;">
<img src="../images/cruise.jpg" class="img-fluid" alt="oyt"/>
        </div>



        </div>
      </div><!-- End Website Traffic -->



    </div><!-- End Right side columns -->

  </div>
</section>

</main><!-- End #main -->

@endsection
