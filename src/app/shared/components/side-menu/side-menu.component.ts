import { Component } from '@angular/core';
interface MenuItem {
  title: string,
  route: string
}


@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: "Basico", route: "./reactive/basic" },
    { title: "Dinamicos", route: "./reactive/dynamic" },
    { title: "Switches", route: "./reactive/switches" },
  ];

  public authMenu: MenuItem[] = [
    { title: "Registro", route: "./auth" }
  ];
}
