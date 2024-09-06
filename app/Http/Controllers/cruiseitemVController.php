<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cruise_item;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class cruiseitemVController extends Controller
{
    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('cruise_items')->where('added_by_id',$v)->get();
        return view('vendor/cruise_items-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','cruise')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/cruise_items-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'name'=>'required',
                'price'=>'required',
                'sailing_dates'=>'required',
                'sailing_info'=>'',
                'features'=>'',
                'policies'=>'',

                'active'=>'',
                'added_by'=>'',
                'added_by_id'=>'',

                'des'=>''

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'-cruise-items.'.$ext;
            $image->move('uploads/cruise_items/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $cruise_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'cruise_id'=>$cruise_id,
                'name'=>$request->input('name'),
                'des'=>$request->input('des'),
                'price'=>$request->input('price'),
                'features'=>$request->input('features'),
                'sailing_dates'=>$request->input('sailing_dates'),
                'sailing_info'=>$request->input('sailing_info'),
                'policies'=>$request->input('policies'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'image'=>$file

            );

            DB::table('cruise_items')->insert($data);

            $request->session()->flash('message','Cruise items Added Successfully!!');
           return redirect('vendor/cruise_items');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/cruise_items/add-cruise_items');
        }


    }

    public function edit($id)
    {
       $data= DB::table('cruise_items')->where('id',$id)->get();
        return view('vendor/cruise_items-edit',['data'=>$data]);

    }

    public function update(Request $request,$id)
    {
          $request->validate([

            'image'=>'mimes:jpeg,jpg,png',


        ]);

         $data=array(
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'features'=>$request->input('features'),
            'sailing_dates'=>$request->input('sailing_dates'),
            'sailing_info'=>$request->input('sailing_info'),
            'policies'=>$request->input('policies'),
            'des'=>$request->input('des')

        );


        if($request->hasfile('image') ){
          $arrImage=DB::table('cruise_items')->get();
            File::delete('uploads/cruise_items/'.$arrImage[0]->image);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'-cruise-items.'.$ext;
        $image->move('uploads/cruise_items/',$file);
        $data['image']=$file;

        DB::table('cruise_items')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'name'=>$request->input('name'),
            'des'=>$request->input('des'),
            'price'=>$request->input('price'),
            'features'=>$request->input('features'),
            'sailing_dates'=>$request->input('sailing_dates'),
            'sailing_info'=>$request->input('sailing_info'),
            'policies'=>$request->input('policies')
        );

        DB::table('cruise_items')->where('id',$id)->update($data);

}

         $request->session()->flash('message','Cruise items Updated Successfully!!');
        return redirect('vendor/cruise_items');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('cruise_items')->where(['id'=>$id])->get();
        if(File::exists('uploads/cruise_items/'.$arrImage[0]->image)){
            File::delete('uploads/cruise_items/'.$arrImage[0]->image);
        }
        $model=Cruise_item::find($id);
        $model->delete();
        $request->session()->flash('message','Cruise items Deleted successfully!!');
        return redirect('vendor/cruise_items');
    }

}
