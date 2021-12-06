import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingDialogComponent implements OnInit {
  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-loading',
  template: '',
})
export class LoadingComponent implements OnInit {
  showLoading = false;
  dialogRef = null;
  constructor(private loadingService: LoadingService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    this.loadingService.currentState.subscribe(state => {
      this.showLoading = state;
      if(this.showLoading) {
        if(!this.dialogRef) {
          this.dialogRef = this.dialog.open(LoadingDialogComponent, {
            disableClose: true,
            width: '500px',
            data: {
              title: 'title',
              message: 'message'
            }
          });
        }
      } else {
        if (this.dialogRef) {
          this.dialogRef.close();
          this.dialogRef = null;
        }
      }
      // console.log(state);
    }); //<= Always get current value!
  }

}
