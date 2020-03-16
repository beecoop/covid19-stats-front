const API_BASE_URL = 'https://api.covid19.beecoop.co';
const STATS_PER_COUNTRY_ENDPOINT = '/stats?country=';
const COUNTRY = 'Tunisia';

$(document).ready(function () {
    $.ajax({
        url: API_BASE_URL + STATS_PER_COUNTRY_ENDPOINT + COUNTRY,
        method: "GET",
        dataType: "json",
    })
        .done(function (data) {

            let $cases_output = $('#cases .stat-value');
            let $recovered_output = $('#recovered .stat-value');
            let $deaths_output = $('#deaths .stat-value');

            let $loader = $("main .stat .loader");

            // set stats data
            $cases_output.html(data.active);
            $recovered_output.html(data.recovered);
            $deaths_output.html(data.deaths);

            // display data with animation
            $loader.fadeOut(function () {
                $recovered_output.fadeIn(2000);
                $cases_output.fadeIn(2000);
                $deaths_output.fadeIn(2000);
            });
        })
        .fail(function (error) {
            console.log(JSON.stringify(error));
        })
});