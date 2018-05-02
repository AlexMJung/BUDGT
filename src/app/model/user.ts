export class User {
  id: string;
  name: string;

  startingAmount: number;
  currentAmount?: number;
  warningAmount?: number;
  ohNoAmount: number;

  countUpOperationType: boolean;
  resetDays?: number;
}
