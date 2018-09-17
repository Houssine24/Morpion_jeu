function crossOrCircle()
{
	cmt++;
	if (cmt == 1)
	{
		$(this).data("value" ,"X");
		$(this).html(($(this).data("value")));
	}
	else
	{
		$(this).data("value" ,"O");
		$(this).html(($(this).data("value")));
	}
	if (cmt == 2)
	{
		cmt = 0;
	}
	winCondition();
}

function displayScore()
{
	$("#score").empty();
	$("#score").append("<div>Score du joueur 1 : "+cmtJ1+"</div>");
	$("#score").append("<div>Score du joueur 2 : "+cmtJ2+"</div>");
}

function reset()
{
	$(".case").html("");
	$(".case").data("value" ,"");
	cmt = 0;
	displayScore();
}

function winCondition()
{
	if ($("#case1").data("value") == "X" && $("#case2").data("value") == "X" && $("#case3").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();

	}
	if ($("#case4").data("value") == "X" && $("#case5").data("value") == "X" && $("#case6").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case7").data("value") == "X" && $("#case8").data("value") == "X" && $("#case9").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case1").data("value") == "X" && $("#case5").data("value") == "X" && $("#case9").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case3").data("value") == "X" && $("#case5").data("value") == "X" && $("#case7").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case1").data("value") == "X" && $("#case4").data("value") == "X" && $("#case7").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case2").data("value") == "X" && $("#case5").data("value") == "X" && $("#case8").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}
	if ($("#case3").data("value") == "X" && $("#case6").data("value") == "X" && $("#case9").data("value") == "X")
	{
		alert("Le joueur 1 gagne !");
		win1();
	}

	if ($("#case1").data("value") == "O" && $("#case2").data("value") == "O" && $("#case3").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case4").data("value") == "O" && $("#case5").data("value") == "O" && $("#case6").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case7").data("value") == "O" && $("#case8").data("value") == "O" && $("#case9").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case7").data("value") == "O" && $("#case8").data("value") == "O" && $("#case9").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case1").data("value") == "O" && $("#case5").data("value") == "O" && $("#case9").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case3").data("value") == "O" && $("#case5").data("value") == "O" && $("#case7").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case1").data("value") == "O" && $("#case4").data("value") == "O" && $("#case7").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case2").data("value") == "O" && $("#case5").data("value") == "O" && $("#case8").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
	if ($("#case3").data("value") == "O" && $("#case6").data("value") == "O" && $("#case9").data("value") == "O")
	{
		alert("Le joueur 2 gagne !");
		win2();
	}
};

function win1()
{
	cmtJ1 ++;
	displayScore();
}

function win2()
{
	cmtJ2 ++;
	displayScore();
}

function finDuJeu()
{
	$(".case").attr("disabled", "disabled");
}

var cmt = 0;
var cmtJ1 = 0;
var cmtJ2 = 0;
$(".case").click(crossOrCircle);
$("#reset").click(reset);