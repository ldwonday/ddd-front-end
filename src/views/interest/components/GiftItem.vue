<template>
  <div class="gift-item">
    <div class="img-wrap">
      <img :src="data.pic" alt="" />
      <span v-if="data.type === 3" class="vip-exchange">会员可兑换</span>
    </div>
    <div class="gift-detail">
      <div>{{ data.name }}</div>
      <div>消耗{{ data.value }}积分</div>
      <div v-if="data.count > 0">
        <span v-if="data.count < 5">最后</span>剩余{{ data.count }}件
      </div>
      <div v-else>等待补货</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
.gift-item {
  display: flex;
  flex-direction: column;
  width: 100px;
  .img-wrap {
    position: relative;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .vip-exchange {
      font-size: 12px;
      position: absolute;
      right: 0px;
      top: 0px;
      background: salmon;
    }
  }
  .gift-detail {
    font-size: 13px;
  }
}
</style>
