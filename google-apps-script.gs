function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var data = JSON.parse(e.postData.contents);
    var email = data.email;
    var timestamp = new Date();
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([timestamp, email, 'Subscribed']);
    
    lock.releaseLock();
    
    return outputJSON({
      'result': 'success',
      'message': 'Email subscribed successfully'
    });
      
  } catch (error) {
    lock.releaseLock();
    return outputJSON({
      'result': 'error',
      'message': error.toString()
    });
  }
}

function doOptions(e) {
  return outputJSON({}, true);
}

function outputJSON(data, isOptions) {
  var output = ContentService.createTextOutput();
  if (!isOptions) {
    output.setContent(JSON.stringify(data));
  }
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Note: Headers must be set on the response, not via setHeaders()
  // The deployment settings handle CORS for Web Apps
  return output;
}
