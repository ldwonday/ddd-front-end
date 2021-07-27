<template>
  <div class="lottery-page">
    <div class="lottery-detail">
      <h3>抽奖详情</h3>
      <div class="name">name: {{ lotteryDetail.name }}</div>
      <div>
        抽奖类型：{{
          lotteryDetail.lotteryType &&
          lotteryTypeMap[lotteryDetail.lotteryType].title
        }}
      </div>
      <div>time: {{ timeRange }}</div>
    </div>
    <div class="lottery-prize">
      <h3>奖品列表</h3>
      <prize-item :key="index" v-for="(v, index) in prizeList" :data="v" />
      <button @click="handlePlayLottery">点击抽奖</button>
      <div class="save-address-modal" v-if="isShowSaveAddressModal">
        <div>收货地址填写</div>
        姓名：<input @click="handleInputChange($event, 'name')" type="text" />
        手机：<input @click="handleInputChange($event, 'tel')" type="text" />
        地址：<input
          @click="handleInputChange($event, 'address')"
          type="text"
        />
        <button @click="handleSubmit">提交</button>
      </div>
    </div>
    <div class="user-info">
      <span
        ><span v-if="userInfo.userType === 2">尊敬的签约客户</span
        >{{ userInfo.userName }}</span
      >
      <div>您还剩余: {{ pointCount }} 分</div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import {
  getLotteryDetail,
  getPrizeList,
  lotteryPlay,
  saveAdress,
} from "./apis/lottery";
import { getUserInfo } from "./apis/user";
import { getUserPointCount } from "./apis/interest";

import { lotteryTypeMap } from "./constants";
import PrizeItem from "./components/prizeItem";

const LotteryId = "8274";

export default {
  props: {
    data: Object,
  },
  components: { PrizeItem },
  data() {
    return {
      lotteryDetail: {},
      prizeList: [],
      userInfo: {},
      pointCount: null,
      prizeRecord: {},
      isShowSaveAddressModal: false,
      addressInfo: {},
      lotteryTypeMap,
    };
  },
  mounted() {
    this.initLottery();
    this.getUserInfo();
    this.getUserPointCount();
  },
  computed: {
    timeRange() {
      const { startDate, endDate } = this.lotteryDetail;
      return (
        dayjs(startDate).format("M月D日") +
        "-" +
        dayjs(endDate).format("M月D日")
      );
    },
  },
  methods: {
    initLottery() {
      getLotteryDetail(LotteryId).then((data) => {
        this.lotteryDetail = data;
      });

      getPrizeList(LotteryId).then((data) => {
        this.prizeList = data;
      });
    },
    getUserInfo() {
      getUserInfo().then((data) => {
        this.userInfo = data;
      });
    },
    getUserPointCount() {
      getUserPointCount().then((count) => {
        console.log(1111, count);
        this.pointCount = count;
      });
    },
    handlePlayLottery() {
      lotteryPlay(LotteryId).then((data) => {
        this.prizeRecord = data;
        this.isShowSaveAddressModal = data.type === 2;
        alert(
          `恭喜获得：${data.prizeName}${
            data.type === 2 ? ",请填写收货信息" : ""
          }`
        );
      });
    },
    handleInputChange(e, key) {
      const { addressInfo } = this.state;
      addressInfo[key] = e.target.value;
      this.addressInfo = addressInfo;
    },
    handleSubmit() {
      const { addressInfo, prizeRecord } = this.state;
      const data = {
        obsRecordId: prizeRecord.recordId,
        name: addressInfo.name,
        mobile: addressInfo.tel,
        address: addressInfo.address,
      };
      saveAdress(data).then(() => {
        this.isShowSaveAddressModal = false;
        alert("提交成功");
      });
    },
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
