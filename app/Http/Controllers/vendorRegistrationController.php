<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Vendor;

use Storage;
use File;

class vendorRegistrationController extends Controller
{

    
    public function index()
    {
        $result['data']=Vendor::paginate(50);
        return view('admin/vendors-list',$result);
    }

    public function show()
    {
        $data= DB::table('experiences')->get();
         return view('admin/vendors-add',['data'=>$data]);

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            // Validation level 1 - laravel predefined validation

            $request->validate([
                'image'=>'required|mimes:jpeg,jpg,png',
                'v_id'=>'',
                'username'=>'required|max:50|unique:vendors',
                'password'=>'required|min:3',
                'email'=>'required|email:rfc,dns|unique:vendors',
                'phone'=>'required',
                'type'=>'required'
            ]);

            $username = trim($request->input('username'));
            $password = trim($request->input('password'));
            $email = trim(strtolower($request->input('email')));
            $phone = trim(strtolower($request->input('phone')));
            $type = trim(strtolower($request->input('type')));

            $c_code = trim($request->input('c_code'));
            $v_id=$c_code.$phone;

            // Validation level 2 - user input manually match with database validtion

            $checkusers=DB::table('vendors')->where('username','=',$username)->orwhere('email','=',$email)->count();
            if($checkusers>=1){
                $request->session()->flash('message','Username or Email Already registered !!');
                return redirect('admin/vendors/add-vendors');
            }elseif($checkusers<1){

                $image=$request->file('image');
                $ext=$image->extension();
                $file=time().'.'.$ext;
                $image->move('uploads/vendors/',$file);

                $data=array(
                    'v_id'=>$v_id,
                    'username'=>$username,
                    'password'=>$password,
                    'email'=>$email,
                    'type'=>$type,
                    'photo'=>$file,
                    'phone'=>$phone
                );

                DB::table('vendors')->insert($data);
                $request->session()->flash('message','User Created Successfully!!');
                return redirect('admin/vendors');
            }else{
                $request->session()->flash('message','Please Add Correct Image!!');
                return redirect('admin/vendors/add-vendors');
            }

            // And validation level 3 - In javascript on Form html code... see there !!

    }
    }

    public function edit($id)
    {
       $data= DB::table('vendors')->where('id',$id)->get();
       $data2= DB::table('experiences')->get();
        return view('admin/vendors-edit',['data'=>$data,'data2'=>$data2]);

    }

    public function update(Request $request,$id)
    {
          $request->validate([

            'image'=>'mimes:jpeg,jpg,png'

        ]);

         $data=array(

                'username'=>$request->input('username'),
                'password'=>$request->input('password'),
                'email'=>$request->input('email'),
                'type'=>$request->input('type'),
                'photo'=>$request->input('image'),
                'phone'=>$request->input('phone')

        );


        if($request->hasfile('image')){
          $arrImage=DB::table('vendors')->get();
            File::delete('uploads/vendors/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/vendors/',$file);
        $data['photo']=$file;

        DB::table('vendors')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'username'=>$request->input('username'),
            'password'=>$request->input('password'),
            'email'=>$request->input('email'),
            'type'=>$request->input('type'),
            'phone'=>$request->input('phone')

        );

        DB::table('vendors')->where('id',$id)->update($data);

}

         $request->session()->flash('message','User Updated Successfully!!');
        return redirect('admin/vendors');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('vendors')->where(['id'=>$id])->get();
        if(File::exists('uploads/vendors/'.$arrImage[0]->photo)){
            File::delete('uploads/vendors/'.$arrImage[0]->photo);
        }
        $model=Vendor::find($id);
        $model->delete();
        $request->session()->flash('message','User Deleted successfully!!');
        return redirect('admin/vendors');
    }

}
