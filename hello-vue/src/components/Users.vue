<template>
  <p v-for="u in users" :key="u.id">{{ u.name }}</p>
</template>

<script>
import { fetchUsers } from '../api';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetchUsers().then(res => {
      this.users = res.data;
    });
  },
};
</script>
