// get Bolatito's class group
let classGroup = 'Arts'

// check which subjects Bolatito will take based on her class group
let subjects
if (classGroup === 'Science') {
  subjects = [
    'Physics',
    'Chemistry',
    'Biology',
    'Technical Drawing',
    'English',
    'Mathematics',
  ]
} else if (classGroup === 'Social Science') {
  subjects = [
    'Accounting',
    'Commerce',
    'Marketing',
    'Geography',
    'English',
    'Mathematics',
  ]
} else if (classGroup === 'Arts') {
  subjects = [
    'Government',
    'Economics',
    'Literature',
    'History',
    'English',
    'Mathematics',
  ]
} else {
  subjects = ['English', 'Mathematics']
}

console.log(subjects)

///4
for (let i = 1; i < 20; i += 7) {
  console.log(i)
}

//output is 1, 8, 15
