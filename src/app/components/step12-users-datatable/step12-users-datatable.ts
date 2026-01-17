import { Component, Input } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';
import { get, sortBy } from 'lodash-es';

@Component({
  selector: 'app-step12-users-datatable',
  imports: [],
  templateUrl: './step12-users-datatable.html',
  styleUrl: './step12-users-datatable.css',
})
export class Step12UsersDatatable {

  @Input() data: IUser[] | undefined;



sortOrder: Record<string, 'asc' | 'desc' | 'none'> =  {
    username: 'none',
      password: 'none',
      firstname: 'none',
      lastname: 'none',
      email: 'none',
      'address.area': 'none',
      'address.street': 'none',
      'address.number': 'none'
      // { 
       // 'none'
        // area: 'none',
        // street: 'none',
        // number: 'none',
        // po: 'none',
        // municipality: 'none',
      //}
      ,
      phone: 'none',
      roles: 'none'
  }

  sortData(sortKey: string): void {

    if (!this.data) return;
    
    
    const numericFields = ['address.number'];
    const isNumberField = numericFields.includes(sortKey);

    
    const ascending = this.sortOrder[sortKey] !== 'asc';
    this.sortOrder[sortKey] = ascending ? 'asc' : 'desc';

    
    this.data = sortBy(this.data, item => {
      let value = get(item, sortKey); 

      if (isNumberField) return Number(value) || 0; 
      return value ? value.toString().toLowerCase() : ''; 
    });

    
    if (!ascending) {
      this.data.reverse();
    }

    
    for (const key in this.sortOrder) {
      if (key !== sortKey) this.sortOrder[key] = 'none';
    }
  }

  /** Display the sorting arrow in the table header */
  sortSign(sortKey: string): string {
    if (this.sortOrder[sortKey] === 'asc') return '\u2193';
    if (this.sortOrder[sortKey] === 'desc') return '\u2191';
    return '';
  }



  



}