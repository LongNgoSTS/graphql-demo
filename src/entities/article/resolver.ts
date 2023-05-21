import { PaginationModel } from "../../core/paginationModel";
import {
  Article,
  ArticlesConnection,
  QueryArticleArgs,
  QueryArticlesArgs,
} from "../../models";
import { ArticleController } from "./controller";

export const Query = {
  article: async (
    _: unknown,
    args: QueryArticleArgs,
    context: unknown
  ): Promise<Article> => {
    const articleController = new ArticleController();
    return (await articleController.getArticle(args.slug)).article;
  },

  articles: async (
    _: unknown,
    args: QueryArticlesArgs,
    context: unknown
  ): Promise<ArticlesConnection> => {
    const articleController = new ArticleController();
    const data = await articleController.getArticles(args);
    const paginationModel = new PaginationModel();

    return paginationModel.prepareCursor(data.articles, data.articlesCount, {
      after: args.after,
      first: args.first,
    }) as ArticlesConnection;
  },
};

export const Mutation = {
  createArticle: () => {},
};
