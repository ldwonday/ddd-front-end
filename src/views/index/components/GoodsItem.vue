<template>
  <div class="goods-item">
    <div class="main-info">
      <img class="goods-img" :src="detail.mainPic" alt="" />
      <div class="goods-name">{{ detail.goodsName }}</div>
      <!-- 无货-->
      <span class="out-stock" v-if="detail.status === 2">已无货</span>
    </div>
    <div class="detail-info">
      <!-- 特价商品-->
      <span class="price discount" v-if="detail.activityType === 3"
        >特价：{{ detail.price / 100 }} 元</span
      >
      <span class="price" v-else>价格：{{ detail.price / 100 }} 元</span>
      <div class="tag-wrap">
        <span class="tag" :key="index" v-for="(v, index) in filterTag">{{
          v.title
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detail: {
      required: true,
      type: Object,
    },
  },
  computed: {
    filterTag() {
      return this.detail.tag.filter((v) => v.type !== 2);
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
  .detail-info {
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
