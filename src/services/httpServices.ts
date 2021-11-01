import http from "./http-common";

class HttpService {
  getToken = async (code: string) => {
    return (await http.post("/", { code })).data;
  };
}

export default new HttpService();
