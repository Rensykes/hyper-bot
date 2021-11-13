export interface CandlesResponse {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

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
}
