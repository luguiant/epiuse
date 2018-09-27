<?php

use Illuminate\Http\Request;

/**
 * Users
 */
Route::resource('api/users', 'User\UserController', ['except' => ['create'],'only'=>['index','store','show']]);
Route::resource('api/login', 'Login\LoginPublicController',['only'=>'store']);
Route::resource('api/products', 'Products\ProductsController',['only'=>['store','show','index']]);
Route::resource('api/auth', 'Auth\AuthUserController',['only'=>['store']]);

/*Route::name('verify')->get('users/verify/{token}', 'User\UserController@verify');
Route::name('resend')->get('users/{user}/resend', 'User\UserController@resend');*/
//Route::post('oauth/token', '\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken');