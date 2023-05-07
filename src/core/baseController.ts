import { AxiosResponse } from "axios";
import { Axios } from "axios";

export class BaseController {
  #http$ = new Axios({
    baseURL: "https://conduit.productionready.io/api/",
    transformResponse: res => JSON.parse(res)
  });
  #endpoint: string = "";

  setEndpoint(endpoint: string): void {
    this.#endpoint = endpoint;
  }

  get(params?: unknown): Promise<AxiosResponse<unknown>> {
    return this.#http$.get(this.#endpoint, { params });
  }

  post(body?: unknown): Promise<AxiosResponse<unknown>> {
    return this.#http$.post(this.#endpoint, body);
  }

  put(body?: unknown): Promise<AxiosResponse<unknown>> {
    return this.#http$.put(this.#endpoint, body);
  }

  delete(params?: unknown): Promise<AxiosResponse<unknown>> {
    return this.#http$.delete(this.#endpoint, { params });
  }
}
