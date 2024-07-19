<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Holiday;
use Illuminate\Support\Facades\DB;

use Storage;
use File;


class holidayController extends Controller
{
    
    public function index()
    {
        $result['data']=Holiday::all();
        return view('admin/holiday-list',$result);
    }

    public function show()
    {
         return view('admin/holiday-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'h_id'=>'required',
                'name'=>'required',
                'price'=>'required',
                'day_night'=>'required',
                'country'=>'required',
                'location'=>'required',
                'daily_chart'=>'required',
                'highlights'=>'required',
                'policy'=>'required',
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/holiday/',$file);

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
                'photo'=>$file,
                'des'=>$request->input('des')
            );

            DB::table('holidays')->insert($data);

            $request->session()->flash('message','holiday Added Successfully!!');
           return redirect('admin/holiday');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/holiday/add-holiday');
        }


    }

    public function edit($id)
    {
       $data= DB::table('holidays')->where('id',$id)->get();
        return view('admin/holiday-edit',['data'=>$data]);
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
        return redirect('admin/holiday');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('holidays')->where(['id'=>$id])->get();
        if(File::exists('uploads/holiday/'.$arrImage[0]->photo)){
            File::delete('uploads/holiday/'.$arrImage[0]->photo);
        }
        $model=Holiday::find($id);
        $model->delete();
        $request->session()->flash('message','holiday Deleted successfully!!');
        return redirect('admin/holiday');
    }


}
