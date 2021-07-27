<template>
  <div class="interest-page">
    <h3>积分中心</h3>
    <div>
      <span v-if="userInfo.userType === 2">尊敬的签约客户</span
      >{{ userInfo.userName }}
    </div>
    <div>剩余积分： {{ remainPoint }}</div>
    <h3>积分记录</h3>
    <div class="point-record">
      <point-record-item
        :key="index"
        v-for="(v, index) in pointRecordList"
        :data="v"
      />
    </div>
    <h3>积分兑换</h3>
    <div class="point-exchange">
      <gift-item
        :key="index"
        v-for="(v, index) in interestGiftList"
        :data="v"
      />
    </div>
    <div class="lottery-tips">
      <a href="/lottery">积分抽大奖></a>
    </div>
  </div>
</template>
<script>
import {
  getUserPointCount,
  getUserPointRecord,
  getInterestGift,
} from "./apis/interest";
import { getUserInfo } from "./apis/user";
import PointRecordItem from "./components/PointRecordItem";
import GiftItem from "./components/GiftItem";
export default {
  data() {
    return {
      remainPoint: null,
      pointRecordList: [],
      interestGiftList: [],
      userInfo: {},
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
      getUserPointCount().then((count) => {
        this.remainPoint = count;
      });
    },
    getUserInfo() {
      getUserInfo().then((data) => {
        this.userInfo = data;
      });
    },
    getUserPointRecordList() {
      getUserPointRecord().then((data) => {
        this.pointRecordList = data;
      });
    },
    getInterestGiftList() {
      getInterestGift().then((data) => {
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
