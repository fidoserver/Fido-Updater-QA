var exec = require('child_process').exec;
var cmd = ''
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function(callback) {
  console.log('running script 4.js')
  cmd='cd /root/Fido; git pull; git checkout 0.0.1;'
  exec(cmd, function() {
    callback()
  })
}