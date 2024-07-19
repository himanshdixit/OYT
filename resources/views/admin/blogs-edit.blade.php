@extends('admin/layoutinner')
@section('page_title','OYT-Blogs-Edit')

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

<h1 class="mb10">Update Blogs</h1>
    <a href="{{url('admin/blogs')}}">
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
                            <form action="{{ url('/admin/blogs/update/'.$data['0']->id ) }}" method="post" enctype="multipart/form-data">
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
                                            <label for="color" class="control-label mb-1">Title</label>
                                            <input id="title"  name="title" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->title}}" required>
                                            @error('title')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Author</label>
                                            <input id="author"  name="author" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->author}}" required>
                                            @error('author')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Date</label>
                                            <input id="date"  name="date" type="date" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->date}}" >
                                            @error('date')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Description</label>
                                            <textarea id="description1" name="description1" type="text" class="form-control" aria-required="true" aria-invalid="false" >{{ $data['0']->des1}}</textarea>
                                            @error('description1')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>


                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label>
                                            <input id="image"  name="image" type="file" class="form-control" aria-required="true" aria-invalid="false" >
                                            @error('image')

                                                <p style="color:red;">{{$message}}</p>

                                            @enderror
                                             <img src="{{asset('uploads/blogs/'.$data['0']->photo) }}" style="width: 90px; height: 70px;margin:10px;">
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
    $('#description1').summernote({
        height: 200,
        focus: true
    })
})
</script>

@endsection
