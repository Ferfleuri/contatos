import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lulu',
  templateUrl: './lulu.page.html',
  styleUrls: ['./lulu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LuluPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
