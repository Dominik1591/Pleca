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
	
	pridejOtazku("tackle", "bojovat proti, potírat co");
	pridejOtazku("tackle", "zvládnout");
	pridejOtazku("tackle", "vypořádat se");
	pridejOtazku("tag", "elektronicky monitorovat pomocí čipu");
	pridejOtazku("tagging", "elektronické monitorování pomocí čipu");
	pridejOtazku("take advantage of", "využít něčeho, těžit z");
	pridejOtazku("take a toll", "vybrat si daň");
	pridejOtazku("take into account", "vzít do úvahy, vzít v potaz, přihlédnout k čemu");
	pridejOtazku("take into consideration", "vzít v úvahu");
	pridejOtazku("take into custody", "vzít do vazby");
	pridejOtazku("tamper", "manipulovat, poškodit");
	pridejOtazku("target", "cíl, objekt");
	pridejOtazku("targets", "cíle");
	pridejOtazku("task force", "zvláštní jednotka");
	pridejOtazku("task force", "operační skupina, zásahová jednotka, komando");
	pridejOtazku("tax", "daň");
	pridejOtazku("tax", "evation daňový únik");
	pridejOtazku("tear", "rozpolcení, rozpolcenost1175. temptation pokušení");
	pridejOtazku("tempt fate", "pokoušet osud");
	pridejOtazku("term", "výraz");
	pridejOtazku("terrorism", "terorismus");
	pridejOtazku("testify", "vypovídat, ústně svědčit");
	pridejOtazku("testify in courts", "svědčit u soudů");
	pridejOtazku("theft", "krádež");
	pridejOtazku("theft of cash", "krádež peněz");
	pridejOtazku("thereafter", "potom, pak (knižně)");
	pridejOtazku("therein", "zde, v tomto ohledu");
	pridejOtazku("thievery", "krádež, zlodějství");
	pridejOtazku("threat", "hrozba");
	pridejOtazku("threaten", "ohrožovat, zastrašovat");
	pridejOtazku("threaten", "hrozit, ohrožovat");
	pridejOtazku("threaten the safety", "ohrozit bezpečnost");
	pridejOtazku("threats", "hrozby");
	pridejOtazku("threats", "pohrůžky");
	pridejOtazku("throw out", "zamítnout");
	pridejOtazku("tier", "úroveň, vrstva");
	pridejOtazku("tie up", "svázat");
	pridejOtazku("tip", "špička");
	pridejOtazku("to abuse", "zneužívat");
	pridejOtazku("to ail", "bolet, trápit, sužovat");
	pridejOtazku("to be appointed by", "být jmenován kým . . .");
	pridejOtazku("to be ashamed", "být zahanben");
	pridejOtazku("to be sacked", "být propuštěn");
	pridejOtazku("to combat", "bojovat proti, potírat co");
	pridejOtazku("tolerance for drugs", "snášenlivost léku, drogy, tolerance na drogu");
	pridejOtazku("tool", "nástroj");
	pridejOtazku("toolmark", "stopa, způsobená nástrojem");
	pridejOtazku("to prevent", "předejít, zabránit");
	pridejOtazku("torture", "mučení, mučit");
	pridejOtazku("torture", "mučení, týrání");
	pridejOtazku("toughened safety glass", "tvrzené sklo, bezpečnostní sklo");
	pridejOtazku("tougher penalties", "tvrdší, přísnější tresty");
	pridejOtazku("township", "správní oblast, okres");
	pridejOtazku("track", "sledovat");
	pridejOtazku("track down", "vystopovat");
	pridejOtazku("traffic", "provoz, ruch");
	pridejOtazku("trafficking", "nedovolené, nezákonné obchodování, kšeftování");
	pridejOtazku("traffic monitoring", "monitorování dopravy");
	pridejOtazku("Traffic Police", "služba dopravní policie");
	pridejOtazku("traffic warden", "příslušník služby dopravní policie, dopravní policista");
	pridejOtazku("train ", "provádět výcvik a školit");
	pridejOtazku("Training Center", "výcvikové centrum");
	pridejOtazku("transfer", "postoupit");
	pridejOtazku("transgender people", "transsexuálové");
	pridejOtazku("transponder key", "klíč se zabudovaným čipem");
	pridejOtazku("travel documents", "cestovní doklady");
	pridejOtazku("treason", "vlastizrada, velezrada");
	pridejOtazku("Treasury Department", "Ministerstvo financí");
	pridejOtazku("treatment", "terapie, léčba");
	pridejOtazku("trespass", "neoprávněné vniknutí");
	pridejOtazku("trespass", "přečin, proviění");
	pridejOtazku("triable either way offence", "strestné činy, které lze projednávat u nižšího i vyššího soudu");
	pridejOtazku("trial", "hlavní líčení");
	pridejOtazku("tribal", "kmenový");
	pridejOtazku("trick", "podvést,klamat");
	pridejOtazku("tripartite relationship", "třístranné vztahy");
	pridejOtazku("trooper", "policista");
	pridejOtazku("turnig", "otáčení");


}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}