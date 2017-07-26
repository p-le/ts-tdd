import { Person } from './Person';
import { PersonCategory } from './PersonCategory';

export class Child extends Person {
  constructor(dateOfBirth: Date) {
    super(dateOfBirth);
    this.category = PersonCategory.Child;
  }

  public canSignContracts(): boolean {
    return false;
  }
}
