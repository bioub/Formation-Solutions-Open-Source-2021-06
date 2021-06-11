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
    },
  },
  render() {
    return (
      <button class="counter" onClick={this.increment}>
        {this.count}
      </button>
    );
  },
};
</script>
