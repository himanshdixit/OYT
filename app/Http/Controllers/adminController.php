<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class adminController extends Controller
{

    public function index(Request $request)

    {
        if($request->session()->has('LOGGED_ADMIN')){
            return redirect('admin/dashboard');
        }else{
            return view('admin.adminlogin');
        }
        return view('admin.adminlogin');
      }


    public function auth(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'password'=>'required'
           ]);

        $username=$request->post('username');
        $password=$request->post('password');

        $result=Admin::where(['username'=>$username,'password'=>$password])->get();
        if(isset($result['0']->id)){
            $request->session()->put('LOGGED_ADMIN',true);
            $request->session()->put('LOGGED_ADMIN_ID',$result['0']->id);
            $request->session()->put('LOGGED_ADMIN_USER',$result['0']->username);

            return redirect('admin/dashboard');
        }else{
            $request->session()->flash('error','Incorrect Username or Password!!');
            return redirect('admin/');
        }

    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }

}
