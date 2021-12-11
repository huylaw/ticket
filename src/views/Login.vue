<template>
    <div class="bg-gray-900">
        <div class="container flex flex-col flex-wrap justify-center min-h-screen">
            <div class="bg-white w-1/4 mx-auto shadow-md">
                <div class="bg-gray-700 flex justify-center p-5 text-white text-lg font-extrabold">
                    <h1>Đăng nhập</h1>
                </div>
                <div class="p-8">
                    <el-form v-model="form" :rules="rules" size="small">
                        <!--Tên đăng nhập-->
                        <div class="-mb-2">
                            <el-form-item label="Email" prop="email">
                                <el-input v-model="form.email" type="email" placeholder="Nhập email"/>
                            </el-form-item>
                        </div>
                        <!--Password-->
                        <div class="-mb-2">
                            <el-form-item label="Mật khẩu" prop="password">
                                <el-input v-model="form.password" type="password" placeholder="Nhập mật khẩu" show-password/>
                            </el-form-item>
                        </div>
                        <!---->
                        <div class="flex justify-between flex-wrap">
                            <el-button type="text" size="small"><router-link to='/register'>Chưa có tài khoản?</router-link></el-button>
                            <el-button type="text" size="small"><router-link to=''>Quên mật khẩu</router-link></el-button>
                        </div>
                        <div class="flex flex-row-reverse mt-2">
                            <el-button type="info" size="small" plain @click="onLogin">Đăng nhập</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login',
    data:() => ({
        form: {
            email: '',
            password: ''
        },
        rules: {
            email:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            password:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ]
        }
    }),
    methods: {
        onLogin(){
            console.log(this.form);
            this.$message.success('Đăng nhập thành công');
        }
    }
}
</script>
