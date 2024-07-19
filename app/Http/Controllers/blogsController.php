<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\DB;

use Storage;
use File;

class blogsController extends Controller
{
    
    public function index()
    {
        $result['data']=Blog::all();
        return view('admin/blogs-list',$result);
    }

    public function show()
    {
         return view('admin/blogs-add');

    }

    public function insert(Request $request)
    {

        if($request->hasfile('image')){

            $request->validate([

                'image'=>'required|mimes:jpeg,jpg,png',
                'name'=>'required',
                'title'=>'required',
                'author'=>'required',
                'date'=>'required',
                'description1'=>'required'

            ]);

            $image=$request->file('image');
            $ext=$image->extension();
            $file=time().'.'.$ext;
            $image->move('uploads/blogs/',$file);

            $data=array(
                'name'=>$request->input('name'),
                'title'=>$request->input('title'),
                'date'=>$request->input('date'),
                'author'=>$request->input('author'),
                'photo'=>$file,
                'des1'=>$request->input('description1')
            );

            DB::table('blogs')->insert($data);

            $request->session()->flash('message','blogs Added Successfully!!');
           return redirect('admin/blogs');

        }else{
            $request->session()->flash('message','Please Add Correct Image!!');
            return redirect('admin/blogs/add-blogs');
        }


    }

    public function edit($id)
    {
       $data= DB::table('blogs')->where('id',$id)->get();
        return view('admin/blogs-edit',['data'=>$data]);
    }

    public function update(Request $request,$id)
    {
          $request->validate([
            'image'=>'mimes:jpeg,jpg,png'
        ]);

         $data=array(

                'name'=>$request->input('name'),
                'title'=>$request->input('title'),
                'date'=>$request->input('date'),
                'author'=>$request->input('author'),
                'photo'=>$request->input('image'),
                'des1'=>$request->input('description1')
        );


        if($request->hasfile('image')){
          $arrImage=DB::table('blogs')->get();
            File::delete('uploads/blogs/'.$arrImage[0]->photo);

        $image=$request->file('image');
        $ext=$image->extension();
        $file=time().'.'.$ext;
        $image->move('uploads/blogs/',$file);
        $data['photo']=$file;

        DB::table('blogs')->where('id',$id)->update($data);

    }
    else{

        $data=array(
            'name'=>$request->input('name'),
            'title'=>$request->input('title'),
            'date'=>$request->input('date'),
            'author'=>$request->input('author'),
            'des1'=>$request->input('description1')
        );

        DB::table('blogs')->where('id',$id)->update($data);

}
         $request->session()->flash('message','blogs Updated Successfully!!');
        return redirect('admin/blogs');
    }


    public function delete(Request $request,$id){
        $arrImage=DB::table('blogs')->where(['id'=>$id])->get();
        if(File::exists('uploads/blogs/'.$arrImage[0]->photo)){
            File::delete('uploads/blogs/'.$arrImage[0]->photo);
        }
        $model=Blog::find($id);
        $model->delete();
        $request->session()->flash('message','blogs Deleted successfully!!');
        return redirect('admin/blogs');
    }

}
