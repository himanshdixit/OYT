@extends('vendor/layoutinner')
@section('page_title','OYT-Golf-Edit')

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

<h1 class="mb10">Update Golf Package</h1>
    <a href="{{url('vendor/golf')}}">
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
                            <form action="{{ url('/vendor/golf/update/'.$data['0']->id ) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <div class="row">

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Golf-ID </label>
                                            <input id="g_id"  name="g_id" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->g_id}}" readonly required>
                                            @error('g_id')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Name</label>
                                            <input id="name"  name="name" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->name}}" required>
                                            @error('name')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Price </label>
                                            <input id="price"  name="price" type="number" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->price}}" required>
                                            @error('price')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>                                    

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Location </label>
                                            <input id="location"  name="location" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->location}}" required>
                                            @error('location')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Description </label>
                                            <textarea id="des" name="des" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->des}}</textarea>
                                            @error('des')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Timing-chart Description </label>
                                            <textarea id="timing_chart" name="timing_chart" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->timing_chart}}</textarea>
                                            @error('timing_chart')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Highlights </label>
                                            <textarea id="highlights" name="highlights" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->highlights}}</textarea>
                                            @error('highlights')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Policies </label>
                                            <textarea id="policy" name="policy" type="text" class="form-control" aria-required="true" aria-invalid="false">{{ $data['0']->policy}}</textarea>
                                            @error('policy')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label>
                                            <input id="image"  name="image" type="file" class="form-control" aria-required="true" aria-invalid="false" >
                                            @error('image')
                                                <p style="color:red;">{{$message}}</p>
                                            @enderror
                                             <img src="{{asset('uploads/golf/'.$data['0']->photo) }}" style="width: 90px; height: 70px;margin:10px;">
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
    $('#highlights').summernote({
        height: 200,
        focus: true
    })
})
</script>
<script>
$(function() {
    // Summernote
    $('#timing_chart').summernote({
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
