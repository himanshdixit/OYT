@extends('vendor/layoutinner')
@section('page_title','OYT-Wine-List')

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
                <li class="breadcrumb-item"><a href="{{url('vendor/')}}">Home</a></li>
                <li class="breadcrumb-item active"><a href="{{url('vendor/dashboard/')}}">Dashboard</a></li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <!-- Recent Sales -->
    <div class="col-12">
        <div class="card recent-sales overflow-auto">

            <div class="card-body">
            <h1 class="mb10">Wine</h1>
    <a href="{{url('vendor/wine/add-wine')}}">
        <button type="button" class="btn btn-primary">
            Add New Wine Package
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
                            <th scope="col">wine ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <!-- <th scope="col">Des</th> -->
                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                            <!-- <th scope="col">Add Hotel images</th> -->
                        </tr>
                    </thead>
                    <tbody>

                        @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->wi_id}}</td>
                            <td>{{$list->name}}</td>
                            <td>{{$list->price}}</td>
                            <!-- <td>{!! substr($list->des,0,200) !!}</td> -->
                            <td>
                                <img src="{{asset('uploads/wine/'.$list->photo)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <a href="{{url('vendor/wine/edit/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"
                                            style="border-top-right-radius: 0;border-bottom-right-radius: 0;"><i
                                                class="fa fa-edit" style="color:white;"></i>
                                        </button></a>

                                    <a href="{{url('vendor/wine/delete/')}}/{{$list->id}}"><button
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
