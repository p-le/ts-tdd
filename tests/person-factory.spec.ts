import { PersonFactory } from '../src/Person/PersonFactory';

describe('PersonFactory', () => {
  let factory: PersonFactory;
  let currentDate: Date;

  beforeEach(() => {
    factory = new PersonFactory();
    currentDate = new Date();
  });

  it ('should create a Infant if dateOfBirth is now', () => {
    const person = factory.getPerson(new Date());
    expect((<any> person).constructor.name).toBe('Infant');
  });

  it ('should create a Child if dateOfBirth is 10 years ago', () => {
    const person = factory.getPerson(new Date(currentDate.getFullYear() - 10, 11));
    expect((<any> person).constructor.name).toBe('Child');
  });

  it ('should create a Adult if dateOfBirth is 30 years ago', () => {
    const person = factory.getPerson(new Date(currentDate.getFullYear() - 30, 11));
    expect((<any> person).constructor.name).toBe('Adult');
  });

});
