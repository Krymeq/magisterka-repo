import { Component, OnDestroy } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { Item } from "src/app/domain/item";
import { ItemService } from "src/app/services/item.service";

const createElements = (startingId: number, amount: number) => Array(amount).fill(0).map((_, index) => ({
  id: startingId + index,
  header: `Added element ${startingId + index}`,
  text: `Added element text text text text text text text text ${startingId + index}`,
}));

@Component({
  selector: 'app-main-list',
  template: `
  <div>
    <div class="button-panel">
      <button (click)="removeFivePercent()">Remove 5%</button>
      <button (click)="removeHalf()">Remove 50%</button>
      <button (click)="modifyFivePercent()">Modify 5%</button>
      <button (click)="modifyHalf()">Modify 50%</button>
      <button (click)="addFivePercent()">Add 5%</button>
      <button (click)="addHalf()">Add 50%</button>
    </div>
    <div class="list-container">
      <app-list-item *ngFor="let item of itemList" [item]="item"></app-list-item>
    </div>
  </div>
  `
})
export class MainListComponent implements OnDestroy {
  subject$ = new Subject();
  itemList: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .pipe(takeUntil(this.subject$))
      .subscribe(res => {
        this.itemList = res;
      });
  }

  ngOnDestroy(): void {
    this.subject$.next({});
    this.subject$.unsubscribe();
  }

  removeHalf() {
    this.itemList = this.itemList.filter((_, index) => index % 2 === 0);
  }

  removeFivePercent() {
    this.itemList = this.itemList.filter((_, index) => index % 20 !== 0);
  }

  modifyHalf() {
    this.itemList = this.itemList.map((elem, index) => {
      if (index % 2 !== 0) return elem;
      else return {
        id: elem.id,
        header: `Header: ${elem.id}`,
        text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
      }
    })
  }

  modifyFivePercent() {
    this.itemList = this.itemList.map((elem, index) => {
      if (index % 20 !== 0) return elem;
      else return {
        id: elem.id,
        header: `Header: ${elem.id}`,
        text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
      }
    })
  }

  addHalf() {
    const newElements = createElements(this.itemList.length + 1, this.itemList.length / 2);
    this.itemList = [...this.itemList, ...newElements];
  }

  addFivePercent() {
    const newElements = createElements(this.itemList.length + 1, this.itemList.length / 20);
    this.itemList = [...this.itemList, ...newElements];
  }
}