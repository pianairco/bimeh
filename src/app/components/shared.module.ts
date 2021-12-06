import {ModuleWithProviders, NgModule} from '@angular/core';

import {FooterComponent} from "./footer/footer.component";
import {NotificationComponent} from "./notification/notification.component";
import {LoadingComponent, LoadingDialogComponent} from "./loading/loading.component";
// import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {InputMaskDirective} from "../directives/input-mask.directive";
import {CommonDialogComponent} from "./dialog/common-dialog/common-dialog.component";
import {NgxMaskModule} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";
import {SpinnerDialogComponent} from "./spinner-dialog/spinner-dialog.component";
import {ThousandSeparatorPipe} from '../pipes/thousand-separator.pipe';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTabsModule} from "@angular/material/tabs";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MessageDialogComponent} from "./dialog/message-dialog/message-dialog.component";
import {ConfirmDialogComponent} from "./dialog/confirm-dialog/confirm-dialog.component";
import {HttpClientModule} from "@angular/common/http";
import {PianaSidebarComponent} from "./piana-sidebar/piana-sidebar.component";
import {PianaDropdownComponent} from "./piana-dropdown/piana-dropdown.component";


@NgModule({
  declarations: [
    InputMaskDirective,
    FooterComponent,
    NotificationComponent,
    LoadingComponent,
    LoadingDialogComponent,
    PianaSidebarComponent,
    PianaDropdownComponent,
    CommonDialogComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    SpinnerDialogComponent,
    ThousandSeparatorPipe
  ],
  exports: [
    TranslateModule,
    DragDropModule,
    MatSidenavModule,
    CommonDialogComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    InputMaskDirective,
    FooterComponent,
    NotificationComponent,
    LoadingComponent,
    MatTableModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    DpDatePickerModule,
    PianaSidebarComponent,
    PianaDropdownComponent,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    SpinnerDialogComponent,
    ThousandSeparatorPipe,
    MatRippleModule,
    MatRadioModule,
    MatButtonToggleModule,
    NgxMaskModule
  ],
  imports: [
    MatButtonToggleModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    DragDropModule,
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule,
    FormsModule,
    DpDatePickerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    PerfectScrollbarModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}
