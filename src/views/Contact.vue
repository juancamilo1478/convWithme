<template>
    <div class="w-full block lg:flex min-h-screen  ">
        <div class="  w-full lg:w-1/2 px-2  lg:px-20 bg-brand-navbar1 p-4">
            <form class="w-full  mx-auto mt-20 p-6  border rounded-lg shadow-lg"
            action="https://formsubmit.co/convwithme@outlook.com" method="POST">
            <h2 class="text-3xl font-bold mb-6 font-nunito text-white ">Contact</h2>
            <div class="mb-4">
                <label class="block text-white font-bold mb-2" for="name">
                  Your  name:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
                <label class="block text-white font-bold mb-2" for="email">
                   Your email:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" name="email" placeholder="Enter your email">
            </div>
            <div class="mb-4">
                <label class="block text-white font-bold mb-2" for="email">
                    Comment:
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" name="comments   " placeholder="coment">
            </div>
            
            <button
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
            </button>
        </form>
        </div>
        <div class=" w-full lg:w-1/2 bg-gray-800 p-4">
            <img src="../assets/phones.png" />
        </div>
    </div>
    
   
</template>
<script>
export default {
    name: "contact"
}
</script>