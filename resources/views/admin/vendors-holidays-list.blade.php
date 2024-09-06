@extends('admin/layoutinner')
@section('page_title','OYT-Vendors-Holidays-List')

@section('container')

<style>
    
    .btn{
        padding: 2px 15px !important;
    }

</style>

<main id="main" class="main">

    <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{url('admin/')}}">Home</a></li>
                <li class="breadcrumb-item active"><a href="{{url('admin/dashboard/')}}">Dashboard</a></li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <!-- Recent Sales -->
    <div class="col-12">

    <a href="{{url('admin/holidaysvendors/')}}">
        <button type="button" class="btn btn-primary">
            Go Back
        </button>
    </a>
    <a href="{{url('admin/vendorpanel/')}}">
        <button type="button" class="btn btn-primary">
            Vendor Panel
        </button>
    </a>

        <div class="card recent-sales overflow-auto">

            <div class="card-body">
            <h1 class="mb10">Vendors - Holidays List</h1>

                @if(session()->has('message'))
                <div class="sufee-alert alert with-close alert-success alert-dismissible fade show">
                    {{session('message')}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                @endif

                <table class="table table-borderless datatable">
                    <thead>
                        <tr>
                            <th scope="col">Sr.</th>
                            <th scope="col">Holiday ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->h_id}}</td>
                            <td>{{$list->name}}</td>
                            <td>{{$list->price}}</td>
                            <td>{{$list->active}}</td>
                            <td>
                                <img src="{{asset('uploads/holiday/'.$list->photo)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                   <?php if($list->active == 0){  ?> 
                                <a href="{{url('admin/holidays/approve/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-success"
                                            style=""><i
                                                class="fa fa-check" style="color:white;"> Approve </i>
                                        </button></a>
                                    <?php } else{ ?>
                                    <a href="{{url('admin/holidays/approve/')}}/{{$list->id}}"><button
                                            type="button" class="btn btn-danger"
                                            style=""><i
                                                class="fa fa-times" style="color:white;"> Cancel </i>
                                        </button></a>
                                    <?php }  ?>

                                </div>
                            </td>

                        </tr>

                        @endforeach


                    </tbody>
                </table>

            </div>

        </div>
    </div><!-- End Recent Sales -->

</main>



@endsection
