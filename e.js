var n = 0;
var otazky = new Array();
var spatneOtazky = new Array();
var odpovezene = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var x = 0;

function start() {
	zalozOtazky();
	document.getElementById('start').remove();

	document.getElementById('otazka').style.visibility = 'visible';
	//document.getElementById('odpoved').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';
	document.getElementById('otazkaCislo').style.visibility = 'visible';

	nactiOtazku();
}

function nactiOtazku() {
	if (otazky.length <= n) {
		document.getElementById("form").style.visibility = 'hidden';
		document.getElementById("otazkaCislo").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'hidden';

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
			'<p>Špatných odpovědí: ' + spatne + '</p>' +
			'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));
		if (odpovezene.indexOf(x) >= 0)
			;
		else
			break;
	}

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	document.getElementById('otazka').innerHTML = '<div id="form">' +
		otazka.otazka + ': <br><input id="id1" type="text" name="question" onkeypress="isEnter()">' +
		'<input id="end" type="button" value="Odpovědět" onclick=check()>' +
		'</div>';

	document.getElementById("id1").focus();
}

function nactiSpatne() {
	document.getElementById("form").style.visibility = 'visible';
	document.getElementById("otazkaCislo").style.visibility = 'visible';
	document.getElementById("dalsi").style.visibility = 'visible';
	document.getElementById('otazka').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';

	otazky = [];
	otazky = spatneOtazky;
	spatneOtazky = [];
	n = 0;
	x = 0;
	spravne = 0;
	spatne = 0;
	odpovezene = [];
	nactiOtazku();
}

function isEnter(e) {
	if ((event.which == 13 || event.keyCode == 13)) {
		if (document.getElementById("dalsi").style.visibility == 'visible') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("id1").value.toLowerCase() == otazka.odpoved.toLowerCase()) {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
			'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka)
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		document.getElementById("end").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'visible';
	}
	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku("economic crime", "hospodářská trestná činnost, hospodářská kriminalita");
	pridejOtazku("e-dealer", "prodejce na internetu");
	pridejOtazku("education and training", "vzdělávání a výcvik");
	pridejOtazku("efficiency and effectiveness", "efektivita a účinnost");
	pridejOtazku("elect", "volit");
	pridejOtazku("electrical equipment", "elektronika");
	pridejOtazku("elude", "vyhnout se (obratně)");
	pridejOtazku("eluding technique", "technika, s jejíž pomocí se pachatel vyhne prozrazení");
	pridejOtazku("embed", "pevně zasadit, zapustit");
	pridejOtazku("embezzlement", "zpronevěra, defraudace");
	pridejOtazku("embrace", "zahrnovat");
	pridejOtazku("emerge", "objevit se");
	pridejOtazku("emergency assistance", "pomoc v naléhavých případech");
	pridejOtazku("emergency equipment", "vybavení pro případ nouze, záchranné zařízení");
	pridejOtazku("emergency event", "mimořádná událost, stav nouze");
	pridejOtazku("emergency response team", "zásahová jednotka");
	pridejOtazku("employee of the state", "státní zaměstnanec");
	pridejOtazku("encourage new recruit", "spodporovat, stimulovat nové uchazeče");
	pridejOtazku("enforce", "vynutit si, prosadit");
	pridejOtazku("enforce law", "prosazovat právo");
	pridejOtazku("enforce the law", "prosazovat zákon");
	pridejOtazku("engage in", "zabývat se, praktikovat");
	pridejOtazku("engine", "motor");
	pridejOtazku("enhance", "posilovat");
	pridejOtazku("enhancing", "posílení");
	pridejOtazku("entail", "znamenat");
	pridejOtazku("enter", "vstoupit, vstup");
	pridejOtazku("entrust", "svěřit");
	pridejOtazku("entry", "vstup");
	pridejOtazku("environmental crime", "trestné činy proti životnímu prostředí");
	pridejOtazku("epaulette", "nárameník");
	pridejOtazku("EPG, enhanced protection glazing", "bezpečnostní autosklo");
	pridejOtazku("equipment", "vybavení");
	pridejOtazku("escape", "útěk, utéct, uprchnout");
	pridejOtazku("espionage", "špionáž, vyzvědačství");
	pridejOtazku("essencial", "zásadní");
	pridejOtazku("establish", "ustanovit, zřídit");
	pridejOtazku("establishment", "stálý stav");
	pridejOtazku("establish the budget", "připravit rozpočet");
	pridejOtazku("ethnic cleansing", "etnické čistky");
	pridejOtazku("European Court of Human Rights", "Evropský soud pro lidská práva");
	pridejOtazku("European Court of Justice", "Evropský soudní dvůr");
	pridejOtazku("eventually overturned", "nakonec změněný");
	pridejOtazku("evidence", "důkaz, důkazy");
	pridejOtazku("examination", "prověřování");
	pridejOtazku("examine", "zkoumat, přezkoumat, přešetřit");
	pridejOtazku("exceed", "překročit, přesáhnout");
	pridejOtazku("excise duty", "nepřímá, spotřební daň");
	pridejOtazku("exclusively", "výhradně");
	pridejOtazku("execute", "popravit");
	pridejOtazku("execution", "poprava");
	pridejOtazku("Executive committee", "Výkonný výbor");
	pridejOtazku("exemplify", "ilustrovat, doložit příkladem");
	pridejOtazku("exercise", "uplatňovat, vykonávat");
	pridejOtazku("exercise authority", "uplatňovat pravomoc");
	pridejOtazku("exercise one's duties", "vykonávat, plnit své povinnosti, vykonávat službu");
	pridejOtazku("expect", "očekávat");
	pridejOtazku("expert evidence", "důkaz prokázaný soudním znalcem");
	pridejOtazku("expertise statement", "znalecký posudek");
	pridejOtazku("expose", "vystavit, odhalit");
	pridejOtazku("external border", "vnější hranice");
	pridejOtazku("extortion", "vydírání, vymáhání, vynucování");
	pridejOtazku("extreme fenomenon", "extrémní jev");
	


}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}