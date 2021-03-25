
<template>
    <div class="footer">
        <div v-for="item in footer" :key="item.name" class="footer-div">
            {{item.name}}:
            <router-link :to="item.src">
                {{item.text}}
            </router-link>
        </div>
        <div class="icp">
            {{icp}}
        </div>
    </div>
</template>
<style scoped>
    .footer{
        background: #4a4b4a;
        color: azure;
        min-height: 200px;
        position: relative;
    }
    .footer a{
        color: aliceblue;
    }
    .footer-div{
        padding-top: 20px;
    }
    .icp{
        position: absolute;
        bottom: 10px;
        color: darkgrey;
        width: 100vw;
    }
</style>
<script>
export default {
    name:"Footer",
    data(){
        return{
            footer:[
                {
                    name: '版权所有',
                    src: '/',
                    text: 'Stiller'
                },
                {
                    name: '发送邮件',
                    src: '/',
                    text: 'Gmail'
                }
            ],
            icp:"Copyright © 2020 | 京ICP备0000"
        }
    },
    // created(){
    //     //获取Footer菜单
    //     this.$api.get('getFooter').then((res) => {
    //         this.footer = res.data
    //     })
    // }
}
</script>