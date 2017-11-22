import { Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe {
    transform(value : any, noOfCharacters : number) {
        //Code for transforming the value
        return value.substring(0,noOfCharacters) + "...";
    }
}