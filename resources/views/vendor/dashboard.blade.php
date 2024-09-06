@extends('vendor/layoutinner')
@section('page_title','OYT-Vendor-Dashboard')

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
  <h1>{{ strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) }} - Vendor Dashboard</h1>
  <nav>
    <ol class="breadcrumb" style="background-color:#d6d6f5;">
      <li class="breadcrumb-item"><a href="{{ url('/vendor') }}">Home</a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div><!-- End Page Title -->
<?php
$date = Carbon\Carbon::now('Asia/Kolkata');
        $audit_date= $date->format('d-m-Y & H:i:s');
        $created_at = $audit_date;
        echo ("Time : ".$created_at);
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
    <h5 class="card-title">{{ strtoupper(session()->get('LOGGED_VENDOR_ID')) }} - {{ strtoupper(session()->get('LOGGED_VENDOR_USER')) }}</h5>

<div class="row">

@if("HOTEL" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )         

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Hotel </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/hotels/add-hotels')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/hotels')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("CRUISE" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Cruises</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/cruise_items/add-cruise_items')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/cruise_items')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("WEDDING" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Weddings </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/weddings/add-weddings')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/weddings')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("WINE" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Wines </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/wine/add-wine')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/wine')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("CARAVAN" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Caravan</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/caravan/add-caravan')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/caravan')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("HONEYMOON" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Honeymoon Packages </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/honeymoon/add-honeymoon')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/honeymoon')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("HOLIDAYS" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Holidays Packages </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/holiday/add-holiday')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/holiday')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("RESORT" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-home"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Resorts</b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/resort/add-resort')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/resort')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("PLANES" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Charted Planes </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/plane/add-plane')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/plane')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@elseif("GOLFS" == strtoupper(session()->get('LOGGED_VENDOR_USER_TYPE')) )

<div class="col-lg-6 col-md-6 col-xs-12">
    <div class="card" style="padding:5px;">
    <h1 style="color:#ff3d00;margin-top:20px;text-align:center;"><i class="fa fa-ship"></i></h1>
    <h4 style="color:#3c77c9;margin-top:10px;text-align:center;"><b>Golfs </b></h4>
    <div style="text-align:center;">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="{{url('vendor/golf/add-golf')}}"><button type="button" class="btn btn-outline-danger" style="border-top-right-radius: 0;border-bottom-right-radius: 0;">Add</button></a>
      <a href="{{url('vendor/golf')}}"><button type="button" class="btn btn-outline-primary" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">List</button></a>
    </div>
</div>
</div>
</div>

@else
    <b> None </b>      
@endif







</div>


  </div>
</div>

</div><!-- End Customers Card -->
    

      </div>
    </div><!-- End Left side columns -->

    <!-- Right side columns -->
    <div class="col-lg-4">

      <!-- Website Traffic -->
      <div class="card">


        <div class="card-body pb-0">
          <h5 class="card-title">OYT Vendor</h5>

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
