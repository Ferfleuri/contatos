import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-melanie',
  templateUrl: './melanie.page.html',
  styleUrls: ['./melanie.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MelaniePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
