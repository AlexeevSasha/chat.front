import { BaseRequest } from "@/api/baseRequest";
import { IAuthResponse, IAuthSighIn, IAuthSighUp } from "@/modules/auth/interfaces/auth";
import { urlApiPath } from "@/common/constants/urlApiPath";

export class AuthRequest extends BaseRequest {
  signin(payload: IAuthSighIn) {
    return this.post<IAuthResponse>(urlApiPath.auth.signin, JSON.stringify(payload));
  }
  signup(payload: IAuthSighUp) {
    return this.post<IAuthResponse>(urlApiPath.auth.signup, JSON.stringify(payload));
  }
  logout() {
    return this.get(urlApiPath.auth.logout);
  }
}
