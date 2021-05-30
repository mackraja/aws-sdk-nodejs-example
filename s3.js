// List the buckets
function listBuckets (AWS) {
    var s3 = new AWS.S3();

    s3.listBuckets(function(err, data) {
        if (err) console.error(err, err.stack); // an error occurred
        else     console.log(data);  // successful response        
    });
}

module.exports = { listBuckets }