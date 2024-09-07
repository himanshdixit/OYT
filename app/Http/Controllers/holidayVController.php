<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Holiday;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class holidayVController extends Controller
{
    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('holidays')->where('added_by_id',$v)->get();
        return view('vendor/holiday-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','holidays')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/holiday-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'h_id'=>'',
                'name'=>'required',
                'price'=>'required',
                'day_night'=>'required',
                'country'=>'required',
                'location'=>'required',
                'daily_chart'=>'required',
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
            $image->move('uploads/holiday/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $h_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'h_id'=>$h_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'day_night'=>$request->input('day_night'),
                'country'=>$request->input('country'),
                'location'=>$request->input('location'),
                'daily_chart'=>$request->input('daily_chart'),
                'highlights'=>$request->input('highlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('holidays')->insert($data);

            $request->session()->flash('message','holiday Added Successfully!!');
           return redirect('vendor/holiday');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/holiday/add-holiday');
        }


    }

    public function edit($id)
    {
       $data= DB::table('holidays')->where('id',$id)->get();
        return view('vendor/holiday-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'h_id'=>$request->input('h_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'day_night'=>$request->input('day_night'),
            'country'=>$request->input('country'),
            'location'=>$request->input('location'),
            'daily_chart'=>$request->input('daily_chart'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'des'=>$request->input('des')
        );


        if($request->hasfile('image')){
        $arrImage=DB::table('holidays')->where('id',$id)->get();
        File::delete('uploads/holiday/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/holiday/',$file);
        $data['photo']=$file;

        DB::table('holidays')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'h_id'=>$request->input('h_id'),
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'day_night'=>$request->input('day_night'),
            'country'=>$request->input('country'),
            'location'=>$request->input('location'),
            'daily_chart'=>$request->input('daily_chart'),
            'highlights'=>$request->input('highlights'),
            'policy'=>$request->input('policy'),
            'des'=>$request->input('des')
        );

        DB::table('holidays')->where('id',$id)->update($data);

}
         $request->session()->flash('message','holiday Updated Successfully!!');
        return redirect('vendor/holiday');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('holidays')->where(['id'=>$id])->get();
        if(File::exists('uploads/holiday/'.$arrImage[0]->photo)){
            File::delete('uploads/holiday/'.$arrImage[0]->photo);
        }
        $model=Holiday::find($id);
        $model->delete();
        $request->session()->flash('message','holiday Deleted successfully!!');
        return redirect('vendor/holiday');
    }

}
