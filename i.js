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
	pridejOtazku("ignition", "zapalování");
	pridejOtazku("ignition key", "klíč k zapalování");
	pridejOtazku("illegal downloading", "nelegální stahování");
	pridejOtazku("illegal drug trade", "nelegální obchod s drogami");
	pridejOtazku("illicid drug production", "nezákonná výroba drog");
	pridejOtazku("immigration", "přistěhovalectví, imigrace");
	pridejOtazku("immobiliser", "zařízení, zabraňující v odjezdu s vozidlem");
	pridejOtazku("impact", "dopad, účinek");
	pridejOtazku("impact-resistant", "odolný vůči nárazu");
	pridejOtazku("impairment", "poškození");
	pridejOtazku("implement", "provádět, uskutečňovat");
	pridejOtazku("imply", "předpokládat, obsahovat");
	pridejOtazku("impose", "uložit, uvalit");
	pridejOtazku("imprisonment", "trest odnětí svobody");
	pridejOtazku("incalculable", "nevyčíslitelný, nezměrný");
	pridejOtazku("incapacitation", "zbavení způsobilosti k právním úkonům");
	pridejOtazku("incest", "incest, sexuální zneužití mezi příbuznými");
	pridejOtazku("included on the agenda", "zahrnutý do pořadu jednání");
	pridejOtazku("increasing range", "rozšiřující se nabídka, sortiment");
	pridejOtazku("indecency", "obscénnost, nemravnost");
	pridejOtazku("indefinitely", "nekonečně");
	pridejOtazku("independent in operational matters", "samostatný při rozhodování o úkolech a akcích");
	pridejOtazku("independent office holder", "nezávislýúředník");
	pridejOtazku("indictable offence", "žalovatelný trestný čin, čin soudně trestný");
	pridejOtazku("indictment", "obžaloba, obžalovací spis");
	pridejOtazku("industrial espionage", "průmyslová špionáž");
	pridejOtazku("inerview", "výslech");
	pridejOtazku("inflict", "způsobit");
	pridejOtazku("infraction", "porušení, přestoupení, přestupek");
	pridejOtazku("infringe", "porušit právo, zákon");
	pridejOtazku("ingenuity", "vynalézavost, důvtipnost");
	pridejOtazku("inherent part", "neodmyslitelná část");
	pridejOtazku("injury", "zranění");
	pridejOtazku("innocent", "nevinen, nevinný");
	pridejOtazku("inquire", "dokazovat před soudem");
	pridejOtazku("inquiry", "dokazování před soudem, vyšetřování");
	pridejOtazku("insider trading", "zneužívání informací v obchodním styku");
	pridejOtazku("Inspector of Constabulary", "ředitel ředitelství policie");
	pridejOtazku("inspire", "inspirovat, vnuknout nápad");
	pridejOtazku("installing", "instalace");
	pridejOtazku("insult", "urážka");
	pridejOtazku("insurance", "pojištění");
	pridejOtazku("insurance fraud", "pojišťovací podvody");
	pridejOtazku("intellectual property", "duševní vlastnictví");
	pridejOtazku("intellectual property", "crimezcizení duševního vlastnictví");
	pridejOtazku("intelligence agency", "zpravodajská, výzvědná služba");
	pridejOtazku("intent", "úmysl");
	pridejOtazku("International Criminal Court", "Mezinárodní trestní soud");
	pridejOtazku("International Criminal Tribunal", "Mezinárodní trestní tribunál");
	pridejOtazku("international ties", "mezinárodní vazby");
	pridejOtazku("Internet crime", "internetová kriminalita");
	pridejOtazku("intimidate and disrupt entire communities", "činit nátlak a způsobit rozklad celých komunit");
	pridejOtazku("intimidation and violence", "útlak a násilí");
	pridejOtazku("investigate", "vyšetřovat");
	pridejOtazku("investigate a burglary", "vyšetřovat vloupání");
	pridejOtazku("investigation", "vyšetřování");
	pridejOtazku("investigative", "vyšetřovací");
	pridejOtazku("inviolability", "nedotknutelnost");
	pridejOtazku("involuntary manslaughter", "nedbalostní zabití");
	pridejOtazku("involve", "zahrnovat");
	pridejOtazku("involvement", "zapojení se čeho, angažování se v čem");
	pridejOtazku("IPCC", "nezávislá policejní komise pro vyšetřování stížností");
	pridejOtazku("issue", "otázky, problémy");
	pridejOtazku("issue", "položka, část, vydat, vyslat, zveřejnit, vystavit");
	pridejOtazku("issue an appology", "zveřejnit omluvu");
	pridejOtazku("item", "položka, věc");
	pridejOtazku("jail", "věznice, vězení, uvěznit, poslat do vězení");
	


}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}