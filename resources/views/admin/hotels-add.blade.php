@extends('admin/layoutinner')
@section('page_title','OYT-Hotel-Add')

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

<h1 class="mb10">Add Hotel Items</h1>
    <a href="{{url('admin/hotels')}}">
        <button type="button" class="btn btn-primary">
            Show List
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
                            <form action="insert" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <div class="row">

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Name </label>
                                            <input id="name"  name="name" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('name')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Price </label>
                                            <input id="price"  name="price" type="number" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('price')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                        <label for="color" class="control-label mb-1"> Rooms</label>
                                        <select id="rooms"  name="rooms" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            <option></option>
                                            <option value="rooms1">Rooms 1</option>
                                            <option value="rooms2">Rooms 2</option>
                                        </select>
                                        @error('rooms')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Location </label>
                                            <input id="location"  name="location" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('location')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Overview </label>
                                            <textarea id="des" name="des" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('overview')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Highlights </label>
                                            <textarea id="heighlights" name="heighlights" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('heighlights')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Amenties </label>
                                            <textarea id="amenties" name="amenties" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('amenties')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Policies </label>
                                            <textarea id="policy" name="policy" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('policy')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label>
                                            <input id="image"  name="image" type="file" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('image')
                                                <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>
                                    
                                    </div>
                                </div>

                                <div>
                                  <center>  <button type="submit" name="submit" value="submit" class="btn btn-sm btn-success">
                                        Submit
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
    $('#heighlights').summernote({
        height: 200,
        focus: true
    })
})
</script>
<script>
$(function() {
    // Summernote
    $('#amenties').summernote({
        height: 200,
        focus: true
    })
})
</script>
<script>
$(function() {
    // Summernote
    $('#policy').summernote({
        height: 200,
        focus: true
    })
})
</script>


@endsection
