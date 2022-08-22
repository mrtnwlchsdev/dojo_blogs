<script>
    import getPost from '../composables/getPost'

    export default {
        props: ['id'],

        setup(props) {
            const {loadPost,post} = getPost()

            loadPost(props.id)

            return {post}
        }
    } 
</script>

<template>
    <section class="main-section">
        <header class="main-section__header">
            <h2>{{post.title}}</h2>
        </header>
        <article class="main-section__content">
            <p>{{post.body}}</p>
            <ul class="main-section__tags">
                <li v-for="tag in post.tags" :key="post.tags">
                    #{{tag}}
                </li>
            </ul>
        </article>
        <RouterLink :to="{name: 'home'}">
            <button class="main-button">Back</button>
        </RouterLink>
    </section>
</template>

<style scoped>
    .main-section {
        width: 90%;
        margin: auto;
        padding-top: 50px;
    }

    .main-section__header {
        font-size: 2rem;
    }

    .main-section__content {
        margin-top: 20px;
        font-size: 1.3rem;
    }

    .main-section__tags {
        display: flex;
        gap: 20px;
        flex-direction: row;
        margin: 10px 0;
        list-style-type: none;
        opacity: .5;
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