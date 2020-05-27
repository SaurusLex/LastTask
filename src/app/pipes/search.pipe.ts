import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if(!value)return null;
    if(!args)return value;

    let propertyToSearch = args[0]
    let valueToSearch = args[1]

    console.log(args);
    console.log(value);
    console.log(propertyToSearch);
    console.log(valueToSearch);

    return value.filter(function(item){
        return item[propertyToSearch].toLowerCase().includes(valueToSearch);
    });
}

}
