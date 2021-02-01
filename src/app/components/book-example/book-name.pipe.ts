import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prettybook'
})
export class CustomNamePipie implements PipeTransform {
 transform(value: string): string {
    const newValue = `<< ${value} >>`; 
    return newValue
 }
}