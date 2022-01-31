import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
@Pipe({
    name: 'ngxCallback',
    pure: true
})
export class NgxCallbackPipe implements PipeTransform {
    public transform(value: unknown,fnReference: Function = () => {},  ...fnArguments: unknown[]): unknown {
        return fnReference.apply(null, [value, ...fnArguments]);
      }
    
}
