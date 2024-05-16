import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrl: './shared-menu.component.css',
})
export class SharedMenu implements OnInit {
  public items: MenuItem[] = [];

    constructor(private router: Router){}

  ngOnInit(): void {
     this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-pause',
                command: () => {
                    this.router.navigate([''])
                },
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: 'pi pi-align-left',
                        command: () => {
                            this.router.navigate([''])
                        }
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        command: () => {
                            this.router.navigate(['/numbers'])
                        }
                    },
                    {
                        label: 'uncommon',
                        icon: 'pi pi-globe',
                        command: () => {
                            this.router.navigate(['/uncommon'])
                        }
                    },
                ]

            },
                    {
                        label: 'Pipes personalizados',
                        icon: 'pi pi-bullseye',

                        items:[
                            {
                                label: 'Templates',
                                icon: 'pi pi-palette',
                            },
                            {
                                label: 'Templates',
                                icon: 'pi pi-palette',
                            },
                        ]
                    },
     ]
  }
}
