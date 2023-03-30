import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-weeknd',
  templateUrl: './weeknd.page.html',
  styleUrls: ['./weeknd.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WeekndPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
