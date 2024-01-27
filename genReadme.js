const fs = require('fs');

function generateReadme(answers) {
  // Function to generate License Badge based on selected license
  function generateLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD') {
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
      return '';
    }
  }

   // Generate License Badge using the selected license
  const licenseBadge = generateLicenseBadge(answers.license);

  // Create the content of the README file using the provided answers
  const readmeContent = `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

${answers.reason}

### Problem Solving
${answers.problem}

### Learning
${answers.learning}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Introduction

Before you get started, here's a quick overview of how to install, use, contribute, and test this project:

## Installation
\`\`\`
${answers.installCommand}
\`\`\`

## Usage
${answers.usage}

## Contributing
${answers.contributeInfo}

## Tests
\`\`\`
${answers.testCommand}
\`\`\`

## License
This project is licensed under the ${answers.license} license. See the [LICENSE](./LICENSE) file for details.

## Questions
For any questions or inquiries, please feel free to reach out to me via email at ${answers.email}. 
You can also find me on GitHub: [${answers.github}](https://github.com/${answers.github})
  `;

  // Write the content to README.md
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md successfully generated!');
  });
}

// Export the generateReadme function from the genReadme.js
module.exports = generateReadme;
