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

		document.getElementById("check").innerHTmL = '<p>Správných odpovědí: ' + spravne + '</p>' +
			'<p>Špatných odpovědí: ' + spatne + '</p>' +
			'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = math.floor((math.random() * otazky.length));
		if (odpovezene.indexOf(x) >= 0)
			;
		else
			break;
	}

	document.getElementById('otazkaCislo').innerHTmL = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	document.getElementById('otazka').innerHTmL = '<div id="form">' +
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
	//document.getElementById("check").innerHTmL = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("id1").value.toLowerCase() == otazka.odpoved.toLowerCase()) {
		document.getElementById("check").innerHTmL = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTmL = '<p style="color:red">Špatně!</p>' +
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
	 document.getElementById("check").innerHTmL = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	
	pridejOtazku("magistrate", "soudce nižšího soudu");
	pridejOtazku("magistrate", "úředník se soudní pravomocí");
	pridejOtazku("magistrate court", "městský soud");
	pridejOtazku("magistrate's Court", "nižší soud s omezenou jurisdikcí, zabývající se méně závažnými trestnými činy");
	pridejOtazku("maintain", "udržovat, vést, provádět, držet, posílit, podpořit");
	pridejOtazku("maintain records", "uchovávat záznamy");
	pridejOtazku("maintenance", "podpora");
	pridejOtazku("make up", "tvořit, skládat se, představovat");
	pridejOtazku("management skills", "manažerské dovednosti");
	pridejOtazku("manslaughter", "zabití člověka v afektu, nebo z nedbalosti, neúmyslné zabití");
	pridejOtazku("manufacture", "výroba");
	pridejOtazku("manufacturing", "výroba");
	pridejOtazku("marital rape", "znásilnění mezi partnery v manželském svazku");
	pridejOtazku("mark", "stopa, skvrna, šlápota");
	pridejOtazku("mass marketing fraud", "spotřebitelské podvody pomocí médií (internet, telemarketing)");
	pridejOtazku("mass murderer", "masový vrah (str. 93)");
	pridejOtazku("master Degree", "magisterský stupeň studia");
	pridejOtazku("maturity", "zralost, vyspělost");
	pridejOtazku("means of identification", "identifikační označení");
	pridejOtazku("medical and life insurance", "zdravotní a životní pojištění");
	pridejOtazku("medical exam", "lékařská prohlídka");
	pridejOtazku("mention", "zmínit");
	pridejOtazku("merchandise", "zboží");
	pridejOtazku("metropolitan Police", "metropolitní policie města Londýna");
	pridejOtazku("metropolitan Police Rape Unit", "oddělení metropolitní policie pro vyšetřování případů znásilnění");
	pridejOtazku("middle rank", "poddůstojnická hodnost");
	pridejOtazku("ministry of the Interior, (Affairs)", "ministerstvo vnitra");
	pridejOtazku("minors", "nezletilé osoby");
	pridejOtazku("misconduct", "neprofesionální řízení, chování");
	pridejOtazku("misdemeanor", "přečin, méně závažný trestný čin");
	pridejOtazku("missing person", "pohřešovaná osoba");
	pridejOtazku("misuse", "zneužití");
	pridejOtazku("model", "vytvořit, modelovat");
	pridejOtazku("molest", "vykonávat sexuální nátlak");
	pridejOtazku("molestation", "sexuální nátlak");
	pridejOtazku("molester", "pachatel sexuálního nátlaku");
	pridejOtazku("money laundering", "praní peněz");
	pridejOtazku("mortgage fraud", "hypotéční podvody");
	pridejOtazku("motor vehicle laws", "pravidla silničního provozu");
	pridejOtazku("motor vehicle theft", "krádež motorového vozidla");
	pridejOtazku("multiple", "mnohonásobný, mnohočetný");
	pridejOtazku("municipal", "městský");
	pridejOtazku("murder", "vražda, zavrařdit, úkladná vražda");
	pridejOtazku("murder weapon", "vražedná zbraň");
	pridejOtazku("mutual aid agreement", "smlouva o vzájemné pomoci");
	

}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}