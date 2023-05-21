import { PaginationModel } from "../../core/paginationModel";
import {
  ArticlesConnection,
  Profile as ProfileModel,
  QueryArticlesArgs,
  QueryProfileArgs,
} from "../../models";
import { ArticleController } from "../article/controller";
import { ProfileController } from "./controller";

export const Query = {
  profile: async (_: unknown, args: QueryProfileArgs, context: unknown) => {
    const profileController = new ProfileController();
    const data = await profileController.getProfile(args.username);
    return data.profile;
  },
};

export const Profile = {
  articles: async (
    parent: ProfileModel,
    args: QueryArticlesArgs,
    context: unknown
  ) => {
    const articleController = new ArticleController();
    const data = await articleController.getArticles({
      ...args,
      authoredBy: parent.username,
    });
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

export const Subscription = {
  countdown: {
    // This will return the value on every 1 sec until it reaches 0
    subscribe: async function* (_, { from }) {
      for (let i = from; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        yield { countdown: i }
      }
    }
  }
}