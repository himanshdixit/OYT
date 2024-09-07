<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resort;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class resortVController extends Controller
{

    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('resorts')->where('added_by_id',$v)->get();
        return view('vendor/resort-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','resort')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/resort-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'r_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'duration'=>'required',
                'country'=>'required',
                'location'=>'required',
                'highlights'=>'required',
                'policy'=>'required',

                'active'=>'',
                'added_by'=>'',
                'added_by_id'=>'',

                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/resort/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $r_id = $ct_code.$c_code.$s_code.$p_code.$u_code;

            $data=array(
                'r_id'=>$r_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'duration'=>$request->input('duration'),
                'country'=>$request->input('country'),
                'location'=>$request->input('location'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('resorts')->insert($data);

            $request->session()->flash('message','resort Added Successfully!!');
           return redirect('vendor/resort');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/resort/add-resort');
        }


    }

    public function edit($id)
    {
       $data= DB::table('resorts')->where('id',$id)->get();
        return view('vendor/resort-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'r_id'=>$request->input('r_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'duration'=>$request->input('duration'),
            'country'=>$request->input('country'),
            'location'=>$request->input('location'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('resorts')->where('id',$id)->get();
        File::delete('uploads/resort/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/resort/',$file);
        $data['photo']=$file;

        DB::table('resorts')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'r_id'=>$request->input('r_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'duration'=>$request->input('duration'),
            'country'=>$request->input('country'),
            'location'=>$request->input('location'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('resorts')->where('id',$id)->update($data);

}
         $request->session()->flash('message','resort Updated Successfully!!');
        return redirect('vendor/resort');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('resorts')->where(['id'=>$id])->get();
        if(File::exists('uploads/resort/'.$arrImage[0]->photo)){
            File::delete('uploads/resort/'.$arrImage[0]->photo);
        }
        $model=Resort::find($id);
        $model->delete();
        $request->session()->flash('message','resort Deleted successfully!!');
        return redirect('vendor/resort');
    }

}
