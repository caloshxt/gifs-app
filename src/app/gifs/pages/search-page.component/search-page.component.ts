import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifList } from '../../components/content/gif-list/gif-list';

@Component({
  selector: 'app-search-page.component',
  imports: [GifList],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { }
