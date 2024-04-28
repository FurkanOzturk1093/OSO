import backendRequest from "../utils/backendRequest";

const service = {
  audience: {
    getAll: async ({ search, tag, status }) => {
      const response = await backendRequest.get(
        `/api/audience/getAll?search=${search}&tag=${tag}&status=${status}`
      );
      return response;
    },
    delete: async (id) => {
      const response = await backendRequest.delete("/api/audience/delete", {
        data: { id },
      });
      return response;
    },
    create: async (data) => {
      const response = await backendRequest.post("/api/audience/create", data);
      return response;
    },
    update: async (id, data) => {
      const response = await backendRequest.put("/api/audience/update", {
        id,
        data,
      });
      return response;
    },
  },
  tags: {
    getAll: async () => {
      const response = await backendRequest.get("/api/tags/getAll");
      return response;
    },
  },
};

export default service;
