import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterEditComponent } from './center-edit/center-edit.component';
import { Subject } from "rxjs";
import { Center } from './center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  reloadTable: Subject<boolean> = new Subject();

  constructor(
    private _dialog: MatDialog
  ) {}

  edit(data: Center): void {
    this.openForm(data);
  }

  openForm(data?: Center) {
    const dialogRef = this._dialog.open(CenterEditComponent, {
      data,
      minWidth: 500
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.reloadTable.next(true);
        }
      },
    });
  }
}