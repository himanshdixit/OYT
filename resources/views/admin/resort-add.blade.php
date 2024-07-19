@extends('admin/layoutinner')
@section('page_title','OYT-Resort-Add')

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

<h1 class="mb10">Add New Resort Package</h1>
    <a href="{{url('admin/resort')}}">
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
                                            <label for="color" class="control-label mb-1"> Resort-ID </label>
                                            <input id="r_id"  name="r_id" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('r_id')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

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
                                            <label for="color" class="control-label mb-1"> Duration ( Days-Nights ) </label>
                                            <input id="duration"  name="duration" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('duration')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                        <label for="color" class="control-label mb-1"> Country</label>
                                        <select id="country"  name="country" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            <option></option>
                                            <option value="India">India</option>
                                            <option value="America">America</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Bali">Bali</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        @error('country')
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
                                            <label for="color" class="control-label mb-1"> Description </label>
                                            <textarea id="des" name="des" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('des')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Highlights </label>
                                            <textarea id="highlights" name="highlights" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('highlights')
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
    $('#highlights').summernote({
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
