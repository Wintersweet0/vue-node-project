<template>
    <div class="article">
        <div>
            <h3>与{{mail.toUser}}的对话</h3>
            <List style="text-align: left" item-layout="vertical">
                <ListItem v-for="item in mail.mail" :key="item.time">
                    <ListItemMeta :title="Date(item.time)" :description="item.text" />
                </ListItem>
            </List>
        </div>
        <!-- 评论 -->
        <div>
            <h3 style="text-align: left">评论</h3>
            <Input v-model="mailText" type="textarea" :rows="4" placeholder="请输入..."/>
            <br><br>
            <Button @click="submitMail">提交</Button>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        name: "mailGetter",
        components:{

        },
        data(){
            return{
                mail: {
                    mail: [
                        {
                            time: '',
                            text: "ka no dio da!"
                        },
                        {
                            time: '',
                            text: "ka no dio da!"
                        }
                    ],
                    toUser: 'JoJo'
                },
                mailText:'',
                id: ''
            }
        },
        created: function(){
            if('id' in this.$route.params){
                let id = this.$route.params.id
                console.log(id)
                this.getMail(id)
            }
        },
        methods:{
            info(text){
                this.$Notice.info({
                    title: '提示',
                    desc: text
                })
            },
            submitMail(){
                let sendData = {
                    text: this.mailText
                }
                this.$api.post('/users/user/mail/' + this.mail.toUser, sendData).then((res) => {
                    if(res.code === 0){
                        this.getMail(this.id)
                    }else{
                        this.info(res.message)
                    }
                })
            },
            getMail(id){
                this.$api.get('/users/user/mailsGet/' + id).then((res) => {
                    if(res.code === 0){
                        this.mail = res.data
                        this.id = id
                    }else{
                        this.info(res.message)
                    }
                })
            }
        }
    }
</script>