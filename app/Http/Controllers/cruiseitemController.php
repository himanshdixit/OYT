<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cruise_item;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class cruiseitemController extends Controller
{

    public function index()
    {
        $result['data']=Cruise_item::all();
        return view('admin/cruise_items-list',$result);
    }

    public function show()
    {
         return view('admin/cruise_items-add');

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
                'des'=>''

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'-cruise-items.'.$ext;
            $image->move('uploads/cruise_items/',$file);

            $data=array(
                'name'=>$request->input('name'),
                'des'=>$request->input('des'),
                'price'=>$request->input('price'),
                'features'=>$request->input('features'),
                'sailing_dates'=>$request->input('sailing_dates'),
                'sailing_info'=>$request->input('sailing_info'),
                'policies'=>$request->input('policies'),
                'image'=>$file

            );

            DB::table('cruise_items')->insert($data);

            $request->session()->flash('message','Cruise items Added Successfully!!');
           return redirect('admin/cruise_items');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/cruise_items/add-cruise_items');
        }


    }

    public function edit($id)
    {
       $data= DB::table('cruise_items')->where('id',$id)->get();
        return view('admin/cruise_items-edit',['data'=>$data]);

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
        return redirect('admin/cruise_items');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('cruise_items')->where(['id'=>$id])->get();
        if(File::exists('uploads/cruise_items/'.$arrImage[0]->image)){
            File::delete('uploads/cruise_items/'.$arrImage[0]->image);
        }
        $model=Cruise_item::find($id);
        $model->delete();
        $request->session()->flash('message','Cruise items Deleted successfully!!');
        return redirect('admin/cruise_items');
    }

}
