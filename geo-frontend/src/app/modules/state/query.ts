import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { UserState, UserStore } from "./store";


export class UserQuery extends Query<UserState>{
  constructor(protected userStore: UserStore) {
    super(userStore);
  }

  getUsername(): Observable<string>{
    return this.select(state => state.username);
  }

  getToken(): Observable<string> {
    return this.select(state => state.token);
  }

  getUsernameValue(){
    return this.getValue().username;
  }

  getTokeValue(){
    return this.getValue().token;
  }


  getLoading():Observable<boolean> {
    return this.selectLoading();
  }
}
