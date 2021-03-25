<template>
    <Card>
        <p slot="title">
            {{title}}
        </p>
        <p v-for="item in list" :key="item.id" style="margin-top: 5px">
            <router-link :to="'/article/' + item.id">
                {{item.title}}
            </router-link>
        </p>
    </Card>
</template>
<script>
    export default {
        name: "ArticleList",
        data () {
            return {}
        },
        created () {
        },
        props:{
            title: String,
            list: Array
        }
    }
</script>