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
const express = require("express");
const dotenv = require("dotenv");
const graphql_yoga_1 = require("graphql-yoga");
const rootSchema_1 = require("./entities/rootSchema");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv.config({});
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema: yield (0, rootSchema_1.default)(),
    });
    const app = express();
    const port = process.env.PORT || 3000;
    app.use(yoga);
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
});
main().catch((err) => console.log(err));
