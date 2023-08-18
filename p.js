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
	pridejOtazku("paperwork", "administrativa");
	pridejOtazku("paragraph", "odstavec");
	pridejOtazku("paramilitaries", "ozbrojenci");
	pridejOtazku("parole", "podmíněné, dočasné propuštění");
	pridejOtazku("particular", "jednotlivý, určitý");
	pridejOtazku("particular field", "specifická oblast");
	pridejOtazku("part time study", "kombinované studium");
	pridejOtazku("pass himself off", "vydávat se za někoho");
	pridejOtazku("password", "heslo");
	pridejOtazku("patrol", "hlídkovat");
	pridejOtazku("patrolling and reconnaisance flights", "hlídkové a průzkumné lety");
	pridejOtazku("pattern", "model, schéma");
	pridejOtazku("pattern", "předloha, původní e mail (jeden z významů)");
	pridejOtazku("pedestrian", "chodec");
	pridejOtazku("penal law", "trestní právo");
	pridejOtazku("penalty", "trest, pokuta");
	pridejOtazku("pension fund crime", "trestná činnost spojená s machinacemi v penzijních fondech");
	pridejOtazku("perceive", "vnímat, chápat");
	pridejOtazku("peremptory act", "neodkladný úkon");
	pridejOtazku("perform", "vykonávat");
	pridejOtazku("performance", "výkon");
	pridejOtazku("perform duties", "vykonávat, plnit své povinnosti, vykonávat službu");
	pridejOtazku("perjury", "křivá přísaha");
	pridejOtazku("permanent residence", "trvalé bydliště");
	pridejOtazku("perpetrate crime", "páchat trestnou činnost");
	pridejOtazku("perpetrator", "pachatel");
	pridejOtazku("persist", "trvat");
	pridejOtazku("personal account", "osobní účet");
	pridejOtazku("personal responsibility", "osobní odpovědnost");
	pridejOtazku("personal use", "vlastní potřeba");
	pridejOtazku("personnel department", "osobní oddělení");
	pridejOtazku("a person of respectability", "respektovaná osoba, společností vážená osoba");
	pridejOtazku("perverting the course of justice", "maření soudního výkonu");
	pridejOtazku("petrol station", "benzínová čerpací stanice");
	pridejOtazku("petty crime, minor crime", "méně závažná trestná činnost, drobná kriminalita");
	pridejOtazku("pharmacy", "lékárna");
	pridejOtazku("phenomena", "jevy");
	pridejOtazku("phenomenon", "jev");
	pridejOtazku("phishing", "metody k odcizení digitální identity uživatele");
	pridejOtazku("phishing emails", "falešné kopie původních e-mailů");
	pridejOtazku("physical abuse", "týrání svěřené osoby");
	pridejOtazku("physical abuse", "fyzické napadání");
	pridejOtazku("pickpocketing", "kapesní krádeže");
	pridejOtazku("pill-taking", "brát prášky");
	pridejOtazku("plainclothes", "civilní oblečení");
	pridejOtazku("plea bargaining", "přiznání viny v některých bodech obžaloby");
	pridejOtazku("plead guilty", "přiznat vinu");
	pridejOtazku("plead guilty", "prohlášení o vině, přiznání viny");
	pridejOtazku("pliers", "kleště, kombinačky, kleště na drát");
	pridejOtazku("police", "policie, policejní sbor, policisté");
	pridejOtazku("Police Academy", "Policejní akademie");
	pridejOtazku("police authorities", "policejní orgány");
	pridejOtazku("police chief", "velitel policie");
	pridejOtazku("Police Chief Officer", "velitel");
	pridejOtazku("Police College", "vyšší policejní škola");
	pridejOtazku("police disciplinary procedure", "disciplinární řízení vedené s příslušníkem policie");
	pridejOtazku("police force", "policejní sbor");
	pridejOtazku("policing výkon", "policejní služby");
	pridejOtazku("policing", "policejní práce, výkon policejní činnosti, dohled, ochrana");
	pridejOtazku("policing", "výkon policejní činnosti");
	pridejOtazku("policymaker", "zákonodárce");
	pridejOtazku("political affiliation", "politická příslušnost");
	pridejOtazku("political conviction or religion", "politické přesvědčení či víra");
	pridejOtazku("portion", "část");
	pridejOtazku("pose", "vydávat se za koho");
	pridejOtazku("possessing", "držení, vlastnění, přechovávání");
	pridejOtazku("potential threats", "potenciální hrozby");
	pridejOtazku("powerful message", "jednoznačné, jasné poselství");
	pridejOtazku("precaution", "obezřetnost, opatření");
	pridejOtazku("precious", "cenný");
	pridejOtazku("predominantly", "převážně");
	pridejOtazku("prejudice", "předsudek, předpojatost");
	pridejOtazku("prejudice or hate", "předsudek či nenávist");
	pridejOtazku("prejudice somebody, something", "ovlivnit předsudky koho, způsobit u koho zaujetí");
	pridejOtazku("premeditated and cold-blooded killing", "úkladná, chladnoktevná vražda");
	pridejOtazku("premeditated criminal act", "úmyslný trsetný čin");
	pridejOtazku("premeditated intent", "úmyslný záměr");
	pridejOtazku("premises", "budova, provozovna");
	pridejOtazku("premises", "areál, komplex budov");
	pridejOtazku("present identification", "prokázat se");
	pridejOtazku("preservation of public tranquility", "ochrana veřejného pořádku");
	pridejOtazku("presidential seat", "sídlo presidenta");
	pridejOtazku("pretend", "předstírat");
	pridejOtazku("preventable", "vyhnutelný");
	pridejOtazku("prevent crime", "předcházet páchání trestné činnosti");
	pridejOtazku("prevention of crime", "prevence trestné činnosti");
	pridejOtazku("preventive custody", "vazba předstižná");
	pridejOtazku("principle", "zásada");
	pridejOtazku("prison sentence", "trest odnětí svobody");
	pridejOtazku("probation officer", "probační úředník");
	pridejOtazku("proceedings against a fugitive", "řízení proti uprchlému");
	pridejOtazku("proceedings against juveniles", "řízení proti mladistvým");
	pridejOtazku("proceeds", "zisk");
	pridejOtazku("produce a witness", "předvést svědka");
	pridejOtazku("profile of a police graduate", "profil absolventa policejní školy");
	pridejOtazku("profit", "zisk");
	pridejOtazku("prolific", "výkonný, úspěšný");
	pridejOtazku("prominent", "významný, hlavní");
	pridejOtazku("promote", "povýšit");
	pridejOtazku("promote", "podporovat");
	pridejOtazku("promotion from and within", "povýšení dle zákona o policii");
	pridejOtazku("prompt", "napovědět");
	pridejOtazku("proof", "důkaz");
	pridejOtazku("property", "majetek");
	pridejOtazku("property", "majetek, vlastnictví, jměmí");
	pridejOtazku("prosecute", "obžalovat, trestně stíhat");
	pridejOtazku("prosecution", "trestní řízení/stíhání");
	pridejOtazku("prosecution", "trestní stíhání");
	pridejOtazku("prosecution", "obžaloba, trestní / soudní stíhání");
	pridejOtazku("prosecutor", "státní zástupce");
	pridejOtazku("protection of life and property", "ochrana života a majetku");
	pridejOtazku("protect lives and property", "chránit životy a majetek");
	pridejOtazku("prove", "dokázat");
	pridejOtazku("provide", "poskytovat, zabezpečit");
	pridejOtazku("provide for", "zajišťovat");
	pridejOtazku("provide security", "zajišťovat bezpečnost");
	pridejOtazku("province", "obor, pole působnosti");
	pridejOtazku("provisional arrest", "předběžné zadržení");
	pridejOtazku("pry", "páčit, páčidlo");
	pridejOtazku("prying", "páčení");
	pridejOtazku("psychical abuse", "psychické týrání");
	pridejOtazku("psychotropic substances", "psychotropní látky");
	pridejOtazku("public corruption", "korupce veřejných činitelů");
	pridejOtazku("public entitie", "sveřejné instituce");
	pridejOtazku("public is excludeds", "vyloučením veřejnosti");
	pridejOtazku("public order", "veřejný pořádek");
	pridejOtazku("Public Order Police", "služba pořádkové policie");
	pridejOtazku("punch", "udeřit, dát ránu");
	pridejOtazku("punish", "potrestat, trestat");
	pridejOtazku("punish", "trestat");
	pridejOtazku("punishable", "podléhající trestu, trestně stíhatelný");
	pridejOtazku("punishment", "trest");
	pridejOtazku("purport", "zamýšlet");
	pridejOtazku("pursue", "stíhat, sledovat");
	pridejOtazku("put on probation", "odsoudit podmíněně");
	pridejOtazku("quash indictment", "stáhnout obžalobu");
	pridejOtazku("queries into", "dotazy");
	pridejOtazku("question", "vyslýchat");


}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved.toLowerCase()
	};

	otazky.push(q);
}