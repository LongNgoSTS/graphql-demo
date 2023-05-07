import {BaseController} from "../../core/baseController";
import {Article, ArticlePayload} from "../../models";

export class ArticleController extends BaseController {

    async getArticle(slug: string): Promise<ArticlePayload> {
        this.setEndpoint(`/articles/${slug}`)
        return await this.get() as ArticlePayload;
    }

    async getArticles(): Promise<unknown> {
        this.setEndpoint("/articles");
        return this.get();
    }
}