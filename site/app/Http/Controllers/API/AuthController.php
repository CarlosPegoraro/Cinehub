<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SingupRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        # code...
    }
    public function singup(SingupRequest $request)
    {
        # code...
    }
    public function logout(Request $request)
    {
        # code...
    }
}
