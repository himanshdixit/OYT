<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Golf;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class golfController extends Controller
{

    public function index()
    {
        $result['data']=Golf::all();
        return view('admin/golf-list',$result);
    }

    public function show()
    {
         return view('admin/golf-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'g_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'location'=>'required',
                'timing_chart'=>'required',
                'highlights'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/golf/',$file);

            $data=array(
                'g_id'=>$request->input('g_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'location'=>$request->input('location'),
                'timing_chart'=>$request->input('timing_chart'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('golfs')->insert($data);

            $request->session()->flash('message','golf Added Successfully!!');
           return redirect('admin/golf');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/golf/add-golf');
        }


    }

    public function edit($id)
    {
       $data= DB::table('golfs')->where('id',$id)->get();
        return view('admin/golf-edit',['data'=>$data]);
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
        return redirect('admin/golf');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('golfs')->where(['id'=>$id])->get();
        if(File::exists('uploads/golf/'.$arrImage[0]->photo)){
            File::delete('uploads/golf/'.$arrImage[0]->photo);
        }
        $model=Golf::find($id);
        $model->delete();
        $request->session()->flash('message','golf Deleted successfully!!');
        return redirect('admin/golf');
    }

}
