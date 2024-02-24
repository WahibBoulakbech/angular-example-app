import { Component } from '@angular/core';
import { CommerceTableComponent } from './commerce-table/commerce-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommerceTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-example-app';
}
