export type Response<T = unknown> = {
  status: boolean;
  data?: T;
  pagination?: {
    totalItems: number;
    totalPages: number;
  };
  message?: string;
};