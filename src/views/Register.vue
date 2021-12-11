<template>
    <div class="bg-gray-900">
        <div class="container flex flex-col flex-wrap justify-center min-h-screen">
            <div class="bg-white w-1/4 mx-auto shadow-md">
                <div class="bg-gray-700 flex justify-center p-5 text-white text-lg font-extrabold">
                    <h1>Đăng ký</h1>
                </div>
                <div class="p-8">
                    <el-form v-model="form" :rules="rules" size="small">
                        <!--tên-->
                        <div class="-mb-2">
                            <el-form-item label="Họ tên" prop="name">
                                <el-input v-model="form.name" placeholder="Nhập họ tên"/>
                            </el-form-item>
                        </div>
                        <!--ngày sinh-->
                        <div class="-mb-2">
                            <el-form-item label="Ngày sinh" prop="birthday">
                                <el-input v-model="form.birthday" type="date" placeholder="Nhập ngày sinh"/>
                            </el-form-item>
                        </div>
                        <!--giới tính-->  
                        <div class="-mb-4">                  
                            <el-form-item label="Giới tính" prop="sex">
                                <el-radio-group v-model="form.sex">
                                    <el-radio label="Nam" />
                                    <el-radio label="Nữ" />
                                </el-radio-group>
                            </el-form-item>
                        </div>
                        <!--Số điện thoại-->
                        <div class="-mb-2">
                            <el-form-item label="Số điện thoại" prop="tel">
                                <el-input v-model="form.tel" type="tel" placeholder="Nhập số điện thoại"/>
                            </el-form-item>
                        </div>
                        <!--email-->
                        <div class="-mb-2">
                            <el-form-item label="Email" prop="email">
                                <el-input v-model="form.email" type="email" placeholder="Nhập email"/>
                            </el-form-item>
                        </div>
                        <!--mật khẩu-->
                        <div class="-mb-2">
                            <el-form-item label="Mật khẩu" prop="password">
                                <el-input v-model="form.password" type="password" placeholder="Nhập mật khẩu" show-password/>
                            </el-form-item>
                        </div>
                        <!--nhập lại mật khẩu-->
                        <el-form-item label="Nhập lại mật khẩu" prop="savepassword">
                            <el-input v-model="form.savepassword" type="password" placeholder="Nhập lại mật khẩu" show-password/>
                        </el-form-item>
                        <!---->
                        <div class="flex justify-between">
                            <el-button type="text" size="small"><router-link to='/login'>Đăng nhập</router-link></el-button>
                            <el-button type="info" size="small" plain @click="onRegister">Đăng ký</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data:() => ({
        form: {
            name: '',
            birthday: '',
            sex: '',
            tel: '',
            email: '',
            password: '',
            savepassword: ''
        },
        rules: {
            name:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            birthday:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            sex:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            tel:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            email:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            password:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ],
            savepassword:[
                {required: true, message: 'Không được bỏ trường này', trigger:'blur'}
            ]
        }
    }),
    methods: {
        onRegister(){
            console.log(this.form);
            this.$message.success('Đăng ký thành công');
        }
    }
}
</script>
