import type { Request } from "../types/request";
import type { Transaction } from "../types/transaction";

export const getAllCollection: Request<void, Transaction[]> = {
  method: "get",
  endpoint: "/collections",
  query: {
    page: "1",
    limit: "10",
  },
  response: {
    data: [
      {
        id: "123456",
        amount: 1000,
        timestamp: "2023-10-01T12:00:00Z",
        description: "Payment for course subscription",
        code: null,
      },
    ],
    pagination: {
      totalItems: 20,
      totalPages: 2,
    },
    status: "success",
  },
};
