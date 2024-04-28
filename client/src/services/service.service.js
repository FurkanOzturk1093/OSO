import backendRequest from "../utils/backendRequest";

const service = {
  audience: {
    getAll: async ({ search, tag, status }) => {
      const response = await backendRequest.get(
        `/api/audience/getAll?search=${search}&tag=${tag}&status=${status}`
      );
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
