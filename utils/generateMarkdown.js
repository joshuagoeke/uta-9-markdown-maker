// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch using code snippets from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'PDDL':
      return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
      break;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    default: 
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;
    case 'PDDL':
      return `https://opendatacommons.org/licenses/pddl/`;
      break;
    case 'The Unlicense':
      return `http://unlicense.org/`;
      break;
    default: 
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return `
      Copyright 2023 

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      break;
    case 'PDDL':
      return `Open Data Commons Public Domain Dedication and License (PDDL) Summary
      This is a human-readable summary of the Public Domain Dedication and License 1.0. Please see the disclaimer below.
      
      You are free:
      
      To share: To copy, distribute and use the database.
      To create: To produce works from the database.
      To adapt: To modify, transform and build upon the database.
      As long as you:
      
      Blank: This section is intentionally left blank. The PDDL imposes no restrictions on your use of the PDDL licensed database.
      Disclaimer
      
      This is not a license. It is simply a handy reference for understanding the PDDL 1.0 — it is a human-readable expression of some of its key terms. This document has no legal value, and its contents do not appear in the actual license. Read the full PDDL 1.0 license text for the exact terms that apply.`;
      break;
    case 'The Unlicense':
      return `This is free and unencumbered software released into the public domain.

      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
      
      For more information, please refer to <http://unlicense.org/>`;
      break;
    default: 
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}

  This project is an assignment for the University of Texas - Austin coding bootcamp, and here is a description of the acceptance criteria:

  ## Acceptance Criteria

  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  
  ## Table of Conents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.instructions}
  ## Usage
  ${data.use}
  ## Contributions 
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## License
  ${renderLicenseSection(data.license)}
  
  Find more information at ${renderLicenseLink(data.license)}

  ## Questions
  If you have further questions, find me on GitHub at https://github.com/${data.github}
  Please don't email me at ${data.notEmail}, because I'm not an idiot and that isn't a real email address.

  ##Credits
  - Josh Goeke: https://github.com/joshuagoeke
  - Karen Peazzoni: https://github.com/kpeazzoni
  - Christopher Zavala: https://github.com/chriszavala
  - Shout out to Diem Ly for helping me get un-stuck!
`;
};

//need to run functions on license, I think...

module.exports = generateMarkdown;
