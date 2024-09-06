@extends('admin/layoutinner')
@section('page_title','OYT-Vendor-Registration')

@section('container')



<script>

function validateForm(){

    return validateUsername(),validateEmail(),validatePassword(),validatetype(),imageValidation();

}

function validateUsername() {

// var username=document.getElementById('username').value.trim();
// or

var username = document.forms["vendorForm"]["username"].value.trim();

if(username.length==0){
    document.getElementById("username-error").innerHTML = "Username is required.";
    return false;
}
if(username==null || username==""){
    document.getElementById("username-error").innerHTML = "Name can not be NULL.";
    return false;
}

document.getElementById("username-error").innerHTML = "<i style='color:green;' class='fa fa-check-circle'></i>";
return true;

}



function validateEmail() {

var email=document.getElementById('email').value.trim();

if(email.length==0){
    document.getElementById("email-error").innerHTML = "email is required.";
    return false;
}
if(email==null || email==""){
    document.getElementById("email-error").innerHTML = "email can not be NULL.";
    return false;
}
if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    document.getElementById("email-error").innerHTML = "email is invalid.";
    return false;
}

document.getElementById("email-error").innerHTML = "<i style='color:green;' class='fa fa-check-circle'></i>";
return true;
}


function validatePassword() {

var password=document.getElementById('password').value.trim();

if(password.length==0){
    document.getElementById("password-error").innerHTML = "password is required.";
    return false;
}
if(password==null || password==""){
    document.getElementById("password-error").innerHTML = "password can not be NULL.";
    return false;
}
if(password.length < 3){
    document.getElementById("password-error").innerHTML = "password should be atleast 3 character long";
    return false;
}

document.getElementById("password-error").innerHTML = "<i style='color:green;' class='fa fa-check-circle'></i>";
return true;
}


function validateType() {

var type=document.getElementById('type').value.trim();

if(type.length==0){
    document.getElementById("type-error").innerHTML = "type is required.";
    return false;
}
if(type==null || type==""){
    document.getElementById("type-error").innerHTML = "type can not be NULL.";
    return false;
}
if(type.selectedIndex == -1){
    document.getElementById("type-error").innerHTML = "Choose your type.";
    return false;
}

document.getElementById("type-error").innerHTML = "<i style='color:green;' class='fa fa-check-circle'></i>";
return true;
}



function imageValidation() {

    var fileInput = document.getElementById('image');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

                // Check if any file is selected.
            if (fileInput.files.length > 0) {
                for (var i = 0; i <= fileInput.files.length - 1; i++) {

                    var fsize = fileInput.files.item(i).size;
                    var file = Math.round((fsize / 1024));
                    // The size of the file.

                    if (file >= 5000) {
                          document.getElementById("image-error").innerHTML = "<i class='fa fa-times-circle' aria-hidden='true'></i> File too Big, please select a file less than 5 MB";
                          console.log(file);
                          return false;
                    } else if (file < 5) {
                          document.getElementById("image-error").innerHTML = "<i class='fa fa-times-circle' aria-hidden='true'></i> File too small, please select a file greater than 5 KB";
                          console.log(file);
                          return false;
                    } else {
                        document.getElementById('size').innerHTML = '<b>'
                        + file + '</b> KB';
                        console.log(file);
                    }
                }
            }

    document.getElementById("image-error").innerHTML = "<i style='color:green;' class='fa fa-check-circle'></i>";
    return true;
}



</script>


<main id="main" class="main">

<h1 class="mb10">Add New Vendor</h1>
    <a href="{{url('admin/vendors')}}">
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
                            <form action="insert" name="vendorForm" method="post" onsubmit="return validateForm()" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <div class="row">

                                    <div class="col-lg-12">
                                             <div class="form-group">
                                                <label>Catagory Code</label>
                                                <select id="c_code" name="c_code" class="form-control" required>
                                                <option></option>
                                                @foreach($data as $list)
                                                <option value="{{ $list->code }}">{{ $list->name }}-{{ $list->code }}</option>
                                                @endforeach
                                                </select>
                                                @error('c_code')
                                                <p style="color:red;">{{$message}}</p>
                                                @enderror
                                            </div>
                                        </div>

                                    <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> User Name </label><span id="username-error"></span>
                                            <input id="username" onkeyup="validateUsername()" name="username" type="text" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('username')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Email</label><span id="email-error"></span>
                                            <input id="email" onkeyup="validateEmail()" name="email" type="email" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('email')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Password</label><span id="password-error"></span>
                                            <input id="password"  onkeyup="validatePassword()" name="password" type="password" class="form-control" aria-required="true" aria-invalid="false" required >
                                            @error('password')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                             <div class="form-group">
                                                <label>Catagory<b style="color:red;">*</b></label><span id="type-error"></span>
                                                <select id="type" onChange="validateType()" name="type" class="form-control" required>
                                                <option></option>
                                                @foreach($data as $list)
                                                <option value="{{ $list->others }}">{{ $list->name }}</option>
                                                @endforeach
                                                </select>
                                                @error('type')
                                                <p style="color:red;">{{$message}}</p>
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1"> Mobile </label><span id="phone-error"></span>
                                            <input id="phone" name="phone" type="text" class="form-control" maxlength="10" aria-required="true" aria-invalid="false" required>
                                            @error('phone')
                                             <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>

                                        <div class="col-lg-12">
                                            <label for="color" class="control-label mb-1">Image</label><p style="float:right;" id="size"></p><span id="image-error"></span>
                                            <input id="image" onchange="imageValidation()"  name="image" type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" aria-required="true" aria-invalid="false" required>
                                            @error('image')
                                                <p style="color:red;">{{$message}}</p>
                                            @enderror
                                        </div>
                                        <div id="imagePreview" style="max-height:200px;max-width:200px;"></div>
                                    </div>
                                </div>

                                <div>
                                  <center>  <button type="submit" value="Submit" class="btn btn-sm btn-primary">
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
@endsection
