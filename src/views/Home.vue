<script>
    import Posts from '../components/Posts.vue'
    import getPosts from '../composables/getPosts'
    import getPost from '../composables/getPost'
    
    export default {
        components: {Posts},

        setup() {
            const {load,posts,error} = getPosts()

            load()

            return {posts,error}
        }
    }

</script>

<template>
    <main class="main">
        <header class="main-header">
            <h1>--DOJO BLOG--</h1>
        </header>
        <Posts
            :posts="posts"/>
    </main>
</template>

<style scoped>
    .main {
        width: 90%;
        margin: auto;
        padding-top: 50px;
    }

    .main-header {
        text-align: center;
        font-size: 3rem;
    }
</style>