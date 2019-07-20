import { NgModule } from '@angular/core';

//navbar stuff
import { CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//buttons
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
    imports: [CollapseModule,BrowserAnimationsModule,ButtonsModule],
    exports: [CollapseModule,BrowserAnimationsModule,ButtonsModule]
})

export class BootstrapModule { }