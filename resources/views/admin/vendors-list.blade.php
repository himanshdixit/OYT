@extends('admin/layoutinner')
@section('page_title','OYT-Vendors-List')

@section('container')

<main id="main" class="main">

@if(session()->has('message'))
    <div class="sufee-alert alert with-close alert-success alert-dismissible fade show">
        {{session('message')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    @endif
    <h1 class="mb10">Vendors List</h1>
    <a href="{{url('admin/vendors/add-vendors')}}">
        <button type="button" class="btn btn-primary">
            Add New Vendor
        </button>
    </a>
    <a href="{{url('admin/dashboard/')}}">
        <button type="button" class="btn btn-primary">
            Dashboard
        </button>
    </a>
    <div class="row m-t-30">
        <div class="col-md-12">
            <!-- DATA TABLE-->
            <div class="table-responsive m-b-40">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Vendor ID</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>phone</th>
                            <th>Type</th>
                            <th>Image</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($data as $list)
                        <tr>
                        <td>{{$list->v_id}}</td>
                            <td>{{$list->username}}</td>
                            <td>{{$list->email}}</td>
                            <td>{{$list->password}}</td>
                            <td>{{$list->phone}}</td>
                            <td>{{$list->type}}</td>

                            <td>
                            <img src="{{asset('uploads/vendors/'.$list->photo)}}" style="width: 100px; height: 100px;">
                          </td>

                            <td>
                                <a href="{{url('admin/vendors/edit/')}}/{{$list->id}}"><button type="button" class="btn btn-primary"><i class="fa fa-edit" style="color:white;">&nbsp;&nbsp; Edit</i> </button></a>

                                <a href="{{url('admin/vendors/delete/')}}/{{$list->id}}"><button type="button" class="btn btn-danger"><i class="fa fa-trash" style="color:white;">&nbsp;&nbsp; Delete</i> </button></a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <!-- END DATA TABLE-->
            @if ($data->links()->paginator->hasPages())
            <div class="mt-4 p-4 box has-text-centered">
                {{ $data->links() }}
            </div>
        @endif

        </div>
    </div>

</main>


@endsection
