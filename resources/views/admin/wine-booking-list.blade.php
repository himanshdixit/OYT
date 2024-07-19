@extends('admin/layoutinner')
@section('page_title','OYT-wine-Booking-List')

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
            <h1 class="mb10">wine Booking List</h1>
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

                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">gender</th>

                            <th scope="col">wine ID</th>
                            <th scope="col">wine Name</th>
                            <th scope="col">Price</th>

                            <th scope="col">Quantity</th>
                            <th scope="col">Pack Size</th>

                            <th scope="col">Created At</th>

                            <th scope="col">Experiences Details</th>

                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    @foreach($data as $list)
                        <tr>
                            <th scope="row">{{$list->id}}</th>

                            <td>{{$list->name}}</td>
                            <td>{{$list->email}}</td>
                            <td>{{$list->phone}}</td>
                            <td>{{$list->gender}}</td>

                            <td>{{$list->wi_id}}</td>
                            <td>{{$list->prod_name}}</td>
                            <td>{{$list->prod_price}}</td>

                            <td>{{$list->quantity}}</td>
                            <td>{{$list->pack}}</td>

                            <td>{{$list->created_at}}</td>
                            <td>
                                    <button type="button"
                                            class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter_{{ $list->wi_id }}"
                                            ><i class="fa fa-info-circle" style="color:white;"></i>
                                        </button>
                            </td>
                            <td>
                                <img src="{{asset('uploads/wine/'.$list->file_path)}}"
                                    style="width: 100px; height: 100px;">
                            </td>

                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <!-- <a href="{{url('admin/cruise_items/edit/')}}/{{$list->id}}"><button type="button"
                                            class="btn btn-secondary"
                                            style="border-top-right-radius: 0;border-bottom-right-radius: 0;"><i
                                                class="fa fa-edit" style="color:white;"></i>
                                        </button></a> -->

                                    <a href="{{url('admin/winebookingslist/winebookingdeleted/')}}/{{$list->id}}"><button
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


<!-- Modal -->
@foreach($data1 as $list)
<div class="modal fade" id="exampleModalCenter_{{ $list->wi_id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{ $list->wi_id }} - {{ $list->name }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <!-- -------------------product Details Start---------------- -->

      <div >

<ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-sm-row text-center">
  <li class="nav-item flex-sm-fill">
    <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link  mr-sm-3  active" style="border:1px solid lightgrey;padding: 0.1rem 0.7rem;margin:3px;">Description</a>
  </li>
  <li class="nav-item flex-sm-fill">
    <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link  mr-sm-3 " style="border:1px solid lightgrey;padding: 0.1rem 0.7rem;margin:3px;">Type</a>
  </li>

</ul>


<div class="p-3 bg-white rounded shadow mb-3">
<!-- Lined tabs-->

<div id="myTab2Content" class="tab-content">

  <div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-2 py-2 show active">
  <p align="justify">{!! $list->des !!}</p>
  </div>
  <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-2 py-2" >
  <b style="color:#ff3d00;">Venue : {{ $list->type }}</b> <br/>
  </div>

</div>
<!-- End lined tabs -->

</div>
</div>

      <!-- -------------------product Details End---------------- -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
@endforeach

@endsection
