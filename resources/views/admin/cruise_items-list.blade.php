@extends('admin/layoutinner')
@section('page_title','OYT-Cruise-Items-List')

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
            <h1 class="mb10">Cruise Items</h1>
    <a href="{{url('admin/cruise_items/add-cruise_items')}}">
        <button type="button" class="btn btn-primary">
            Add Cruise Items
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
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <!-- <th scope="col">Description</th> -->
                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                            <th scope="col">Add Cruise Itinerary Map</th>
                            <th scope="col">Add Cruise images</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->name}}</td>
                            <td>{{$list->price}}</td>
                            <!-- <td>{!! substr($list->des,0,200) !!}</td> -->
                            <td>
                                <img src="{{asset('uploads/cruise_items/'.$list->image)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <a href="{{url('admin/cruise_items/edit/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"
                                            style="border-top-right-radius: 0;border-bottom-right-radius: 0;"><i
                                                class="fa fa-edit" style="color:white;"></i>
                                        </button></a>

                                    <a href="{{url('admin/cruise_items/delete/')}}/{{$list->id}}"><button
                                            type="button" class="btn btn-danger"
                                            style="border-top-left-radius: 0;border-bottom-left-radius: 0;"><i
                                                class="fa fa-trash" style="color:white;"></i>
                                        </button></a>
                                </div>
                            </td>
                            <td>
                            <a href="{{url('admin/cruise_itinerary_map/add-cruise_itinerary_map')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"><i class="fa fa-plus" style="color:white;"></i>
                                        Add Entery</button></a>
                            </td>
                            <td>

                                    <a href="{{url('admin/cruise_images/add-cruise_images')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"><i class="fa fa-plus" style="color:white;"></i>
                                        Add Image</button></a>
                                
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
