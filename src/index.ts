import * as dotenv from "dotenv";
import axios from "axios";
import { SingleCandleResponse, Candle } from "./types/candles/Candles";
dotenv.config();

const candles = async () => {
  const baseUrl = "https://api-pub.bitfinex.com/v2/";
  const pathParams = "candles/trade:1h:tLTCUSD/hist";
  const queryParams = "";
  let res = await axios.get<SingleCandleResponse[]>(
    `${baseUrl}/${pathParams}?${queryParams}`
  );
  let { data } = res;

  let candles = Candle.candlesBuilder(data);
  console.log(candles[1].CLOSE);
};

const symbols = async () => {
  let res = await axios.get<String[]>(`https://api.bitfinex.com/v1/symbols`);
  let data: String[] = res.data;
  let filtered = data.filter((e) => e.includes("btc"));

  console.log(filtered);
};

candles();
