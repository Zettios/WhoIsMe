import { Component, HostListener  } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NgOptimizedImage ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  // animations: [
  //   trigger('openClose', [
  //     state('open', style({left: '0'})),
  //     state('closed', style({left: '-100%'})),
  //     transition('open => closed', [animate('0.2s')]),
  //     transition('closed => open', [animate('0.2s')])
  //   ])
  // ]
})

export class NavbarComponent { 
}
