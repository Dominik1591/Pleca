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
	
	pridejOtazku("call for", "vyzvat, žádat");
	pridejOtazku("canine corps", "psovodi");
	pridejOtazku("capital crimes", "trestné činy, za něž je možné uložit trest smrti");
	pridejOtazku("capital punishment", "trest smrti");
	pridejOtazku("capital punishment, death penalty, death sentence", "trest smrti");
	pridejOtazku("capitol parlament", "sídlo vlády");
	pridejOtazku("capitol police", "ochranná služba");
	pridejOtazku("captivity", "zbavení osobní svobody, omezování os svobody");
	pridejOtazku("car boot", "zavazadlový prostor vozidla");
	pridejOtazku("car boot sale", "prodej z kufru auta");
	pridejOtazku("carjacking", "únos (auta)");
	pridejOtazku("carry due identification", "být řádně označen");
	pridejOtazku("carry out expertise", "provádět expertízu, vypracovat odborné posudky");
	pridejOtazku("cash", "hotovost");
	pridejOtazku("catch out", "přistihnout");
	pridejOtazku("cause", "zapřičinit, způsobit");
	pridejOtazku("cause", "příčina");
	pridejOtazku("causeway", "silnice vedená po hrázi");
	pridejOtazku("caution", "obezřetnost, opatrnost");
	pridejOtazku("cease", "zastavit");
	pridejOtazku("central government", "centrální vláda");
	pridejOtazku("challenging", "náročný, podnětný, představující výzvu");
	pridejOtazku("charge", "obvinění, obžaloba");
	pridejOtazku("charge somebody with", "obvinit něhoho z");
	pridejOtazku("charge with", "obvinit z");
	pridejOtazku("charting", "obsahující, popisující");
	pridejOtazku("check", "kontrolovat, zkontrolovat");
	pridejOtazku("chemist's", "britská lékárna");
	pridejOtazku("child abuse", "zneužívání dítěte");
	pridejOtazku("child neglect", "zanedbání povinné výživy, výchovy");
	pridejOtazku("child pornography", "dětská pornografie");
	pridejOtazku("Christians", "křesťané");
	pridejOtazku("circumstance", "okolnost");
	pridejOtazku("citation", "předvolání, obsílka");
	pridejOtazku("Civil Division", "občansko právní kolegium");
	pridejOtazku("civil proceedings", "občansko právní řízení");
	pridejOtazku("civil support staff", "občanští, civilní zaměstnanci");
	pridejOtazku("claim", "tvrzení");
	pridejOtazku("claim", "žádost, požadavek");
	pridejOtazku("clarification", "objasnění");
	pridejOtazku("collect additional informations", "hromažďovat doplňující informace");
	pridejOtazku("collect", "evidence získávat, shromažďovat důkazy");
	pridejOtazku("collection", "vyšetřování");
	pridejOtazku("combat", "boj, potírání");
	pridejOtazku("combat", "bojovat");
	pridejOtazku("combat crime", "bojovat s trestnou činností");
	pridejOtazku("command", "velení");
	pridejOtazku("commencing the act", "zahájení trestního stíhání");
	pridejOtazku("commit", "spáchat");
	pridejOtazku("commit a crime", "spáchat trestný čin");
	pridejOtazku("commit crime", "páchat trestnou činnost");
	pridejOtazku("commit criminal acts", "páchat, dopustit se trestných činů");
	pridejOtazku("commit somebody to the court", "předat soudu");
	pridejOtazku("commit suicide", "spáchat sebevraždu");
	pridejOtazku("committal proceeding", "řízení ve věci");
	pridejOtazku("committee", "výbor, komise");
	pridejOtazku("commodities fraud", "podvody s komoditami");
	pridejOtazku("common", "obvyklý, běžný, společný");
	pridejOtazku("common assault", "fyzické napadení");
	pridejOtazku("communication skills", "komunikativní dovednosti");
	pridejOtazku("community body", "orgán společenství");
	pridejOtazku("community policing", "policej. činnost ve spolupráci s míst. obyvatelstvem (jako kdysi četnictvo)");
	pridejOtazku("community service", "veřejně prospěšné práce");
	pridejOtazku("complaint", "stížnost");
	pridejOtazku("complaint for breaching the law", "stížnost pro porušení zákona");
	pridejOtazku("computer crime", "počítačová kriminalita");
	pridejOtazku("con artist", "notorický podvodník");
	pridejOtazku("concealment", "utajování");
	pridejOtazku("concept", "pojem");
	pridejOtazku("concern", "znepokojení");
	pridejOtazku("concern", "zajímat se");
	pridejOtazku("conclusions", "závěry");
	pridejOtazku("conditional cessation of prosecution", "podmíněné zastavení trestního stíhání");
	pridejOtazku("conditional discharge", "podmíněné propuštění");
	pridejOtazku("conditionally", "podmíněně");
	pridejOtazku("conduct", "provádět, vést, řídit");
	pridejOtazku("confidence", "důvěra");
	pridejOtazku("confiscate", "zabavit");
	pridejOtazku("conform to", "odpovídat čemu");
	pridejOtazku("consecutive", "nepřetržitý, po sobě jdoucí");
	pridejOtazku("consequence", "následek");
	pridejOtazku("consider", "považovat");
	pridejOtazku("constable", "strážník, policista");
	pridejOtazku("constabulary", "ředitelství policie");
	pridejOtazku("constantly alert", "neustále ve stavu pohotovosti, ve střehu");
	pridejOtazku("constitute a criminal offence", "zakládat trestný čin");
	pridejOtazku("constitute a reason", "zakládat důvod");
	pridejOtazku("constitutional official", "ústavní činitel");
	pridejOtazku("consumer fraud", "poškozování spotřebitele");
	pridejOtazku("contempt of court", "pohrdání soudem");
	pridejOtazku("continuous self education", "kontinuální vzdělávání, soustavné sebevzdělávání");
	pridejOtazku("contour", "linie, obrys, tvar");
	pridejOtazku("convict", "odsoudit, usvědčit, uznat/shledat vinným");
	pridejOtazku("convict, convicted", "odsoudit, odsouzený");
	pridejOtazku("convicted", "odsouzený");
	pridejOtazku("conviction", "usvědčení, rozsudek");
	pridejOtazku("conviction", "výrok o vině");
	pridejOtazku("conviction", "odsouzení");
	pridejOtazku("convict of", "konstatovat vinu");
	pridejOtazku("convict of a crime", "odsoudit za trestný čin");
	pridejOtazku("cooperate", "spolupracovat");
	pridejOtazku("copyright theft", "porušování autorského práva");
	pridejOtazku("corner", "ovládnout");
	pridejOtazku("coroner", "úřední ohledavač mrtvol");
	pridejOtazku("corporate dishonesty", "firemní nepoctivost");
	pridejOtazku("corporate fraud", "firemní podvody");
	pridejOtazku("corruption", "korupce");
	pridejOtazku("cost", "náklady, cena");
	pridejOtazku("cough", "syrup sirup proti kašli");
	pridejOtazku("counsel", "obhájce");
	pridejOtazku("counterfeit", "padělaný");
	pridejOtazku("counterfeit", "padělat");
	pridejOtazku("counterfeiting", "padělání");
	pridejOtazku("county", "správní oblast, okres v rámci jednotlivých států USA");
	pridejOtazku("court", "soud");
	pridejOtazku("court of appeal", "odvolací soud");
	pridejOtazku("court of trial", "soud");
	pridejOtazku("crackdown", "policejní zásah, zákrok");
	pridejOtazku("crackdown", "zásah, zákrok");
	pridejOtazku("crash", "rozbít, havarovat");
	pridejOtazku("create", "vytvářet");
	pridejOtazku("credibility", "důvěryhodnost");
	pridejOtazku("credible", "důvěryhodný, věrohodný, spolehlivý");
	pridejOtazku("credit card", "úvěrová karta");
	pridejOtazku("credit card frauds", "podvody s kreditními kartami");
	pridejOtazku("creed", "přesvědčení, vyznání");
	pridejOtazku("crime", "trestný čin, zločin");
	pridejOtazku("crime prevention", "prevence kriminality");
	pridejOtazku("crime rate", "míra kriminality, nápad trestné činnosti");
	pridejOtazku("crime registry", "registr trestné činnosti");
	pridejOtazku("crime-related information", "informace, týkající se trestné činnosti");
	pridejOtazku("crimes against humanity", "zločiny proti lidskosti");
	pridejOtazku("crimes against property", "trestné činy proti majetku");
	pridejOtazku("crime scene", "místo činu");
	pridejOtazku("crime scene", "místo trestného činu");
	pridejOtazku("crime spree", "série trestných činů");
	pridejOtazku("crime", "kriminalita, trestná činnost");
	pridejOtazku("criminal", "pachatel trestného činu");
	pridejOtazku("Criminal and Investigation Police", "služba kriminální policie a vyšetřování");
	pridejOtazku("criminal cases", "trestní případy");
	pridejOtazku("Criminal Code", "trestní zákon");
	pridejOtazku("criminal conspiracy", "zločinné spiknutí");
	pridejOtazku("criminal court order", "trestní příkaz");
	pridejOtazku("Criminal Division", "trestní kolegium");
	pridejOtazku("criminal intelligence", "informace, týkající se trestné činnosti");
	pridejOtazku("criminalistics laboratory", "kriminalistická laboratoř");
	pridejOtazku("criminal offence", "trestný čin");
	pridejOtazku("criminal offences", "trestné činy");
	pridejOtazku("Criminal Police and Investigation Department", "služba kriminální policie a vyšetřování");
	pridejOtazku("Criminal Procedure Code", "trestní řád");
	pridejOtazku("criminal proceedings", "trestní řízení/stíhání");
	pridejOtazku("cross-border", "přeshraniční");
	pridejOtazku("cross burnings", "pálení křížů");
	pridejOtazku("Crown Court", "královský soud");
	pridejOtazku("crucial", "rozhodující, klíčový");
	pridejOtazku("cruel", "zvláště trýznivý");
	pridejOtazku("cruelly", "zvláště trýznivým způsobem");
	pridejOtazku("cruelty", "mučivé útrapy");
	pridejOtazku("curb", "omezit");
	pridejOtazku("custody", "vazba");
	pridejOtazku("custody petition", "návrh na uvalení vazby");
	pridejOtazku("customs", "celní správa");
	pridejOtazku("customs control", "celní kontrola");
	



}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}