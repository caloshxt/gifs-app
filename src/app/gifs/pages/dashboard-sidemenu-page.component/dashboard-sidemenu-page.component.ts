import { ChangeDetectionStrategy, Component } from '@angular/core';
import DashboardLogoComponent from '../dashboard-logo.component/dashboard-logo.component';
import { DashboardProfilePageComponent } from '../dashboard-profile-page.component/dashboard-profile-page.component';
import { DashboardNavPageComponent } from '../dashboard-nav-page.component/dashboard-nav-page.component';
import { environment } from '@enviroments/environment';
//import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-dashboard-sidemenu-page',
  imports: [ DashboardLogoComponent, DashboardProfilePageComponent, DashboardNavPageComponent],
  templateUrl: './dashboard-sidemenu-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidemenuPageComponent {

  envs = environment
}
