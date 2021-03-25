<template>
<div>
    <!-- 轮播图 -->
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem :key="item.title" v-for="item in pic">
            <div class="demo-carousel">
                <router-link :to="item.src">
                    <img :src="item.img"/>
                    <div>
                        {{item.title}}
                    </div>
                </router-link>
            </div>
        </CarouselItem>
    </Carousel>
    <!-- 文章列表 -->
    <div class="article-list">
        <row type="flex" justify="space-around" class="code-row-bg">
            <i-col span = "11">
                <article-list :list="list" :title="listTitle">
                </article-list>
            </i-col>
            <i-col span = "11">
                <article-list :list="hotList" :title="hotListTitle">
                </article-list>
            </i-col>
        </row>
    </div>
</div>    
</template>
<style>
    .demo-carousel{
        width: 98vw;
        height: 30vw;
    }
    .demo-carousel img{
        width: 100%;
        position: relative;
    }
    .demo-carousel div{
        padding: 30px;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
        color: white;
        font-size: 60px;
        width: 70%;
        top: 10vw;
        text-align: center;
        margin-left: 15%;
    }
    .article-list{
        padding: 20px 0 20px 0;
    }
</style>
<script>
import ArticleList from '../components/articleList'
export default {
    name: 'Home',
    components: {
        ArticleList
    },
    data(){
        return{
            value2:0,
            pic:[
                {
                    title: "MySite",
                    src: "/articles",
                    img: require("../../public/test.jpg")
                }
            ],
            list: [
                {
                    id:'1',
                    title: 'test1'
                }
            ],
            listTitle: '最新文章',
            hotList: [
                {
                    id:'2',
                    title: 'test2'
                }
            ],
            hotListTitle: '最热文章'
        }
    },
    // created: function(){
    //     //获取轮播图
    //     this.$api.get('getIndexPic').then((res) => {
    //         console.log(res.data)
    //         this.pic = res.data
    //     })
    //     //获取所有文章
    //     this.$api.get('getNewArticle').then((res) => {
    //         let rData = res.data.slice(0, 5)
    //         let tData = []
    //         rData.map((item) => {
    //             if(item.id != 0){
    //                 tData.push(item)
    //             }
    //         })
    //         this.list = tData
    //     })
    //     //获取热点文章
    //     this.$api.get('getHotArticle').then((res) => {
    //         let rData = res.data.slice(0, 5)
    //         let tData = []
    //         rData.map((item) => {
    //             if(item.id != 0){
    //                 tData.push(item)
    //             }
    //         })
    //         this.hotList = tData
    //     })
    // }
}
</script>