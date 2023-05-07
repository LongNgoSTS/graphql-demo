import { QueryArticleArgs } from "../../models";
import { ArticleController } from "./controller";

export const Query = {
  article: async (_: unknown, args: QueryArticleArgs, context: unknown) => {
    const articleController = new ArticleController();
    return await articleController.getArticle(args.slug);
  },
};

export const Mutation = {
    createArticle: () => {}
}
