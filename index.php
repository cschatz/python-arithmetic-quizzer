<!DOCTYPE html>
<head>
<title>Python Arithmetic Practice</title>
<link rel="stylesheet" type="text/css" media="screen" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="arith.js"></script>
</head>

<div id="main">

<h1>Python Arithmetic Practice</h1>


<p>Below is an arithmetic expression.<br />
Using "pythonic" math, type the value of that expression.</p>

<center>
<div id="question">
2 + 2
</div>

<input type='text' id='studentanswer' size='8' /> 
<input type='submit' class='answerbutton' id='submit' value='Submit' />
</center>

<div id='feedbackarea'>
<div id='feedback'>
&nbsp;
</div>
<center>
<button id='nextbutton'>Next Question</button>
<div id='scoreinfo'>
<button id='reset'>Reset Counts</button>
Your record so far: <span id='correctcount'>0</span> / <span id='totalcount'>0</span> <span id='percentnote'></span> 
</div>
</center>
</div>



