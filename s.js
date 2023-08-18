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
	
	pridejOtazku("safe", "bezpečný");
	pridejOtazku("safety", "bezpečnostní");
	pridejOtazku("satisfy civil society's needs", "uspokojovat potřeby občanů");
	pridejOtazku("scene", "místo události");
	pridejOtazku("the scene of the crime, the crime scene", "místo činu");
	pridejOtazku("schedule", "naplánovat, rozvrhnout");
	pridejOtazku("scientifically", "vědecky");
	pridejOtazku("scratch", "škrábanec, škrábat");
	pridejOtazku("screwdriver", "šroubovák");
	pridejOtazku("search", "pátrání, pátrat");
	pridejOtazku("search", "hledat, pátrat, prohledávat, vykonávat osobní prohlídku");
	pridejOtazku("searches", "pátrání (více významů)");
	pridejOtazku("secluded", "spotodlehlé, opuštěné místo");
	pridejOtazku("Secretary General", "Generální tajemník");
	pridejOtazku("Secretary of State for the Home Department", "ministr vnitra");
	pridejOtazku("section", "paragraf");
	pridejOtazku("secure", "zajistit, ochránit");
	pridejOtazku("securities fraud", "podvody s cennými papíry");
	pridejOtazku("security", "bezpečnost");
	pridejOtazku("Security Information Service, (SIS)", "Bezpečnostní Informační Služba BIS");
	pridejOtazku("seek advice", "hledat, žádat o radu, pomoc");
	pridejOtazku("seek persons", "hledat osoby");
	pridejOtazku("seek the arrest", "vydat zatykač");
	pridejOtazku("seize", "zabavit");
	pridejOtazku("seizure", "zabavení");
	pridejOtazku("seldom", "zřídka");
	pridejOtazku("sell", "prodat");
	pridejOtazku("senior rank", "důstojnická hodnost");
	pridejOtazku("senior ranking officer", "služebně výše postavený policista");
	pridejOtazku("sentence", "soudit");
	pridejOtazku("sentence", "druh trestu");
	pridejOtazku("sentencing", "výrok rozsudku o trestu");
	pridejOtazku("sentencing", "ukládání trestů");
	pridejOtazku("serial murderer (killer)", "několikanásobný vrah");
	pridejOtazku("serious crime", "závažná trestná činnost, závažný trestný čin");
	pridejOtazku("seriously", "vážně");
	pridejOtazku("seriousness", "závažnost");
	pridejOtazku("serious offence", "závažný trestný čin");
	pridejOtazku("serious sexual offence", "závažný sexuální trestný čin");
	pridejOtazku("serve", "odpykávat si trest");
	pridejOtazku("serve citizens", "sloužit občanům");
	pridejOtazku("set of effective tools", "soubor efektivních nástrojů");
	pridejOtazku("severely", "přísně");
	pridejOtazku("sewn on", "našitý");
	pridejOtazku("sexual abuse", "sexuální zneužívání");
	pridejOtazku("sexual assault", "sexuální útok, napadení");
	pridejOtazku("sham", "předstíraný");
	pridejOtazku("shape", "ovlivňovat, utvářet, formovat");
	pridejOtazku("Sheriff's Office", "úřad šerifa");
	pridejOtazku("shift work", "práce na směny");
	pridejOtazku("shoplifting", "krádež v obchodě");
	pridejOtazku("shoulder surfing", "získání hesla (PIN) uživatele odpozorováním");
	pridejOtazku("sick leave", "nemocenská");
	pridejOtazku("side by side", "vedle sebe, společně");
	pridejOtazku("side window", "boční okénko");
	pridejOtazku("signs", "známky, stopy");
	pridejOtazku("single judge", "samosoudce");
	pridejOtazku("slice", "část");
	pridejOtazku("slip", "otevřít,odmknout");
	pridejOtazku("small amount", "malé množství");
	pridejOtazku("smash", "rozbít, zdemolovat, rozdrtit");
	pridejOtazku("smashed windows", "rozbitá okna");
	pridejOtazku("smash & grab", "rychlé rozbití skla a vykradení vozidla");
	pridejOtazku("smooth", "hladký");
	pridejOtazku("solicitor", "advokát, právník nižšího soudu");
	pridejOtazku("solve a crime", "vyřešit trestný čin");
	pridejOtazku("sophisticated", "rafinovaný");
	pridejOtazku("sound judgement", "zdravý úsudek");
	pridejOtazku("sound recording", "zvukový záznam");
	pridejOtazku("spate", "řada, série");
	pridejOtazku("special weapons and tactics team", "jednotka užívající speciální zbraně a taktiky");
	pridejOtazku("speeding", "překročení povolené rychlosti");
	pridejOtazku("spot", "rozeznat, zjistit");
	pridejOtazku("spousal abuse", "sexuální nátlak na partnera");
	pridejOtazku("spouse", "snoubenec, snoubenka, druh/žka, manžel/ka");
	pridejOtazku("stall-front selling", "stánkový prodej");
	pridejOtazku("statement of explanation", "podání vysvětlení");
	pridejOtazku("state police", "státní policie");
	pridejOtazku("State Prosecutor, Public Prosecutor", "státní zástupce");
	pridejOtazku("statistics", "statistika");
	pridejOtazku("steal", "dopuštět se krádeže, odcizit");
	pridejOtazku("steering wheel", "volant");
	pridejOtazku("steering wheel clamp", "zámek volantu");
	pridejOtazku("stipulate", "stanovit, určit");
	pridejOtazku("Stockholm syndrome", "stockholmský syndrom, vazba oběti na pachateli");
	pridejOtazku("street, drug-related, gun crime", "pouliční trestná činnost spojená s obchodováním s drogami, zbraněmi");
	pridejOtazku("strike ", "udeřit, narazit");
	pridejOtazku("struggle", "bojovat o co");
	pridejOtazku("struggle", "boj, potírání");
	pridejOtazku("subject to", "podléhající, vystavený čemu");
	pridejOtazku("subject to", "vystavit něčemu");
	pridejOtazku("submit", "předložit");
	pridejOtazku("submit a formal complaint", "předložit formální obvinění");
	pridejOtazku("substantial", "značný");
	pridejOtazku("suffer", "trpět, utrpět");
	pridejOtazku("suffer from", "trpět, strádat");
	pridejOtazku("suffering", "urtpení");
	pridejOtazku("summary offence", "trestný čin, který lze odsoudit sumárně");
	pridejOtazku("summary pre-trial proceedings", "zkrácené přípravné trestní řízení");
	pridejOtazku("summon", "předvolat");
	pridejOtazku("summons", "předvolání, obsílka");
	pridejOtazku("sum up the evidence", "shrnout důkazy");
	pridejOtazku("superhighway", "velmi rychlý způsob (jeden z významů)");
	pridejOtazku("supersede", "nahradit, odstranit");
	pridejOtazku("supervise", "dohlížet, kontrolovat, řídit");
	pridejOtazku("supervise", "dozorovat");
	pridejOtazku("supervise safety and the smoothness of traffic", "dohlížet nad bezpečností a plynulostí silničního provozu");
	pridejOtazku("supervision", "dohled, dozor");
	pridejOtazku("supervision order", "příkaz k dohledu probačním úředníkem");
	pridejOtazku("supply", "dodat, vybavit");
	pridejOtazku("suppressed", "evidence zatajené důkazy");
	pridejOtazku("supreme", "nejvyšší, vrchní, vrcholný");
	pridejOtazku("surface", "vyjít najevo");
	pridejOtazku("surveillance", "dohled, dozor (stálý)");
	pridejOtazku("surveillance", "sledování");
	pridejOtazku("survey", "přehled");
	pridejOtazku("susceptible to", "náchylný k");
	pridejOtazku("suspect", "podezřelý");
	pridejOtazku("suspended sentence", "podmíněné odsouzení, odložení výkonu trestu");
	pridejOtazku("suspicion", "podezření");
	pridejOtazku("suspicious", "podezřelý");
	pridejOtazku("suspicious activity", "podezřelá činnost");
	pridejOtazku("swear at", "používat hrubé výrazy");
	pridejOtazku("swirl", "kroužit");
	pridejOtazku("sworn officer", "policista pod přísahou");



}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}