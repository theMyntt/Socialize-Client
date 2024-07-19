import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../../shared/shared.module';
import { LogOut, LucideAngularModule, Menu } from 'lucide-angular';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    LucideAngularModule.pick({ Menu, LogOut }),
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
