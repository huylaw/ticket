<template>
    <div class="border border-white hover:border-yellow-500">
        <router-link to='/info'>
            <div class="overflow-hidden" style="aspect-ratio: 3/4">
                <el-image :src="film.avatar" fit="cover" class="w-full transform duration-100 hover:scale-125" />
            </div>
            <div class="p-2">
                    <div class="cursor-pointer hover:text-yellow-500">{{ film.title }}</div>
                <div class="text-xs">{{ film.engTitle }}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            film: {
                type: Object,
                required: true, 
            },
        },
    };
</script>
