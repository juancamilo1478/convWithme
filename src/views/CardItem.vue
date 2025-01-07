<template>
    <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  bg-brand-colorOne py-10 px-2 md:px-10 lg:px-10 rounded-lg shadow-md flex flex-col items-center ">
      <!-- Icono renderizado desde el slot -->
      <div class="icon mb-2">
        <slot name="icon"></slot>
      </div>
      <!-- Texto renderizado desde la prop -->
      <div class="text text-center text-white">
        <h1 class="text-2xl sm:text-xl py-10"> {{ text }}</h1>
      </div>
    </div>
  </template>
<script>

export default{
    name:"CardItem",
    props:{
        text:{
            type:String,
            require:true
        },

    }
}

</script>