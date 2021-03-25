<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <div class="main">
            <Icon type="md-book" />
            <router-link to ="/">
                {{index}}
            </router-link>
            </div>
        </MenuItem>
        <MenuItem v-for="item in menu" :name="item.name" :key="item.name">
            <router-link :to ="item.src">
                {{item.name}}
            </router-link>
        </MenuItem>
        <MenuItem name="2">
            <Dropdown v-if="userBtn">
                <a href="javascript:void(0)">
                    用户：{{username}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <div @click="goUrl('/userInfo/'+username)">个人信息</div>
                    </DropdownItem>
                    <DropdownItem>
                        <div @click="goUrl('/mail')">我的私信</div>
                    </DropdownItem>
                    <DropdownItem>
                        <div @click="goUrl('/collection')">我的收藏</div>
                    </DropdownItem>
                    <DropdownItem>
                        <div @click="exit">退出</div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <router-link v-if="!userBtn" to ="/login">
                登录
            </router-link>
        </MenuItem>
    </Menu>
</template>
<style scoped>
    .main{
        font-weight: 600;
    }
    a {
        color: #2f2f2f;
    }
</style>
<script>
export default {
    name: "Nav",
    data(){
        return {
            menu: [
                {
                    name: '主页',
                    src: '/'
                },
                {
                    name: '文章',
                    src: '/articles'
                }
            ],
            index:'MySite',
            themel:'light',
            userBtn: false,
            username: ''
        }
    },
    created() {
        //获取导航菜单
        this.$api.get('getNavMenu').then((res) => {
            //写数据
            this.menu = res.data
        })
        setInterval(() =>{
            console.log("轮询")
            //获取用户Token是否存在
            if(sessionStorage.getItem('token')){
                this.userBtn = true
                this.username = sessionStorage.getItem('username')
            }else{
                this.userBtn = false
            }
        },3000)
    },
    updated(){

    },
    methods:{
        //用户退出
        exit(){
            console.log(sessionStorage.getItem('token'))
            sessionStorage.removeItem('token')
        },
        goUrl(url){
            this.$router.push({path: url})
        }
    }
}
</script>