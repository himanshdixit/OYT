<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plane;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class planeVController extends Controller
{
    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('planes')->where('added_by_id',$v)->get();
        return view('vendor/plane-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','planes')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/plane-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'p_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'pilot'=>'',
                'type'=>'required',
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
            $image->move('uploads/plane/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $p_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'p_id'=>$p_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'pilot'=>$request->input('pilot'),
                'type'=>$request->input('type'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('planes')->insert($data);

            $request->session()->flash('message','plane Added Successfully!!');
           return redirect('vendor/plane');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/plane/add-plane');
        }


    }

    public function edit($id)
    {
       $data= DB::table('planes')->where('id',$id)->get();
        return view('vendor/plane-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'p_id'=>$request->input('p_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'pilot'=>$request->input('pilot'),
            'type'=>$request->input('type'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('planes')->where('id',$id)->get();
        File::delete('uploads/plane/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/plane/',$file);
        $data['photo']=$file;

        DB::table('planes')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'p_id'=>$request->input('p_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'pilot'=>$request->input('pilot'),
            'type'=>$request->input('type'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('planes')->where('id',$id)->update($data);

}
         $request->session()->flash('message','plane Updated Successfully!!');
        return redirect('vendor/plane');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('planes')->where(['id'=>$id])->get();
        if(File::exists('uploads/plane/'.$arrImage[0]->photo)){
            File::delete('uploads/plane/'.$arrImage[0]->photo);
        }
        $model=Plane::find($id);
        $model->delete();
        $request->session()->flash('message','plane Deleted successfully!!');
        return redirect('vendor/plane');
    }

}
