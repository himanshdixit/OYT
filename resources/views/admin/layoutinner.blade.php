<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <!-- Favicons -->
    <link href="{{ asset('admincssjs/assets/img/logo2.png') }}" rel="icon">
    <link href="{{ asset('admincssjs/assets/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ asset('admincssjs/assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/quill/quill.snow.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/quill/quill.bubble.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
    <link href="{{ asset('admincssjs/assets/vendor/simple-datatables/style.css') }}" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{ asset('admincssjs/assets/css/style.css') }}" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- include summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>

    <title>@yield('page_title')</title>

</head>

<style>
@media all and (min-width: 480px) {
    .deskContent {
        display: block;
    }

    .phoneContent {
        display: none;
    }
}

@media all and (max-width: 479px) {
    .deskContent {
        display: none;
    }

    .phoneContent {
        display: block;
    }
}
</style>


<body>


    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">

            <div class="deskContent">
                <a href="{{ url('/admin') }}" class="d-flex align-items-center">
                    <img src="{{ asset('admincssjs/assets/img/logo.png') }}" style="width:auto;height:50px !important;"
                        alt="OYT">
                </a>
            </div>
            <div class="phoneContent">
                <a href="index.html" class="logo d-flex align-items-center">
                    <img src="{{ asset('admincssjs/assets/img/logo2.png') }}" alt="OYT">
                </a>
            </div>

            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div><!-- End Logo -->

        <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword">
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div><!-- End Search Bar -->

        <nav class="header-nav ms-auto">

            <ul class="d-flex align-items-center">


            <li class="nav-item dropdown">

<a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
  <i class="bi bi-bell"></i>
  <span class="badge bg-primary badge-number">4</span>
</a><!-- End Notification Icon -->

<ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
  <li class="dropdown-header">
    You have 4 new notifications
    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
  </li>
  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="notification-item">
    <i class="bi bi-exclamation-circle text-warning"></i>
    <div>
      <h4>Lorem Ipsum</h4>
      <p>Quae dolorem earum veritatis oditseno</p>
      <p>30 min. ago</p>
    </div>
  </li>

  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="notification-item">
    <i class="bi bi-x-circle text-danger"></i>
    <div>
      <h4>Atque rerum nesciunt</h4>
      <p>Quae dolorem earum veritatis oditseno</p>
      <p>1 hr. ago</p>
    </div>
  </li>

  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="notification-item">
    <i class="bi bi-check-circle text-success"></i>
    <div>
      <h4>Sit rerum fuga</h4>
      <p>Quae dolorem earum veritatis oditseno</p>
      <p>2 hrs. ago</p>
    </div>
  </li>

  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="notification-item">
    <i class="bi bi-info-circle text-primary"></i>
    <div>
      <h4>Dicta reprehenderit</h4>
      <p>Quae dolorem earum veritatis oditseno</p>
      <p>4 hrs. ago</p>
    </div>
  </li>

  <li>
    <hr class="dropdown-divider">
  </li>
  <li class="dropdown-footer">
    <a href="#">Show all notifications</a>
  </li>

</ul><!-- End Notification Dropdown Items -->

</li><!-- End Notification Nav -->

<li class="nav-item dropdown">

<a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
  <i class="bi bi-chat-left-text"></i>
  <span class="badge bg-success badge-number">3</span>
</a><!-- End Messages Icon -->

<ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
  <li class="dropdown-header">
    You have 3 new messages
    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
  </li>
  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="message-item">
    <a href="#">
      <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
      <div>
        <h4>Maria Hudson</h4>
        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
        <p>4 hrs. ago</p>
      </div>
    </a>
  </li>
  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="message-item">
    <a href="#">
      <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle">
      <div>
        <h4>Anna Nelson</h4>
        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
        <p>6 hrs. ago</p>
      </div>
    </a>
  </li>
  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="message-item">
    <a href="#">
      <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle">
      <div>
        <h4>David Muldon</h4>
        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
        <p>8 hrs. ago</p>
      </div>
    </a>
  </li>
  <li>
    <hr class="dropdown-divider">
  </li>

  <li class="dropdown-footer">
    <a href="#">Show all messages</a>
  </li>

</ul><!-- End Messages Dropdown Items -->

</li><!-- End Messages Nav -->


                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="{{ asset('admincssjs/assets/img/profile-img.jpg') }}" alt="Profile" class="rounded-circle">
                        <span class="d-none d-md-block dropdown-toggle ps-2">OYT-User</span>
                    </a><!-- End Profile Iamge Icon -->

                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li class="dropdown-header">
                            <h6>Admin</h6>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <!-- <li>
                            <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li> -->
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="{{ url('admin/logout')}}">
                                <i class="bi bi-box-arrow-right"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>

                    </ul><!-- End Profile Dropdown Items -->
                </li><!-- End Profile Nav -->

            </ul>
        </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <a class="nav-link " href="{{ url('/admin') }}">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li><!-- End Dashboard Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-layout-text-window-reverse"></i><span>Lists</span><i
                        class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="{{ url('/admin/contactlist/') }}">
                            <i class="bi bi-circle"></i><span>Contact Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/cruisebookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Cruise Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/hotelbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Hotel Booking Lists</span>
                        </a>
                    </li>


                    <li>
                        <a href="{{ url('/admin/weddingbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Wedding Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/winebookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Wine Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/holidaybookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Holiday Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/caravanbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Caravan Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/golfbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Golf Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/resortbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Resort Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/planebookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Charted plane Booking Lists</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/honeymoonbookingslist/') }}">
                            <i class="bi bi-circle"></i><span>Honeymoon Booking Lists</span>
                        </a>
                    </li>
                    <!-- <li>
                        <a href="{{ url('/admin/appoinmentlist/') }}">
                            <i class="bi bi-circle"></i><span>Appoinment Lists</span>
                        </a>
                    </li> -->
                </ul>
            </li><!-- End Tables Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav2" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-layout-text-window-reverse"></i><span>Vendor Panel</span><i
                        class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav2" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                        <a href="{{ url('/admin/vendorpanel') }}">
                            <i class="bi bi-circle"></i><span>Vendor Panel</span>
                        </a>
                    </li>
                <li>
                        <a href="{{ url('/admin/vendors') }}">
                            <i class="bi bi-circle"></i><span>Vendors List</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('/admin/vendors/add-vendors/') }}">
                            <i class="bi bi-circle"></i><span>Add New Vendor</span>
                        </a>
                    </li>
 

                </ul>
            </li><!-- End Tables Nav -->

            <li class="nav-heading">Pages</li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="users-profile.html">
                    <i class="bi bi-person"></i>
                    <span>Profile</span>
                </a>
            </li><!-- End Profile Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="{{url('admin/contactlist')}}">
                    <i class="bi bi-envelope"></i>
                    <span>Contact</span>
                </a>
            </li><!-- End Contact Page Nav -->


        </ul>

    </aside><!-- End Sidebar-->



        @section('container')
        @show



    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
        <div class="copyright">
            &copy; Copyright <strong><span>OYT-Admin</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
            Designed by <a href="#">LTS</a>
        </div>
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

</body>

<!-- Vendor JS Files -->
<script src="{{ asset('admincssjs/assets/vendor/apexcharts/apexcharts.min.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/chart.js/chart.umd.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/echarts/echarts.min.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/quill/quill.min.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/simple-datatables/simple-datatables.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/tinymce/tinymce.min.js') }}"></script>
<script src="{{ asset('admincssjs/assets/vendor/php-email-form/validate.js') }}"></script>

<!-- Template Main JS File -->
<script src="{{ asset('admincssjs/assets/js/main.js') }}"></script>

<!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
</script>


<script>
$(function() {
    // Summernote
    $('#des').summernote({
        height: 300,
        focus: true
    })
})
</script>


</html>
