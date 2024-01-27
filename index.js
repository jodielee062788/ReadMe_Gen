const inquirer = require('inquirer');
const generateReadme = require('./genReadme');

// Questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the name of the project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project. What was your motivation?\n',
  },
  {
    type: 'input',
    name: 'reason',
    message: 'Why did you build this project?\n',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?\n',
  },
  {
    type: 'input',
    name: 'learning',
    message: 'What did you learn in this project?\n',
  },
  {
    type: 'input',
    name: 'installCommand',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
    filter: (value) => (value === '' ? 'npm i' : value),
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo? Provide instructions.\n',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributeInfo',
    message: 'What does the user need to know about contributing to the repo?\n',
  },
  {
    type: 'input',
    name: 'testCommand',
    message: 'What command should be run to run tests?',
    default: 'npm test',
    filter: (value) => (value === '' ? 'npm test' : value),
  },
];


// Run Inquirer to prompt the user
inquirer.prompt(questions).then((answers) => {
  // Generate README using the provided answers
  generateReadme(answers);
});
