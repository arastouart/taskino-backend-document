export type WalletTransaction = {
  id: string;
  type: "credit" | "debit";
  amount: number;
  remainingBalance: number;
  timestamp: string;
  description: string;
  code: string | null;
};

export type Wallet = {
  balance: number;
  transactions: WalletTransaction[];
};
