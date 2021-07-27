<template>
  <div class="gift-item">
    <div class="img-wrap">
      <img :src="gift.mainPicUrl" alt="" />
      <span v-if="gift.isNeedVip()" class="vip-exchange">会员可兑换</span>
    </div>
    <div class="gift-detail">
      <div>{{ gift.name }}</div>
      <div>消耗{{ gift.needPointValue }}积分</div>
      <div v-if="gift.isOutStock()">
        <span v-if="gift.remainCount < 5">最后</span>剩余{{
          gift.remainCount
        }}件
      </div>
      <div v-else>等待补货</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gift: Object,
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
