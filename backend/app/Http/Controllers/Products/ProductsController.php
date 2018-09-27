<?php

namespace App\Http\Controllers\Products;

use App\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Http\Requests\CreateProductsRequest;
use App\Helpers\JwtAuth;
use Firebase\JWT\JWT;

class ProductsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $hash = $request->header('Authorization',null);
        $oJwtAuth = new JwtAuth();
        if($oJwtAuth->checkToken($hash)){
            $aProducts = Products::all();
            return $this->showAll($aProducts);
        }else{
            return $this->errorResponse(
                        [ 'error'=>'El token no es valido!'], 422);
        }            
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate(
                $request, 
                CreateProductsRequest::aRules,
                CreateProductsRequest::aMsn);
        
        $oJwtAuth = new JwtAuth();
        
        $campos = $request->all();
        
        if($oJwtAuth->checkToken($campos['token'])){
           
            $token = $oJwtAuth->checkToken($campos['token'],true);
            $campos['user_id'] = $token->sub;
            
            if(isset($campos['token'])){
                unset($campos['token']);
            }
            
            $oNewRow = Products::create($campos);
            return $this->showOne($oNewRow, 201);
                    
        }else{
            return $this->errorResponse(
                        [ 'error'=>'El token no es valido!'], 422);
        }
        
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(Products $products)
    {
        //
    }
}
