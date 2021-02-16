$(document).ready(function () {
    var scorecard = new Scorecard('XXXXXXXXXXXXXXXXXX');
    scorecard.init();


    class Scorecard {

        constructor(apiKey) {
            this.endpoint = 'https://api.data.gov/ed/collegescorecard/v1/schools?api_key=' + apiKey + '&fields=school.name';
            this.perPage = 100;
            this.schools = [];
            this.total = 0;
        }

        init() {
            var self = this;
            $('#scorecard_schools, #scorecard_state').select2();

            $('#scorecard_state').change(function () {
                if($(this).val()) {
                    self.allSchools($(this).val());
                } else {
                    $('#scorecard_schools').empty();
                }
            });

            $('#scorecard_schools').change(function () {
                $('#scorecard_results').html($(this).val());
            });
        }

        loading(loading) {
            if (loading) {
                $('#scorecard_state').prop('disabled', true);
                $('#scorecard_schools').empty().append('<option value="">Loading...</option>');
                $('#scorecard_results').html('loading...');
            } else {
                $('#scorecard_state').prop('disabled', false);
                $('#scorecard_results').html('');
            }
        }

        allSchools(state) {
            var self = this;
            self.schools = [];
            self.loading(true);

            $.when.apply($, [self.state(state, 0)]).then(function () {
                var totalPages = Math.ceil(self.total / self.perPage);
                if (totalPages > 1) {
                    self.states(state, totalPages);
                } else {
                    self.outputResults();
                }
            });
        }

        states(state, pages) {
            var self = this;

            var requests = [];

            for (var page = 1; page < pages; page++) {
                requests.push(self.state(state, page));
            }

            $.when.apply($, requests).then(function () {
                self.outputResults();
            });
        }

        state(state, page) {
            var self = this;

            var apiEndpoint = self.endpoint + '&school.state=' + state + '&page=' + page + '&per_page=' + self.perPage;
            return $.get(apiEndpoint, function (data) {
                self.total = data.metadata.total;
                self.schools = self.schools.concat(data.results);
            }, 'json')
        }

        sortResults(a, b) {
            if (a['school.name'] > b['school.name']) return 1;
            if (a['school.name'] < b['school.name']) return -1;

            return 0;
        }

        outputResults() {
            var self = this;

            $('#scorecard_schools').empty().append('<option value="">- Select School -</option>');
            $(self.schools.sort(self.sortResults)).each(function (index, school) {
                $('#scorecard_schools').append($('<option>', {
                    value: school['school.name'],
                    text: school['school.name']
                }));
            });

            self.loading(false);
        }

    }


});
