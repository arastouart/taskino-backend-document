import type { Copun } from "../types/copun";
import type { Request } from "../types/request";

export const createCopun: Request<
  Pick<Copun, 'code' | 'plans'>,
  void
> = {
  method: "post",
  endpoint: "/copuns",
  body: {
    code: 'NEW-COPUN-CODE',
    plans: ['654321', '123456'],
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const getAllCopun: Request<void, Copun[]> = {
  method: "get",
  endpoint: "/copuns",
  query: {
    page: "1",
    limit: "10",
    search: "",
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

export const updateCopunById: Request<
  Pick<Copun, "code" | "plans">,
  void
> = {
  method: "patch",
  endpoint: "/copuns/{copunId}",
  body: {
    code: "UPDATED-COPUN-CODE",
    plans: ["654321", "123456"],
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const changeStatusCopunById: Request<
  Pick<Copun, "isActive">,
  void
> = {
  method: "patch",
  endpoint: "/copuns/{copunId}/status",
  body: {
    isActive: true,
  },
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};

export const deleteCopunById: Request<void, void> = {
  method: "delete",
  endpoint: "/copuns/{copunId}",
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};
