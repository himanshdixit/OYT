<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Blog;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

use File;

class frontController extends Controller
{

    public function contact_submit(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'email|required',
            'phone' => 'required',
            'message' => 'required'
           ]);
       
           $contact = new contact;
           $contact->first_name = $request->input('first_name');
           $contact->last_name = $request->input('last_name');
           $contact->email = $request->input('email');
           $contact->phone = $request->input('phone');
           $contact->message = $request->input('message');
           
           $contact->save();
           return response()->json([
               'status' => 200,
               'message' => 'Message has received successfully! Thank You',
           ]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'sub'=>'required',
            'des'=>'required',
            'created_at'=>'required'

        ]);

        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'sub'=>$request->input('sub'),
           'des'=>$request->input('des'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('contacts')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function hotel_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',

            'address'=>'required',
            'check_in'=>'required',
            'check_out'=>'required',
            'adult'=>'required',
            'child'=>'required',
            'rooms'=>'required',
            'type'=>'required',

            'hotel_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),

           'address'=>$request->input('address'),
           'check_in'=>$request->input('check_in'),
           'check_out'=>$request->input('check_out'),
           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),
           'rooms'=>$request->input('rooms'),
           'type'=>$request->input('type'),

           'hotel_id'=>$request->input('hotel_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('hotel_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function cruise_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'adult'=>'required',
            'child'=>'required',
            'cruise_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),
           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),
           'cruise_id'=>$request->input('cruise_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('cruise_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function wedding_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'w_id'=>'required',

            'people'=>'required',
            'food_pax_type'=>'required',
            'wedding_date'=>'required',
            'rooms'=>'required',

            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),
           'w_id'=>$request->input('w_id'),

           'people'=>$request->input('people'),
           'food_pax_type'=>$request->input('food_pax_type'),
           'wedding_date'=>$request->input('wedding_date'),
           'rooms'=>$request->input('rooms'),

           'created_at'=>$request->input('created_at')
       );

        DB::table('wedding_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function wine_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'wi_id'=>'required',
            'quantity'=>'required',
            'pack'=>'required',
            'created_at'=>'required'

        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),
           'wi_id'=>$request->input('wi_id'),
           'quantity'=>$request->input('quantity'),
           'pack'=>$request->input('pack'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('wine_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function caravan_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'pickup_location'=>'required',
            'drop_location'=>'required',
            'adult'=>'required',
            'child'=>'required',
            'driver'=>'required',
            'cr_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),

           'pickup_location'=>$request->input('pickup_location'),
           'drop_location'=>$request->input('drop_location'),
           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),
           'driver'=>$request->input('driver'),

           'cr_id'=>$request->input('cr_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('caravan_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function holiday_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'adult'=>'required',
            'child'=>'required',
            'services'=>'required',
            'h_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),

           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),
           'services'=>$request->input('services'),

           'h_id'=>$request->input('h_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('holiday_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function honeymoon_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'adult'=>'required',
            'hy_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),
           'adult'=>$request->input('adult'),
           'hy_id'=>$request->input('hy_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('honeymoon_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function resort_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',

            'check_in'=>'required',
            'check_out'=>'required',
            'rooms'=>'required',
            'type'=>'required',
            'food'=>'required',
            'adult'=>'required',
            'child'=>'required',

            'r_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),

           'check_in'=>$request->input('check_in'),
           'check_out'=>$request->input('check_out'),
           'rooms'=>$request->input('rooms'),
           'type'=>$request->input('type'),
           'food'=>$request->input('food'),
           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),

           'r_id'=>$request->input('r_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('resort_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function plane_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'p_id'=>'required',
            'from_location'=>'required',
            'to_location'=>'required',
            'adult'=>'required',
            'child'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),
           'p_id'=>$request->input('p_id'),

           'from_location'=>$request->input('from_location'),
           'to_location'=>$request->input('to_location'),
           'adult'=>$request->input('adult'),
           'child'=>$request->input('child'),

           'created_at'=>$request->input('created_at')
       );

        DB::table('plane_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }

    public function golf_booking(Request $request)
    {
        $request->validate([
            'name'=>'required|max:30|regex:/^[A-Za-z0-9 ]+$/',
            'email'=>'required|max:60',
            'phone'=>'required|max:10|regex:/^[A-Za-z0-9 ]+$/',
            'gender'=>'required',
            'player'=>'required',
            'timing'=>'required',
            'g_id'=>'required',
            'created_at'=>'required'
            
        ]);
        $data=array(
           'name'=>$request->input('name'),
           'email'=>$request->input('email'),
           'phone'=>$request->input('phone'),
           'gender'=>$request->input('gender'),

           'player'=>$request->input('player'),
           'timing'=>$request->input('timing'),
           
           'g_id'=>$request->input('g_id'),
           'created_at'=>$request->input('created_at')
       );

        DB::table('golf_bookings')->insert($data);
        return response()->json([
            'status' => 200,
            'message' => 'Message has received successfully! Thank You',
        ]);

    }


    public function get_blogs()
    {
        $blogs = DB::table('blogs')->get();
        return response()->json(['status' => 200, 'blogs' => $blogs]);
    }
    public function blogdetails($id)
    {
        $blog = DB::table('blogs')->where('id',$id)->get();
        return response()->json(['status' => 200, 'blog' => $blog]);
    }


    public function hotels()
    {
        $data = DB::table('hotels')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function hoteldetails($id)
    {
        $data = DB::table('hotels')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function hoteldata($id)
    {
        $data = DB::table('hotels')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function cruises()
    {
        $data = DB::table('cruise_items')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function cruisedetails($id)
    {
        $data = DB::table('cruise_items')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function cruisedata($id)
    {
        $data = DB::table('cruise_items')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function weddings()
    {
        $data = DB::table('weddings')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function weddingdetails($id)
    {
        $data = DB::table('weddings')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function weddingdata($id)
    {
        $data = DB::table('weddings')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function wines()
    {
        $data = DB::table('wines')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function winedetails($id)
    {
        $data = DB::table('wines')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function winedata($id)
    {
        $data = DB::table('wines')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function caravans()
    {
        $data = DB::table('caravans')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function caravandetails($id)
    {
        $data = DB::table('caravans')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function caravandata($id)
    {
        $data = DB::table('caravans')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function holidays()
    {
        $data = DB::table('holidays')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function holidaydetails($id)
    {
        $data = DB::table('holidays')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function holidaydata($id)
    {
        $data = DB::table('holidays')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function honeymoons()
    {
        $data = DB::table('honeymoons')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function honeymoondetails($id)
    {
        $data = DB::table('honeymoons')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function honeymoondata($id)
    {
        $data = DB::table('honeymoons')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function resorts()
    {
        $data = DB::table('resorts')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function resortdetails($id)
    {
        $data = DB::table('resorts')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function resortdata($id)
    {
        $data = DB::table('resorts')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    
    public function planes()
    {
        $data = DB::table('planes')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function planedetails($id)
    {
        $data = DB::table('planes')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function planedata($id)
    {
        $data = DB::table('planes')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function golfs()
    {
        $data = DB::table('golfs')->limit(4)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function golfs1()
    {
        $data = DB::table('golfs')->where('id','<',3)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function golfs2()
    {
        // $data = DB::table('golfs')->where('id','>',2)->where('id','<',5)->get();
        $data = DB::table('golfs')->where('id','>',3)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function golfs3()
    {
        $data = DB::table('golfs')->where('id','>=',7)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function golfdetails($id)
    {
        $data = DB::table('golfs')->where('id',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    public function golfdata($id)
    {
        $data = DB::table('golfs')->where('id','!=',$id)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function stateList()
    {
        $data = DB::table('states')->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchPlanes($source,$destination,$name)
    {
        $data = DB::table('planes')->where('name','=',$name)->orWhere('source','=',$source)->orWhere('destination','=',$destination)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchHotels($location)
    {
        $data = DB::table('hotels')->where('location','=',$location)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchCruises($destination,$name)
    {
        $data = DB::table('cruise_items')->where('name','=',$name)->orWhere('destination','=',$destination)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchWines($name)
    {
        $data = DB::table('wines')->where('name','=',$name)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchWeddings($venue,$name)
    {
        $data = DB::table('weddings')->where('name','=',$name)->orWhere('venue','=',$venue)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchHolidays($location)
    {
        $data = DB::table('holidays')->Where('location','=',$location)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchHoneymoons($destination,$name)
    {
        $data = DB::table('honeymoons')->where('name','=',$name)->orWhere('destination','=',$destination)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchCaravan($source,$destination,$name)
    {
        $data = DB::table('caravans')->where('name','=',$name)->orWhere('source','=',$source)->orWhere('destinations','=',$destination)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchResorts($location,$name)
    {
        $data = DB::table('resorts')->where('name','=',$name)->orWhere('location','=',$location)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }

    public function searchGolfs($location,$name)
    {
        $data = DB::table('golfs')->where('name','=',$name)->orWhere('location','=',$location)->get();
        return response()->json(['status' => 200, 'data' => $data]);
    }
    
    
    

}
