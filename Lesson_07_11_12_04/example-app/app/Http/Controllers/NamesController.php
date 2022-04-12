<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Names;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

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

    public function sendEmail()
    {
        $user = User::findOrFail(Auth::id());
        $names = Names::all();
        Mail::send('names', ["names" => $names, "email" => true], function ($m) use ($user) {
            $m->from("session.test@test.com", "MySession");
            $m->to($user->email, $user->name)->subject('Test email');
        });
        return redirect('names');
    }
}
