function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Description
  
  ${answers.description}
  
  ## Installation
  
  ${answers.install}
  
  ## Usage
  
  ${answers.usage}

  ## License
  
  [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests

  ${answers.tests}

  ## Contact
  
  If you have questions regarding this application, you can reach me here:
  [Email](mailto:${answers.email}) 
  [GitHub](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
