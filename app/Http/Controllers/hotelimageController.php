<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel_image;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class hotelimageController extends Controller
{

    public function index($hotel_id)
    {
        $data=DB::table('hotel_images')->where('hotel_id',$hotel_id)->get();
        return view('admin/hotel_images-list',['data'=>$data,'hotel_id'=>$hotel_id]);
    }

    public function show($id)
    {
        return view('admin/hotel_images-add',['hotel_id'=>$id]);
    }


    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'hotel_id'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'-hotel-images.'.$ext;
            $image->move('uploads/hotel_images/',$file);

            $hotel_id=$request->input('hotel_id');

            $data=array(
                'hotel_id'=>$request->input('hotel_id'),
                'photo'=>$file
            );

            DB::table('hotel_images')->insert($data);

            $request->session()->flash('message','Hotel Image Added Successfully!!');
           return redirect('admin/hotel_images/'.$hotel_id);

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            // return redirect('admin/hotel_images/add-hotel_images');
            redirect()->back();
        }


    }

    public function delete(Request $request,$id,$hotel_id){
        $arrImage=DB::table('hotel_images')->where('id',$id)->get();
        if(File::exists('uploads/hotel_images/'.$arrImage[0]->photo)){
            File::delete('uploads/hotel_images/'.$arrImage[0]->photo);
        }
        $model=Hotel_image::find($id);
        $model->delete();
        $request->session()->flash('message','Hotel image Deleted successfully!!');
        return redirect('admin/hotel_images/'.$hotel_id);
    }

}
