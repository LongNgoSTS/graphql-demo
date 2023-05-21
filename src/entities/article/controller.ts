import { BaseController } from "../../core/baseController";
import { Article, ArticlePayload, QueryArticlesArgs } from "../../models";

export class ArticleController extends BaseController {
  async getArticle(slug: string): Promise<ArticlePayload> {
    this.setEndpoint(`/articles/${slug}`);
    const data = (await this.get()) as ArticlePayload;
    return (await this.get()) as ArticlePayload;
  }

  async getArticles(payload: QueryArticlesArgs): Promise<{
    articles: Article[];
    articlesCount: number;
  }> {
    const { after, authoredBy, favoritedBy, first, withTag } = payload;
    this.setEndpoint("/articles");
    return await this.get({
      tag: withTag,
      author: authoredBy,
      favorited: favoritedBy,
      limit: first,
      offset: after,
    }) as {
      articles: Article[];
      articlesCount: number;
    };
  }
}
