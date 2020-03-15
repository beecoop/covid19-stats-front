const API_BASE_URL = 'http://127.0.0.1:5000';
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

            let $loader = $("main .stats .loader");

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
