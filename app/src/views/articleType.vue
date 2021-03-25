<template>
    <!-- 文章列表 -->
    <div class="article-list">
        <row type="flex" justify="space-around" class="code-row-bg">
            <i-col span = "24">
                <article-list :list="list" :title="listTitle">
                </article-list>
            </i-col>
        </row>
    </div>
</template>
<script>
import ArticleList from '../components/articleList'
export default {
    name: 'articleType',
    components: {
        ArticleList
    },
    data(){
        return{
            list: [
                {
                    id:'1',
                    title: 'test1'
                }
            ],
            listTitle: '木大木大'
        }
    },
    created: function(){
        //如果传递的是type
        if('type' in this.$route.query){
            let data = {type: this.$route.query.type}
            this.getData(data, '分类：' + this.$route.query.type)
        }
        //如果传递的是tag
        if('tag' in this.$route.query){
            let data = {type: this.$route.query.tag}
            this.getData(data, '标签：' + this.$route.query.tag)
        }
    },
    methods:{
        getData(data, title){
            //获取分类下的所有文章
            this.$api.post('getArticles', data).then((res) => {
                let tData = []
                res.data.map((item) => {
                    if(item.id !== 0){
                        tData.push(item)
                    }
                })
                this.listTitle = title
                this.list = tData
            })
        }
    }
}
</script>