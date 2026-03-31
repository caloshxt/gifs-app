import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface MenuOptions {
  label: string;
  route: string;
  sublabel : string;
  icon: string
}


@Component({
  selector: 'app-dashboard-nav-page',
  imports: [RouterLink],
  templateUrl: './dashboard-nav-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNavPageComponent {


  menuOptions: MenuOptions[] =
  [
    {
      label: 'Trending',
      sublabel: 'Gifts populate',
      route: 'dashboard/treding',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Buscador',
      sublabel: 'Gifts populate',
      route: 'dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ]

}
