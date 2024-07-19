@extends('admin/layoutinner')
@section('page_title','OYT-Cruise-Items-Edit')

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

<h1 class="mb10">Update Cruise Items</h1>
    <a href="{{url('admin/cruise_items')}}">
        <button type="button" class="btn btn-primary">
            Go Back
        </button>
    </a>
    <br><br>
    @if(session()->has('message'))
    <div class="sufee-alert alert with-close alert-success alert-dismissible fade show">
        {{session('message')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    @endif
    <div class="row m-t-30">
        <div class="col-md-12">
        <div class="row">
                <div class="col-lg-10">
                    <div class="card">
                        <div class="card-body">
                            <form action="{{ url('/admin/cruise_items/update/'.$data['0']->id ) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <div class="row">

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Name</label>
                                            <input id="name"  name="name" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->name}}" required>
                                            @error('name')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Sailing Date </label>
                                            <input id="sailing_dates"  name="sailing_dates" type="date" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->sailing_dates}}" required>
                                            @error('sailing_dates')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Sailing Info </label>
                                            <textarea id="sailing_info" name="sailing_info" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->sailing_info}}</textarea>
                                            @error('sailing_info')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Price</label>
                                            <input id="price"  name="price" type="number" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->price}}">
                                            @error('price')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>


                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Description</label>
                                            <textarea id="des" name="des" type="text" class="form-control" aria-required="true" aria-invalid="false" >{{ $data['0']->des}}</textarea>
                                            @error('des')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Features </label>
                                            <textarea id="features" name="features" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->features}}</textarea>
                                            @error('features')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Policies </label>
                                            <textarea id="policies" name="policies" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->policies}}</textarea>
                                            @error('policies')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label>
                                            <input id="image"  name="image" type="file" class="form-control" aria-required="true" aria-invalid="false" >
                                            @error('image')
                                                <p style="color:red;">{{$message}}</p>
                                            @enderror
                                             <img src="{{asset('uploads/cruise_items/'.$data['0']->image) }}" style="width: 90px; height: 70px;margin:10px;">
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <center><button id="payment-button" type="submit" name="submit" value="submit" class="btn btn-sm btn-success">
                                        Update
                                    </button>
</center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</main>


<script>
$(function() {
    // Summernote
    $('#des').summernote({
        height: 200,
        focus: true
    })
})
</script>

<script>
$(function() {
    // Summernote
    $('#policies').summernote({
        height: 200,
        focus: true
    })
})
</script>

<script>
$(function() {
    // Summernote
    $('#features').summernote({
        height: 200,
        focus: true
    })
})
</script>

<script>
$(function() {
    // Summernote
    $('#sailing_info').summernote({
        height: 200,
        focus: true
    })
})
</script>


@endsection
