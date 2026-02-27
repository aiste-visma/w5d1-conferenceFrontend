import { Pipe, PipeTransform } from '@angular/core';
import{DatePipe} from '@angular/common';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: string | undefined, format: string = "mediumDate"): string | null {
    if (!value) {
      return null;
    }
    return this.datePipe.transform(value, format);
  }

}
