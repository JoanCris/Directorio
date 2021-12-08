import { Pipe } from "@angular/core";

@Pipe({
  name: 'formatPhone'
})

export class FormatPhonePipe {
  
  transform(value: any): string{
    let formatedPhone = "";
    formatedPhone = value
                    .toString()
                    .match(/.{1,3}/g)
                    .join('-');

    return formatedPhone;
  }
}