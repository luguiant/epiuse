<?php

use App\Products;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            
            $table->increments('id');
            $table->string('name');
            $table->string('description', 1000);
            $table->integer('quantity',false,false)->unsigned();
            $table->integer('value',false,false)->nullable();
            $table->string('status')->default(Products::PRODUCTO_NO_DISPONIBLE);
            $table->integer('user_id',false,false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
            $table->softDeletes();
       
       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
