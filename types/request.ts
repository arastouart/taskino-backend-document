export type Request<B = unknown, R = unknown> = {
  method: "get" | "post" | "put" | "delete" | "patch";
  endpoint: string;
  query?: Partial<Record<"page" | "limit" | "search", string>>;
  body?: B;
  response?: {
    status: "error" | "success";
    data?: R;
    pagination?: {
      totalItems: number;
      totalPages: number;
    };
    message?: string;
  };
  error?: string[];
};
