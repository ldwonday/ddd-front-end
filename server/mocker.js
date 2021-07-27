import goodsListData from "./data/goods";
import { userInfo } from "./data/user";
import { remainPoint, ponitRecordList, pointGiftList } from "./data/interest";
import {
  lotteryDetail,
  lotteryPrizeList,
  playLotteryResult,
  saveAddressResult,
} from "./data/lottery";

export default {
  // goods API
  // 获取商品列表
  "GET /goods/list"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(goodsListData));
  },

  // user API
  // 获取用户信息详情
  "GET /user/detail"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(userInfo));
  },

  // ponit API

  // 获取用户剩余积分
  "GET /interest/point"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(remainPoint));
  },
  // 获取用户积分记录数据
  "GET /interest/pointRecord"(req, res, ctx) {
    console.log(ponitRecordList);
    return res(ctx.status(200), ctx.json(ponitRecordList));
  },
  // 获取积分兑换奖品
  "GET /interest/gift"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(pointGiftList));
  },

  // lottery API

  // 获取该抽奖活动的详情
  "GET /lottery/detail"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(lotteryDetail));
  },
  // 获取奖品列表
  "GET /lottery/prizeList"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(lotteryPrizeList));
  },
  // 触发抽奖
  "POST /lottery/play"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(playLotteryResult));
  },
  // 填写奖品收货地址
  "POST /lottery/address"(req, res, ctx) {
    return res(ctx.status(200), ctx.json(saveAddressResult));
  },
};
