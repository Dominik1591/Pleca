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
	pridejOtazku("firearms", "střelné zbraně");
	pridejOtazku("first aid", "první pomoc");
	pridejOtazku("fitting", "instalování, instalace");
	pridejOtazku("flee", "uprchnout, utéci");
	pridejOtazku("floods", "záplavy povodně");
	pridejOtazku("fool around with", "pohrávat si s");
	pridejOtazku("footage", "video/foto záznam, dokumentace");
	pridejOtazku("forbid", "zakazovat");
	pridejOtazku("force", "násilí, síla");
	pridejOtazku("force", "násilím něčeho dosáhnout, vynutit si vstup, vypáčit, vyrazit");
	pridejOtazku("forced entry", "násilný vstup do objektu, budovy, bytu");
	pridejOtazku("forensic", "soudní, forenzní");
	pridejOtazku("forensic laboratory", "kriminalistická laboratoř");
	pridejOtazku("forensic science", "forenzní věda");
	pridejOtazku("forge", "padělat");
	pridejOtazku("forgery", "padělání");
	pridejOtazku("fowl", "drůbež");
	pridejOtazku("fragment", "úlomek, střep");
	pridejOtazku("fragmentation", "roztříštění");
	pridejOtazku("fragmented", "roztříštěný");
	pridejOtazku("fraud", "podvod");
	pridejOtazku("fraudster", "podvodník");
	pridejOtazku("fraudulent emails", "podvodné e-maily");
	pridejOtazku("fraud within corporations", "podvody pracovníků uvnitř firmy");
	pridejOtazku("free movement of people", "volný pohyb osob");
	pridejOtazku("friction", "tření");
	pridejOtazku("fugitive", "osoba na útěku, uprchlík");
	pridejOtazku("fugitives", "uprchlíci");
	pridejOtazku("fulfil", "plnit");
	pridejOtazku("full time study", "denní studium");
	pridejOtazku("further vocational training", "další odborné/profesní vzdělávání/výcvik");
	


}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}