@extends('admin/layoutinner')
@section('page_title','OYT-Vendor-Panel')

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
        margin:3px;
    }

    .btn-outline-primary:hover{
        background-color:#3c77c9;
        border:1px solid #3c77c9;
        color:#fff;
    }

</style>

<main id="main" class="main">

<div class="pagetitle">
  <h1>Vendor Panel</h1>
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

<div class="card info-card sales-card">

  <div class="card-body">
    <h5 class="card-title">Vendor Types - Permissions</h5>

    <a href="{{url('admin/hotelvendors/')}}"><button type="button" class="btn btn-outline-primary">Hotel</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/cruisevendors/')}}"><button type="button" class="btn btn-outline-primary">Cruise</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/weddingvendors/')}}"><button type="button" class="btn btn-outline-primary">Wedding</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/winevendors/')}}"><button type="button" class="btn btn-outline-primary">Wine</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/caravanvendors/')}}"><button type="button" class="btn btn-outline-primary">Caravan</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/holidaysvendors/')}}"><button type="button" class="btn btn-outline-primary">Holidays</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/honeymoonvendors/')}}"><button type="button" class="btn btn-outline-primary">Honeymoon</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/resortvendors/')}}"><button type="button" class="btn btn-outline-primary">Resorts</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/planesvendors/')}}"><button type="button" class="btn btn-outline-primary">Charted Planes</button></a> &nbsp;&nbsp;
    <a href="{{url('admin/golfsvendors/')}}"><button type="button" class="btn btn-outline-primary">Golfs</button></a> &nbsp;&nbsp;


    

</div>

</div>



</main><!-- End #main -->

@endsection
