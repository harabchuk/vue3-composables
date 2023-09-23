<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="post in posts.slice(0, maxItems)" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import useBlogPosts from '../composables/useBlogPosts.js';

export default {
  name: 'BlogPosts',

  props: {
    title: {
      type:String,
      default: 'Blog Posts',
    },
    maxItems: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    const { posts: blogPosts, getPosts } = useBlogPosts();
    getPosts();
    this.posts = blogPosts;
  },
};


</script>


