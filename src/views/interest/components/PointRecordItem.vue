<template>
  <div class="point-record-item">
    <span>{{ day }} 天前：</span>
    <span>{{ data.title }}</span>
    <span>{{ data.type === 1 ? "消耗" : "获得" }}</span>
    <span>{{ data.value }}积分</span>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  props: {
    data: Object,
  },
  computed: {
    day() {
      return dayjs(new Date()).diff(this.data.date, "day");
    },
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
