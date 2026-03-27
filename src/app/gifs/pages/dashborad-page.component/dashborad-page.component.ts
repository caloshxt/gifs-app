import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet } from "@angular/router";
import DashboardLogoComponent from '../dashboard-logo.component/dashboard-logo.component';
import { DashboardProfilePageComponent } from '../dashboard-profile-page.component/dashboard-profile-page.component';
import { DashboardNavPageComponent } from '../dashboard-nav-page.component/dashboard-nav-page.component';
import { DashboardSidemenuPageComponent } from '../dashboard-sidemenu-page.component/dashboard-sidemenu-page.component';

@Component({
  selector: 'app-dashborad-page',
  imports: [RouterOutlet, DashboardLogoComponent, DashboardProfilePageComponent, DashboardNavPageComponent, DashboardSidemenuPageComponent],
  templateUrl: './dashborad-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboradPageComponent { }
