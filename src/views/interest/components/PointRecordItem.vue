<template>
  <div class="point-record-item">
    <span>{{ record.getDaysFromNow() }} 天前：</span>
    <span>{{ record.description }}</span>
    <span>{{ record.isSpendPoint() ? "消耗" : "获得" }}</span>
    <span>{{ record.spendPointValue }}积分</span>
  </div>
</template>
<script>
export default {
  props: {
    record: Object,
  },
};
</script>
<style lang="scss">
.point-record-item {
  display: flex;
  justify-content: space-around;
  border: 1px solid salmon;
  margin-top: 15px;
}
</style>
