@extends('admin/layoutinner')
@section('page_title','OYT-Cruise-Itinerary-Map-List')

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
            <h1 class="mb10">Cruise Itinerary Map</h1>
    <a href="{{url('admin/cruise_itinerary_map/add-cruise_itinerary_map/'.$cruise_id )}}">
        <button type="button" class="btn btn-primary">
            Add Cruise Itinerary Map Entery
        </button>
    </a>

    <a href="{{url('admin/cruise_items')}}">
        <button type="button" class="btn btn-success">
            Cruise Items List 
        </button>
    </a>

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
                            <th scope="col">Cruise ID</th>
                            <th scope="col">Day</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->cruise_id}}</td>
                            <td>{{$list->days}}</td>
                            <td>{{$list->des}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <a href="{{url('admin/cruise_itinerary_map/delete')}}/{{$list->id}}/{{ $data[0]->cruise_id }}"><button
                                            type="button" class="btn btn-danger"><i class="fa fa-trash" style="color:white;"></i>
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
