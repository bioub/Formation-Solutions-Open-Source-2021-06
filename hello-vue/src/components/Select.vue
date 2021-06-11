<template>
  <div class="select-host">
    <div class="select" @click="open = !open">{{ selected }}</div>
    <div class="menu" v-if="open">
      <div v-for="value in values" :key="value" @click="handleClick(value)">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    values: Array,
    selected: String,
  },
  emits: ['selectedChange'],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClick(value) {
      this.$emit('selectedChange', value);
      this.open = false;
    }
  }
};
</script>

<style scoped>
.menu,
.select {
  border: 1px solid black;
  cursor: pointer;
}
</style>
