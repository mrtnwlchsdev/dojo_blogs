<script>
    import {ref} from 'vue'

    export default {
        name: 'Posts',
        props: ['posts'],

        setup() {
            const toggleView = ref(true)
            const showPosts = () => {
                toggleView.value = !toggleView.value
            }

            return {toggleView,showPosts}
        }
    }
</script>

<template>
    <section
        v-for="post in posts"
        :key="post.id" 
        class="main-section" 
        v-if="toggleView">
        <header class="main-section__header">
            <RouterLink :to="{name: 'posts', params: {id: post.id}}">
                <h2>
                    {{post.title}}
                </h2>
            </RouterLink>
        </header>
        <article class="main-section__content">
            {{post.body}}
        </article>
    </section>
    <button 
        @click="showPosts"
        class="main-button">
        {{toggleView ? 'Hide Posts' : 'Show Posts'}}
    </button>
</template>

<style scoped>
    .main-section {
        margin-top: 50px;
    }

    .main-section__header {
        font-size: 2rem;
    }

    .main-section__content {
        margin-top: 20px;
        font-size: 1.3rem;
    }

    .main-button {
        padding: 5px 15px;
        font-size: 1.1rem;
        font-weight: 700;
        margin-top: 10px;
        border-radius: 20px;
        outline: none;
        border: 2px solid #a3a3a3;
        box-shadow: 0 0 10px #d3d3d3;
        cursor: pointer;
    }
</style>