import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './module';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public CurrentUser$ = new Subject<User>

      public changeCurrentUser(user: User){
        this.CurrentUser$.next(user);
      }
}
