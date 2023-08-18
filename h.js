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
	pridejOtazku("hack another computer", "proniknout do jiného počítače");
	pridejOtazku("hamper", "bránit, překážet");
	pridejOtazku("handle", "manipulovat, zacházet s něčím");
	pridejOtazku("handling stolen goods", "překupnictví kradeného zboží");
	pridejOtazku("handwriting", "rukopis");
	pridejOtazku("handwriting identification", "písmoznalectví");
	pridejOtazku("hang around, hang round", "nečinně postávat, potloukat se kolem");
	pridejOtazku("harbor patrol", "přístavní hlídka");
	pridejOtazku("harm", "újma, ublížení, zranění");
	pridejOtazku("hate crimes", "trestné činy rasově motivované a proti lidskosti");
	pridejOtazku("hate groups", "extremisté, skupiny");
	pridejOtazku("hatred toward particular groups", "nenávist, zášť vůči konkrétním skupinám");
	pridejOtazku("have legal personality", "mít právní subjektivitu");
	pridejOtazku("headquarters", "ústředí, centrála, ředitelství");
	pridejOtazku("health care fraud", "podvody v poskytování zdravotní péče");
	pridejOtazku("hear a case", "projednat");
	pridejOtazku("hear a person", "vyslechnout");
	pridejOtazku("hearing", "projednávání, slyšení");
	pridejOtazku("hearing", "výslech");
	pridejOtazku("High Court", "nejvyšší soud");
	pridejOtazku("high-impact economic crime", "závažná hiospodářská trestná činnost");
	pridejOtazku("High Public Prosecutornej", "vyšší státní zástupce");
	pridejOtazku("highway patrol", "dálniční policie");
	pridejOtazku("hijacking", "únos (letadla)");
	pridejOtazku("hit-and-run", "ujetí z místa nehody");
	pridejOtazku("home confinement", "domácí vězení");
	pridejOtazku("Home Secretary", "ministr vnitra");
	pridejOtazku("homicide", "vražda, zabití");
	pridejOtazku("homophobic", "homofobní, nemající rád homosexuály");
	pridejOtazku("horseback unit", "jednotka jízdní policie");
	pridejOtazku("hostility", "nepřátelství, zášť, odpor");
	pridejOtazku("House of Lords", "Sněmovna lordů");
	pridejOtazku("huge", "obrovský, ohromný");
	pridejOtazku("hugely", "obrovsky");
	pridejOtazku("human trafficking", "obchodování s lidmi");
	pridejOtazku("humiliate", "utiskovat, utlačovat, ponižovat");
	pridejOtazku("humiliation", "útisk, útlak");
	

}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}