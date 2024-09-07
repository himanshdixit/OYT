<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;

class vendorController extends Controller
{

    public function index(Request $request)

    {
        if($request->session()->has('LOGGED_VENDOR')){
            return redirect('vendor/dashboard');
        }else{
            return view('vendor.vendorlogin');
        }
        return view('vendor.vendorlogin');
      }


    public function auth(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'password'=>'required'
           ]);

        $username=$request->post('username');
        $password=$request->post('password');

        $result=Vendor::where(['username'=>$username,'password'=>$password])->get();
        if(isset($result['0']->id)){
            $request->session()->put('LOGGED_VENDOR',true);
            $request->session()->put('LOGGED_VENDOR_ID',$result['0']->id);
            $request->session()->put('LOGGED_VENDOR_USER',$result['0']->username);
            $request->session()->put('LOGGED_VENDOR_USER_TYPE',$result['0']->type);

            return redirect('vendor/dashboard');
        }else{
            $request->session()->flash('error','Incorrect Username or Password!!');
            return redirect('vendor/login');
        }

    }

    public function dashboard()
    {
        return view('vendor.dashboard');
    }

}
