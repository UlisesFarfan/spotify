import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListsHeaderComponent } from './components/play-lists-header/play-lists-header.component';
import { PlayListsBodyComponent } from './components/play-lists-body/play-lists-body.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
    PlayListsHeaderComponent,
    PlayListsBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
    PlayListsHeaderComponent,
    PlayListsBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
