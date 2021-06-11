<template>
  <button class="counter" @click="increment()">{{ count }}</button>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
