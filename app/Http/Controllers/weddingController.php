<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wedding;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class weddingController extends Controller
{

    public function index()
    {
        $result['data']=Wedding::all();
        return view('admin/weddings-list',$result);
    }

    public function show()
    {
         return view('admin/weddings-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'w_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'venue'=>'required',
                'banquets'=>'required',
                'highlights'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/weddings/',$file);

            $data=array(
                'w_id'=>$request->input('w_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'venue'=>$request->input('venue'),
                'banquets'=>$request->input('banquets'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('weddings')->insert($data);

            $request->session()->flash('message','weddings Added Successfully!!');
           return redirect('admin/weddings');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/weddings/add-weddings');
        }


    }

    public function edit($id)
    {
       $data= DB::table('weddings')->where('id',$id)->get();
        return view('admin/weddings-edit',['data'=>$data]);
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
        return redirect('admin/weddings');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('weddings')->where(['id'=>$id])->get();
        if(File::exists('uploads/weddings/'.$arrImage[0]->photo)){
            File::delete('uploads/weddings/'.$arrImage[0]->photo);
        }
        $model=Wedding::find($id);
        $model->delete();
        $request->session()->flash('message','weddings Deleted successfully!!');
        return redirect('admin/weddings');
    }

}
