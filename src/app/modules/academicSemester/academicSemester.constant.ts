//Imports
import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles
} from './academicSemester.interface';

/* Constants for Academic Semester Module */

// Titles
const titles: IAcademicSemesterTitles[] = ['Autumn', 'Summer', 'Fall'];

// Codes
const codes: IAcademicSemesterCodes[] = ['01', '02', '03'];

// Months
const months: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const AcademicSemesterConstants = {
  titles,
  codes,
  months
};
