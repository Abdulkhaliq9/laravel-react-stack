<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $creds = $request->validate([
            'email'=> 'required',
            'password'=>'required',
        ]);
        if(Auth::attempt($creds)){
            Session::regenerate();
            $user= Auth::user();
            $token = $user->createToken(name: 'main')->plainTextToken;
            return response(get_defined_vars());
            
        }
        else{
            return response([
                'message' => 'Provided Email address or password is incorrect'
            ]); 
        }
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken(name: 'main')->plainTextToken;

        return response(get_defined_vars());
    }
    public function logout(Request $request)
    {
        Auth::logout();
        return response(content:'',status: 204);
    }
}