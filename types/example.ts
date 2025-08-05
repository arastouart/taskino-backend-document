import type { Response } from "./response";

export type Example<B = unknown, R = unknown> = {
  method: "get" | "post" | "put" | "delete" | "patch";
  endpoint: string;
  body?: B;
  response?: Response<R>;
  error?: string[];
};
