<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SalesCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!session()->has('LOGGED_SALES') && $request->path()!='/sales/login'){
            return redirect('/sales/login')->with('fail','You must be logged in');
          }
          if(session()->has('LOGGED_SALES') && $request->path()=='/sales/login'){
            return back();
          }
          
          $response=$next($request);
          $response->headers->set('Cache-Control','nocache, no-store, max-age=0, must-revalidate');
          $response->headers->set('Pragma','no-cache');
          $response->headers->set('Expires','Sat, 01 Jan 2020 00:00:00 GMT');
          return $response;
    }
}
