import axios from "../../../shared/util/http";
import { goodsTranslator } from "./translators";

export function getGoodsList() {
  return axios("/goods/list").then((v) => {
    return v.map((item) => goodsTranslator(item));
  });
}
