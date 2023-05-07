import { ProfileController } from "./controller";
import {QueryProfileArgs} from "../../models";

export const Query = {
  profile: async(_: unknown, args: QueryProfileArgs, context: unknown) => {
    const profileController = new ProfileController();
    const data = await profileController.getProfile(args.username);
    return data.profile
  },
};

export const Profile = {

};
export const Mutation = {
  createArticle: () => {},
};
