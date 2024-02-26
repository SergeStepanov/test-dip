<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('halls', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->unsignedInteger('rows')->default(0); // к-во рядов
            $table->unsignedInteger('cols')->default(0); // к-во кресел в ряду

            $table->boolean('is_active')->default(false);

            $table->integer('price_standard')->default(0);
            $table->integer('price_vip')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('halls');
    }
};
