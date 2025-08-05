import type { plan } from "./plan";

export type subscription = {
  id: string;
  isActive: boolean;
  apiKey: string;
  plan: plan;
  wallet: {
    balance: number;
  };
};
