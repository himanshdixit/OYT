<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Caravan;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class caravanVController extends Controller
{

    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('caravans')->where('added_by_id',$v)->get();
        return view('vendor/caravan-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','caravan')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/caravan-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'cr_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'driver'=>'required',
                'highlights'=>'required',
                'amenties'=>'required',
                'destinations'=>'required',

                'active'=>'',
                'added_by'=>'',
                'added_by_id'=>'',

                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/caravan/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $cr_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'cr_id'=>$cr_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'driver'=>$request->input('driver'),
                'highlights'=>$request->input('highlights'),
                'amenties'=>$request->input('amenties'),
                'destinations'=>$request->input('destinations'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('caravans')->insert($data);

            $request->session()->flash('message','caravan Added Successfully!!');
           return redirect('vendor/caravan');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/caravan/add-caravan');
        }


    }

    public function edit($id)
    {
       $data= DB::table('caravans')->where('id',$id)->get();
        return view('vendor/caravan-edit',['data'=>$data]);
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
        return redirect('vendor/caravan');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('caravans')->where(['id'=>$id])->get();
        if(File::exists('uploads/caravan/'.$arrImage[0]->photo)){
            File::delete('uploads/caravan/'.$arrImage[0]->photo);
        }
        $model=Caravan::find($id);
        $model->delete();
        $request->session()->flash('message','caravan Deleted successfully!!');
        return redirect('vendor/caravan');
    }

}
