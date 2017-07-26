import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

export class Adult extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.category = PersonCategory.Adult;
  }

  public canSignContracts(): boolean {
    return true;
  }
}
