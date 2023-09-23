import { ref } from 'vue'

export default function useBlogPosts() {
  const posts = ref([]);

  const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  };

  return { posts, getPosts };
}