/*
 * 1. create copun
 * 2. get all copuns
 * 3. get copun by id
 * 4. update copun by id
 * 5. change status of copun by id
 * 6. delete copun by id
 */

import { messagesSuccess } from "../messages/success";
import type { Copun } from "../types/copun";
import type { Request } from "../types/request";

export const createCopun: Request<Pick<Copun, "code" | "plans">, void> = {
  method: "post",
  endpoint: "/copuns",
  body: {
    code: "NEW-COPUN-CODE",
    plans: ["654321", "123456"],
  },
  response: {
    message: messagesSuccess[0],
    status: "success",
  },
};

export const getAllCopuns: Request<void, Copun[]> = {
  method: "get",
  endpoint: "/copuns",
  query: {
    page: "1",
    limit: "10",
  },
  response: {
    data: [
      {
        id: "123456",
        code: "COPUN-CODE-1",
        plans: ["654321", "123456"],
        isActive: true,
      },
    ],
    pagination: {
      totalItems: 20,
      totalPages: 2,
    },
    status: "success",
  },
};

export const getCopunById: Request<void, Copun> = {
  method: "get",
  endpoint: "/copuns/{copunId}",
  response: {
    data: {
      id: "123456",
      code: "COPUN-CODE-1",
      plans: ["654321", "123456"],
      isActive: true,
    },
    status: "success",
  },
};

export const updateCopunById: Request<Pick<Copun, "code" | "plans">, void> = {
  method: "patch",
  endpoint: "/copuns/{copunId}",
  body: {
    code: "UPDATED-COPUN-CODE",
    plans: ["654321", "123456"],
  },
  response: {
    message: messagesSuccess[1],
    status: "success",
  },
};

export const changeStatusCopunById: Request<Pick<Copun, "isActive">, void> = {
  method: "patch",
  endpoint: "/copuns/{copunId}/status",
  body: {
    isActive: true,
  },
  response: {
    status: "success",
    message: messagesSuccess[3],
  },
};

export const deleteCopunById: Request<void, void> = {
  method: "delete",
  endpoint: "/copuns/{copunId}",
  response: {
    status: "success",
    message: messagesSuccess[2],
  },
};
