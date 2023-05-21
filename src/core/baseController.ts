import { AxiosResponse } from "axios";
import { Axios } from "axios";

export class BaseController {
  #http$ = new Axios({
    baseURL: "https://conduit.productionready.io/api/",
    transformResponse: (data) => JSON.parse(data),
  });
  #endpoint: string = "";

  setEndpoint(endpoint: string): void {
    this.#endpoint = endpoint;
  }

  get(params?: unknown): Promise<unknown> {
    return this.#http$.get(this.#endpoint, { params }).then((res) => res.data);
  }

  post(body?: unknown): Promise<unknown> {
    return this.#http$.post(this.#endpoint, body).then((res) => res.data);
  }

  put(body?: unknown): Promise<unknown> {
    return this.#http$.put(this.#endpoint, body).then((res) => res.data);
  }

  delete(params?: unknown): Promise<unknown> {
    return this.#http$
      .delete(this.#endpoint, { params })
      .then((res) => res.data);
  }
}
