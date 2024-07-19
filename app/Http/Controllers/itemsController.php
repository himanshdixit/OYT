<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class itemsController extends Controller
{

    public function index()
    {
        $result['data']=Item::all();
        return view('admin/items-list',$result);
    }

    public function show()
    {
         return view('admin/items-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'name'=>'required',
                'type'=>'required',
                'price'=>'required',
                'des'=>''

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'-item.'.$ext;
            $image->move('uploads/items/',$file);

            $data=array(
                'name'=>$request->input('name'),
                'type'=>$request->input('type'),
                'des'=>$request->input('des'),
                'price'=>$request->input('price'),
                'photo'=>$file

            );

            DB::table('items')->insert($data);

            $request->session()->flash('message','items Added Successfully!!');
           return redirect('admin/items');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/items/add-items');
        }


    }

    public function edit($id)
    {
       $data= DB::table('items')->where('id',$id)->get();
        return view('admin/items-edit',['data'=>$data]);

    }

    public function update(Request $request,$id)
    {
          $request->validate([

            'image'=>'mimes:jpeg,jpg,png',


        ]);

         $data=array(
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'price'=>$request->input('price'),
            'des'=>$request->input('des')

        );


        if($request->hasfile('image') ){
          $arrImage=DB::table('items')->get();
            File::delete('uploads/items/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'-item.'.$ext;
        $image->move('uploads/items/',$file);
        $data['photo']=$file;

        DB::table('items')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'des'=>$request->input('des'),
            'price'=>$request->input('price')
        );

        DB::table('items')->where('id',$id)->update($data);

}

         $request->session()->flash('message','items Updated Successfully!!');
        return redirect('admin/items');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('items')->where(['id'=>$id])->get();
        if(File::exists('uploads/items/'.$arrImage[0]->photo)){
            File::delete('uploads/items/'.$arrImage[0]->photo);
        }
        $model=Item::find($id);
        $model->delete();
        $request->session()->flash('message','items Deleted successfully!!');
        return redirect('admin/items');
    }



}
