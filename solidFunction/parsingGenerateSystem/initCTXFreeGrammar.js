var INITIALIZE_SCRIPTS = new Scripts();
INITIALIZE_SCRIPTS.setSolidScript([
    'parsingGenerateSystem/CTXFreeGrammar',
    'parsingGenerateSystem/Scanner',
  ]);

function initCTXFreeGrammar() {
    return Scanner(rawCTXFreeGrammar);
}

