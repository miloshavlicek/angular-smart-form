import {NgModule, ModuleWithProviders} from '@angular/core';

@NgModule({
  imports: [

  ],
  declarations: [

  ],
  providers: [],
  exports: []
})
export class FormBuilderModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormBuilderModule,
      providers: []
    };
  }
}
