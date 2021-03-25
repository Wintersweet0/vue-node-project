<template>
    <div class="article">
        <!-- 私信详情 -->
        <Divider/>
        <List item-layout="vertical">
            <ListItem v-for="mail in mails" :key="mail.m_id">
                <router-link :to="/mailGetter/ + mail.m_id">
                    <ListItemMeta title="私信" :description="mail.users[1]+'与'+mail.users[0]"/>
                </router-link>
            </ListItem>
        </List>
    </div>
</template>
<style>

</style>
<script>
    export default {
        name: 'Mails',
        components: {},
        data(){
            return{
                mails: [
                    {
                        m_id: "1",
                        users: ["dio", "kaqin","jojo"]
                    }
                ]
            }
        },
        created: function(){
            //获取文章
            this.$api.get('users/user/mailsGet').then((res) => {
                if(res.code === 0){
                    this.mails = res.data
                }else{
                    this.info(res.message)
                }
            })
        },
        methods:{
            info(text){
                this.$Notice.info({
                    title: '提示',
                    desc: text
                })
            }
        }
    }
</script>