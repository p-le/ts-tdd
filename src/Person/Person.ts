import { IPerson } from './IPerson';
import { PersonCategory } from './PersonCategory';

export abstract class Person implements IPerson {
  public category: PersonCategory;
  private dateOfBirth: Date;

  constructor(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }

  public abstract canSignContracts(): boolean;

  public printDetails(): void {
    console.log('Person: ');
    console.log(`Date of Birth: ${this.dateOfBirth.toDateString()}`);
    console.log(`Category: ${PersonCategory[this.category]}`);
    console.log(`Can sign: ${this.canSignContracts()}`);
  }
}
