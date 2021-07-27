<template>
  <div class="lottery-page">
    <div class="lottery-detail">
      <h3>抽奖详情</h3>
      <div class="name">name: {{ lottery.name }}</div>
      <div>抽奖类型：{{ lottery.getLotteryType() }}</div>
      <div>time: {{ lottery.getLotteryTimeScope() }}</div>
    </div>
    <div class="lottery-prize">
      <h3>奖品列表</h3>
      <prize-item :key="index" v-for="(v, index) in prizeList" :prize="v" />
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
        ><span v-if="user.isSignUserType()">尊敬的签约客户</span
        >{{ user.name }}</span
      >
      <div>您还剩余: {{ pointCount }} 分</div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import { UserService, InterestService, LotteryService } from "./services";
import PrizeItem from "./components/prizeItem";
import User from "../../common/domain/user/entities/user";
import Lottery from "../../common/domain/lottery/entities/lottery";
import Prize from "../../common/domain/lottery/entities/prize";

const LotteryId = "8274";

export default {
  props: {
    data: Object,
  },
  components: { PrizeItem },
  data() {
    return {
      user: new User(),
      pointCount: null,
      lottery: new Lottery(),
      prizeList: [],
      recordId: "",
      gainPrize: new Prize(),
      isShowSaveAddressModal: false,
      addressInfo: {},
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
      LotteryService.getLotteryDetail(LotteryId).then((lottery) => {
        this.lottery = lottery;
      });

      LotteryService.getPrizeList(LotteryId).then((list) => {
        this.prizeList = list;
      });
    },
    getUserInfo() {
      UserService.getUserDetail().then((user) => {
        this.user = user;
      });
    },
    getUserPointCount() {
      InterestService.getUserPointCount().then((count) => {
        this.pointCount = count;
      });
    },
    handlePlayLottery() {
      LotteryService.playLottery(LotteryId).then((result) => {
        const { recordId, prize } = result;
        this.recordId = recordId;
        this.gainPrize = prize;
        this.isShowSaveAddressModal = true;
        alert(`恭喜获得：${prize.name},请填写收货信息}`);
      });
    },
    handleInputChange(e, key) {
      const { addressInfo } = this.state;
      addressInfo[key] = e.target.value;
      this.addressInfo = addressInfo;
    },
    handleSubmit() {
      const { addressInfo, recordId } = this;
      const data = {
        recordId,
        name: addressInfo.name,
        phoneNumber: addressInfo.phoneNumber,
        address: addressInfo.address,
      };
      LotteryService.savePrizeAddress(data).then(() => {
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
