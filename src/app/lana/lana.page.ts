import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lana',
  templateUrl: './lana.page.html',
  styleUrls: ['./lana.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LanaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
