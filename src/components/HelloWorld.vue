<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="row m-1">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-1">
        <el-date-picker class="w-100" v-model="selectedDate" type="daterange" range-separator="Đến" start-placeholder="Từ ngày"
          end-placeholder="Đến ngày" format="DD-MM-YYYY" />
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-1">
        <el-button class="w-100" type="primary"><i class="bi bi-search"></i></el-button>
      </div>

    </div>
    <div class="row justify-content-center mt-5 mx-2">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 mx-2 d-flex justify-content-between">
        <BallItem v-for="(ball, index) in balls" :key="ball" :ball-number="ball" :chip-number="chips[index]"
          :color="index === balls.length - 1 ? 'red' : 'yellow'" />
      </div>
    </div>
  </div>
</template>

<script>
import BallItem from './BallItem.vue';
export default {
  name: 'HelloWorld',
  components: {
    BallItem,
  },
  props: {
    msg: String
  },
  data() {
    return {
      balls: [1, 2, 3, 4, 5, 6, 7],
      chips: [12, 23, 34, 45, 56, 67, 177],
      selectedDate: [new Date(), new Date()]
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
