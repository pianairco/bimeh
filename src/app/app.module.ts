import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {LOCATION_INITIALIZED} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {RootComponent} from "./views/root/root.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {SharedModule} from "./components/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {InitializerService} from "./services/initializer.service";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function ApplicationInitializerFactory(translate: TranslateService, injector: Injector) {

  return async () => {

    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

    translate.addLangs(['en', 'fa']);

    const defaultLang: string = 'fa';
    translate.setDefaultLang(defaultLang);

    try {
      await translate.use(defaultLang).toPromise();
    } catch (err) {
      console.log(err);
    }

    console.log(`Successfully initialized ${defaultLang} language.`);
  };
}

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    SharedModule,
  ],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      deps: [TranslateService, Injector],
      useFactory: ApplicationInitializerFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (initializerService: InitializerService) => () => initializerService.load(),
      deps: [InitializerService],
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
