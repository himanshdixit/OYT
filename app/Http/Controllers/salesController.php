<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;

class salesController extends Controller
{

    public function index(Request $request)

    {
        if($request->session()->has('LOGGED_SALES')){
            return redirect('sales/dashboard');
        }else{
            return view('sales.saleslogin');
        }
        return view('sales.saleslogin');
      }


    public function auth(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'password'=>'required'
           ]);

        $username=$request->post('username');
        $password=$request->post('password');

        $result=Sale::where(['username'=>$username,'password'=>$password])->get();
        if(isset($result['0']->id)){
            $request->session()->put('LOGGED_SALES',true);
            $request->session()->put('LOGGED_SALES_ID',$result['0']->id);
            $request->session()->put('LOGGED_SALES_USER',$result['0']->username);

            return redirect('sales/dashboard');
        }else{
            $request->session()->flash('error','Incorrect Username or Password!!');
            return redirect('sales/login');
        }

    }

    public function dashboard()
    {
        return view('sales.dashboard');
    }

}
