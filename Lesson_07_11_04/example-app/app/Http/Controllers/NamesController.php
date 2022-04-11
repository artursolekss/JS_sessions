<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Names;
use Illuminate\Support\Facades\Auth;

class NamesController extends Controller
{
    public function index()
    {
        $names = Names::all();
        return view("names", ["names" => $names]);
    }

    public function addName(Request $request)
    {
        $person = new Names();
        $person->name = $request->name;
        $person->lastname = $request->lastname;
        $person->dob = $request->dob;
        $person->save();
        return redirect("names");
    }
}
