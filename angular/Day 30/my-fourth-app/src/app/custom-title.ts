import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'title'
})

export class CustomTitle implements PipeTransform {
    transform(name: string, gender: string) {
        if (gender == "Male")
            return "Mr. " + name;
        else return "Ms. " + name;
    }
}