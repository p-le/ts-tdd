import { Adult } from '../src/Person/Adult';
import { Child } from '../src/Person/Child';
import { Infant } from '../src/Person/Infant';
import { Person } from '../src/Person/Person';

describe('Person', () => {
  it ('should print details', () => {
    console.log = jasmine.createSpy('log');
    const adult = new Adult(new Date());
    adult.printDetails();
    expect(console.log).toHaveBeenCalled();
  });

  it ('Adult can sign constract', () => {
    const adult = new Adult(new Date());
    expect(adult.canSignContracts()).toEqual(true);
  });

  it ('Child can not sign constract', () => {
    const child = new Child(new Date());
    expect(child.canSignContracts()).toEqual(false);
  });

  it ('Infant can not sign constract', () => {
    const infant = new Infant(new Date());
    expect(infant.canSignContracts()).toEqual(false);
  });
});
