<template>
    <div class="user-manager">
        <!-- 用户列表 -->
        <List>
        <ListItem v-for="item in list" :key="item.id" class="item">
            <ListItemMeta :title="item.username" :description="'ip地址：' + item.ip" />
            <template slot="action">
                <li>
                    <Button @click="online(item.username)">{{item.login == 0 ? '封停' : '解封'}}</Button>
                </li>
            </template>
        </ListItem>
    </List>
    </div>
</template>
<style>
    .user-manager{
        padding: 20px 20vw;
    }
</style>
<script>
    export default {
        name: 'AdminUsers',
        components:{

        },
        data(){
            return{
                list: [
                    {
                        username: 'JoJo',
                        login: '1',
                        ip: '这是个ip地址'
                    },
                    {
                        username: 'KaQIn',
                        login: '0', 
                        ip: '这是二ip地址'
                    },
                    {
                        username: 'DIO',
                        login: '0', 
                        ip: '这是三ip地址'
                    },
                ]
            }
        },
        created: function(){
            this.getUsers()
        },
        methods:{
            online(username){
                this.$api.get('admin/stopLogin' + username).then((res) => {
                    this.$Notice.info({
                        title: '提示',
                        desc: res.message
                    })
                    this.getUsers()
                })
            },
            getUsers(){
                this.$api.get('admin/getAllUser').then((res) => {
                    this.list = res.data
                })
            }
        }
    }
</script>