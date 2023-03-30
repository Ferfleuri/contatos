import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gaga',
  templateUrl: './gaga.page.html',
  styleUrls: ['./gaga.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GagaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
