import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'src', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

let answers = <ma.TaskLibAnswers>{
  'which': {
    'terraform': '/usr/local/bin/terraform'
  },
  'checkPath': {
    '"/usr/local/bin/terraform"': true
  }
};
tmr.setAnswers(answers);
// Set valid input for success scenario
tmr.setInput('outputFilePath', '../../tf/test_terraform/tf.tfplan' );
// tmr.setInput('terraformTool', 'tofu');
tmr.run();
