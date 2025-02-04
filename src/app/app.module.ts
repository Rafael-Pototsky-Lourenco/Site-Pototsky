import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TrailAboutMeComponent } from './components/trail-about-me/trail-about-me.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TrailAboutMeComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
