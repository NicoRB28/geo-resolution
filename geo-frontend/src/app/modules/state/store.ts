import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {

  username:string;
  token:string;
  expiration:number;

}

export const getInitialState = () => {
  return {
    username:'',
    token:'',
    expiration:0,
  };
}

@Injectable({
  providedIn:'root'
})
@StoreConfig({name:'user'})
export class UserStore extends Store<UserState> {
  constructor(){
    super(getInitialState());
  }
}
