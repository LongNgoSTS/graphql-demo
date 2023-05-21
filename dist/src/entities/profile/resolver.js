"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = exports.Mutation = exports.Profile = exports.Query = void 0;
const paginationModel_1 = require("../../core/paginationModel");
const controller_1 = require("../article/controller");
const controller_2 = require("./controller");
exports.Query = {
    profile: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const profileController = new controller_2.ProfileController();
        const data = yield profileController.getProfile(args.username);
        return data.profile;
    }),
};
exports.Profile = {
    articles: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const articleController = new controller_1.ArticleController();
        const data = yield articleController.getArticles(Object.assign(Object.assign({}, args), { authoredBy: parent.username }));
        const paginationModel = new paginationModel_1.PaginationModel();
        return paginationModel.prepareCursor(data.articles, data.articlesCount, {
            after: args.after,
            first: args.first,
        });
    }),
};
exports.Mutation = {
    createArticle: () => { },
};
exports.Subscription = {
    countdown: {
        // This will return the value on every 1 sec until it reaches 0
        subscribe: function (_, { from }) {
            return __asyncGenerator(this, arguments, function* () {
                for (let i = from; i >= 0; i--) {
                    yield __await(new Promise((resolve) => setTimeout(resolve, 1000)));
                    yield yield __await({ countdown: i });
                }
            });
        }
    }
};
