<template>
  <Hello name="Romain" />
  <Counter />
  <Counter />
  <CounterJSX />
  <CounterJSX />
  <Select
    :values="['red', 'green', 'blue']"
    :selected="color"
    @selectedChange="updateColor"
  />
  <p>Vous avez sélectionné : {{ color }}</p>
</template>

<script>
import Hello from './Hello.vue';
import Counter from './Counter.vue';
import CounterJSX from './CounterJSX.vue';
import Select from './Select.vue';

export default {
  name: 'Home',
  components: {
    Hello,
    Counter,
    CounterJSX,
    Select,
  },
  data() {
    return {
      color: 'green',
    };
  },
  methods: {
    updateColor(color) {
      this.color = color;
    },
  },
};
</script>
