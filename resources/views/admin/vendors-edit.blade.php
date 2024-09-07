@extends('admin/layoutinner')
@section('page_title','OYT-Vendor-Registration-Edit')

@section('container')

<main id="main" class="main">

<h1 class="mb10">Update Vendor Details</h1>
    <a href="{{url('admin/vendors')}}">
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
                            <form action="{{ url('/admin/vendors/update/'.$data['0']->id ) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <div class="row">

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Vendor ID</label>
                                            <input id="v_id"  name="v_id" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->v_id}}" readonly required>
                                        </div>

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">User</label>
                                            <input id="username"  name="username" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->username}}" required>
                                            @error('username')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Email</label>
                                            <input id="email"  name="email" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->email}}" required>
                                            @error('email')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Password</label>
                                            <input id="password"  name="password" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->password}}" required>
                                            @error('password')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                             <div class="form-group">
                                                <label>Type</label>
                                                <select id="type" name="type" class="form-control" >
                                                <option>{{ $data['0']->type}}</option>
                                                @foreach($data2 as $list)
                                                <option value="{{ $list->others }}">{{ $list->others }}</option>
                                                @endforeach
                                                </select>
                                                @error('type')
                                                <p style="color:red;">{{$message}}</p>
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Mobile</label>
                                            <input id="phone"  name="phone" type="text" maxlength="10" class="form-control" aria-required="true" aria-invalid="false" value="{{ $data['0']->phone}}" required>
                                            @error('phone')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label>
                                            <input id="image"  name="image" type="file" class="form-control" aria-required="true" aria-invalid="false" >
                                            @error('image')

                                                <p style="color:red;">{{$message}}</p>

                                            @enderror
                                             <img src="{{asset('uploads/vendors/'.$data['0']->photo) }}" style="width: 90px; height: 70px;margin:10px;">
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <center><button id="payment-button" name="submit" type="submit" class="btn btn-sm btn-primary">
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

@endsection
