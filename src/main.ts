import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app/app.routes';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { CookieService } from 'ngx-cookie-service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    },
    CookieService,
    provideHttpClient(
      withInterceptorsFromDi()
    )
  ]
})
  .catch((err) => console.error(err));
