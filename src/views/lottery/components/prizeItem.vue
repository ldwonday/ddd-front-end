<template>
  <div class="prize-item">
    <div class="img-wrap">
      <img :src="prize.mainPicUrl" alt="" />
    </div>
    <div class="prize-detail">
      <div class="name">
        <span class="super-prize" v-if="prize.isSuperPrize()">超级大奖</span
        >{{ prize.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prize: Object,
  },
};
</script>
<style lang="scss">
.prize-item {
  display: flex;
  align-items: center;

  .img-wrap {
    img {
      width: 40px;
      height: 40px;
    }
  }

  .prize-detail {
    .name {
      .super-prize {
        padding: 0 5px;
        font-size: 13px;
        display: inline-block;
        border-radius: 15px;
        background: pink;
      }
    }
  }
}
</style>
