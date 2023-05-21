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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = exports.Query = void 0;
const paginationModel_1 = require("../../core/paginationModel");
const controller_1 = require("./controller");
exports.Query = {
    article: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const articleController = new controller_1.ArticleController();
        return (yield articleController.getArticle(args.slug)).article;
    }),
    articles: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const articleController = new controller_1.ArticleController();
        const data = yield articleController.getArticles(args);
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
