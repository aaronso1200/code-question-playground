const inquirer  = require("inquirer");
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')

main()


async function main() {
    const questionDetail = await createQuestion();
    const directoryPath = path.join(__dirname,`[${questionDetail.questionNo}]${questionDetail.questionName}`)
    if (fs.existsSync(directoryPath)) {
        console.log('Directory already exists')
        return false;
    }
    fs.mkdirSync(directoryPath)
    console.log(`Create ${chalk.yellow(directoryPath)} successful`)
    fs.writeFileSync(path.join(directoryPath,`${questionDetail.questionName}.js`),'')
    fs.writeFileSync(path.join(directoryPath,`${questionDetail.questionName}.test.js`),
        `describe('unit test',()=> {
        test('normal test 1',()=> {})
    })`)
}

function createQuestion(){
    const questions = [
        {
            name: 'questionNo',
            type: 'input',
            message: 'Enter question number: ',
            validate: function( value ) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter question number.';
                }
            }
        },
        {
            name: 'questionName',
            type: 'input',
            message: 'Enter question name: ',
            validate: function( value ) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter question name.';
                }
            }
        }
    ];
    return inquirer.prompt(questions);
}