<template>
  <div class="interest-page">
    <h3>积分中心</h3>
    <div>
      <span v-if="user.isSignUserType()"
        >尊敬的{{ user.getUserTypeTitle() }}</span
      >{{ user.name }}
    </div>
    <div>剩余积分： {{ remainPoint }}</div>
    <h3>积分记录</h3>
    <div class="point-record">
      <point-record-item
        :key="index"
        v-for="(v, index) in pointRecordList"
        :record="v"
      />
    </div>
    <h3>积分兑换</h3>
    <div class="point-exchange">
      <gift-item
        :key="index"
        v-for="(v, index) in interestGiftList"
        :gift="v"
      />
    </div>
    <div class="lottery-tips">
      <a href="/lottery">积分抽大奖></a>
    </div>
  </div>
</template>
<script>
import { UserService, InterestService } from "./services";
import PointRecordItem from "./components/PointRecordItem";
import GiftItem from "./components/GiftItem";
import User from "../../common/domain/user/entities/user";
export default {
  data() {
    return {
      remainPoint: null,
      pointRecordList: [],
      interestGiftList: [],
      user: new User(),
    };
  },
  components: { PointRecordItem, GiftItem },
  mounted() {
    this.getUserPointCount();
    this.getUserPointRecordList();
    this.getInterestGiftList();
    this.getUserInfo();
  },
  methods: {
    getUserPointCount() {
      InterestService.getUserPointCount().then((count) => {
        this.remainPoint = count;
      });
    },
    getUserInfo() {
      UserService.getUserDetail().then((user) => {
        this.user = user;
      });
    },
    getUserPointRecordList() {
      InterestService.getPointRecordList().then((data) => {
        this.pointRecordList = data;
      });
    },
    getInterestGiftList() {
      InterestService.getInterestGiftList().then((data) => {
        this.interestGiftList = data;
      });
    },
  },
};
</script>
<style lang="scss">
.interest-page {
  .point-exchange {
    display: flex;
  }
  .lottery-tips {
    text-align: center;
    margin-top: 40px;
  }
}
</style>
