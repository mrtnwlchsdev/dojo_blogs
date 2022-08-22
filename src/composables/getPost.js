import {ref} from 'vue'

const getPost = () => {
    const post = ref([])
    const error = ref(null)

    const loadPost = async (id) => {
        try {
            const data = await fetch(`http://localhost:3000/posts/${id}`)
            if (data.ok && data.status === 200) {
                post.value = await data.json()
            }
        } catch (error) {
            error.value = error.message
        }
    }

    return {loadPost,post,error}
}

export default getPost