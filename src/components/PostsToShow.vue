<script>
import { defineComponent, ref, watch } from 'vue';

const NumPostsOptions = [5, 10, 15, 20, 25];

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const numPosts = ref(props.modelValue);

    watch(numPosts, (val) => {
      emit('update:modelValue', val);
    });

    return {
      NumPostsOptions,
      numPosts
    }
  }
});
</script>

<template>
  <select v-model="numPosts">
    <option v-for="option in NumPostsOptions" :key="option" :value="option">
      Show {{ option }} posts
    </option>
  </select>
</template>

<style scoped>

</style>