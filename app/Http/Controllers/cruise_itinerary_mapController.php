<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cruise_itinerary_map;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class cruise_itinerary_mapController extends Controller
{

    public function index($cruise_id)
    {
        $data=DB::table('cruise_itinerary_maps')->where('cruise_id',$cruise_id)->get();
        return view('admin/cruise_itinerary_map-list',['data'=>$data,'cruise_id'=>$cruise_id]);
    }

    public function show($id)
    {
        return view('admin/cruise_itinerary_map-add',['cruise_id'=>$id]);
    }

    public function insert(Request $request)
    {

        if($request->isMethod('post')){

            $request->validate([
                'cruise_id'=>'required',
                'days'=>'required',
                'des'=>'required'
            ]);

            $cruise_id=$request->input('cruise_id');

            $data=array(
                'cruise_id'=>$request->input('cruise_id'),
                'days'=>$request->input('days'),
                'des'=>$request->input('des')
            );

            DB::table('cruise_itinerary_maps')->insert($data);

            $request->session()->flash('message','Cruise Itinerary Map Added Successfully!!');
            return redirect('admin/cruise_itinerary_map/'.$cruise_id);

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            redirect()->back();
        }


    }

    public function delete(Request $request,$id,$cruise_id){
        $model=Cruise_itinerary_map::find($id);
        $model->delete();
        $request->session()->flash('message','Cruise Itinerary Entery Deleted successfully!!');
        return redirect('admin/cruise_itinerary_map/'.$cruise_id);
    }

}
