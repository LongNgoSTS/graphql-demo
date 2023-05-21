import { map, chain } from "lodash";

export class PaginationModel {
  //   constructor(data: {
  //     results: any;

  //   }) {
  //     this.#prepareCursor(data.results, data.results);
  //   }

  #toBase64(value): string {
    value = typeof value !== "string" ? value.toString() : value;

    return Buffer.from(value).toString("base64");
  }

  #fromBase64(value): string {
    return Buffer.from(value, "base64").toString();
  }

  #getPageInfoForCursor(edges, { first = 0, after }) {
    return {
      startCursor: chain(edges).first().get("cursor").value(),
      endCursor: chain(edges).last().get("cursor").value(),
      hasNextPage: edges.length >= first,
      hasPreviousPage: after ? edges.length <= first : false,
    };
  }

  #getEdgesForCursor(results: unknown) {
    return map(results, (result, index) => ({
      cursor: this.#toBase64(index),
      node: result,
    }));
  }

  prepareCursor(
    results: any[],
    countNumber: number,
    paging: {
      first: number;
      after: string;
    }
  ): any {
    const edges = this.#getEdgesForCursor(results);
    const count = countNumber;
    const pageInfo = this.#getPageInfoForCursor(edges, paging);

    return {
      count,
      pageInfo,
      edges,
    };
  }
}
