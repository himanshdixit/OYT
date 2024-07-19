<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cruise_image;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class cruiseimageController extends Controller
{

    public function index($cruise_id)
    {
        $data=DB::table('cruise_images')->where('cruise_id',$cruise_id)->get();
        return view('admin/cruise_images-list',['data'=>$data,'cruise_id'=>$cruise_id]);
    }

    public function show($id)
    {
        return view('admin/cruise_images-add',['cruise_id'=>$id]);
    }


    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'cruise_id'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'-cruise-images.'.$ext;
            $image->move('uploads/cruise_images/',$file);

            $cruise_id=$request->input('cruise_id');

            $data=array(
                'cruise_id'=>$request->input('cruise_id'),
                'photo'=>$file
            );

            DB::table('cruise_images')->insert($data);

            $request->session()->flash('message','Cruise Image Added Successfully!!');
           return redirect('admin/cruise_images/'.$cruise_id);

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            // return redirect('admin/cruise_images/add-cruise_images');
            redirect()->back();
        }


    }

    public function delete(Request $request,$id,$cruise_id){
        $arrImage=DB::table('cruise_images')->where('id',$id)->get();
        if(File::exists('uploads/cruise_images/'.$arrImage[0]->photo)){
            File::delete('uploads/cruise_images/'.$arrImage[0]->photo);
        }
        $model=Cruise_image::find($id);
        $model->delete();
        $request->session()->flash('message','Cruise image Deleted successfully!!');
        return redirect('admin/cruise_images/'.$cruise_id);
    }

}
