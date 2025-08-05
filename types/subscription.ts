import type { plan } from "./plan";

export type Subscription = {
  isActive: boolean;
  apiKey: string;
  plan: plan;
};