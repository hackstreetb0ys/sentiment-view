var timer = Rx.Observable.interval(1000);
var subject = new Rx.Subject();
var subSource = timer.subscribe(subject);

var subSubject1 = subject.subscribe(
    function (x) {
        $.ajax({url: "http://twitter-sentiment-play-dd62f3cf.ragnarula.svc.tutum.io/sentiment", success: function(result){
            $("#results").html(result.toString());
        }});
    },
    function (e) { console.log('onError: ' + e.message); },
    function () { console.log('onCompleted');});

var renderResult = funtion(data){
    "<tr><td>" + data['positive'] + "</td></tr>"
}