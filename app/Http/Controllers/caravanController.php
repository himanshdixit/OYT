<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Caravan;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class caravanController extends Controller
{
    
    public function index()
    {
        $result['data']=Caravan::all();
        return view('admin/caravan-list',$result);
    }

    public function show()
    {
         return view('admin/caravan-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'cr_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'driver'=>'required',
                'highlights'=>'required',
                'amenties'=>'required',
                'destinations'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/caravan/',$file);

            $data=array(
                'cr_id'=>$request->input('cr_id'),
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'driver'=>$request->input('driver'),
                'highlights'=>$request->input('highlights'),
                'amenties'=>$request->input('amenties'),
                'destinations'=>$request->input('destinations'),
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('caravans')->insert($data);

            $request->session()->flash('message','caravan Added Successfully!!');
           return redirect('admin/caravan');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/caravan/add-caravan');
        }


    }

    public function edit($id)
    {
       $data= DB::table('caravans')->where('id',$id)->get();
        return view('admin/caravan-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'cr_id'=>$request->input('cr_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'driver'=>$request->input('driver'),
            'highlights'=>$request->input('highlights'),
            'amenties'=>$request->input('amenties'),
            'destinations'=>$request->input('destinations'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('caravans')->where('id',$id)->get();
        File::delete('uploads/caravan/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/caravan/',$file);
        $data['photo']=$file;

        DB::table('caravans')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'cr_id'=>$request->input('cr_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'driver'=>$request->input('driver'),
            'highlights'=>$request->input('highlights'),
            'amenties'=>$request->input('amenties'),
            'destinations'=>$request->input('destinations'),
            'des'=>$request->input('des')
        );

        DB::table('caravans')->where('id',$id)->update($data);

}
         $request->session()->flash('message','caravan Updated Successfully!!');
        return redirect('admin/caravan');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('caravans')->where(['id'=>$id])->get();
        if(File::exists('uploads/caravan/'.$arrImage[0]->photo)){
            File::delete('uploads/caravan/'.$arrImage[0]->photo);
        }
        $model=Caravan::find($id);
        $model->delete();
        $request->session()->flash('message','caravan Deleted successfully!!');
        return redirect('admin/caravan');
    }

}
