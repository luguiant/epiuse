<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductsRequest extends FormRequest
{
    const aRules = [
           'value' => 'required|numeric|min:800|max:10000000',
           'name' => 'required|min:3|max:50',
           'quantity' => 'required|numeric|min:10|max:1000',
           'description'  => 'required|min:3|max:1000',
           'status' => 'required',
           'token' => 'required'
       ];
     
    const aMsn = [
       'value.required' => 'El valor es requerido',
       'value.numeric' => 'El valor es numerico',
       'value.min' => 'El valor es de minimo $800',
       'value.max' => 'El valor es maximo de $10000000',
       'name.required' => 'El nombre de la empresa es requerido',
       'name.min' => 'El nombre de la empresa es de minimo 3 caracteres',
       'name.max' => 'El nombre de la empresa ede maximo 50 caracteres',
       'quantity.required' => 'La cantidad es requerida',
       'quantity.numeric' => 'La cantidad es numerico',
       'quantity.min' => 'La cantidad es de minimo 10 unidades',
       'quantity.max' => 'La cantidad es maximo de 1000 unidades',
       'status' => 'El estado es requerido',
       'description.required' => 'La descripción es requerida',
       'description.min' => 'La descripción es de minimo 3 caracteres',
       'description.max' => 'El nombre de la empresa ede maximo 1000 caracteres', 
       'token.required' => ''
    ];
}
