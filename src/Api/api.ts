import axios from "./axios";

export default {
  /**登录 */
  login: (val: any) => {
    return axios.post("/api/login", val);
  },
  /**添加商品 */
  addgoods: (val: any) => {
    return axios.post("/addGoods", val);
  },
  /**获取商品列表 */
  goodsList: (val: any) => {
    return axios.get("/getGoods", { params: val });
  },
  /**删除商品 */
  deleGoods: (val: any) => {
    return axios.post("/deleGoods?id=" + val);
  },
  /**添加分类 */
  addClass: (val: any) => {
    return axios.post("/addClass", val);
  },
  /**获取分类 */
  getClass: (val: any) => {
    return axios.get("/getClass");
  },
  /**删除分类 */
  deleClass: (val: any) => {
    return axios.post("/deleClass?value=" + val);
  },
  /**商品详情 */
  goodsInfo: (val: any) => {
    return axios.get("/goodsInfo?id=" + val);
  },
  /**修改商品详情 */
  SetGoodsInfo: (val: any) => {
    return axios.post("/SetGoodsInfo", val);
  },
  /**修改商品状态 */
  SetGoodsState: (val: any) => {
    return axios.post("/SetGoodsState", val);
  },
  /**添加轮播图   */
  addMaxImg: (val: any) => {
    return axios.post("/addMaxImg", val);
  },
  /**获取轮播图 */
  maxImg: () => {
    return axios.get("/api/maxImg");
  },
  /**修改轮播图 */
  setMaxImg: (val: object) => {
    return axios.post("/setMaxImg", val);
  },
};
