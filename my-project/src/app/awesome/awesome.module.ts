import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwesomeListComponent } from './awesome-list.component';
import { AwesomeFormComponent } from './awesome-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AwesomeListComponent, AwesomeFormComponent],
})
export class AwesomeModule {}