@extends('admin/layoutinner')
@section('page_title','OYT-Hotel-Booking-List')

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
        <div class="card recent-sales overflow-auto">

            <div class="card-body">
            <h1 class="mb10">Hotel Booking List</h1>
    <!-- <a href="{{url('admin/cruise_items/add-cruise_items')}}">
        <button type="button" class="btn btn-primary">
            Add Cruise Items
        </button>
    </a> -->

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
                            <th scope="col">Hotel ID</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>

                            <th scope="col">Check-In</th>
                            <th scope="col">Check-Out</th>

                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">gender</th>
                            <th scope="col">Adult</th>
                            <th scope="col">Child</th>
                            <th scope="col">Rooms</th>


                            <th scope="col">Created At</th>

                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->hotel_id}}</td>
                            <td>{{$list->hotel_name}}</td>
                            <td>{{$list->price}}</td>
                            <td>{{$list->type}}</td>
                            <td>{{$list->check_in}}</td>
                            <td>{{$list->check_out}}</td>
                            <td>{{$list->name}}</td>
                            <td>{{$list->email}}</td>
                            <td>{{$list->phone}}</td>
                            <td>{{$list->address}}</td>
                            <td>{{$list->gender}}</td>
                            <td>{{$list->adult}}</td>
                            <td>{{$list->child}}</td>
                            <td>{{$list->rooms}}</td>
                            <td>{{$list->created_at}}</td>
                            <td>
                                <img src="{{asset('uploads/hotels/'.$list->file_path)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <!-- <a href="{{url('admin/cruise_items/edit/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"
                                            style="border-top-right-radius: 0;border-bottom-right-radius: 0;"><i
                                                class="fa fa-edit" style="color:white;"></i>
                                        </button></a> -->

                                    <a href="{{url('admin/hotelbookingslist/hotelbookingdeleted/')}}/{{$list->id}}"><button
                                            type="button" class="btn btn-danger"
                                            style="border-top-left-radius: 0;border-bottom-left-radius: 0;"><i
                                                class="fa fa-trash" style="color:white;"></i>
                                        </button></a>
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
