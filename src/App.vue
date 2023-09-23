<script setup>
import { ref } from 'vue';
import BlogPosts from './components/BlogPostsOptions.vue'
import PostsToShow from './components/PostsToShow.vue';

const numPosts = ref(15);

</script>

<template>
  <BlogPosts
      title="New posts"
      :max-items="numPosts"
  />
  <PostsToShow v-model="numPosts" />
</template>

