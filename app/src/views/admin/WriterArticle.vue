<template>
    <div class="article_writer">
        <div class="item">
            <h3>文章名称</h3>
            <Input v-model="title" placeholder="请输入文章名称" style="width: 300px"/>
        </div>
        <div class="item">
            <h3>文章作者</h3>
            <Input v-model="writer" placeholder="请输入文章作者" style="width: 300px"/>
        </div>
        <div class="item">
            <h3>文章分类</h3>
            <Select v-model="type" style="width: 200px">
                <Option v-for="item in articleType" :value="item.uid" :key="item.uid">
                    {{item.name}}
                </Option>
            </Select>
        </div>
        <div class="item">
            <h3>文章小标签</h3>
            <Input v-model="tag" placeholder="使用空格进行分割" style="width: 300px"/>
        </div>
        <div>
            <!-- 文章详情 -->
            <h3 style="text-align: left">文章详情</h3>
            <Editor id="tinymce" v-model="text" :init="init"></Editor>
            <br><br>
            <Button @click="submission">提交</Button>
        </div>
    </div>
</template>
<style>
    .article_writer{
        padding: 40px 10vw 40px 10vw;
        text-align: left;
    }
    .article_writer .item{
        padding-bottom: 20px;
    }
</style>
<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver/theme'
    import 'tinymce/icons/default'

    export default {
        name: 'WriterArticle',
        components:{
            Editor
        },
        data(){
            return{
                text: '我失骄杨君失柳，杨柳轻飏直上重霄九，闻讯吴刚何所有，吴刚捧出桂花酒。寂寞嫦娥舒广袖，万里长空且为忠魂舞。忽报人间曾伏虎，泪飞顿作倾盆雨。',
                title: '蝶恋花 答李淑一',
                writer: '',
                type: '',
                tag: '',
                //类别
                articleType: [],

                //初始化配置
                init:{
                    selector: 'textarea',  // change this value according to your HTML
                    plugin: 'a_tinymce_plugin',
                    a_plugin_option: true,
                    skin_url: "/skins/ui/oxide", // skin路径
                    height: 300,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                }
            }
        },
        mounted(){
            tinymce.init({})
        },
        created: function(){
            //获取所有分类
            this.$api.get('/users/user/getArticleType').then((res) => {
                //写数据
                this.articleType = res.data
            })
        },
        methods:{
            info(text){
                this.$Notice.info({
                    title: '提示',
                    desc: text
                })
            },
            //文章提交
            submission(){
                let data = {
                    title: this.title,
                    writer: this.writer,
                    text: this.text,
                    type: parseInt(this.type),
                    tag: this.tag.split(" ")
                }
                this.$api.post('/admin/setArticle', {article: data}).then((res) => {
                    this.info(res.message)
                })
            }
        }
    }
</script>