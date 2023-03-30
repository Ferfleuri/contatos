import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jao',
  templateUrl: './jao.page.html',
  styleUrls: ['./jao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
