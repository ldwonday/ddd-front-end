<template>
  <div class="user-page">
    <h3>个人中心</h3>
    <div class="user">
      <div class="info">
        <div>
          <span v-if="user.isSignUserType()">尊敬的签约客户</span
          >{{ user.name }}
        </div>
        <div>绑定手机号： {{ user.phoneNumber }}</div>
        <div>绑定email： {{ user.email }}</div>
      </div>
      <div class="avatar">
        <img :class="{ vip: user.isVip }" :src="user.avatarUrl" alt="" />
        <div v-if="user.isNeedRemindUserVipLack() && user.isVip">
          会员还有{{ user.getVipRemainDays() }}天
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
import { UserService, InterestService } from "./services";
import User from "../../common/domain/user/entities/user";
export default {
  data() {
    return {
      pointCount: null,
      user: new User(),
    };
  },
  mounted() {
    this.getUserInfo();
    this.getUserPonitCount();
  },
  methods: {
    getUserInfo() {
      UserService.getUserDetail().then((user) => {
        this.user = user;
      });
    },
    getUserPonitCount() {
      InterestService.getUserPointCount().then((count) => {
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
