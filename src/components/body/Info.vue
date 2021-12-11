<template>
    <div class="bg-black">
        <div class="container mx-auto text-white py-20 px-36">
            <div class="text-3xl">Nội dung phim</div><hr/>
            <div class="flex my-10">
                <img :src="`https://image.tmdb.org/t/p/w300/${film.poster_path}`" class="w-80">
                <div class="px-10">
                    <ul>
                        <li>Tên phim: {{ film.original_title }}</li>
                        <li>Đạo diễn:</li>
                        <li>Diễn viên:</li>
                        <li>Thể loại:</li>
                        <li>Khỏi chiếu:</li>
                        <li>Thời lượng:</li>
                        <li>Rated:</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Cốt truyện:</h1>
            </div>
            <div class="flex justify-center py-10">
                <el-button type="info"><a href="https://www.youtube.com/watch?v=WDeMhjGyRww" target="_blank">Trailer</a></el-button>
                <el-button type="info" @click="handleBuyTicket">
                    Mua vé
                </el-button>
            </div>
        </div>
        <PickShiftDialog ref="pickShiftDialog" />
    </div>
</template>

<script>
    import axios from 'axios';
    import PickShiftDialog from '@/components/shift/Dialog.vue';

    export default {
        components: {
            PickShiftDialog,
        },

        data(){
            return {
                film: {},
            };
        },

        async mounted() {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR0hh5oT80IwvQYEo3umQVMkadNIerixRBYi7hnlK-GCrjtOBSNS-GL2t7o`);

            this.film = data;
        },

        methods: {
            handleBuyTicket() {
                this.$refs.pickShiftDialog?.open();
            },
        },
    };
</script>
