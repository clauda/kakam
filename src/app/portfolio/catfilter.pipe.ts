import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'catfilter' })
export class CatfilterPipe implements PipeTransform {

  transform(portfolio: any, category: any): any {
    if (category === undefined) { return portfolio }
    return portfolio.filter( (job) => job.category === category )
  }

}
