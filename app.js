const request = require('request');

const options = {
  url: 'https://data.developer.nhs.uk/nrls-ri/DocumentReference?subject=https%3A%2F%2Fdemographics.spineservices.nhs.uk%2FSTU3%2FPatient%2F2686033207&type.coding=http%3A%2F%2Fsnomed.info%2Fsct%7C736253002',
  headers: {
        			'accept': 'application/fhir+json',
        			'Authorization': 'Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2RlbW9uc3RyYXRvci5jb20iLCJzdWIiOiJodHRwczovL2ZoaXIubmhzLnVrL0lkL3Nkcy1yb2xlLXByb2ZpbGUtaWR8ZmFrZVJvbGVJZCIsImF1ZCI6Imh0dHBzOi8vbnJscy5jb20vZmhpci9kb2N1bWVudHJlZmVyZW5jZSIsImV4cCI6MTU4MzI3MjM0NSwiaWF0IjoxNTgzMjcyMDQ1LCJyZWFzb25fZm9yX3JlcXVlc3QiOiJkaXJlY3RjYXJlIiwic2NvcGUiOiJwYXRpZW50L0RvY3VtZW50UmVmZXJlbmNlLnJlYWQiLCJyZXF1ZXN0aW5nX3N5c3RlbSI6Imh0dHBzOi8vZmhpci5uaHMudWsvSWQvYWNjcmVkaXRlZC1zeXN0ZW18MjAwMDAwMDAwMTE3IiwicmVxdWVzdGluZ19vcmdhbml6YXRpb24iOiJodHRwczovL2ZoaXIubmhzLnVrL0lkL29kcy1vcmdhbml6YXRpb24tY29kZXxBTVMwMSIsInJlcXVlc3RpbmdfdXNlciI6Imh0dHBzOi8vZmhpci5uaHMudWsvSWQvc2RzLXJvbGUtcHJvZmlsZS1pZHxmYWtlUm9sZUlkIn0=.',
        			'fromASID': '200000000117',
        			'toASID': '999999999999'
  }
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    // https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json -
    const info = JSON.parse(body);
    console.log("pointer fullUrl : " + info.entry[0].fullUrl);
    console.log("status : " + info.entry[0].resource.status);
    console.log("system : " + info.entry[0].resource.type.coding[0].system);
    console.log("code : " + info.entry[0].resource.type.coding[0].code);
    console.log("display : " + info.entry[0].resource.type.coding[0].display);
    console.log("target content type: " + info.entry[0].resource.content[0].attachment.contentType);
    console.log("target url : " + info.entry[0].resource.content[0].attachment.url);
    console.log("creation datetime : " + info.entry[0].resource.content[0].attachment.creation);
   }
  else {
	console.log( "Things did not work :" + response)
  }
}

request(options, callback);
