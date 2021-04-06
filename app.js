const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
      {id: 'name', title: 'Name'},
      {id: 'scholarId', title: 'ScholarID'},
      {id: 'score', title: 'score'}
    ]
  });

const answerKey = {
    1:'Option A',
    2:'Option A',
    3:'Option A',
    4:'Option A',
    5:'Option A',
    6:'Option A',
    7:'Option A',
    8:'Option A',
    9:'Option A',
    10:'Option A',
    11:'Option A',
    12:'Option A',
    13:'Option A',
    14:'Option A',
    15:'Option A',
    16:'Option A',
    17:'Option A',
    18:'Option A',
    19:'Option A',
    20:'Option A',
    21:'Option A',
    22:'Option A',
    23:'Option A',
    24:'Option A',
    25:'Option A',
}

var correct = 0, wrong = 0, score = 0;
var output = [];

fs.createReadStream('./in.csv')
.pipe(csv())
.on('data', function(data){
    correct = 0; wrong = 0;
    for(let i = 1;i <= 25 ;i++){
        if(data[i]!=''){
            if(data[i] == answerKey[i]){
                // console.log(data[i]+' correct');
                correct++;
            }
            else{
                // console.log(data[i]+' incorrect');
                wrong++;
            }
        }
    }
    score = 4*correct-wrong;
    let currCandidate = {};
    currCandidate.name = data.Name;
    currCandidate.scholarId = data['Scholar ID'];
    currCandidate.score = score;
    output.push(currCandidate);

    console.log(`Correct = ${correct}, Wrong = ${wrong}`);
})
.on('end', () => {
    csvWriter
    .writeRecords(output)
    .then(()=> console.log('The CSV file was written successfully'));
})
