@extends('vendor/layoutinner')
@section('page_title','OYT-Cruise-Items-Add')

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

<h1 class="mb10">Add Cruise Items</h1>
    <a href="{{url('vendor/cruise_items')}}">
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
                               
                                <div class="col-lg-2">
                                            <label for="color" class="control-label mb-1"> Catagory Code </label>
                                            @foreach($data1 as $list)
                                            <input id="ct_code"  name="ct_code" value="{{ $list->code }}" type="text" class="form-control" aria-required="true" aria-invalid="false" readonly required>
                                            @endforeach
                                            @error('ct_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>     
                               
                                <!-- <div class="col-lg-2">
                                        <label for="color" class="control-label mb-1"> Catagory Code</label>
                                        <select id="ct_code"  name="ct_code" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                        <option value="{{ old('ct_code') }}">{{ old('ct_code') }}</option>
                        @foreach($data1 as $list)
                        <option value="{{ $list->code }}">{{ $list->name }}-{{ $list->code }}</option>
                        @endforeach
                                        </select>
                                        @error('ct_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div> -->
                                        
                                        <div class="col-lg-2">
                                        <label for="color" class="control-label mb-1"> Select Country Code</label>
                                        <select id="c_code"  name="c_code" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                        <option value="{{ old('c_code') }}">{{ old('c_code') }}</option>
                        @foreach($data2 as $list)
                        <option value="{{ $list->code3 }}">{{ $list->name }}-{{ $list->code3 }}</option>
                        @endforeach
                                        </select>
                                        @error('c_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-2">
                                        <label for="color" class="control-label mb-1"> Select State Code</label>
                                        <select id="s_code"  name="s_code" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                        <option value="{{ old('s_code') }}">{{ old('s_code') }}</option>
                        @foreach($data3 as $list)
                        <option value="{{ $list->statecode }}">{{ $list->name }}-{{ $list->statecode }}</option>
                        @endforeach
                                        </select>
                                        @error('s_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>


                                <div class="col-lg-2">
                                            <label for="color" class="control-label mb-1"> Enter PIN Code </label>
                                            <input id="p_code"  name="p_code" type="text" maxlength="6" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('p_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-2">
                                            <label for="color" class="control-label mb-1"> Enter Unique Number </label>
                                            <input id="u_code"  name="u_code" type="text" maxlength="3" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('u_code')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>


                                    </div>
                     
                                <div class="row">

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Name </label>
                                            <input id="name"  name="name" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('name')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Sailing Date </label>
                                            <input id="sailing_dates"  name="sailing_dates" type="date" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('sailing_dates')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Sailing Info </label>
                                            <textarea id="sailing_info" name="sailing_info" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('sailing_info')
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
                                            <label for="color" class="control-label mb-1"> Ship Info / Package Overview </label>
                                            <textarea id="des" name="des" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('des')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Features </label>
                                            <textarea id="features" name="features" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('features')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Policies </label>
                                            <textarea id="policies" name="policies" type="text" class="form-control" aria-required="true" aria-invalid="false"></textarea>
                                            @error('policies')
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
