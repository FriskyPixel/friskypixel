export type Education = {
  schoolName: string;
  discipline: string;
  gpa: string;
  date: string;
  achievements: string[];
};

export const educationList: Education[] = [
  {
    schoolName: 'Wayne State University',
    discipline: 'Computer Science',
    gpa: '4.0',
    date: '2011 - 2013',
    achievements: [
      'Selected to Golden Key International Honour Society, 2012',
      'Awarded John P. Stieber Endowed Scholarship, 2012',
      'High Scholastic Average Award for a Junior, 2012 / Senior, 2013',
      "Placed on Dean's List during entire duration",
    ],
  },
  {
    schoolName: 'Full Sail University',
    discipline: 'Associate of Science (A.S.) in Film',
    gpa: '4.0',
    date: '2002 - 2003',
    achievements: ['Valedictorian', 'Perfect Attendance'],
  },
  {
    schoolName: 'Lawrence Technological University',
    discipline: 'Computer Science',
    gpa: '3.67',
    date: '2000 - 2002',
    achievements: [
      'Academic Scholarship, 2000',
      'Placed on Dean’s List during entire duration',
    ],
  },
];
