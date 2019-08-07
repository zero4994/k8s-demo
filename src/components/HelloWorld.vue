<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ helloMsg }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    helloMsg: ""
  }),
  async mounted() {
    try {
      const { data } = await axios("/api/hello");
      this.helloMsg = data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
