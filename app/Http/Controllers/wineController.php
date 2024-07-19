<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wine;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class wineController extends Controller
{

    public function index()
    {
        $result['data']=Wine::all();
        return view('admin/wine-list',$result);
    }

    public function show()
    {
         return view('admin/wine-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'wi_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'type'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/wine/',$file);

            $data=array(
                'wi_id'=>$request->input('wi_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'type'=>$request->input('type'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('wines')->insert($data);

            $request->session()->flash('message','wine Added Successfully!!');
           return redirect('admin/wine');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/wine/add-wine');
        }


    }

    public function edit($id)
    {
       $data= DB::table('wines')->where('id',$id)->get();
        return view('admin/wine-edit',['data'=>$data]);
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
        return redirect('admin/wine');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('wines')->where(['id'=>$id])->get();
        if(File::exists('uploads/wine/'.$arrImage[0]->photo)){
            File::delete('uploads/wine/'.$arrImage[0]->photo);
        }
        $model=Wine::find($id);
        $model->delete();
        $request->session()->flash('message','wine Deleted successfully!!');
        return redirect('admin/wine');
    }

}
