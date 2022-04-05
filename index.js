const core = require('@actions/core');
const github = require('@actions/github');

try{
    const targetTime = core.getInput('target-time');
    console.log(`Target time is ${targetTime}`);
    var timeElements = targetTime.split(':');
    const time = new Date();
    time.setHours(timeElements[0]);
    time.setMinutes(timeElements[1]);
    console.log('Schedule time is ' + time);
    var timetowait = time - new Date();
    console.log('Waiting ' + timetowait + 'ms');
    if(timetowait > 0){
        setTimeout(() => {
            console.log('Resuming Deployment');
            core.setOutput('deployment-time', targetTime);
        }, timetowait);
    }
}
catch(error){
    core.setFailed(error.message);
}
