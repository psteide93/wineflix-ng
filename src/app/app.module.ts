import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { MainImageComponent } from './main-image/main-image.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ControlsComponent } from './controls/controls.component';
import { DrinkComponent } from './drink/drink.component';
import { DrinkListingComponent } from './drink-listing/drink-listing.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainNavigationComponent,
    PrimaryNavigationComponent,
    SecondaryNavigationComponent,
    MainImageComponent,
    MainContentComponent,
    ControlsComponent,
    DrinkComponent,
    DrinkListingComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
