# CSV MCQ Checker
## _Node Script for checking & marking Candidates responses of MCQ test taken using google forms_

This script Takes a csv file as input and generates a out.csv file output, that contains name, scholar ID, and marks scored by candidate.
## Features
- Also accounts for negative marking
- Pure nodeJS script
- User defined ANSWER KEY using JS Object
- Very Fast! It takes no time to generate the required output 

## Motivation
> I was conducting a math MCQ contest using google forms, which also had 
> negative marking for every wrong answer.
> After I made the necessary google form for the quiz
> I realized google forms does not offers any option for incorporating
> -ve marking. I was very late for me to change the platform and remake the quiz
> Then I decided to make a script to automate this process of checking using csv files 
> and alloting marks !!!


## Installation

Script requires [Node.js](https://nodejs.org/) v14+ to run.

Clone the repo
```sh
git clone https://github.com/aditya2712/CSVmcqChecker.git
```

Install the dependencies and devDependencies

```sh
cd CSVmcqChecker
npm install
```

Paste the csv file inside the CSVmcqCheker folder and rename it as in.csv
Run the app.js file using node
```sh
node app
```
Output file will be generated as out.csv


**Free Software, Hell Yeah!**
