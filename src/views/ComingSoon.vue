<template>
    <div class="bg-black">
        <div class="container mx-auto text-white text-lg py-10 px-40">
            <h1>Phim sắp chiếu</h1><hr/>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 py-10">
                <Items v-for="film in films" :key="film.id" :film="film" />
            </div>
        </div>
    </div>
</template>

<script>
import Items from '@/components/body/Items.vue';
export default {
    components: {
        Items,
    },
    data: () => ({
            films: [{
                id: 1,
                title: 'Ngôi Nhà Dưới Nước 1',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }, {
                id: 2,
                title: 'Ngôi Nhà Dưới Nước 2',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }, {
                id: 3,
                title: 'Ngôi Nhà Dưới Nước 3',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }, {
                id: 4,
                title: 'Ngôi Nhà Dưới Nước 4',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }, {
                id: 4,
                title: 'Ngôi Nhà Dưới Nước 4',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }, {
                id: 4,
                title: 'Ngôi Nhà Dưới Nước 4',
                engTitle: 'The Deep House (2021)',
                avatar: 'https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg',
            }],
    }),
}
</script>
