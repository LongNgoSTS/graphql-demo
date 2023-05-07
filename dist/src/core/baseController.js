"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseController_http$, _BaseController_endpoint;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const axios_1 = require("axios");
class BaseController {
    constructor() {
        _BaseController_http$.set(this, new axios_1.Axios({
            baseURL: "https://conduit.productionready.io/api/",
            transformResponse: res => JSON.parse(res)
        }));
        _BaseController_endpoint.set(this, "");
    }
    setEndpoint(endpoint) {
        __classPrivateFieldSet(this, _BaseController_endpoint, endpoint, "f");
    }
    get(params) {
        return __classPrivateFieldGet(this, _BaseController_http$, "f").get(__classPrivateFieldGet(this, _BaseController_endpoint, "f"), { params });
    }
    post(body) {
        return __classPrivateFieldGet(this, _BaseController_http$, "f").post(__classPrivateFieldGet(this, _BaseController_endpoint, "f"), body);
    }
    put(body) {
        return __classPrivateFieldGet(this, _BaseController_http$, "f").put(__classPrivateFieldGet(this, _BaseController_endpoint, "f"), body);
    }
    delete(params) {
        return __classPrivateFieldGet(this, _BaseController_http$, "f").delete(__classPrivateFieldGet(this, _BaseController_endpoint, "f"), { params });
    }
}
exports.BaseController = BaseController;
_BaseController_http$ = new WeakMap(), _BaseController_endpoint = new WeakMap();
