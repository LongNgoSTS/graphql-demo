import { BaseController } from "../../core/baseController";
import {ProfilePayload} from "../../models";
import {AxiosResponse} from "axios";

export class ProfileController extends BaseController {
  async getProfile(username: string): Promise<ProfilePayload> {
    this.setEndpoint(`/profiles/${username}`);
    return (await this.get()).data as ProfilePayload;
  }

  async followProfile(username: string): Promise<unknown> {
    this.setEndpoint(`/profiles/${username}/follow`);
    return await this.post();
  }

  async unfollowProfile(username: string): Promise<unknown> {
    this.setEndpoint(`/profiles/${username}/follow`);
    return await this.delete();
  }
}
