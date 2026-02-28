import { Routes } from '@angular/router';
import { ConferencePageContainer } from './conference-page-container/conference-page-container';
import { SessionsPageContainer } from './sessions-page-container/sessions-page-container';
import { SessionDetailPageContainer } from './session-detail-page-container/session-detail-page-container';
import { NewSessionPageContainer } from './new-session-page-container/new-session-page-container';
import { NotFoundComponent } from './not-found/not-found.component';
import { sessionExistsGuard } from './guards/session-exists.guard';

export const routes: Routes = [
  { path: '', component: ConferencePageContainer },
  { path: 'conferences', component: SessionsPageContainer },
  { path: 'conference/:id', component: SessionDetailPageContainer, canActivate: [sessionExistsGuard] },
  { path: 'new-session', component: NewSessionPageContainer },
  { path: '**', component: NotFoundComponent }  // Wildcard route for 404
];
