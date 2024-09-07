<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wine;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class wineVController extends Controller
{
    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('wines')->where('added_by_id',$v)->get();
        return view('vendor/wine-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','wine')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/wine-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'wi_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'type'=>'required',

                'active'=>'',
                'added_by'=>'',
                'added_by_id'=>'',

                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/wine/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $wi_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'wi_id'=>$wi_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'type'=>$request->input('type'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('wines')->insert($data);

            $request->session()->flash('message','wine Added Successfully!!');
           return redirect('vendor/wine');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/wine/add-wine');
        }


    }

    public function edit($id)
    {
       $data= DB::table('wines')->where('id',$id)->get();
        return view('vendor/wine-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'wi_id'=>$request->input('wi_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'type'=>$request->input('type'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('wines')->where('id',$id)->get();
        File::delete('uploads/wine/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/wine/',$file);
        $data['photo']=$file;

        DB::table('wines')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'wi_id'=>$request->input('wi_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'type'=>$request->input('type'),
            'des'=>$request->input('des')
        );

        DB::table('wines')->where('id',$id)->update($data);

}
         $request->session()->flash('message','wine Updated Successfully!!');
        return redirect('vendor/wine');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('wines')->where(['id'=>$id])->get();
        if(File::exists('uploads/wine/'.$arrImage[0]->photo)){
            File::delete('uploads/wine/'.$arrImage[0]->photo);
        }
        $model=Wine::find($id);
        $model->delete();
        $request->session()->flash('message','wine Deleted successfully!!');
        return redirect('vendor/wine');
    }

}
