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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();

            $table->foreignId('session_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedInteger('totalSum')->default(0);
            $table->dateTime('dateTime');
            $table->json('seatsNumber');
            $table->string('qrCode')->default('');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
