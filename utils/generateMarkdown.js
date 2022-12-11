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
  
  [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)]
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests

  ${answers.tests}

  ## Contact
  
  You can reach me here:
  <br> 
  [Email](mailto:${answers.email}) 
  <br>
  [GitHub](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
