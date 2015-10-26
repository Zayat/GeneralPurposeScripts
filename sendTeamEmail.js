//This is a google sheets script
function sendTeamEmails() {
var sheet = SpreadsheetApp.getActiveSheet();
var startRow = 2; // First row of data to process
var numRows = 2; // Number of rows to process
// Fetch the range of cells A2:B3
var dataRange = sheet.getRange(startRow, 1, numRows, 9)
// Fetch values for each row in the Range.
var data = dataRange.getValues();
for (i in data) { 
  var row = data[i]; 
  var emailAddress = row[3]+','+row[6]; // First column 
  var message = 'Dear ' + row[1] +' & ' +row[4]+',\n\n\
Now you are a team!\n\
\n\
Team Number: '+i+'\n\
\n\
First Team Member:\n\
Name: '+row[1] +'\n\
Email: '+row[3]+'\n\
Matriculation Number: '+row[2]+'\n\
\n\
Second Team Member:\n\
Name: '+row[4] +'\n\
Email: '+row[6]+'\n\
Matriculation Number: '+row[5]+'\n\
\n\
You are advised to start working on the project as early as possible,\n\
In case of administrative issues please send an email to: os-ws15-staff@lists.mpi-sws.org\n\
\n\
If you face technical issues with the project, probably you will not be the only one facing them, so please report them at os-ws15@lists.mpi-sws.org, so that you get the fastest response time and that other students will benefit too!\n\n\
Best of luck,\n\
OS Course Team'

      
      
      ; // Second column 
  var subject = "[OS-WS15] Team assignment";
  var alias = GmailApp.getAliases();
  alias.sort();
  //MailApp.sendEmail(emailAddress, subject, message);
  GmailApp.sendEmail(emailAddress, subject, message,{from:alias[1]});

}
}
