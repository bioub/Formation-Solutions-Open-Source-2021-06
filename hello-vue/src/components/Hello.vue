<template>
  <div class="hello">
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: String
  }
}
</script>
