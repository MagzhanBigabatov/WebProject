import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User, registr_login } from './module';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public CurrentUser$ = new Subject<registr_login>
      public changeCurrentUser(user: registr_login){
        this.CurrentUser$.next(user);
      }
}
