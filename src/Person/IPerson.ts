import { PersonCategory } from './PersonCategory';

export interface IPerson {
  category: PersonCategory;
  canSignContracts(): boolean;
  printDetails(): void;
}
