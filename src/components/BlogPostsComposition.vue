<script>
import { defineComponent } from 'vue';
import useBlogPosts from '../composables/useBlogPosts.js';

export default defineComponent({
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

  setup() {
    const { posts, getPosts } = useBlogPosts();

    getPosts();

    return {
      posts,
    };
  },
});


</script>

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
