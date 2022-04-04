import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'size'
})
export class CustomPipe implements PipeTransform {
    transform(arg1: string) {
        return arg1.length;
    }
}