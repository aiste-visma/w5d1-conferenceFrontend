import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NetworkStatusService {
  private down$ = new BehaviorSubject<boolean>(false);

  get status$() {
    return this.down$.asObservable();
  }

  setDown(v: boolean) {
    this.down$.next(v);
  }

  isDown(): boolean {
    return this.down$.getValue();
  }
}
