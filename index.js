const inquirer = require('inquirer');
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of project: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of project: ',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'Lets other developers know what they can and cannot do with your project: ',
            name: 'license',
            choices: [
                'MIT',
                'Apache',
                'GNU APGL',
                'Boost',
            ],
        },
        {
            type: 'input',
            message: 'Provide screenshot/video: ',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'Steps required to install your project: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Instructions and examples for use: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List collaborators, 3rd-party assets, and include links: ',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'How to contact you:',
            name: 'QuestionsCommentsConcerns',
        },
    ])
    .then((response) => {
        console.log(response)

        let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        let badge2 = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        let badge3 = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        let badge4 = `[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

        console.log(typeof response.description)
        let text = `## Title: ${response.title}
## Description:
${response.description}
## License:
${badge}
${badge2}
${badge3}
${badge4}
${generateText(response)}
## Screenshot:
![alt text](${response.screenshot}?raw=true) 
## Installation:
${response.installation}
## Usage:
${response.usage}
## Credits:
${response.credits}
## QuestionsCommentsConcerns:
${response.QuestionsCommentsConcerns}
`;
fs.writeFile('README.md', text, (err) =>
err ? console.error(err) : console.log('Success!')
        )
    }
    );
function generateText() {
    return "Please code responsibly"
}

// This is a polished, user-friendly README.md Generator that can generate for you a profession README.md file. I Struggle with making README's so I had been motivated to code something to generate it so others including me can make
//  one with swiftness and ease.

// (1) Go to my GitHub page "waldo-22" and navigate to "readmeGenerator" repository. (2) Copy zip of repository code. (3) In VS Code make a new directory and paste in copied zip.

// Follow prompted directions when running it through "node index.js"

// Joshua CHristianson GitHub Link: github.com/IIMacGyverII

// Questions, Comments, and Concerns? Contact me via email and phone number ect. ; email: waldochristianson@gmail.com Phone Number: 678-999-8212 LinkedIn: https://www.linkedin.com/in/reniel-christianson-677575189/ GitHub: https://github.
// com/waldo-22