<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SigninRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $login)
    {
        $credentials = $login->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided Email address or password is incorrect'
            ]);

            $user = Auth::user();
            $token = $user->createToken(name: 'main')->plainTextToken;

            return response(get_defined_vars());
        }
    }
    public function signup(SigninRequest $signin)
    {
        $data = $signin->validated();
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
        $user = $request->user();
        $user->currentAccessToken()->delete();
    }
}
