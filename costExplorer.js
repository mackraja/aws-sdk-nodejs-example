var params = {
    Granularity: 'MONTHLY', /* required */
    Metrics: [
        'AmortizedCost',
        'BlendedCost',
        'NetAmortizedCost',
        'NetUnblendedCost',
        'NormalizedUsageAmount',
        'UnblendedCost',
        'UsageQuantity'
    ], /* required */
    TimePeriod: { /* required */
      Start: '2020-05-01', /* required */
      End: '2021-04-30' /* required */
    },
    // Filter: {      
    //     Dimensions: {
    //       Key: 'SERVICE',
    //       Values: [
    //         'Amazon Simple Storage Service'
    //       ]
    //     }
    //   },
    GroupBy: [
      {
        Key: 'SERVICE',
        Type: 'DIMENSION'
      },
      {
        Type: 'TAG',
        Key: 'Environment'
      }
    ]
  };

function createAnomalyMonitor (AWS) {
    // Create CostExplorer service object
    var costexplorer = new AWS.CostExplorer();

    costexplorer.getCostAndUsage(params, function (err, data) {
        if (err) console.log(err, err.stack);   // an error occurred
        else     console.log(JSON.stringify(data, null, 1));  // successful response
    });
}

module.exports = { createAnomalyMonitor }