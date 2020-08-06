import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HighlightJS } from 'ngx-highlightjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('title') title: string;
  @Input('dataString') dataString: any;
  @Output() hideme = new EventEmitter<boolean>();


  constructor(private hljs: HighlightJS) { }

  ngOnInit(): void {
    this.hljs.initHighlighting().subscribe();
  }


  hide(){
    this.hideme.emit(true);
  }



}
