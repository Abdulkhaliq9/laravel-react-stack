<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SigninRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $login)
    {
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
    }
}
