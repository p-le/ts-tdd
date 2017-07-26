import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

export class Infant extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.category = PersonCategory.Infant;
  }

  public canSignContracts(): boolean {
    return false;
  }
}
