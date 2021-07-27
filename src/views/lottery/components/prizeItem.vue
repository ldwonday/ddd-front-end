<template>
  <div class="prize-item">
    <div class="img-wrap">
      <img :src="data.pic" alt="" />
    </div>
    <div class="prize-detail">
      <div class="name">
        <span class="super-prize" v-if="data.type === 2">超级大奖</span
        >{{ data.prizeName }}
      </div>
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
