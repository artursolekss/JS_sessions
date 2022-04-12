<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HelloWorldController extends Controller
{
    public function index(Request $request)
    {
        // $data = [];
        // $name = "Arturs";
        // $data["name"] = $name;

        $employees = DB::table("employees")->get();

        return view("helloworld", ["employees" => $employees]);
    }
}
