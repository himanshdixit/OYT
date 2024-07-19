@extends('admin/layoutinner')
@section('page_title','OYT-Blogs-List')

@section('container')

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
                <h1 class="mb10">Blogs List</h1>
                <a href="{{url('admin/blogs/add-blogs')}}">
                    <button type="button" class="btn btn-primary">
                        Add Blogs
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
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Author</th>
                            <th scope="col">Description</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>
                            <td>{{$list->name}}</td>
                            <td>{{$list->title}}</td>
                            <td>{{$list->date}}</td>
                            <td>{{$list->author}}</td>
                            <td>{!! substr($list->des1,0,200) !!}</td>
                            <td>
                                <img src="{{asset('uploads/blogs/'.$list->photo)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <a href="{{url('admin/blogs/edit/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"
                                            style="border-top-right-radius: 0;border-bottom-right-radius: 0;"><i
                                                class="fa fa-edit" style="color:white;">&nbsp;&nbsp; Edit</i>
                                        </button></a>

                                    <a href="{{url('admin/blogs/delete/')}}/{{$list->id}}"><button
                                            type="button" class="btn btn-danger"
                                            style="border-top-left-radius: 0;border-bottom-left-radius: 0;"><i
                                                class="fa fa-trash" style="color:white;">&nbsp;&nbsp; Delete</i>
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
