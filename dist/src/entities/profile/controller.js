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
exports.ProfileController = void 0;
const baseController_1 = require("../../core/baseController");
class ProfileController extends baseController_1.BaseController {
    getProfile(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setEndpoint(`/profiles/${username}`);
            return (yield this.get());
        });
    }
    followProfile(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setEndpoint(`/profiles/${username}/follow`);
            return yield this.post();
        });
    }
    unfollowProfile(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setEndpoint(`/profiles/${username}/follow`);
            return yield this.delete();
        });
    }
}
exports.ProfileController = ProfileController;
