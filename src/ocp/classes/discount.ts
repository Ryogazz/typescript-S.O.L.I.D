export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDsicount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDsicount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDsicount extends Discount {}
