require('dotenv').config();

var AWS = require('aws-sdk');
var config = require('./config');

// Update the Config
AWS.config.update(config.awsConfig);

// ---------------- S3 ---------------------
var s3 = require('./s3');
s3.listBuckets(AWS);

// ------------- Cost Explorer -------------
// var costExplorer = require('./costExplorer');
// costExplorer.createAnomalyMonitor(AWS);

