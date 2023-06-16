// Function that returns the icon of certain licenses, if specified.
renderLicenseBadge = (license) => {
  return license !== "None"
    ? `![license badge](https://img.shields.io/badge/license-${license}.svg)`
    : "";
};

// Function that returns the URL for certain licenses, if specified.
renderLicenseLink = (license) => {
  return license !== "None" ? `(#license)` : "";
};

// Function that creates the license section, if a license was specified.
renderLicenseSection = (license) => {
  return license !== "None"
    ? `This project is protected by the ${license} license`
    : "None";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* (#installation)
* (#usage)
* (#license)
* (#conributing)
* (#tests)
* (#authors-info)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contributions}

## Tests

${data.testing}

## Author's Info

${data.github}
${data.email}

`;
}

module.exports = generateMarkdown;
