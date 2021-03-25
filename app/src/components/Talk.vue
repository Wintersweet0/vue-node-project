<template>
    <div>
        <h3 style="text-align: left">评论</h3>
        <Input v-model="data" type="textarea" :rows="4" placeholder="请输入..."/>
        <br><br>
        <Button @click="submitTalk">提交</Button>
    </div>
</template>
<script>
    export default {
        name: "Talk",
        components:{

        },
        data(){
            return{
                data: ''
            }
        },
        methods:{
            submitTalk(){
                let data = {
                    a_id: this.a_id,
                    talk: this.data
                }
                this.$api.post('/users/user/article/talk', data).then((res) => {
                    if(res.code === 0){
                        this.info(res.message)
                        this.$parent.getArticleTalk(this.a_id)
                    }else{
                        this.info(res.message)
                    }
                })
            },
            info(text) {
                this.$Notice.info({
                    title: '提示',
                    desc: text,
                    duration: 5
                });
            },
        },
        props:{
            a_id: Number
        }
    }
</script>