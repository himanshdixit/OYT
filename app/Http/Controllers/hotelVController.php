<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class hotelVController extends Controller
{

    public function index()
    {
        $v=session()->get('LOGGED_VENDOR_ID');
        $data=DB::table('hotels')->where('added_by_id',$v)->get();
        return view('vendor/hotels-list',['data'=>$data]);
    }

    public function show()
    {
        $data1=DB::table('experiences')->where('others','hotel')->get();
        $data2=DB::table('countries')->get();
        $data3=DB::table('states')->get();
        return view('vendor/hotels-add',['data1'=>$data1,'data2'=>$data2,'data3'=>$data3]);
    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'name'=>'required',
                'price'=>'required',
                'rooms'=>'required',
                'location'=>'required',
                'amenties'=>'required',
                'heighlights'=>'required',
                'policy'=>'required',

                'active'=>'',
                'added_by'=>'',
                'added_by_id'=>'',

                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/hotels/',$file);

            $active=0;
            $added_by=session()->get('LOGGED_VENDOR_USER');
            $added_by_id=session()->get('LOGGED_VENDOR_ID');

            $ct_code = $request->input('ct_code');
            $c_code = $request->input('c_code');
            $s_code = $request->input('s_code');
            $p_code = $request->input('p_code');
            $u_code = $request->input('u_code');

            $hotel_id = $ct_code.$c_code.$s_code.$p_code.$u_code;


            $data=array(
                'hotel_id'=>$hotel_id,
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'rooms'=>$request->input('rooms'),
                'location'=>$request->input('location'),
                'amenties'=>$request->input('amenties'),
                'heighlights'=>$request->input('heighlights'),
                'policy'=>$request->input('policy'),

                'active'=>$active,
                'added_by'=>$added_by,                
                'added_by_id'=>$added_by_id,

                'photo'=>$file,
                'overview'=>$request->input('des')
            );

            DB::table('hotels')->insert($data);

            $request->session()->flash('message','hotels Added Successfully!!');
           return redirect('vendor/hotels');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('vendor/hotels/add-hotels');
        }


    }

    public function edit($id)
    {
       $data= DB::table('hotels')->where('id',$id)->get();
        return view('vendor/hotels-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'rooms'=>$request->input('rooms'),
            'location'=>$request->input('location'),
            'amenties'=>$request->input('amenties'),
            'heighlights'=>$request->input('heighlights'),
            'policy'=>$request->input('policy'),
            'photo'=>$request->input('image'),
            'overview'=>$request->input('des')
        );


        if($request->hasfile('image')){
          $arrImage=DB::table('hotels')->get();
            File::delete('uploads/hotels/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/hotels/',$file);
        $data['photo']=$file;

        DB::table('hotels')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'name'=>$request->input('name'),
            'price'=>$request->input('price'),
            'rooms'=>$request->input('rooms'),
            'location'=>$request->input('location'),
            'amenties'=>$request->input('amenties'),
            'heighlights'=>$request->input('heighlights'),
            'policy'=>$request->input('policy'),
            'overview'=>$request->input('des')
        );

        DB::table('hotels')->where('id',$id)->update($data);

}
         $request->session()->flash('message','hotels Updated Successfully!!');
        return redirect('vendor/hotels');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('hotels')->where(['id'=>$id])->get();
        if(File::exists('uploads/hotels/'.$arrImage[0]->photo)){
            File::delete('uploads/hotels/'.$arrImage[0]->photo);
        }
        $model=Hotel::find($id);
        $model->delete();
        $request->session()->flash('message','hotels Deleted successfully!!');
        return redirect('vendor/hotels');
    }

}
