<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <DateRangePicker />
    <div style="display: flex; justify-content: space-around;width: 500px; margin: 0 auto;">
      <BallItem v-for="(ball, index) in balls" :key="ball" :ball-number="ball" :chip-number="chips[index]"
        :color="index === balls.length - 1 ? 'red' : 'yellow'" />
    </div>
  </div>
</template>

<script>
import BallItem from './BallItem.vue';
//import WavingFlag from './WavingFlag.vue';
export default {
  name: 'HelloWorld',
  components: {
    BallItem,
    //WavingFlag,
  },
  props: {
    msg: String
  },
  data() {
    return {
      balls: [1, 2, 3, 4, 5, 6, 7],
      chips: [12, 23, 34, 45, 56, 67, 177]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
style
