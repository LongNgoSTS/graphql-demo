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
exports.Mutation = exports.Profile = exports.Query = void 0;
const controller_1 = require("./controller");
exports.Query = {
    profile: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const profileController = new controller_1.ProfileController();
        const data = yield profileController.getProfile(args.username);
        return data.profile;
    }),
};
exports.Profile = {};
exports.Mutation = {
    createArticle: () => { },
};
