import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from '../services/snackbar.service';
import { CenterService } from '../services/center.service';

@Component({
  selector: 'center-edit',
  templateUrl: './center-edit.component.html',
  styleUrls: ['./center-edit.component.scss'],
})
export class CenterEditComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _centerService: CenterService,
    private _dialogRef: MatDialogRef<CenterEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbarService: SnackBarService
  ) {
    this.form = this._fb.group({
      name: '',
      staff: 0
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.form.valid) {
      if (this.data) {
        this._centerService
          .updateCenter(this.data.id, this.form.value)
          .subscribe({
            next: () => {
              this._snackbarService.openSnackBar('Command center was updated.');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._centerService.addCenter(this.form.value).subscribe({
          next: () => {
            this._snackbarService.openSnackBar('Command center was added.');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}