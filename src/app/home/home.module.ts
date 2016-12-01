import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';
import { HighlightsModule } from '../highlights/highlights.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AdminTableModule } from "../admin-table/admin-table.module";


@NgModule({
  imports: [CommonModule, homeRoutes,SidebarModule, AdminTableModule, HighlightsModule],
  declarations: [HomeComponent]
})
export default class HomeModule {
}
