<template>
  <div class="goods-item">
    <div class="main-info">
      <img class="goods-img" :src="good.mainPicUrl" alt="" />
      <div class="goods-name">{{ good.name }}</div>
      <!-- 无货-->
      <span class="out-stock" v-if="good.isOutStock()">已无货</span>
    </div>
    <div class="good-info">
      <!-- 特价商品-->
      <span class="price discount" v-if="good.isDiscountGoods()"
        >特价：{{ good.price }} 元</span
      >
      <span class="price" v-else>价格：{{ good.price }} 元</span>
      <div class="tag-wrap">
        <span
          class="tag"
          :key="index"
          v-for="(v, index) in good.getShowInListTags()"
          >{{ v.title }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    good: {
      required: true,
      type: Object,
    },
  },
  computed: {
    filterTag() {
      return this.good.tag.filter((v) => v.type !== 2);
    },
  },
};
</script>
<style lang="scss">
.goods-item {
  border-bottom: 1px solid gray;
  margin-top: 10px;
  .main-info {
    display: flex;
    align-items: center;

    .goods-img {
      width: 50px;
      height: 50px;
    }

    .out-stock {
      font-size: 12px;
      background: pink;
      color: white;
      margin-left: 20px;
    }
  }
  .good-info {
    display: flex;
    justify-content: space-between;
    .discount {
      color: red;
    }
    .tag-wrap {
      .tag {
        margin-left: 5px;
        font-size: 13px;
        background: gray;
        color: white;
      }
    }
  }
}
</style>
