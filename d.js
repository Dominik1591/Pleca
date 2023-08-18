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
	pridejOtazku("dactyloscopic print", "daktyloskopická stopa");
	pridejOtazku("damage", "ztráta");
	pridejOtazku("damage", "škoda, újma, poškození");
	pridejOtazku("date rape", "znásilnění mezi partnery ne v manželském svazku");
	pridejOtazku("deadbolt", "bezpečnostní zámek");
	pridejOtazku("dealing", "prodej");
	pridejOtazku("deal with", "zabývat se, jednat");
	pridejOtazku("deal with", "zabývat se něčím, projednávat co");
	pridejOtazku("deal with", "zvládnout, vypořádat se");
	pridejOtazku("deal with", "řešit, zabývat se");
	pridejOtazku("death", "úmrtí");
	pridejOtazku("death penalty", "trest smrti");
	pridejOtazku("death sentence", "trest smrti");
	pridejOtazku("deceit", "podvod, klam");
	pridejOtazku("deception", "podvod, klam, trik, podvod s totožností");
	pridejOtazku("defendant", "obžalovaný");
	pridejOtazku("defendant", "obviněný, obžalovaný");
	pridejOtazku("deference", "úcta, ohled");
	pridejOtazku("define", "definovat, psát");
	pridejOtazku("defraud", "oklamat, ošidit");
	pridejOtazku("degree", "stupeň");
	pridejOtazku("deliberate", "úmyslný");
	pridejOtazku("delinquency", "delikvence, kriminalita, zločinnost");
	pridejOtazku("demand", "požadovat");
	pridejOtazku("demand a testimony", "požadovat vysvětlení");
	pridejOtazku("demand personal identification", "požadovat prokázání totožnosti");
	pridejOtazku("department", "oddělení");
	pridejOtazku("dependency", "závislost");
	pridejOtazku("deposit", "uložit, vklad");
	pridejOtazku("deputy", "zástupce");
	pridejOtazku("deputy", "náměstek, zástupce");
	pridejOtazku("deputy sheriff", "zástupce šerifa");
	pridejOtazku("designated contact point", "určené kontaktní místo");
	pridejOtazku("detachment", "odloučené pracoviště");
	pridejOtazku("detain", "zajistit");
	pridejOtazku("detect", "dopadnout, vypátrat");
	pridejOtazku("detect", "objevit, zjistit");
	pridejOtazku("detect", "zjišťovat, odhalovat");
	pridejOtazku("detection of offenders", "vypátrání pachatelů");
	pridejOtazku("deter", "zabránit");
	pridejOtazku("deter", "odstrašit, odradit");
	pridejOtazku("determine", "určit, stanovit, rozhodnout");
	pridejOtazku("determine", "určit");
	pridejOtazku("determine", "určit, stanovit");
	pridejOtazku("determine", "stanovit, určit");
	pridejOtazku("deterrent", "odrazující");
	pridejOtazku("deterrent", "odstrašující prostředek");
	pridejOtazku("device", "zařízení, přístroj");
	pridejOtazku("devolve", "postoupit");
	pridejOtazku("different level", "odlišná úroveň");
	pridejOtazku("direct danger of severe injury or death", "bezprostřední nebezpečí závažného zranění nebo smrti");
	pridejOtazku("disaster scene", "místo neštěstí, katastrofy");
	pridejOtazku("discontinue", "přerušit");
	pridejOtazku("disguised weapons", "skryté zbraně");
	pridejOtazku("dismiss", "zamítnout");
	pridejOtazku("dispute", "spor, hádka");
	pridejOtazku("distinguish", "rozlišit, rozeznávat");
	pridejOtazku("distract", "rozptýlit, vyrušit, obrátit pozornost");
	pridejOtazku("district", "správní oblast, obvod, okres");
	pridejOtazku("disturb", "porušit");
	pridejOtazku("disturbing the peace", "narušování veřejného pořádku");
	pridejOtazku("diverse", "různý, rozličný");
	pridejOtazku("Doctor Degree", "doktorský stupeň studia");
	pridejOtazku("documentation gathering", "shromažďování dokumentace");
	pridejOtazku("domestic abuse", "týrání svěřené osoby");
	pridejOtazku("domestic violence", "domácí násilí");
	pridejOtazku("dose", "dávka");
	pridejOtazku("doubt", "pochybovat");
	pridejOtazku("draft", "návrh");
	pridejOtazku("drive from", "odvést z, vyvést z");
	pridejOtazku("driving offence", "porušení pravidel silničního provozu");
	pridejOtazku("drug store", "americká lékárna");
	pridejOtazku("drug trafficking", "nekalé obchodování s drogami");
	pridejOtazku("drunk and disorderly", "opilost a výtržnictví");
	pridejOtazku("dumping of rubbish", "vysypávání odpadků");
	pridejOtazku("dumpster diving", "probírání se odpadky (v průmyslové špionáži)");
	pridejOtazku("dupe", "napálit, podvést, oklamat");
	pridejOtazku("duties", "povinnosti, úkoly");
	pridejOtazku("duty", "povinnosti, úkoly");
	pridejOtazku("dentity date", "identifikační údaje");
	pridejOtazku("dentity fraud", "nemajetkový podvod");
	pridejOtazku("dentity theft", "krádež identity");
	pridejOtazku("dentity theft", "zneužití, krádež identity, poškozování cizích práv");



}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}