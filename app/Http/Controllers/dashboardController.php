<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Cruise_booking;
use App\Models\Hotel_booking;
use App\Models\Wedding_booking;
use App\Models\Wine_booking;
use App\Models\Golf_booking;
use App\Models\Plane_booking;
use App\Models\Resort_booking;
use App\Models\Holiday_booking;
use App\Models\Honeymoon_booking;
use App\Models\Caravan_booking;

use Illuminate\Support\Facades\DB;


class dashboardController extends Controller
{
    // --------------------------contact-list---------------

public function contactlist()
{
    $result['data']=Contact::all();
    return view('admin/contact-list',$result);
}

public function deletecontactlist(Request $request,$id)
{
    $model=Contact::find($id);
    $model->delete();
    $request->session()->flash('message','Conact Deleted !!');
    return redirect('admin/contactlist');

}

// --------------------------------------------------------


// --------------------------Cruise Booking-list---------------

public function cruisebookingslist()
{
    // $result['data']=Cruise_booking::all();
    // return view('admin/cruise-booking-list',$result);

    $data=DB::table('cruise_bookings')->get();
    return view('admin/cruise-booking-list',['data'=>$data]);
}

public function deletecruisebookinglist(Request $request,$id)
{
    $model=Cruise_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/cruisebookingslist');

}

// --------------------------------------------------------


// --------------------------Hotel Booking-list---------------

public function hotelbookingslist()
{
    // $result['data']=Cruise_booking::all();
    // return view('admin/cruise-booking-list',$result);

    $data=DB::table('hotel_bookings')->get();
    return view('admin/hotel-booking-list',['data'=>$data]);
}

public function deletehotelbookinglist(Request $request,$id)
{
    $model=Hotel_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/hotelbookingslist');
}

// --------------------------------------------------------


// --------------------------wedding Booking-list---------------

public function weddingbookingslist()
{
    $data=DB::table('wedding_bookings')->get();
    $w_id= $data[0]->w_id;
    $data1=DB::table('weddings')->where('w_id','=',$w_id)->get();
    return view('admin/wedding-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deleteweddingbookinglist(Request $request,$id)
{
    $model=Wedding_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/weddingbookingslist');
}

// --------------------------------------------------------

// --------------------------wine Booking-list---------------

public function winebookingslist()
{
    $data=DB::table('wine_bookings')->get();
    $wi_id= $data[0]->wi_id;
    $data1=DB::table('wines')->where('wi_id','=',$wi_id)->get();
    return view('admin/wine-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deletewinebookinglist(Request $request,$id)
{
    $model=Wine_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/winebookingslist');
}

// --------------------------------------------------------

// --------------------------golf Booking-list---------------

public function golfbookingslist()
{
    $data=DB::table('golf_bookings')->get();
    $g_id= $data[0]->g_id;
    $data1=DB::table('golfs')->where('g_id','=',$g_id)->get();
    return view('admin/golf-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deletegolfbookinglist(Request $request,$id)
{
    $model=Golf_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/golfbookingslist');
}

// --------------------------------------------------------

// --------------------------resort Booking-list---------------

public function resortbookingslist()
{
    $data=DB::table('resort_bookings')->get();
    $r_id= $data[0]->r_id;
    $data1=DB::table('resorts')->where('r_id','=',$r_id)->get();
    return view('admin/resort-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deleteresortbookinglist(Request $request,$id)
{
    $model=Resort_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/resortbookingslist');
}

// --------------------------------------------------------

// --------------------------plane Booking-list---------------

public function planebookingslist()
{
    $data=DB::table('plane_bookings')->get();
    $p_id= $data[0]->p_id;
    $data1=DB::table('planes')->where('p_id','=',$p_id)->get();
    return view('admin/plane-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deleteplanebookinglist(Request $request,$id)
{
    $model=Plane_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/planebookingslist');
}

// --------------------------------------------------------

// --------------------------holiday Booking-list---------------

public function holidaybookingslist()
{
    $data=DB::table('holiday_bookings')->get();
    $h_id= $data[0]->h_id;
    $data1=DB::table('holidays')->where('h_id','=',$h_id)->get();
    return view('admin/holiday-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deleteholidaybookinglist(Request $request,$id)
{
    $model=Holiday_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/holidaybookingslist');
}

// --------------------------------------------------------

// --------------------------honeymoon Booking-list---------------

public function honeymoonbookingslist()
{
    $data=DB::table('honeymoon_bookings')->get();
    $hy_id= $data[0]->hy_id;
    $data1=DB::table('honeymoons')->where('hy_id','=',$hy_id)->get();
    return view('admin/honeymoon-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deletehoneymoonbookinglist(Request $request,$id)
{
    $model=Honeymoon_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/honeymoonbookingslist');
}

// --------------------------------------------------------

// --------------------------caravan Booking-list---------------

public function caravanbookingslist()
{
    $data=DB::table('caravan_bookings')->get();
    $cr_id= $data[0]->cr_id;
    $data1=DB::table('caravans')->where('cr_id','=',$cr_id)->get();
    return view('admin/caravan-booking-list',['data'=>$data,'data1'=>$data1]);
}

public function deletecaravanbookinglist(Request $request,$id)
{
    $model=Caravan_booking::find($id);
    $model->delete();
    $request->session()->flash('message','Entry Booking Deleted !!');
    return redirect('admin/caravanbookingslist');
}

// --------------------------------------------------------



// -------------------------- Start Vendor Panel ---------------

public function vendorpanel()
{
    return view('admin/vendor-panel');
}

// -------------------------- End Vendor Panel ---------------

}
