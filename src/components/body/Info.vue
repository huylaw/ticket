<template>
    <div class="bg-black">
        <div class="container mx-auto text-white py-20 px-36">
            <div class="text-3xl">Nội dung phim</div><hr/>
            <div class="flex my-10">
                <img src="https://ephimmoi.net/wp-content/uploads/2021/11/ngoi-nha-duoi-nuoc-54785-thumbnail-250x350.jpg" />
                <div class="px-10">
                    <ul>
                        <li>Tên phim:</li>
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
    import PickShiftDialog from '@/components/shift/Dialog.vue';

    export default {
        components: {
            PickShiftDialog,
        },

        data(){
            return {

            };
        },

        methods: {
            handleBuyTicket() {
                this.$refs.pickShiftDialog?.open();
            },
        },
    };
</script>
