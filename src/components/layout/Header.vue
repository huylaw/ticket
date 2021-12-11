<template>
    <div class="flex bg-gray-700 items-center text-white">
        <img class="m-5 w-12 h-12" alt="Ảnh logo" src="./../../assets/logo.png">
        <ul class="flex flex-wrap justify-between w-96">
            <li class="hover:underline hover:text-yellow-400"><router-link to='/'>Trang chủ</router-link></li>
            <li class="hover:underline hover:text-yellow-400"><router-link to='/nowshowing'>Phim đang chiếu</router-link></li>
            <li class="hover:underline hover:text-yellow-400"><router-link to='/comingsoon'>Phim sắp chiếu</router-link></li>
        </ul>
        <div class="ml-auto mr-10 hover:text-yellow-400">
            <router-link to='/login'>Đăng nhập</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>