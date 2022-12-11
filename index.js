// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please enter a title for your project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of this project',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please enter a description for your project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this application?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please instruct the reader on how to install this application')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please instruct the user on how to use the application')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please instruct the user on how to contribute to the project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can someone test this application?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please instruct the user on how to test the application')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please enter your email address')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: function (data) {
            if (data) {
                return true;
            } else {
                console.log('Please enter your GitHub username')
                return false;
            }
        }
    },
]

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(
                console.log('README created successfully!')
            );
        });
    });
};
// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(inputAnswers => {
        return inputAnswers;
    })
};

// Function call to initialize app
init()
.then(inputAnswers => {
    return generateMarkdown(inputAnswers);
})
.then(generatedREADME => {
    return writeToFile(generatedREADME);
})
.catch(err => {
    console.log(err)
})
