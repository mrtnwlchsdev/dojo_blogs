import {ref} from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const data = await fetch('http://localhost:3000/posts')
            if (data.ok && data.status === 200) {
                posts.value = await data.json()
            } else {
                throw new Error('No data available')
            }
        } catch (error) {
            error.value = error.message
        }
    }
    return {load,posts,error}
}

export default getPosts