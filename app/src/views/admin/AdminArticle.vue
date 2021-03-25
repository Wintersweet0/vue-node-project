<template>
    <div class="adminArticle">
        <!-- 文章列表 -->
        <List>
        <ListItem v-for="item in list" :key="item.id" class="item">
            <ListItemMeta :title="item.title" :description="Date(item.date)" />
            <template slot="action">
                <li>
                    <Button @click="online(item.id)">{{item.show == 0 ? '上线' : '下线'}}</Button>
                </li>
            </template>
        </ListItem>
    </List>
    </div>
</template>
<style>
    .adminArticle{
        text-align: left;
        padding: 20px 20vw;
    }
</style>
<script>
    export default {
        name: 'AdminArticle',
        components:{},
        data(){
            return{
                list:[
                    {
                        id: '1',
                        title: '一个标题',
                        date: '2020/3/21',
                        show: '1'
                    },
                    {
                        id: '2',
                        title: '二个标题',
                        date: '2020/3/21',
                        show: '1'
                    },
                    {
                        id: '3',
                        title: '三个标题',
                        date: '2020/3/21',
                        show: '1'
                    }
                ],
                listTitle:''
            }
        },
        created: function(){
            this.getArticles()
        },
        methods:{
            online(id){
                this.$api.post('admin/showArticle', {a_id: id}).then((res) => {
                    this.$Notice.info({
                        title: '提示',
                        desc: res.message
                    })
                    this.getArticles()
                })
            },
            getArticles(){
                //获取所有文章
                this.$api.get('getNewArticle').then((res) => {
                    let tData = []
                    res.data.map((item) => {
                        if(item.id !== 0){
                            tData.push(item)
                        }
                    })
                    this.list = tData
                })
            }
        }
    }
</script>