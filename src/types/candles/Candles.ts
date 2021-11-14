/**
 * Maps the response's internal array (a single candle)
 *
 * [
 *
 * &nbsp;&nbsp; [ 1636858800000, 256.41, 257.47, 257.63, 256.23, 592.60287106 ],
 *
 * &nbsp;&nbsp; ..
 *
 * ]
 *
 * - Key 0 = MTS
 * - Key 1 = OPEN
 * - Key 2 = CLOSE
 * - Key 3 = HIGH
 * - Key 4 = LOW
 * - Key 5 = VOLUME
 */
export interface SingleCandleResponse {
  [key: number]: number;
}

/**
 * Maps the whole Candles response body
 */
export type CandlesResponse = SingleCandleResponse[];

/**
 * Wrapper for the Candles response giving meaningful names to the fields
 */
export class Candle {
  MTS: number;
  OPEN: number;
  CLOSE: number;
  HIGH: number;
  LOW: number;
  VOLUME: number;

  constructor(
    MTS: number,
    OPEN: number,
    CLOSE: number,
    HIGH: number,
    LOW: number,
    VOLUME: number
  ) {
    this.MTS = MTS;
    this.OPEN = OPEN;
    this.CLOSE = CLOSE;
    this.HIGH = HIGH;
    this.LOW = LOW;
    this.VOLUME = VOLUME;
  }

  /**
   * Returns an array of mapped candles from an API call
   * @param {CandlesResponse} candlesResponse return type of the candles API call
   * @returns
   */
  static candlesBuilder = (candlesResponse: CandlesResponse): Candle[] => {
    let candles: Candle[] = candlesResponse.map(
      (candle) =>
        new Candle(
          candle[0],
          candle[1],
          candle[2],
          candle[3],
          candle[4],
          candle[5]
        )
    );
    return candles;
  };
}
