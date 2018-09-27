<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Transformers\ProductsTransformer;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{

    use SoftDeletes;
    
    const PRODUCTO_DISPONIBLE = 'disponible';
    const PRODUCTO_NO_DISPONIBLE = 'no disponible';
  
    public $transformer = ProductsTransformer::class;
    
    protected $dates = ['deleted_at'];
    protected $fillable = [
    	'name',
    	'description',
    	'quantity',
    	'status',
    	'value',
    	'user_id',
    ];
    
    public function estaDisponible()
    {
    	return $this->status == Product::PRODUCTO_DISPONIBLE;
    }
    
    public function setNameAttribute($valor)
    {
        $this->attributes['name'] = strtolower($valor);
    }

    public function getNameAttribute($valor)
    {
        return ucwords($valor);
    }
}
