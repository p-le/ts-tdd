import { IPerson } from './IPerson';
import { Infant } from './Infant';
import { Child } from './Child';
import { Adult } from './Adult';

export class PersonFactory {
  public getPerson(dateOfBirth: Date): IPerson {
    const dateNow = new Date();
    const currentMonth = dateNow.getMonth() + 1;
    const currentDate = dateNow.getDate();
    const dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
    const date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);

    if (dateOfBirth >= dateTwoYearsAgo) {
      return new Infant(dateOfBirth);
    }

    if (dateOfBirth >= date18YearsAgo) {
      return new Child(dateOfBirth);
    }

    return new Adult(dateOfBirth);
  }
}
