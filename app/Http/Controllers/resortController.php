<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resort;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class resortController extends Controller
{

    public function index()
    {
        $result['data']=Resort::all();
        return view('admin/resort-list',$result);
    }

    public function show()
    {
         return view('admin/resort-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'r_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'duration'=>'required',
                'country'=>'required',
                'location'=>'required',
                'highlights'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/resort/',$file);

            $data=array(
                'r_id'=>$request->input('r_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'duration'=>$request->input('duration'),
                'country'=>$request->input('country'),
                'location'=>$request->input('location'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('resorts')->insert($data);

            $request->session()->flash('message','resort Added Successfully!!');
           return redirect('admin/resort');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/resort/add-resort');
        }


    }

    public function edit($id)
    {
       $data= DB::table('resorts')->where('id',$id)->get();
        return view('admin/resort-edit',['data'=>$data]);
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
        return redirect('admin/resort');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('resorts')->where(['id'=>$id])->get();
        if(File::exists('uploads/resort/'.$arrImage[0]->photo)){
            File::delete('uploads/resort/'.$arrImage[0]->photo);
        }
        $model=Resort::find($id);
        $model->delete();
        $request->session()->flash('message','resort Deleted successfully!!');
        return redirect('admin/resort');
    }

}
