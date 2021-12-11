<template>
    <el-dialog
        title="Chọn giờ chiếu"
        :visible.sync="visible"
        class="shift-picker"
        width="80%"
        :before-close="close"
    >
        <el-tabs type="card" @tab-click="handleClick">
            <el-tab-pane v-for="(shift, index) in shifts" :key="`shift-${index}`">
                <span slot="label" class="flex items-center justify-between space-x-2 text-gray-500">
                    <div>
                        <div class="leading-4">{{ shift.showAt | datetimeFormat('MM') }}</div>
                        <div class="leading-4">{{ shift.showAt | datetimeFormat('EE') }}</div>
                    </div>
                    <div class="text-3xl">{{ shift.showAt | datetimeFormat('dd') }}</div>
                </span>
                <div class="flex flex-wrap justify-start items-center space-x-4">
                    <div
                        v-for="(time, _index) in shift.showTimes"
                        :key="`time-${_index}`"
                        class="px-4 py-2 border cursor-pointer hover:border-gray-700 hover:bg-gray-100"
                        @click="handlePickShift(shift, time)"
                    >
                        {{ time.value | datetimeFormat('HH:mm') }}
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">Cancel</el-button>
            <el-button type="primary">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        data: () => ({
            visible: false,
            shifts: [{
                id: 1,
                showAt: '2021-12-20T04:08:43.000Z',
                showTimes: [{
                    id: 1,
                    value: '2021-12-20T10:00:00',
                }, {
                    id: 1,
                    value: '2021-12-20T11:00:00',
                }, {
                    id: 1,
                    value: '2021-12-20T12:00:00',
                }, {
                    id: 1,
                    value: '2021-12-20T13:00:00',
                },{
                    id: 1,
                    value: '2021-12-20T14:00:00',
                }, {
                    id: 1,
                    value: '2021-12-20T15:00:00',
                }]
            }, {
                id: 2,
                showAt: '2021-12-21T04:08:43.000Z',
                showTimes: [{
                    id: 1,
                    value: '2021-12-21T10:00:00',
                }, {
                    id: 1,
                    value: '2021-12-21T11:00:00',
                }, {
                    id: 1,
                    value: '2021-12-21T12:00:00',
                }, {
                    id: 1,
                    value: '2021-12-21T13:00:00',
                },{
                    id: 1,
                    value: '2021-12-21T14:00:00',
                }, {
                    id: 1,
                    value: '2021-12-21T15:00:00',
                }]
            }],
            selectedTime: {},
        }),

        methods: {
            open() {
                console.log('asdasd');
                this.visible = true;
            },
            
            close() {
                this.visible = false;
            },

            handlePickShift(shift, time) {
                this.$router.push(`/booking/tickets?shift=${shift.id}&time=${time.id}`)
            },
        },
    };
</script>

<style>
    .shift-picker .el-tabs__item {
        height: auto;
    }
</style>
