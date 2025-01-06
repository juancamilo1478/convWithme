<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="w-full  bg-brand-navbar1"  >
    <nav class="right-0 pt-0   mt-0 z-50 fixed lg:relative w-full bg-brand-navbar1">
      <div class="px-14 py-4 mx-auto ">
        <div class="lg:flex lg:items-center ">
          <div class="flex items-center justify-between  ">
            <div  class="flex items-center ">
              <img class="w-auto h-6 sm:h-7" src="./assets/logo.png" alt="Logo">
              <h1 class="text-white ml-2 text-2xl font-nunito font-bold">ConvWithMe</h1>
            </div>

            <!-- Botón del menú móvil -->
            <div class="flex lg:hidden" >
              <button @click="toggleMenu" type="button"
                class="text-white   hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400"
                aria-label="toggle menu">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>

                <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Menú de navegación móvil -->
          <div :class="{'translate-x-0 opacity-100': isOpen, '-translate-x-full opacity-0': !isOpen}"
            class="absolute inset-x-0 z-20 flex-1 w-full  transition-all duration-300 ease-in-out bg-slate-700  dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between" >
            <div class=" flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <a href="#" class="mt-2 font-nunito text-3xl font-bold transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-white hover:text-brand-colorOne">Whatch Demo</a>
              <a href="#" class="mt-2 text-3xl font-bold transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-white hover:text-brand-colorOne">About Us</a>
              <a href="#" class="mb-2 mt-2 text-3xl font-bold transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-white hover:text-brand-colorOne">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div>

    <RouterView />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false // Variable reactiva para controlar la visibilidad del menú
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen; // Alterna el estado del menú
    }
  }
};
</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
