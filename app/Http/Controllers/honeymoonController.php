<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Honeymoon;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class honeymoonController extends Controller
{

    public function index()
    {
        $result['data']=Honeymoon::all();
        return view('admin/honeymoon-list',$result);
    }

    public function show()
    {
         return view('admin/honeymoon-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'hy_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'nights'=>'required',
                'travelers'=>'required',
                'chart'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/honeymoon/',$file);

            $data=array(
                'hy_id'=>$request->input('hy_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'nights'=>$request->input('nights'),
                'travelers'=>$request->input('travelers'),
                'chart'=>$request->input('chart'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('honeymoons')->insert($data);

            $request->session()->flash('message','honeymoon Added Successfully!!');
           return redirect('admin/honeymoon');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/honeymoon/add-honeymoon');
        }


    }

    public function edit($id)
    {
       $data= DB::table('honeymoons')->where('id',$id)->get();
        return view('admin/honeymoon-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'hy_id'=>$request->input('hy_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'nights'=>$request->input('nights'),
            'travelers'=>$request->input('travelers'),
            'chart'=>$request->input('chart'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('honeymoons')->where('id',$id)->get();
        File::delete('uploads/honeymoon/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/honeymoon/',$file);
        $data['photo']=$file;

        DB::table('honeymoons')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'hy_id'=>$request->input('hy_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'nights'=>$request->input('nights'),
            'travelers'=>$request->input('travelers'),
            'chart'=>$request->input('chart'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('honeymoons')->where('id',$id)->update($data);

}
         $request->session()->flash('message','honeymoon Updated Successfully!!');
        return redirect('admin/honeymoon');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('honeymoons')->where(['id'=>$id])->get();
        if(File::exists('uploads/honeymoon/'.$arrImage[0]->photo)){
            File::delete('uploads/honeymoon/'.$arrImage[0]->photo);
        }
        $model=Honeymoon::find($id);
        $model->delete();
        $request->session()->flash('message','honeymoon Deleted successfully!!');
        return redirect('admin/honeymoon');
    }

}
