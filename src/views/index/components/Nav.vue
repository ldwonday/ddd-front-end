<template>
  <div class="nav">
    <div>Demo 商城</div>
    <div class="user">
      <img :class="{ vip: userInfo.vip }" :src="userInfo.avatar" alt="" />
      <span
        >{{ userInfo.userType === 2 ? "尊敬的签约客户：" : null
        }}{{ userInfo.userName }}</span
      >
    </div>
  </div>
</template>
<script>
import * as api from "../apis/user";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    api.getUserInfo().then((data) => {
      this.userInfo = data;
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
