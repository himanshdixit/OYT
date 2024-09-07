<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Golf;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class golfVController extends Controller
{

    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('golfs')->where('added_by_id',$v)->get();
        return view('vendor/golf-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','golfs')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/golf-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'g_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'location'=>'required',
                'timing_chart'=>'required',
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
            $image->move('uploads/golf/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $g_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'g_id'=>$g_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'location'=>$request->input('location'),
                'timing_chart'=>$request->input('timing_chart'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('golfs')->insert($data);

            $request->session()->flash('message','golf Added Successfully!!');
           return redirect('vendor/golf');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/golf/add-golf');
        }


    }

    public function edit($id)
    {
       $data= DB::table('golfs')->where('id',$id)->get();
        return view('vendor/golf-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'g_id'=>$request->input('g_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'location'=>$request->input('location'),
            'timing_chart'=>$request->input('timing_chart'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('golfs')->where('id',$id)->get();
        File::delete('uploads/golf/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/golf/',$file);
        $data['photo']=$file;

        DB::table('golfs')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'g_id'=>$request->input('g_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'location'=>$request->input('location'),
            'timing_chart'=>$request->input('timing_chart'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('golfs')->where('id',$id)->update($data);

}
         $request->session()->flash('message','golf Updated Successfully!!');
        return redirect('vendor/golf');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('golfs')->where(['id'=>$id])->get();
        if(File::exists('uploads/golf/'.$arrImage[0]->photo)){
            File::delete('uploads/golf/'.$arrImage[0]->photo);
        }
        $model=Golf::find($id);
        $model->delete();
        $request->session()->flash('message','golf Deleted successfully!!');
        return redirect('vendor/golf');
    }

}
