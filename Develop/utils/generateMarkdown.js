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
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-informational)
  <br>
  This application is using ${answers.license} license. 
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests

  ${answers.tests}

  ## Contact
  
  You can reach me here:
  <br> 
  mailto:${answers.email} 
  <br>
  https://github.com/${answers.github}
`;
}

module.exports = generateMarkdown;
