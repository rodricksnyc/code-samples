var resultContainer = document.querySelector('#result');

var host = 'data.usajobs.gov';
var userAgent = 'myemail@gmail.com';
var authKey = 'XXXXXXX';

var queryTerm = '';
var newURL = '';
var queryURLBase = "https://data.usajobs.gov/api/Search?Organization=AF"

$("#jobCategories").change(function() {

  if ($(this).val() == 'Acquisition') {
    queryTerm = 'Acquisition';
  }

  if ($(this).val() == 'Auditor') {
    queryTerm = 'Auditor%20Auditing%Audit';
  }


  if ($(this).val() == 'Engineer') {
    queryTerm = 'Civil%20Engineer%20Engineering';
  }


  if ($(this).val() == 'Cyber') {
    queryTerm = 'Cyber%20Technology';
  }

  if ($(this).val() == 'Medical') {
    queryTerm = 'Medical%20Health%20Psychologist%20Psychiatrist';
  }

  if ($(this).val() == 'Science') {
    queryTerm = 'Science%20Technology%20Engineering%20Mathematics';
  }


  console.log( queryTerm)
  var newURL = queryURLBase + "&PositionTitle=" + queryTerm;
  console.log(newURL)

  $.ajax({
    url: newURL,
    method: 'GET',
    headers: {
      "Host": host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey
    },
  }).done(function(response) {
    console.log('I am done ', response);
    $('#result').empty();


    var outsideTitle, outsideDescription, outsideSummary, outsideLink;
    for (let result in response.SearchResult.SearchResultItems) {
      let job = response.SearchResult.SearchResultItems[result].MatchedObjectDescriptor;
      console.log('This is result ', job);
      let title = job.PositionTitle
      outsideTitle = job.PositionTitle;
      let company = job.OrganizationName;
      outsideCompany = job
      let location = job.PositionLocationDisplay;
      let description = job.UserArea.Details.JobSummary;
      outsideDescription = job.UserArea.Details.JobSummary;
      let summary = job.QualificationSummary;
      outsideSummary = job.QualificationSummary;
      let link = job.PositionURI;
      outsideLink = job.PositionURI;

      $("#result").append(`${title}${company}${location}`);

    }

    $('#result').on('click', '#showApi', function(){
      $('#newResult').empty();
      $("#newResult").append(`${outsideTitle}${outsideDescription}${outsideSummary}`);
    })


    console.log(outsideTitle)
    console.log(outsideDescription)
    console.log(outsideLink)

    console.log(response);
  })
  .fail(function(error) {
    console.log(error);
  });


});
