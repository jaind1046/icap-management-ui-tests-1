const Helper = require('@codeceptjs/helper');
var moment = require('moment'); 
const recorder = require('codeceptjs').recorder;
const event = require('codeceptjs').event;

class MyHelper extends Helper {

_before() {
        recorder.retry({
            retries: 2,
            when: err => err.message.indexOf('Cannot find context with specified id') > -1,
        });
    }

_failed() {
        recorder.catchWithoutStop({
            fail: ('Function Not Implemented'),
            when: err => err.message.indexOf('FAILED') > -1,
             
         })
      

}
}
module.exports = MyHelper;
