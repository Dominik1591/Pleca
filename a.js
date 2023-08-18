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
	pridejOtazku("abduct", "unést");
	pridejOtazku("abduction", "únos např. dítěte");
	pridejOtazku("abductor", "únosce");
	pridejOtazku("abolish", "zrušit");
	pridejOtazku("abolishment", "zrušení");
	pridejOtazku("abolitionist", "země, které zrušily trest smrti");
	pridejOtazku("abuse", "zneužívat, týrat, zneužívání, týrání");
	pridejOtazku("abuse", "zneužití");
	pridejOtazku("abuse", "zneužití, zneužívat");
	pridejOtazku("abuse", "urážka, nadávka");
	pridejOtazku("abuse of public official powers", "zneužití pravomoci veřejného činitele");
	pridejOtazku("abuse physically", "dopouštět se fyzického násilí");
	pridejOtazku("access", "přístup");
	pridejOtazku("accessible", "dostupný");
	pridejOtazku("accession", "vstup");
	pridejOtazku("accidental", "náhodný");
	pridejOtazku("accident victim", "oběť nehody");
	pridejOtazku("account", "bankovní účet");
	pridejOtazku("account", "účet");
	pridejOtazku("acquit", "zprostit viny");
	pridejOtazku("Act", "zákon");
	pridejOtazku("act", "čin, jednání, zákon");
	pridejOtazku("actual bodily harm", "lehké ublížení na zdraví");
	pridejOtazku("addiction", "návyk, sklon, závislost");
	pridejOtazku("additional", "doplňkový");
	pridejOtazku("add up", "dávat jako součet, znamenat");
	pridejOtazku("adjust", "nastavit, přizpůsobit");
	pridejOtazku("adopt", "přijmout");
	pridejOtazku("advance", "pokrok");
	pridejOtazku("adviser", "poradce");
	pridejOtazku("affair", "otázka, záležitost, věc");
	pridejOtazku("aggravating circumstance", "přitěžující okolnost");
	pridejOtazku("aim at", "zaměřit se na");
	pridejOtazku("aim to", "usilovat o co");
	pridejOtazku("Air Rescue Service", "letecká záchranná služba");
	pridejOtazku("alarm", "poplašné zařízení");
	pridejOtazku("alert", "ostražitý, ve střehu, ve stavu pohotovosti");
	pridejOtazku("alias", "falešné jméno, přezdívka");
	pridejOtazku("alien", "cizinec");
	pridejOtazku("Alien Police", "služba pohraniční a cizinecké policie");
	pridejOtazku("allegation", "obvinění z údajného trestného činu");
	pridejOtazku("alleged", "údajný");
	pridejOtazku("alleged", "údajný, domnělý");
	pridejOtazku("allow or dismiss the appeal", "přijmout nebo zamítnout odvolání");
	pridejOtazku("amendment", "dodatek");
	pridejOtazku("annually", "ročně, každoročně");
	pridejOtazku("anonymously", "anonymně");
	pridejOtazku("answerable", "odpovědný");
	pridejOtazku("anti-spyware software", "program pro zabezpečení PC proti proniknutí");
	pridejOtazku("applications for", "žádost o");
	pridejOtazku("appoint", "jmenovat");
	pridejOtazku("appointment", "jmenování (do funkce, hodnosti)");
	pridejOtazku("apprehend", "zadržet");
	pridejOtazku("apprehend", "zatknout");
	pridejOtazku("apprehension", "zadržení");
	pridejOtazku("apprehension of", "vzetí do vazby");
	pridejOtazku("appropriate", "přivlastnit si");
	pridejOtazku("appropriately", "náležitě");
	pridejOtazku("approve", "schválit");
	pridejOtazku("approve of", "považovat za správné");
	pridejOtazku("arest warrant", "příkaz k zatčení, zatykač");
	pridejOtazku("armed", "ozbrojený");
	pridejOtazku("Armenians", "Arméni");
	pridejOtazku("around the clock", "24 hodin denně");
	pridejOtazku("arrest", "zatčení, zajištění, zadržení");
	pridejOtazku("arson", "žhářství");
	pridejOtazku("artificially inflate the price", "uměle vyhnat cenu nahoru");
	pridejOtazku("ascertain", "zjistit");
	pridejOtazku("assailant", "útočník, násilník");
	pridejOtazku("assault", "napadení, přepadení, útok");
	pridejOtazku("assault", "útok, napadení");
	pridejOtazku("assaulting a public official", "napadení veřejného činitele");
	pridejOtazku("assault on", "napadení koho, útok na");
	pridejOtazku("assign to", "přidělit k");
	pridejOtazku("Assistant Inspector of Constabulary", "zástupce ředitele ředitelství policie");
	pridejOtazku("assume", "přijmout, vzít na sebe");
	pridejOtazku("assumption", "předpoklad");
	pridejOtazku("at large", "na svobodě");
	pridejOtazku("attempt", "pokusit se, pokus");
	pridejOtazku("attempted offence", "pokus trestného činu");
	pridejOtazku("attempted rape", "pokus o znásilnění");
	pridejOtazku("attempt to escape", "pokus o útěk");
	pridejOtazku("at the very fabric of free society", "v samé podstatě svobodné společnosti");
	pridejOtazku("authorities", "úřady");
	pridejOtazku("available", "k dispozici");
	pridejOtazku("avoid", "vyhnout se, vyvarovat se");
	pridejOtazku("acilitate", "ulehčit, pomoci");
	pridejOtazku("acilitate", "usnadnit, zjednodušit");
	pridejOtazku("acilitating", "usnadňující");
	pridejOtazku("ail", "selhat, neuspět");
	pridejOtazku("ail", "zkrachovat");
	pridejOtazku("airness", "spravedlnost, čestnost, slušnost");
	pridejOtazku("ake", "goods padělané zboží");
	pridejOtazku("atal", "smrtelný");

}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}