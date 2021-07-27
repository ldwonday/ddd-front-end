<template>
  <div>
    <Nav />
    <h3>商品列表</h3>
    <div class="goods-list">
      <goods-item v-for="(v, index) in goodsList" :key="index" :good="v" />
    </div>
  </div>
</template>
<script>
import { GoodsService } from "./services";
import Nav from "./components/Nav";
import GoodsItem from "./components/GoodsItem";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  components: { GoodsItem, Nav },
  mounted() {
    GoodsService.getGoodsList().then((list) => {
      this.goodsList = list;
    });
  },
};
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 20px;
    }
    .vip {
      border: 5px solid red;
    }
  }
}
</style>
