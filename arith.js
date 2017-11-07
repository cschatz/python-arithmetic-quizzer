correct = 0;
total = 0;
currentAnswer = 0;

function loadnext()
{
    $('#nextbutton').hide();
    $('#feedback').hide();
    $('#submit').show();
    $('#studentanswer').val("");
    $('#studentanswer').prop('disabled', false);
    $.getJSON("question.php", function(data) {
	$('#question').html(data.item);
	currentAnswer = data.answer;
    });
    
}

function resetcounts()
{
    $('#correctcount').text("0");
    $('#totalcount').text("0");
    $('#percentnote').html("");
    loadnext()
}

function checkanswer(ans)
{
    total = total + 1;
    var msg = "";
    var what = "";
    if (ans == currentAnswer)
    {
        msg = "<b>CORRECT!</b>";
        correct = correct + 1;
        what = "correct";
    }
    else
    {
        msg = "Sorry, that's wrong.<br />The correct answer is <b>" + currentAnswer + "</b>";
        what = "wrong";
    }

    var percent = Math.round(correct / total * 1000) / 10;
    $('#correctcount').text(correct);
    $('#totalcount').text(total);
    $('#percentnote').html("(<b>" + percent + "%</b> correct)");

    $('#feedback').removeClass().addClass(what);
    $('#feedback').html(msg);
    $('#feedback').show();

    $('#submit').hide();
    $('#nextbutton').show();
}

function usersubmit() {
    $('#studentanswer').prop('disabled', true);
    checkanswer($('#studentanswer').val());
}

$(document).ready(function() {    
    $('#submit').click(function () {
	usersubmit();
    });
    $('#studentanswer').keydown(function(e) {
	if (e.keyCode == 13) {
            usersubmit();
	}
    });
    $('#reset').click(function () {
	resetcounts();
    });
    $('#nextbutton').click(function () {
	loadnext();
    });

    loadnext();
    
});

