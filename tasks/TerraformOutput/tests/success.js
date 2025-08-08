"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmrm = require("azure-pipelines-task-lib/mock-run");
const path = require("path");
let taskPath = path.join(__dirname, '..', 'src', 'index.js');
let tmr = new tmrm.TaskMockRunner(taskPath);
let answers = {
    'which': {
        'terraform': '/usr/local/bin/terraform'
    },
    'checkPath': {
        '"/usr/local/bin/terraform"': true
    }
};
tmr.setAnswers(answers);
// Set valid input for success scenario
tmr.setInput('outputFilePath', '../../tf/test_terraform/tf.tfplan');
// tmr.setInput('terraformTool', 'tofu');
tmr.run();
//# sourceMappingURL=success.js.map