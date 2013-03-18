var pomelo = require('pomelo');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'tcp-pomelo');

app.configure('development|product', 'connector', function() {
  app.set('connectorConfig', {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 3,
    //useDict: true,
    //useProtobuf: true,
    checkClient: function(type, version) {
      console.error('type: %j, version: %j', type, version);
      return !!version;
    }
  });
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
