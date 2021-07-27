<template>
  <div class="user-page">
    <h3>个人中心</h3>
    <div class="user">
      <div class="info">
        <div>
          <span v-if="userInfo.userType === 2">尊敬的签约客户</span
          >{{ userInfo.userName }}
        </div>
        <div>绑定手机号： {{ userInfo.tel }}</div>
        <div>绑定email： {{ userInfo.email }}</div>
      </div>
      <div class="avatar">
        <img :class="{ vip: userInfo.vip }" :src="userInfo.avatar" alt="" />
        <div v-if="remainDay < 6 && userInfo.vip">
          会员还有{{ remainDay }}天
        </div>
      </div>
    </div>

    <div class="lottery-tips">
      <div>剩余积分：{{ pointCount }} 分</div>
      <a href="/interest">前往积分权益中心 ></a>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import { getUserInfo } from "./apis/user";
import { getUserPointCount } from "./apis/interest";
export default {
  data() {
    return {
      userInfo: {},
      pointCount: null,
    };
  },
  computed: {
    remainDay() {
      return dayjs(this.userInfo.vipValidityDate).diff(new Date(), "day");
    },
  },
  mounted() {
    this.getUserInfo();
    this.getUserPonitCount();
  },
  methods: {
    getUserInfo() {
      getUserInfo().then((data) => {
        this.userInfo = data;
      });
    },
    getUserPonitCount() {
      getUserPointCount().then((count) => {
        this.pointCount = count;
      });
    },
  },
};
</script>
<style lang="scss">
.user-page {
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      font-size: 13px;
    }
    .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 13px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }

      .vip {
        border: 4px solid salmon;
      }
    }
  }
  .lottery-tips {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
  }
}
</style>
