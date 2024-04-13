<template>
  <div class="main">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <h3 style="font-size: 2em; text-align: center;">
          <img :src="getImageUrl(image)" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'recom.png',
        '登录.png',
        '登录.png'
      ]
    };
  },
  methods: {
    getImageUrl(image) {
      return require(`../assets/${image}`);
    }
  }
}
</script>

</script>

</script>
<style scoped>
.main{
  height: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>