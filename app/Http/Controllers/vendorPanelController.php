<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Hotel;
use App\Models\Cruise_item;
use App\Models\Wedding;
use App\Models\Wine;
use App\Models\Caravan;
use App\Models\Resort;
use App\Models\Plane;
use App\Models\Holiday;
use App\Models\Honeymoon;
use App\Models\Golf;

use Storage;
use File;


class vendorPanelController extends Controller
{

    public function propertyvendorlist($type)
    {
        $data= DB::table('vendors')->where('type',$type)->get();
        return view('admin/property-vendors-list',['data'=>$data]);
    }


    public function hotelvendors()
    {
        $data= DB::table('vendors')->where('type','hotel')->get();
        return view('admin/vendors-hotel',['data'=>$data]);
    }

    public function cruisevendors()
    {
        $data= DB::table('vendors')->where('type','cruise')->get();
        return view('admin/vendors-cruise',['data'=>$data]);
    }

    public function weddingvendors()
    {
        $data= DB::table('vendors')->where('type','wedding')->get();
        return view('admin/vendors-wedding',['data'=>$data]);
    }

    public function winevendors()
    {
        $data= DB::table('vendors')->where('type','wine')->get();
        return view('admin/vendors-wine',['data'=>$data]);
    }

    public function caravanvendors()
    {
        $data= DB::table('vendors')->where('type','caravan')->get();
        return view('admin/vendors-caravan',['data'=>$data]);
    }

    public function holidaysvendors()
    {
        $data= DB::table('vendors')->where('type','holidays')->get();
        return view('admin/vendors-holidays',['data'=>$data]);
    }

    public function honeymoonvendors()
    {
        $data= DB::table('vendors')->where('type','honeymoon')->get();
        return view('admin/vendors-honeymoon',['data'=>$data]);
    }

    public function resortvendors()
    {
        $data= DB::table('vendors')->where('type','resort')->get();
        return view('admin/vendors-resort',['data'=>$data]);
    }

    public function planesvendors()
    {
        $data= DB::table('vendors')->where('type','planes')->get();
        return view('admin/vendors-planes',['data'=>$data]);
    }

    public function golfsvendors()
    {
        $data= DB::table('vendors')->where('type','golfs')->get();
        return view('admin/vendors-golfs',['data'=>$data]);
    }



    public function showvendorhotellist($v)
    {
        $data= DB::table('hotels')->where('added_by',$v)->get();
        return view('admin/vendors-hotel-list',['data'=>$data]);
    }

    public function showvendorcruiselist($v)
    {
        $data= DB::table('cruise_items')->where('added_by',$v)->get();
        return view('admin/vendors-cruise-list',['data'=>$data]);
    }

    public function showvendorweddinglist($v)
    {
        $data= DB::table('weddings')->where('added_by',$v)->get();
        return view('admin/vendors-wedding-list',['data'=>$data]);
    }

    public function showvendorwinelist($v)
    {
        $data= DB::table('wines')->where('added_by',$v)->get();
        return view('admin/vendors-wine-list',['data'=>$data]);
    }

    public function showvendorcaravanlist($v)
    {
        $data= DB::table('caravans')->where('added_by',$v)->get();
        return view('admin/vendors-caravan-list',['data'=>$data]);
    }

    public function showvendorholidayslist($v)
    {
        $data= DB::table('holidays')->where('added_by',$v)->get();
        return view('admin/vendors-holidays-list',['data'=>$data]);
    }

    public function showvendorhoneymoonlist($v)
    {
        $data= DB::table('honeymoons')->where('added_by',$v)->get();
        return view('admin/vendors-honeymoon-list',['data'=>$data]);
    }

    public function showvendorresortlist($v)
    {
        $data= DB::table('resorts')->where('added_by',$v)->get();
        return view('admin/vendors-resort-list',['data'=>$data]);
    }

    public function showvendorplaneslist($v)
    {
        $data= DB::table('planes')->where('added_by',$v)->get();
        return view('admin/vendors-planes-list',['data'=>$data]);
    }

    public function showvendorgolfslist($v)
    {
        $data= DB::table('golfs')->where('added_by',$v)->get();
        return view('admin/vendors-golfs-list',['data'=>$data]);
    }

    public function edit($id)
    {
       $data= DB::table('wines')->where('id',$id)->get();
        return view('admin/wine-edit',['data'=>$data]);
    }



    public function hotelapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Hotel::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('hotels')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('hotels')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function cruiseapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Cruise_item::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('cruise_items')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('cruise_items')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function weddingapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Wedding::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('weddings')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('weddings')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function wineapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Wine::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('wines')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('wines')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function caravanapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Caravan::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('caravans')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('caravans')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function holidaysapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Holiday::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('holidays')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('holidays')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function honeymoonapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Honeymoon::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('honeymoons')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('honeymoons')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function resortapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Resort::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('resorts')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('resorts')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function planesapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Plane::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('planes')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('planes')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }

    public function golfsapprove(Request $request,$id)
    {
          $request->validate([
            'active'=>''
        ]);

        $result=Golf::where(['id'=>$id])->get();

        if($result['0']->active == 0 ){
            $active=1;
            $data=array(
                'active'=>$active
            );

            DB::table('golfs')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Approved Successfully!!');
            return redirect()->back();

        }else{
            $active=0;
            $data=array(
                'active'=>$active
            );

            DB::table('golfs')->where('id',$id)->update($data);
           
            $request->session()->flash('message','Request Canceled Successfully!!');
            return redirect()->back();
        }
    }


}
