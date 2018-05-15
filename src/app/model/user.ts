
export class User {
  id?: string;
  name: string;

  startingAmount: number;
  currentAmount?: number;
  warningAmount?: number;
  ohNoAmount: number;

  countUpOperationType: string;
  resetTiming?: string;
  currencyType?: string;
  themeColor?: string;
}
