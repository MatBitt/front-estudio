import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quebraDeLinha',
  standalone: true,
})
export class QuebraDeLinhaPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/;/g, '<br>');
  }
}
