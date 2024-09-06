<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\adminController;
use App\Http\Controllers\dashboardController;

use App\Http\Controllers\vendorRegistrationController;
use App\Http\Controllers\vendorPanelController;


use App\Http\Controllers\vendorController;
use App\Http\Controllers\VendordashboardController;

use App\Http\Controllers\salesController;
use App\Http\Controllers\SalesdashboardController;

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\blogsController;

use App\Http\Controllers\hotelController;
use App\Http\Controllers\hotelimageController;

use App\Http\Controllers\weddingController;
use App\Http\Controllers\wineController;
use App\Http\Controllers\honeymoonController;
use App\Http\Controllers\caravanController;
use App\Http\Controllers\holidayController;
use App\Http\Controllers\golfController;
use App\Http\Controllers\planeController;
use App\Http\Controllers\resortController;

use App\Http\Controllers\cruiseitemController;
use App\Http\Controllers\cruiseimageController;
use App\Http\Controllers\cruise_itinerary_mapController;

use App\Http\Controllers\hotelVController;
use App\Http\Controllers\cruiseitemVController;
use App\Http\Controllers\weddingVController;
use App\Http\Controllers\wineVController;
use App\Http\Controllers\honeymoonVController;
use App\Http\Controllers\caravanVController;
use App\Http\Controllers\holidayVController;
use App\Http\Controllers\resortVController;
use App\Http\Controllers\golfVController;
use App\Http\Controllers\planeVController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any?}', function () {
    return view('welcome');
});

Route::get('/hoteldetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/cruisedetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/weddingdetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/winedetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/caravandetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/honeymoondetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/holidaysdetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/resortdetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/planedetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/golfdetailpage/{any?}', function () {
    return view('welcome');
});
Route::get('/payment/{any?}', function () {
    return view('welcome');
});
Route::get('/checkout/{any?}', function () {
    return view('welcome');
});
Route::get('/login/{any?}', function () {
    return view('welcome');
});
Route::get('/signup/{any?}', function () {
    return view('welcome');
});


Route::get('admin/login',[adminController::class,'index']);
Route::post('/admin/login_submit',[adminController::class,'auth']);

Route::get('vendor/login',[vendorController::class,'index']);
Route::post('/vendor/login_submit',[vendorController::class,'auth']);

Route::get('sales/login',[salesController::class,'index']);
Route::post('/sales/login_submit',[salesController::class,'auth']);


// -----------------------Start Admin Panel ----------------------

Route::group(['middleware'=>'authcheck'],function(){

    Route::get('admin/dashboard',[adminController::class,'dashboard']);

    Route::get('admin/vendorpanel',[dashboardController::class,'vendorpanel']);
    Route::get('admin/propertyvendorlist/{type}',[vendorPanelController::class,'propertyvendorlist']);

    Route::get('admin/hotelvendors/',[vendorPanelController::class,'hotelvendors']);
    Route::get('admin/cruisevendors/',[vendorPanelController::class,'cruisevendors']);
    Route::get('admin/weddingvendors/',[vendorPanelController::class,'weddingvendors']);
    Route::get('admin/winevendors/',[vendorPanelController::class,'winevendors']);
    Route::get('admin/caravanvendors/',[vendorPanelController::class,'caravanvendors']);
    Route::get('admin/holidaysvendors/',[vendorPanelController::class,'holidaysvendors']);
    Route::get('admin/honeymoonvendors/',[vendorPanelController::class,'honeymoonvendors']);
    Route::get('admin/resortvendors/',[vendorPanelController::class,'resortvendors']);
    Route::get('admin/planesvendors/',[vendorPanelController::class,'planesvendors']);
    Route::get('admin/golfsvendors/',[vendorPanelController::class,'golfsvendors']);

    Route::get('admin/showvendorhotellist/{v}',[vendorPanelController::class,'showvendorhotellist']);
    Route::get('admin/showvendorcruiselist/{v}',[vendorPanelController::class,'showvendorcruiselist']);
    Route::get('admin/showvendorweddinglist/{v}',[vendorPanelController::class,'showvendorweddinglist']);
    Route::get('admin/showvendorwinelist/{v}',[vendorPanelController::class,'showvendorwinelist']);
    Route::get('admin/showvendorcaravanlist/{v}',[vendorPanelController::class,'showvendorcaravanlist']);
    Route::get('admin/showvendorholidayslist/{v}',[vendorPanelController::class,'showvendorholidayslist']);
    Route::get('admin/showvendorhoneymoonlist/{v}',[vendorPanelController::class,'showvendorhoneymoonlist']);
    Route::get('admin/showvendorresortlist/{v}',[vendorPanelController::class,'showvendorresortlist']);
    Route::get('admin/showvendorplaneslist/{v}',[vendorPanelController::class,'showvendorplaneslist']);
    Route::get('admin/showvendorgolfslist/{v}',[vendorPanelController::class,'showvendorgolfslist']);

    Route::get('admin/hotel/approve/{id}',[vendorPanelController::class,'hotelapprove']);
    Route::get('admin/cruise/approve/{id}',[vendorPanelController::class,'cruiseapprove']);
    Route::get('admin/wedding/approve/{id}',[vendorPanelController::class,'weddingapprove']);
    Route::get('admin/wine/approve/{id}',[vendorPanelController::class,'wineapprove']);
    Route::get('admin/caravan/approve/{id}',[vendorPanelController::class,'caravanapprove']);
    Route::get('admin/holidays/approve/{id}',[vendorPanelController::class,'holidaysapprove']);
    Route::get('admin/honeymoon/approve/{id}',[vendorPanelController::class,'honeymoonapprove']);
    Route::get('admin/resort/approve/{id}',[vendorPanelController::class,'resortapprove']);
    Route::get('admin/planes/approve/{id}',[vendorPanelController::class,'planesapprove']);
    Route::get('admin/golfs/approve/{id}',[vendorPanelController::class,'golfsapprove']);
    
    
    //------------Start Contact----------------
    Route::get('admin/contactlist',[dashboardController::class,'contactlist']);
    Route::get('admin/contactlists/contactdeleted/{id}',[dashboardController::class,'deletecontactlist']);
    //------------End----------------

    //------------Start Cruise Bookings List----------------
    Route::get('admin/cruisebookingslist',[dashboardController::class,'cruisebookingslist']);
    Route::get('admin/cruisebookingslist/cruisebookingdeleted/{id}',[dashboardController::class,'deletecruisebookinglist']);
    //------------End----------------

    //------------Start Hotel Bookings List----------------
    Route::get('admin/hotelbookingslist',[dashboardController::class,'hotelbookingslist']);
    Route::get('admin/hotelbookingslist/hotelbookingdeleted/{id}',[dashboardController::class,'deletehotelbookinglist']);
    //------------End----------------


    //------------Start Cruise Items----------------
    Route::get('admin/cruise_items',[cruiseitemController::class,'index']);
    Route::get('admin/cruise_items/add-cruise_items',[cruiseitemController::class,'show']);
    Route::post('/admin/cruise_items/insert',[cruiseitemController::class,'insert']);
    Route::get('admin/cruise_items/edit/{id}',[cruiseitemController::class,'edit']);
    Route::post('/admin/cruise_items/update/{id}',[cruiseitemController::class,'update']);
    Route::get('admin/cruise_items/delete/{id}',[cruiseitemController::class,'delete']);
    //********** END************

    //------------Start Cruise Images----------------
    Route::get('admin/cruise_images/{cruise_id}',[cruiseimageController::class,'index']);
    Route::get('admin/cruise_images/add-cruise_images/{id}',[cruiseimageController::class,'show']);
    Route::post('/admin/cruise_images/insert/',[cruiseimageController::class,'insert']);
    Route::get('admin/cruise_images/delete/{id}/{cruise_id}',[cruiseimageController::class,'delete']);
    //********** END************

    //------------Start Cruise Itinerary Map----------------
    Route::get('admin/cruise_itinerary_map/{cruise_id}',[cruise_itinerary_mapController::class,'index']);
    Route::get('admin/cruise_itinerary_map/add-cruise_itinerary_map/{id}',[cruise_itinerary_mapController::class,'show']);
    Route::post('/admin/cruise_itinerary_map/insert/',[cruise_itinerary_mapController::class,'insert']);
    Route::get('admin/cruise_itinerary_map/delete/{id}/{cruise_id}',[cruise_itinerary_mapController::class,'delete']);
    //********** END************


    //------------Start Hotels Items----------------
    Route::get('admin/hotels',[hotelController::class,'index']);
    Route::get('admin/hotels/add-hotels',[hotelController::class,'show']);
    Route::post('/admin/hotels/insert',[hotelController::class,'insert']);
    Route::get('admin/hotels/edit/{id}',[hotelController::class,'edit']);
    Route::post('/admin/hotels/update/{id}',[hotelController::class,'update']);
    Route::get('admin/hotels/delete/{id}',[hotelController::class,'delete']);
    //********** END************

    //------------Start Hotels Images----------------
    Route::get('admin/hotel_images/{hotel_id}',[hotelimageController::class,'index']);
    Route::get('admin/hotel_images/add-hotel_images/{id}',[hotelimageController::class,'show']);
    Route::post('/admin/hotel_images/insert/',[hotelimageController::class,'insert']);
    Route::get('admin/hotel_images/delete/{id}/{hotel_id}',[hotelimageController::class,'delete']);
    //********** END************


    //------------Start weddings Items----------------
    Route::get('admin/weddings',[weddingController::class,'index']);
    Route::get('admin/weddings/add-weddings',[weddingController::class,'show']);
    Route::post('/admin/weddings/insert',[weddingController::class,'insert']);
    Route::get('admin/weddings/edit/{id}',[weddingController::class,'edit']);
    Route::post('/admin/weddings/update/{id}',[weddingController::class,'update']);
    Route::get('admin/weddings/delete/{id}',[weddingController::class,'delete']);
    //********** END************

    //------------Start wine Items----------------
    Route::get('admin/wine',[wineController::class,'index']);
    Route::get('admin/wine/add-wine',[wineController::class,'show']);
    Route::post('/admin/wine/insert',[wineController::class,'insert']);
    Route::get('admin/wine/edit/{id}',[wineController::class,'edit']);
    Route::post('/admin/wine/update/{id}',[wineController::class,'update']);
    Route::get('admin/wine/delete/{id}',[wineController::class,'delete']);
    //********** END************

    //------------Start caravan Items----------------
    Route::get('admin/caravan',[caravanController::class,'index']);
    Route::get('admin/caravan/add-caravan',[caravanController::class,'show']);
    Route::post('/admin/caravan/insert',[caravanController::class,'insert']);
    Route::get('admin/caravan/edit/{id}',[caravanController::class,'edit']);
    Route::post('/admin/caravan/update/{id}',[caravanController::class,'update']);
    Route::get('admin/caravan/delete/{id}',[caravanController::class,'delete']);
    //********** END************

    //------------Start honeymoon Items----------------
    Route::get('admin/honeymoon',[honeymoonController::class,'index']);
    Route::get('admin/honeymoon/add-honeymoon',[honeymoonController::class,'show']);
    Route::post('/admin/honeymoon/insert',[honeymoonController::class,'insert']);
    Route::get('admin/honeymoon/edit/{id}',[honeymoonController::class,'edit']);
    Route::post('/admin/honeymoon/update/{id}',[honeymoonController::class,'update']);
    Route::get('admin/honeymoon/delete/{id}',[honeymoonController::class,'delete']);
    //********** END************

    //------------Start holiday Items----------------
    Route::get('admin/holiday',[holidayController::class,'index']);
    Route::get('admin/holiday/add-holiday',[holidayController::class,'show']);
    Route::post('/admin/holiday/insert',[holidayController::class,'insert']);
    Route::get('admin/holiday/edit/{id}',[holidayController::class,'edit']);
    Route::post('/admin/holiday/update/{id}',[holidayController::class,'update']);
    Route::get('admin/holiday/delete/{id}',[holidayController::class,'delete']);
    //********** END************

    //------------Start plane Items----------------
    Route::get('admin/plane',[planeController::class,'index']);
    Route::get('admin/plane/add-plane',[planeController::class,'show']);
    Route::post('/admin/plane/insert',[planeController::class,'insert']);
    Route::get('admin/plane/edit/{id}',[planeController::class,'edit']);
    Route::post('/admin/plane/update/{id}',[planeController::class,'update']);
    Route::get('admin/plane/delete/{id}',[planeController::class,'delete']);
    //********** END************

    //------------Start resort Items----------------
    Route::get('admin/resort',[resortController::class,'index']);
    Route::get('admin/resort/add-resort',[resortController::class,'show']);
    Route::post('/admin/resort/insert',[resortController::class,'insert']);
    Route::get('admin/resort/edit/{id}',[resortController::class,'edit']);
    Route::post('/admin/resort/update/{id}',[resortController::class,'update']);
    Route::get('admin/resort/delete/{id}',[resortController::class,'delete']);
    //********** END************

    //------------Start golf Items----------------
    Route::get('admin/golf',[golfController::class,'index']);
    Route::get('admin/golf/add-golf',[golfController::class,'show']);
    Route::post('/admin/golf/insert',[golfController::class,'insert']);
    Route::get('admin/golf/edit/{id}',[golfController::class,'edit']);
    Route::post('/admin/golf/update/{id}',[golfController::class,'update']);
    Route::get('admin/golf/delete/{id}',[golfController::class,'delete']);
    //********** END************


    //------------Start wine Bookings List----------------
    Route::get('admin/winebookingslist',[dashboardController::class,'winebookingslist']);
    Route::get('admin/winebookingslist/winebookingdeleted/{id}',[dashboardController::class,'deletewinebookinglist']);
    //------------End----------------

    //------------Start wedding Bookings List----------------
    Route::get('admin/weddingbookingslist',[dashboardController::class,'weddingbookingslist']);
    Route::get('admin/weddingbookingslist/weddingbookingdeleted/{id}',[dashboardController::class,'deleteweddingbookinglist']);
    //------------End----------------

    //------------Start golf Bookings List----------------
    Route::get('admin/golfbookingslist',[dashboardController::class,'golfbookingslist']);
    Route::get('admin/golfbookingslist/golfbookingdeleted/{id}',[dashboardController::class,'deletegolfbookinglist']);
    //------------End----------------

    //------------Start resort Bookings List----------------
    Route::get('admin/resortbookingslist',[dashboardController::class,'resortbookingslist']);
    Route::get('admin/resortbookingslist/resortbookingdeleted/{id}',[dashboardController::class,'deleteresortbookinglist']);
    //------------End----------------

    //------------Start caravan Bookings List----------------
    Route::get('admin/caravanbookingslist',[dashboardController::class,'caravanbookingslist']);
    Route::get('admin/caravanbookingslist/caravanbookingdeleted/{id}',[dashboardController::class,'deletecaravanbookinglist']);
    //------------End----------------

    //------------Start holiday Bookings List----------------
    Route::get('admin/holidaybookingslist',[dashboardController::class,'holidaybookingslist']);
    Route::get('admin/holidaybookingslist/holidaybookingdeleted/{id}',[dashboardController::class,'deleteholidaybookinglist']);
    //------------End----------------

    //------------Start honeymoon Bookings List----------------
    Route::get('admin/honeymoonbookingslist',[dashboardController::class,'honeymoonbookingslist']);
    Route::get('admin/honeymoonbookingslist/honeymoonbookingdeleted/{id}',[dashboardController::class,'deletehoneymoonbookinglist']);
    //------------End----------------

    //------------Start plane Bookings List----------------
    Route::get('admin/planebookingslist',[dashboardController::class,'planebookingslist']);
    Route::get('admin/planebookingslist/planebookingdeleted/{id}',[dashboardController::class,'deletehoneymoonbookinglist']);
    //------------End----------------    





    //------------Start Blogs----------------
    Route::get('admin/blogs',[blogsController::class,'index']);
    Route::get('admin/blogs/add-blogs',[blogsController::class,'show']);
    Route::post('/admin/blogs/insert',[blogsController::class,'insert']);
    Route::get('admin/blogs/edit/{id}',[blogsController::class,'edit']);
    Route::post('/admin/blogs/update/{id}',[blogsController::class,'update']);
    Route::get('admin/blogs/delete/{id}',[blogsController::class,'delete']);


    //------------Start Vendor Registration----------------
    Route::get('admin/vendors',[vendorRegistrationController::class,'index']);
    Route::get('admin/vendors/add-vendors',[vendorRegistrationController::class,'show']);
    Route::post('/admin/vendors/insert',[vendorRegistrationController::class,'insert']);
    Route::get('admin/vendors/edit/{id}',[vendorRegistrationController::class,'edit']);
    Route::post('/admin/vendors/update/{id}',[vendorRegistrationController::class,'update']);
    Route::get('admin/vendors/delete/{id}',[vendorRegistrationController::class,'delete']);
    //********** END************



    Route::get('admin/logout', function () {

        // session()->forget('LOGGED_ADMIN');
        // session()->forget('LOGGED_ADMIN_ID');
        // session()->forget('LOGGED_ADMIN_USER');
        // session()->flash('error','Logout sucessfully');
        // return redirect('admin/');

        if(session()->has('LOGGED_ADMIN')){
            session()->pull('LOGGED_ADMIN');
            session()->flash('error','Logout sucessfully');
            return redirect('admin/login');
         }

    });


});


// -----------------------END Admin Panel ----------------------


// -----------------------Start Vendor Panel ----------------------

Route::group(['middleware'=>'vendorcheck'],function(){

    Route::get('vendor/dashboard',[vendorController::class,'dashboard']);

    //------------Start Cruise Items----------------
    Route::get('vendor/cruise_items',[cruiseitemVController::class,'index']);
    Route::get('vendor/cruise_items/add-cruise_items',[cruiseitemVController::class,'show']);
    Route::post('/vendor/cruise_items/insert',[cruiseitemVController::class,'insert']);
    Route::get('vendor/cruise_items/edit/{id}',[cruiseitemVController::class,'edit']);
    Route::post('/vendor/cruise_items/update/{id}',[cruiseitemVController::class,'update']);
    Route::get('vendor/cruise_items/delete/{id}',[cruiseitemVController::class,'delete']);
    //********** END************

    //------------Start Hotels Items----------------
    Route::get('vendor/hotels',[hotelVController::class,'index']);
    Route::get('vendor/hotels/add-hotels',[hotelVController::class,'show']);
    Route::post('/vendor/hotels/insert',[hotelVController::class,'insert']);
    Route::get('vendor/hotels/edit/{id}',[hotelVController::class,'edit']);
    Route::post('/vendor/hotels/update/{id}',[hotelVController::class,'update']);
    Route::get('vendor/hotels/delete/{id}',[hotelVController::class,'delete']);
    //********** END************

    //------------Start weddings Items----------------
    Route::get('vendor/weddings',[weddingVController::class,'index']);
    Route::get('vendor/weddings/add-weddings',[weddingVController::class,'show']);
    Route::post('/vendor/weddings/insert',[weddingVController::class,'insert']);
    Route::get('vendor/weddings/edit/{id}',[weddingVController::class,'edit']);
    Route::post('/vendor/weddings/update/{id}',[weddingVController::class,'update']);
    Route::get('vendor/weddings/delete/{id}',[weddingVController::class,'delete']);
    //********** END************

    //------------Start wine Items----------------
    Route::get('vendor/wine',[wineVController::class,'index']);
    Route::get('vendor/wine/add-wine',[wineVController::class,'show']);
    Route::post('/vendor/wine/insert',[wineVController::class,'insert']);
    Route::get('vendor/wine/edit/{id}',[wineVController::class,'edit']);
    Route::post('/vendor/wine/update/{id}',[wineVController::class,'update']);
    Route::get('vendor/wine/delete/{id}',[wineVController::class,'delete']);
    //********** END************

    //------------Start caravan Items----------------
    Route::get('vendor/caravan',[caravanVController::class,'index']);
    Route::get('vendor/caravan/add-caravan',[caravanVController::class,'show']);
    Route::post('/vendor/caravan/insert',[caravanVController::class,'insert']);
    Route::get('vendor/caravan/edit/{id}',[caravanVController::class,'edit']);
    Route::post('/vendor/caravan/update/{id}',[caravanVController::class,'update']);
    Route::get('vendor/caravan/delete/{id}',[caravanVController::class,'delete']);
    //********** END************

    //------------Start honeymoon Items----------------
    Route::get('vendor/honeymoon',[honeymoonVController::class,'index']);
    Route::get('vendor/honeymoon/add-honeymoon',[honeymoonVController::class,'show']);
    Route::post('/vendor/honeymoon/insert',[honeymoonVController::class,'insert']);
    Route::get('vendor/honeymoon/edit/{id}',[honeymoonVController::class,'edit']);
    Route::post('/vendor/honeymoon/update/{id}',[honeymoonVController::class,'update']);
    Route::get('vendor/honeymoon/delete/{id}',[honeymoonVController::class,'delete']);
    //********** END************

    //------------Start holiday Items----------------
    Route::get('vendor/holiday',[holidayVController::class,'index']);
    Route::get('vendor/holiday/add-holiday',[holidayVController::class,'show']);
    Route::post('/vendor/holiday/insert',[holidayVController::class,'insert']);
    Route::get('vendor/holiday/edit/{id}',[holidayVController::class,'edit']);
    Route::post('/vendor/holiday/update/{id}',[holidayVController::class,'update']);
    Route::get('vendor/holiday/delete/{id}',[holidayVController::class,'delete']);
    //********** END************

    //------------Start plane Items----------------
    Route::get('vendor/plane',[planeVController::class,'index']);
    Route::get('vendor/plane/add-plane',[planeVController::class,'show']);
    Route::post('/vendor/plane/insert',[planeVController::class,'insert']);
    Route::get('vendor/plane/edit/{id}',[planeVController::class,'edit']);
    Route::post('/vendor/plane/update/{id}',[planeVController::class,'update']);
    Route::get('vendor/plane/delete/{id}',[planeVController::class,'delete']);
    //********** END************

    //------------Start resort Items----------------
    Route::get('vendor/resort',[resortVController::class,'index']);
    Route::get('vendor/resort/add-resort',[resortVController::class,'show']);
    Route::post('/vendor/resort/insert',[resortVController::class,'insert']);
    Route::get('vendor/resort/edit/{id}',[resortVController::class,'edit']);
    Route::post('/vendor/resort/update/{id}',[resortVController::class,'update']);
    Route::get('vendor/resort/delete/{id}',[resortVController::class,'delete']);
    //********** END************

    //------------Start golf Items----------------
    Route::get('vendor/golf',[golfVController::class,'index']);
    Route::get('vendor/golf/add-golf',[golfVController::class,'show']);
    Route::post('/vendor/golf/insert',[golfVController::class,'insert']);
    Route::get('vendor/golf/edit/{id}',[golfVController::class,'edit']);
    Route::post('/vendor/golf/update/{id}',[golfVController::class,'update']);
    Route::get('vendor/golf/delete/{id}',[golfVController::class,'delete']);
    //********** END************



    Route::get('vendor/logout', function () {
        if(session()->has('LOGGED_VENDOR')){
            session()->pull('LOGGED_VENDOR');
            session()->flash('error','Logout sucessfully');
            return redirect('vendor/login');
         }

    });




});

// -----------------------END Vendor Panel ----------------------


// -----------------------Start Sales Panel ----------------------

Route::group(['middleware'=>'salescheck'],function(){

    Route::get('sales/dashboard',[salesController::class,'dashboard']);



    Route::get('sales/logout', function () {
        if(session()->has('LOGGED_SALES')){
            session()->pull('LOGGED_SALES');
            session()->flash('error','Logout sucessfully');
            return redirect('sales/login');
         }

    });




});

// -----------------------END sails Panel ----------------------