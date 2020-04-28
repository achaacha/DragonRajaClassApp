/*-------------------------------------------------------------
|                    THE MOST FKIN BEAUTIFUL                  |
|                    THING I HAVE EVER SEEN                   |
|                         IN MY LIFE                          |
|                    THANK YOU DANC-SENPAI                    |
--------------------------------------------------------------*/

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


/*-------------------------------------------
|               Notice                       |
--------------------------------------------*/

const collapse = function() {
  $('.notice').style.display = "none";
}

$('.notice').addEventListener('click', collapse);

/*-------------------------------------------
|               Bootup                      |
--------------------------------------------*/

const choices = function() {
  $('.bootup').style.display = "none";
  $('#c1').removeEventListener('click', choices);
  $('#c2').removeEventListener('click', sorry);
  $('#c3').removeEventListener('click', sorry);
  $('#c4').removeEventListener('click', sorry);
}

const sorry = function() {
  $('.sorryw').style.display = "block";
  $('.sorryw').addEventListener('click', returnn);
}

const returnn = function() {
  $('.sorryw').style.display = "none";
  $('.sorryw').removeEventListener('click', returnn);
}

$('#c1').addEventListener('click', choices);
$('#c2').addEventListener('click', sorry);
$('#c3').addEventListener('click', sorry);
$('#c4').addEventListener('click', sorry);
