<template>
  <div class="nav">
    <div>Demo 商城</div>
    <div class="user">
      <img :class="{ vip: user.isVip }" :src="user.avatarUrl" alt="" />
      <span
        ><span v-if="user.isSignUserType()"
          >尊敬的${{ user.getUserTypeTitle() }}</span
        >{{ user.name }}</span
      >
    </div>
  </div>
</template>
<script>
import { UserService } from "../services";
import User from "../../../common/domain/user/entities/user";
export default {
  data() {
    return {
      user: new User(),
    };
  },
  mounted() {
    UserService.getUserDetail().then((user) => {
      this.user = user;
      console.log(111, this.user);
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
