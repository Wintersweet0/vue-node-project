<template>
    <div>
        <!-- 文章列表 -->
        <div class="article-list">
            <Row type="flex" justify="space-around" class="code-row-bg">
                <i-col span="12">
                    <article-list :list="list" :title="listTitle">
                    </article-list>
                </i-col>
            </Row>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import articleList from '../components/articleList'
    export default {
        name: "Collection",
        components:{
            articleList
        },
        data(){
            return{
                list: [
                    {
                        title: '这是第一篇的标题',
                        id: '1'
                    },
                    {
                        title: '这是第二篇的标题',
                        id: '2'
                    },
                    {
                        title: '这是第三篇的标题',
                        id: '3'
                    },
                ],
                listTitle: '收藏文章'
            }
        },
        created: function() {
            //获取所有收藏的文章
            this.$api.get('users/user/saveList').then((res) => {
                let tData = []
                res.data.map((item) => {
                    if(item.a_id != 0){
                        tData.push(
                            {
                                id: parseInt(item.a_id),
                                title: item.title
                            }
                        )
                    }
                })
                this.list = tData
            })
        }
    }
</script>