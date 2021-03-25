<template>
    <div v-if="userInfo.phone" class="plane">
        <h2>用户资料</h2>
        <Row class="text-item">
            <i-col span="12">
                输入用户昵称：
            </i-col>
            <i-col span="12">
                <Input v-model="userInfo.nickname" :value="userInfo.nickname" placeholder="输入用户昵称" style="width: auto"/>
            </i-col>
        </Row>
        <Row class="text-item">
            <i-col span="12">
                输入电话：
            </i-col>
            <i-col span="12">
                <Input v-model="userInfo.phone" :value="userInfo.phone" placeholder="输入电话" style="width: auto"/>
            </i-col>
        </Row>
        <Row class="text-item">
            <i-col span="12">
                输入年龄：
            </i-col>
            <i-col span="12">
                <Input v-model="userInfo.age" :value="userInfo.age" placeholder="输入年龄" type="number" style="width: auto"/>
            </i-col>
        </Row>
        <br>
        <Button @click="changeUserInfo">修改资料</Button>
        &nbsp; &nbsp; &nbsp;
        <Button @click="showCPsd">修改密码</Button>
        <div v-show="changePsd">
            <Row class="text-item">
                <i-col span="12">
                    输入密码：
                </i-col>
                <i-col span="12">
                    <Input v-model="password" type="password" placeholder="输入密码" style="width: auto"/>
                </i-col>
            </Row>
            <Row class="text-item">
                <i-col span="12">
                    再次输入密码：
                </i-col>
                <i-col span="12">
                    <Input v-model="repassword" type="password" placeholder="重新输入密码" style="width: auto"/>
                </i-col>
            </Row>
            <Button @click="changeUserPsd">修改密码</Button>
        </div>
    </div>
    <div v-else class="plane">
        <h2>用户资料</h2>
        <Row class="text-item">
            <i-col span="12">
                用户名：
            </i-col>
            <i-col span="12">
                {{userInfo.username}}
            </i-col>
        </Row>
        <Row class="text-item">
            <i-col span="12">
                昵称：
            </i-col>
            <i-col span="12">
                {{userInfo.nickname}}
            </i-col>
        </Row>
        <Row class="text-item">
            <i-col span="12">
                年龄：
            </i-col>
            <i-col span="12">
                {{userInfo.age}}
            </i-col>
        </Row>
        <Row class="text-item">
            <i-col span="12">
                性别：
            </i-col>
            <i-col span="12">
                {{userInfo.sex}}
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'UserInfo',
    components:{

    },
    data(){
        return{
            userInfo:{
                username: 'DIO',
                nickname: 'dio',
                age: '20',
                sex: 'male'
            },
            //是否显示修改密码框
            changePsd:false,
            password: '',
            repassword: ''
        }
    },
    created: function(){
        if('username' in this.$route.params){
            this.$api.get('users/user/info/' + this.$route.params.username).then((res) => {
                if(res.code === 0){
                    this.userInfo = res.data
                }else{
                    this.$Notice.open({
                        title: '错误',
                        desc: '用户信息错误',
                        duration: 5
                    })
                    if(res.code === 403){
                        this.$router.push({path: '/login'})
                    }
                }
            })
        }
    },
    methods:{
        showCPsd(){
            this.changePsd = true
        },
        //修改资料
        changeUserInfo(){
            //构造修改字符串
            let data ={
                nickname: this.userInfo.nickname,
                age: this.userInfo.age,
                phone: this.userInfo.phone
            }
            this.changeInfo(data)
        },
        //修改密码
        changeUserPsd(){
            if(this.password === this.repassword){
                let data = {
                    password: this.password
                }
                this.changeInfo(data)
            }else{
                this.$Notice.info({
                    title: '提示',
                    desc: "两次输入不一致"
                })
            }
        },
        //统一的提交方法
        changeInfo(data){
            this.$api.post('users/user/changeInfo', data).then((res) => {
                this.$Notice.info({
                    title: '提示',
                    desc: res.message
                })
            })
        }
    }
}
</script>
<style>
    .plane{
        padding: 10vw 30vw;
    }
    .text-item{
        padding-top: 10px;
    }
</style>