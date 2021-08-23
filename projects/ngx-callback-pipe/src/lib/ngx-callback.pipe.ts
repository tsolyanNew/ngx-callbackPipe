import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
@Pipe({
    name: 'ngxCallback',
    pure: true
})
export class NgxCallbackPipe implements PipeTransform {
    public transform(fnReference: Function, value: any, ...fnArguments: any[]): any {
        fnArguments.unshift(value);
        return fnReference.apply(null, fnArguments);
      }
    
}
