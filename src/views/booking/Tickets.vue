<template>
    <div class="container my-8">
        <div class="border-2">
            <div class="text-center bg-gray-400 py-2">
                BOOKING ONLINE
            </div>
            <div class="bg-yellow-100 p-2">
                <div>
                    CGV Hùng Vương Plaza | Cinema 6 | Số ghế (262/262)
                </div>
                <div>
                    12/12/2021 13:30 ~ 12/12/2021 16:30
                </div>
            </div>
            <div class="bg-gray-400 text-center py-2">
                Người / ghế
            </div>
            <div>
                <el-image src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png" fit="fill" class="w-full my-4" />
                <div class="mt-8">
                    <div v-for="rowIndex in shiftTime.row" :key="`row-${rowIndex}`" class="flex justify-center space-x-2 mb-4">
                        <div
                            v-for="colIndex in shiftTime.col"
                            :key="`col-${colIndex}`"
                            class="w-12 h-8 flex items-center justify-center text-center border cursor-pointer"
                            :class="getSitClass(rowIndex, colIndex)"
                            @click="handlePickSit(rowIndex, colIndex)"
                        >
                            {{ getAlphabet(rowIndex) }}{{ colIndex }}
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            shiftTime: {
                id: 1,
                row: 15,
                col: 10,
                picked: [
                    { x: 3, y: 14 },
                    { x: 1, y: 5 },
                    { x: 3, y: 2 },
                    { x: 4, y: 18 },
                    { x: 6, y: 8 },
                ],
                vip: [5, 6, 7, 8, 9, 10],
            },
            pickedSits: [],
        }),

        methods: {
            getAlphabet(number) {
                return String.fromCharCode(number - 1 + 'A'.charCodeAt(0));
            },

            getSitClass(row, col) {
                if (this.shiftTime.picked.find((item) => item.x === col && item.y === row)) {
                    return 'border-gray-300 bg-gray-300 cursor-not-allowed';
                } else if (this.pickedSits.find((item) => item.x === col && item.y === row)) {
                    return 'border-red-300 bg-red-300';
                }
                
                return this.shiftTime.vip.includes(row) ? 'border-red-500 hover:bg-red-100' : 'border-green-500 hover:bg-green-100';
            },

            handlePickSit(row, col) {
                const index = this.pickedSits.findIndex((item) => item.x === col && item.y === row);
                if (index !== -1) {
                    this.pickedSits.splice(index, 1);
                } else {
                    this.pickedSits.push({ x: col, y: row });
                }
            },
        },
    };
</script>