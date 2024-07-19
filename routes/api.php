<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\front\frontController;
use App\Http\Controllers\userController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/insert', [frontController::class,'insert']);

Route::post('/hotel_booking', [frontController::class,'hotel_booking']);
Route::post('/cruise_booking', [frontController::class,'cruise_booking']);
Route::post('/wedding_booking', [frontController::class,'wedding_booking']);
Route::post('/wine_booking', [frontController::class,'wine_booking']);
Route::post('/caravan_booking', [frontController::class,'caravan_booking']);
Route::post('/holiday_booking', [frontController::class,'holiday_booking']);
Route::post('/honeymoon_booking', [frontController::class,'honeymoon_booking']);
Route::post('/resort_booking', [frontController::class,'resort_booking']);
Route::post('/plane_booking', [frontController::class,'plane_booking']);
Route::post('/golf_booking', [frontController::class,'golf_booking']);

Route::get('/blogs', [frontController::class,'get_blogs']);
Route::get('/blogdetails/{id}', [frontController::class,'blogdetails']);

Route::get('/hotels', [frontController::class,'hotels']);
Route::get('/hoteldetails/{id}', [frontController::class,'hoteldetails']);
Route::get('/hoteldata/{id}', [frontController::class,'hoteldata']);

Route::get('/cruises', [frontController::class,'cruises']);
Route::get('/cruisedetails/{id}', [frontController::class,'cruisedetails']);
Route::get('/cruisedata/{id}', [frontController::class,'cruisedata']);

Route::get('/holidays', [frontController::class,'holidays']);
Route::get('/holidaydetails/{id}', [frontController::class,'holidaydetails']);
Route::get('/holidaydata/{id}', [frontController::class,'holidaydata']);

Route::get('/caravans', [frontController::class,'caravans']);
Route::get('/caravandetails/{id}', [frontController::class,'caravandetails']);
Route::get('/caravandata/{id}', [frontController::class,'caravandata']);

Route::get('/weddings', [frontController::class,'weddings']);
Route::get('/weddingdetails/{id}', [frontController::class,'weddingdetails']);
Route::get('/weddingdata/{id}', [frontController::class,'weddingdata']);

Route::get('/wines', [frontController::class,'wines']);
Route::get('/winedetails/{id}', [frontController::class,'winedetails']);
Route::get('/winedata/{id}', [frontController::class,'winedata']);

Route::get('/golfs', [frontController::class,'golfs']);
Route::get('/golfs1', [frontController::class,'golfs1']);
Route::get('/golfs2', [frontController::class,'golfs2']);
Route::get('/golfs3', [frontController::class,'golfs3']);
Route::get('/golfdetails/{id}', [frontController::class,'golfdetails']);
Route::get('/golfdata/{id}', [frontController::class,'golfdata']);

Route::get('/planes', [frontController::class,'planes']);
Route::get('/planedetails/{id}', [frontController::class,'planedetails']);
Route::get('/planedata/{id}', [frontController::class,'planedata']);

Route::get('/honeymoons', [frontController::class,'honeymoons']);
Route::get('/honeymoondetails/{id}', [frontController::class,'honeymoondetails']);
Route::get('/honeymoondata/{id}', [frontController::class,'honeymoondata']);

Route::get('/resorts', [frontController::class,'resorts']);
Route::get('/resortdetails/{id}', [frontController::class,'resortdetails']);
Route::get('/resortdata/{id}', [frontController::class,'resortdata']);

Route::get('/stateList', [frontController::class,'stateList']);

Route::get('/searchPlanes/{source}/{destination}/{name}', [frontController::class,'searchPlanes']);
Route::get('/searchHotels/{location}', [frontController::class,'searchHotels']);
Route::get('/searchCruises/{destination}/{name}', [frontController::class,'searchCruises']);
Route::get('/searchWines/{name}', [frontController::class,'searchWines']);
Route::get('/searchWeddings/{venue}/{name}', [frontController::class,'searchWeddings']);
Route::get('/searchHolidays/{location}', [frontController::class,'searchHolidays']);
Route::get('/searchHoneymoons/{destination}/{name}', [frontController::class,'searchHoneymoons']);
Route::get('/searchCaravan/{source}/{destination}/{name}', [frontController::class,'searchCaravan']);
Route::get('/searchResorts/{location}/{name}', [frontController::class,'searchResorts']);
Route::get('/searchGolfs/{location}/{name}', [frontController::class,'searchGolfs']);



Route::post('/register', [userController::class,'register']);
Route::post('/login', [userController::class,'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
