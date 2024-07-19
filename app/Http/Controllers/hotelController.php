<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class hotelController extends Controller
{

    public function index()
    {
        $result['data']=Hotel::all();
        return view('admin/hotels-list',$result);
    }

    public function show()
    {
         return view('admin/hotels-add');

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
                'des'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/hotels/',$file);

            $data=array(
                'name'=>$request->input('name'),
                'price'=>$request->input('price'),
                'rooms'=>$request->input('rooms'),
                'location'=>$request->input('location'),
                'amenties'=>$request->input('amenties'),
                'heighlights'=>$request->input('heighlights'),
                'policy'=>$request->input('policy'),
                'photo'=>$file,
                'overview'=>$request->input('des')
            );

            DB::table('hotels')->insert($data);

            $request->session()->flash('message','hotels Added Successfully!!');
           return redirect('admin/hotels');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/hotels/add-hotels');
        }


    }

    public function edit($id)
    {
       $data= DB::table('hotels')->where('id',$id)->get();
        return view('admin/hotels-edit',['data'=>$data]);
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
        return redirect('admin/hotels');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('hotels')->where(['id'=>$id])->get();
        if(File::exists('uploads/hotels/'.$arrImage[0]->photo)){
            File::delete('uploads/hotels/'.$arrImage[0]->photo);
        }
        $model=Hotel::find($id);
        $model->delete();
        $request->session()->flash('message','hotels Deleted successfully!!');
        return redirect('admin/hotels');
    }

}
