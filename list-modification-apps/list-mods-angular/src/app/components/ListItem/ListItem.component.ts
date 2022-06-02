import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Item } from "src/app/domain/item";

@Component({
  selector: 'app-list-item',
  template: `
  <div class="root">
    <div class="id-container">{{ item.id }}</div>
    <div>
      <div>{{ item.header }}</div>
      <div>{{ item.text }}</div>
    </div>
  </div>
  `,
  styleUrls: ['ListItem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  constructor() {};

  @Input()
  public item: Item;
}