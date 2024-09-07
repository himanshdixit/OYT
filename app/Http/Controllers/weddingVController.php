<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wedding;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class weddingVController extends Controller
{

    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('weddings')->where('added_by_id',$v)->get();
        return view('vendor/weddings-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','wedding')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/weddings-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'w_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'venue'=>'required',
                'banquets'=>'required',
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
            $image->move('uploads/weddings/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $w_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'w_id'=>$w_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'venue'=>$request->input('venue'),
                'banquets'=>$request->input('banquets'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('weddings')->insert($data);

            $request->session()->flash('message','weddings Added Successfully!!');
           return redirect('vendor/weddings');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/weddings/add-weddings');
        }


    }

    public function edit($id)
    {
       $data= DB::table('weddings')->where('id',$id)->get();
        return view('vendor/weddings-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'w_id'=>$request->input('w_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'venue'=>$request->input('venue'),
            'banquets'=>$request->input('banquets'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('weddings')->where('id',$id)->get();
        File::delete('uploads/weddings/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/weddings/',$file);
        $data['photo']=$file;

        DB::table('weddings')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'w_id'=>$request->input('w_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'venue'=>$request->input('venue'),
            'banquets'=>$request->input('banquets'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('weddings')->where('id',$id)->update($data);

}
         $request->session()->flash('message','weddings Updated Successfully!!');
        return redirect('vendor/weddings');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('weddings')->where(['id'=>$id])->get();
        if(File::exists('uploads/weddings/'.$arrImage[0]->photo)){
            File::delete('uploads/weddings/'.$arrImage[0]->photo);
        }
        $model=Wedding::find($id);
        $model->delete();
        $request->session()->flash('message','weddings Deleted successfully!!');
        return redirect('vendor/weddings');
    }

}
