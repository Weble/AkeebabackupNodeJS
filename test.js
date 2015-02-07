var ak = require('./index');

var site = new ak('http://admin.elmo.weble.it', 'weblebackup');
site.getProfiles(function(data){
	console.log(data);
})

site.on('error', function(data){
	console.log(data);
})