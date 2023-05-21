"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PaginationModel_instances, _PaginationModel_toBase64, _PaginationModel_fromBase64, _PaginationModel_getPageInfoForCursor, _PaginationModel_getEdgesForCursor;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationModel = void 0;
const lodash_1 = require("lodash");
class PaginationModel {
    constructor() {
        //   constructor(data: {
        //     results: any;
        _PaginationModel_instances.add(this);
    }
    prepareCursor(results, countNumber, paging) {
        const edges = __classPrivateFieldGet(this, _PaginationModel_instances, "m", _PaginationModel_getEdgesForCursor).call(this, results);
        const count = countNumber;
        const pageInfo = __classPrivateFieldGet(this, _PaginationModel_instances, "m", _PaginationModel_getPageInfoForCursor).call(this, edges, paging);
        return {
            count,
            pageInfo,
            edges,
        };
    }
}
exports.PaginationModel = PaginationModel;
_PaginationModel_instances = new WeakSet(), _PaginationModel_toBase64 = function _PaginationModel_toBase64(value) {
    value = typeof value !== "string" ? value.toString() : value;
    return Buffer.from(value).toString("base64");
}, _PaginationModel_fromBase64 = function _PaginationModel_fromBase64(value) {
    return Buffer.from(value, "base64").toString();
}, _PaginationModel_getPageInfoForCursor = function _PaginationModel_getPageInfoForCursor(edges, { first = 0, after }) {
    return {
        startCursor: (0, lodash_1.chain)(edges).first().get("cursor").value(),
        endCursor: (0, lodash_1.chain)(edges).last().get("cursor").value(),
        hasNextPage: edges.length >= first,
        hasPreviousPage: after ? edges.length <= first : false,
    };
}, _PaginationModel_getEdgesForCursor = function _PaginationModel_getEdgesForCursor(results) {
    return (0, lodash_1.map)(results, (result, index) => ({
        cursor: __classPrivateFieldGet(this, _PaginationModel_instances, "m", _PaginationModel_toBase64).call(this, index),
        node: result,
    }));
};
