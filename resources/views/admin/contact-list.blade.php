@extends('admin/layoutinner')
@section('page_title','Contact-list')
@section('container')

<main id="main" class="main">
<br><br><br><br>
@if(session()->has('message'))
    <div class="sufee-alert alert with-close alert-success alert-dismissible fade show">
        {{session('message')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    @endif
    <h1 class="mb10">Contact List</h1>

    <a href="{{url('admin/dashboard/')}}">
        <button type="button" class="btn btn-primary">
            Dashboard
        </button>
    </a>
    <div class="row m-t-30">
        <div class="col-md-12">
            <!-- DATA TABLE-->
            <div class="table-responsive m-b-40">
                <table class="table table-secondary">
                    <thead>
                        <tr>
                        <th>Sr.</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        @foreach($data as $list)
                        <tr>
                        <td>{{$list->id}}</td>
                            <td>{{$list->name}}</td>
                            <td>{{$list->email}}</td>
                            <td>{{$list->phone}}</td>
                            <td>{{$list->sub}}</td>
                            <td>{{$list->des}}</td>
                            <td>

                                <a href="{{url('admin/contactlists/contactdeleted/')}}/{{$list->id}}"><button type="button" class="btn btn-danger"><i class="fa fa-trash" style="color:white;">&nbsp;&nbsp; Delete</i> </button></a>
                            </td>

                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <!-- END DATA TABLE-->
        </div>
    </div>

</main>

@endsection
