import * as dotenv from "dotenv";
import axios from "axios";
//import { CandlesResponse, Candle } from "./types/candles/Candles";
dotenv.config();

console.log(`${process.env.BITFINEX_API_KEY}`);

// Named this way to avoid clash with the existing Candle class
type CandleType = [number, number, number, number, number, number];

interface CandlesResponse {
    [key: number]: CandleType
}

interface CandlesResponse2 {
  [key: number]: CandleType
}

const candles = async () => {
  const baseUrl = "https://api-pub.bitfinex.com/v2/";
  const pathParams = "candles/trade:1h:tLTCUSD/hist";
  const queryParams = "";
  let res = await axios.get<CandlesResponse[]>(
    `${baseUrl}/${pathParams}?${queryParams}`
  );
  let { data } = res;

  for (const [key, value] of Object.entries(data)) {
    //console.log(`${key}: ${value}`);
  }
  //console.log(data)
  //let first = data[119];
  //console.log(first[1])

  console.log(data[1][0])

  // let candles: Candle[] = data.map(
  //   (candle) =>
  //     new Candle(
  //       candle[0],
  //       candle[1],
  //       candle[2],
  //       candle[3],
  //       candle[4],
  //       candle[5]
  //     )
  // );
  //console.log(candles[1].CLOSE)
};

const symbols = async () => {
  let res = await axios.get<String[]>(`https://api.bitfinex.com/v1/symbols`);
  let data: String[] = res.data;
  let filtered = data.filter((e) => e.includes("btc"));

  console.log(filtered);
};

candles();
