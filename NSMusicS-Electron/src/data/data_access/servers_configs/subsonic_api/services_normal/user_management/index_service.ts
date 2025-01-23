import {Subsonic_Api_Services_Normal} from "../Subsonic_Api_Services_Normal";

export class User_ApiService_of_ND extends Subsonic_Api_Services_Normal {
    public async getUser(username: string,token: string,salt: string): Promise<any> {
        return this.sendRequest(username, token, salt, 'getUser');
    }
}