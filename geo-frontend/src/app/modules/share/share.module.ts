import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzMessageModule,
    NzTableModule,
  ],
  exports:[
    //ng-zorro modules
    ReactiveFormsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzMessageModule,
    NzTableModule,
  ]
})
export class ShareModule { }
