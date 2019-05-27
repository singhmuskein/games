const IMAGE_HOST = {
  HOST: "https://rukminim1.flixcart.com/",
  VARIABLE: "www/200/200/promos/",
  DATE: "27/09/2018/",
  IMAGE_EXTENSION_PNG: ".png",
  IMAGE_QUALITY: "q=90"
};

const IMAGE_BASE = `${IMAGE_HOST.HOST}${IMAGE_HOST.VARIABLE}`;
const IMAGE_EXTENSION_AND_QUALITY = `${IMAGE_HOST.IMAGE_EXTENSION_PNG}?${
  IMAGE_HOST.IMAGE_QUALITY
}`;
export const ASSETS = {
  //SNAKE
  SNAKE: require("../assets/images/snake.png"),
  //RIBBON
  RIBBONGREEN: require("../assets/images/banner.svg"),
  RIBBONGREY: require("../assets/images/banner2.svg"),
  CROWN: require("../assets/images/crown.svg"),
  //HUURAY_EARNED
  HURRAY_EARNED: `${IMAGE_BASE}27/09/2018/3f148356-ef82-40cd-a772-2d87df790058${IMAGE_EXTENSION_AND_QUALITY}`,
  //FLIPKART_HOME
  FLIPKART_HOME: `${IMAGE_BASE}/21/09/2018/ff278c1b-db1c-4f50-a2b9-d0c39cd1434a${IMAGE_EXTENSION_AND_QUALITY}`
};
