<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plane;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class planeController extends Controller
{

    public function index()
    {
        $result['data']=Plane::all();
        return view('admin/plane-list',$result);
    }

    public function show()
    {
         return view('admin/plane-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'p_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'pilot'=>'',
                'type'=>'required',
                'highlights'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/plane/',$file);

            $data=array(
                'p_id'=>$request->input('p_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'pilot'=>$request->input('pilot'),
                'type'=>$request->input('type'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('planes')->insert($data);

            $request->session()->flash('message','plane Added Successfully!!');
           return redirect('admin/plane');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/plane/add-plane');
        }


    }

    public function edit($id)
    {
       $data= DB::table('planes')->where('id',$id)->get();
        return view('admin/plane-edit',['data'=>$data]);
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
        return redirect('admin/plane');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('planes')->where(['id'=>$id])->get();
        if(File::exists('uploads/plane/'.$arrImage[0]->photo)){
            File::delete('uploads/plane/'.$arrImage[0]->photo);
        }
        $model=Plane::find($id);
        $model->delete();
        $request->session()->flash('message','plane Deleted successfully!!');
        return redirect('admin/plane');
    }

}
