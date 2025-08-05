export type Response<T = unknown> = {
  // status: 'error' | 'success';
  data?: T;
  pagination?: {
    totalItems: number;
    totalPages: number;
  };
  message?: string;
};