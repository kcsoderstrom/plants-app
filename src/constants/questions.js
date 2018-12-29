const questions = [
  {
    id: 0,
    text: 'Is it a tree, grass, vine, shrub, or forb?',
    filterKey: 'Growth_Habit',
    options: [
      {
        text: 'tree',
        examples: [],
        value: 'Tree',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'grass',
        examples: [],
        value: 'Graminoid',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'vine',
        examples: [],
        value: 'Vine',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'shrub or subshrub',
        examples: [],
        value: ['Shrub', 'Subshrub'],
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'other flowering non-grassy, non-woody plant (forb)',
        examples: [],
        value: 'Forb',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'none of these',
        examples: [],
        value: ['Tree', 'Graminoid', 'Vine', 'Shrub', 'Subshrub', 'Forb'],
        filterMatches: false,
        partialMatchOK: true,
      }
    ],
  // }, {
  //   id: 1,
  //   text: 'Is there a visible flower? What color is it?',
  //   filterKey: 'Flower_Color',
  //   options: [
  //     {
  //       text: 'white',
  //       examples: [],
  //       value: 'White',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'red',
  //       examples: [],
  //       value: 'Red',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'yellow',
  //       examples: [],
  //       value: 'Yellow',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'purple',
  //       examples: [],
  //       value: 'Purple',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'blue',
  //       examples: [],
  //       value: 'Blue',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'orange',
  //       examples: [],
  //       value: 'Orange',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'brown',
  //       examples: [],
  //       value: 'Brown',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'green',
  //       examples: [],
  //       value: 'Green',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'none visible',
  //       examples: [],
  //       value: ['White', 'Red', 'Yellow', 'Purple', 'Blue', 'Orange', 'Brown', 'Green'],
  //       filterMatches: false,
  //       partialMatchOK: true,
  //     },
  //   ],
  // }, {
  //   id: 2,
  //   text: 'What color is its foliage?',
  //   filterKey: 'Foliage_Color',
  //   options: [
  //     {
  //       text: 'Green',
  //       examples: [],
  //       value: 'Green',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'Gray',
  //       examples: [],
  //       value: 'Gray',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'White',
  //       examples: [],
  //       value: 'White',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'Yellow',
  //       examples: [],
  //       value: 'Yellow',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'Red',
  //       examples: [],
  //       value: 'Red',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //     {
  //       text: 'Other or none visible',
  //       examples: [],
  //       value: '',
  //       filterMatches: true,
  //       partialMatchOK: true,
  //     },
  //   ]
  // }, {
  //   id: 3,
  //   text: 'Is it aquatic?',
  //   filterKey: 'Family',
  //   options: [
  //     {
  //       text: 'yes',
  //       examples: [],
  //       value: ['Alismataceae', 'Apiaceae', 'Araceae', 'Asteraceae', 'Azollaceae', 'Brassicaceae', 'Butomaceae', 'Campanulaceae', 'Ceratophyllaceae', 'Cyperaceae', 'Elatinaceae', 'Eriocaulaceae', 'Haloragaceae', 'Hydrocharitaceae', 'Hypericaceae', 'Isoetaceae', 'Juncaceae', 'Lentibulariaceae', 'Lythraceae', 'Marsileaceae', 'Menyanthaceae', 'Nymphaeaceae', 'Plantaginaceae', 'Poaceae', 'Podostemaceae', 'Pontederiaceae', 'Potamogetonaceae', 'Ranunculaceae', 'Ruppiaceae', 'Salviniaceae', 'Typhaceae', 'Zosteraceae'],
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'no',
  //       examples: [],
  //       value: ['Alismataceae', 'Apiaceae', 'Araceae', 'Asteraceae', 'Azollaceae', 'Brassicaceae', 'Butomaceae', 'Campanulaceae', 'Ceratophyllaceae', 'Cyperaceae', 'Elatinaceae', 'Eriocaulaceae', 'Haloragaceae', 'Hydrocharitaceae', 'Hypericaceae', 'Isoetaceae', 'Juncaceae', 'Lentibulariaceae', 'Lythraceae', 'Marsileaceae', 'Menyanthaceae', 'Nymphaeaceae', 'Plantaginaceae', 'Poaceae', 'Podostemaceae', 'Pontederiaceae', 'Potamogetonaceae', 'Ranunculaceae', 'Ruppiaceae', 'Salviniaceae', 'Typhaceae', 'Zosteraceae'],
  //       filterMatches: false,
  //       partialMatchOK: false,
  //     }
  //   ],
  // }, {
  //   id: 4,
  //   text: 'Is it a monocot or a dicot? oh, or any of these other things',
  //   filterKey: 'Category',
  //   options: [
  //     {
  //       text: 'monocot',
  //       examples: [],
  //       value: 'Monocot',
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'dicot',
  //       examples: [],
  //       value: 'Dicot',
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'something else',
  //       examples: [],
  //       value: ['Lichen', 'Fern', 'Gymnosperm', 'Moss', 'Horsetail', 'Quillwort', 'Lycopod'],
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     }
  //   ]
  // }, {
  //   id: 5,
  //   text: 'Extremely unhelpful question about what family the plant is in',
  //   filterKey: 'Family',
  //   options: [
  //     {
  //       text: 'Amaranthaceae',
  //       examples: [],
  //       value: 'Amaranthaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Apiaceae',
  //       examples: [],
  //       value: 'Apiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Araceae',
  //       examples: [],
  //       value: 'Araceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Asclepiadaceae',
  //       examples: [],
  //       value: 'Asclepiadaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Asteraceae',
  //       examples: [],
  //       value: 'Asteraceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Berberidaceae',
  //       examples: [],
  //       value: 'Berberidaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Boraginaceae',
  //       examples: [],
  //       value: 'Boraginaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Brassicaceae',
  //       examples: [],
  //       value: 'Brassicaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Cactaceae',
  //       examples: [],
  //       value: 'Cactaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Cannabaceae',
  //       examples: [],
  //       value: 'Cannabaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Caryophyllaceae',
  //       examples: [],
  //       value: 'Caryophyllaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Chenopodiaceae',
  //       examples: [],
  //       value: 'Chenopodiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Clusiaceae',
  //       examples: [],
  //       value: 'Clusiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Convolvulaceae',
  //       examples: [],
  //       value: 'Convolvulaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Crassulaceae',
  //       examples: [],
  //       value: 'Crassulaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Cupressaceae',
  //       examples: [],
  //       value: 'Cupressaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Cuscutaceae',
  //       examples: [],
  //       value: 'Cuscutaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Dryopteridaceae',
  //       examples: [],
  //       value: 'Dryopteridaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Elaeagnaceae',
  //       examples: [],
  //       value: 'Elaeagnaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Ericaceae',
  //       examples: [],
  //       value: 'Ericaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Euphorbiaceae',
  //       examples: [],
  //       value: 'Euphorbiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Fabaceae',
  //       examples: [],
  //       value: 'Fabaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Fumariaceae',
  //       examples: [],
  //       value: 'Fumariaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Geraniaceae',
  //       examples: [],
  //       value: 'Geraniaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Grossulariaceae',
  //       examples: [],
  //       value: 'Grossulariaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Haloragaceae',
  //       examples: [],
  //       value: 'Haloragaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Hydrocharitaceae',
  //       examples: [],
  //       value: 'Hydrocharitaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Juglandaceae',
  //       examples: [],
  //       value: 'Juglandaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Lamiaceae',
  //       examples: [],
  //       value: 'Lamiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Liliaceae',
  //       examples: [],
  //       value: 'Liliaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Lythraceae',
  //       examples: [],
  //       value: 'Lythraceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Malvaceae',
  //       examples: [],
  //       value: 'Malvaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Marsileaceae',
  //       examples: [],
  //       value: 'Marsileaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Nelumbonaceae',
  //       examples: [],
  //       value: 'Nelumbonaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Nymphaeaceae',
  //       examples: [],
  //       value: 'Nymphaeaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Oleaceae',
  //       examples: [],
  //       value: 'Oleaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Orchidaceae',
  //       examples: [],
  //       value: 'Orchidaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Orobanchaceae',
  //       examples: [],
  //       value: 'Orobanchaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Poaceae',
  //       examples: [],
  //       value: 'Poaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Polygonaceae',
  //       examples: [],
  //       value: 'Polygonaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Portulacaceae',
  //       examples: [],
  //       value: 'Portulacaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Ranunculaceae',
  //       examples: [],
  //       value: 'Ranunculaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Rhamnaceae',
  //       examples: [],
  //       value: 'Rhamnaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Rosaceae',
  //       examples: [],
  //       value: 'Rosaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Rubiaceae',
  //       examples: [],
  //       value: 'Rubiaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Salicaceae',
  //       examples: [],
  //       value: 'Salicaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Scrophulariaceae',
  //       examples: [],
  //       value: 'Scrophulariaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Simaroubaceae',
  //       examples: [],
  //       value: 'Simaroubaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Solanaceae',
  //       examples: [],
  //       value: 'Solanaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Thymelaeaceae',
  //       examples: [],
  //       value: 'Thymelaeaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Verbenaceae',
  //       examples: [],
  //       value: 'Verbenaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //     {
  //       text: 'Vitaceae',
  //       examples: [],
  //       value: 'Vitaceae',
  //       filterMatches: true,
  //       partialMatchOK: false
  //     },
  //   ],
  }, {
    id: 6,
    text: 'Is it a monocot or dicot etc?',
    filterKey: 'Category',
    options: [
      {
        text: 'dicot',
        examples: [],
        value: 'Dicot',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'fern',
        examples: [],
        value: 'Fern',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'gymnosperm',
        examples: [],
        value: 'Gymnosperm',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'monocot',
        examples: [],
        value: 'Monocot',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'none of these',
        examples: [],
        value: ["Dicot","Fern","Gymnosperm","Monocot"],
        filterMatches: false,
        partialMatchOK: false,
      }
    ],
  // }, {
    // TODO: not true not true
    // id: 7,
    // text: 'What type of leaves does it have?',
    // filterKey: 'Family',
    // options: [
    //   {
    //     text: 'divided',
    //     examples: [],
    //     value: 'Rhamnaceae',
    //     filterMatches: false,
    //     partialMatchOK: false,
    //   },
    //   {
    //     text: 'simple',
    //     examples: [],
    //     value: 'Rhamnaceae',
    //     filterMatches: true,
    //     partialMatchOK: false,
    //   }
    // ],
  // }, {
  //   id: 7,
  //   text: 'Is it in a shady location?',
  //   filterKey: 'Shade_Tolerance',
  //   options: [
  //     {
  //       text: 'yes',
  //       examples: [],
  //       value: 'Tolerant', // TODO: this needs to include intermediate
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'no',
  //       examples: [],
  //       value: 'Tolerant', // TODO: actually this should probably just say not tolerant
  //       filterMatches: false,
  //       partialMatchOK: false,
  //     }
  //   ]
  // }, {
  //   id: 8,
  //   text: 'Is it an aquatic plant with no true stem?',
  //   filterKey: 'Family',
  //   options: [
  //     {
  //       text: 'yes',
  //       examples: [],
  //       value: 'Araceae',
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'no',
  //       examples: [],
  //       value: 'Araceae',
  //       filterMatches: false,
  //       partialMatchOK: false,
  //     }
  //   ]
  // }, {
  //   id: 9,
  //   text: 'What kind of leaves does it have?',
  //   filterKey: 'Family',
  //   options: [
  //     {
  //       text: 'daisy-style',
  //       examples: [],
  //       value: 'Asteraceae',
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'alternate leaves and it is a forb',
  //       examples: [],
  //       value: ['Aizoaceae', 'Amaranthaceae', 'Apiaceae', 'Apocynaceae', 'Aristolochiaceae', 'Balsaminaceae', 'Berberidaceae', 'Boraginaceae', 'Brassicaceae', 'Cactaceae', 'Campanulaceae', 'Cannabaceae', 'Caryophyllaceae', 'Cistaceae', 'Cleomaceae', 'Comandraceae', 'Convolvulaceae', 'Crassulaceae', 'Cucurbitaceae', 'Droseraceae', 'Elatinaceae', 'Ericaceae', 'Euphorbiaceae', 'Fabaceae', 'Gentianaceae', 'Geraniaceae', 'Haloragaceae', 'Lentibulariaceae', 'Limnanthaceae', 'Linaceae', 'Loasaceae', 'Lythraceae', 'Malvaceae', 'Menyanthaceae', 'Moraceae', 'Myrsinaceae', 'Nelumbonaceae', 'Onagraceae', 'Orobanchaceae', 'Oxalidaceae', 'Paeoniaceae', 'Papaveraceae', 'Parnassiaceae', 'Pedaliaceae', 'Phrymaceae', 'Phytolaccaceae', 'Plantaginaceae', 'Polemoniaceae', 'Polygalaceae', 'Polygonaceae', 'Pontederiaceae', 'Portulacaceae', 'Primulaceae', 'Ranunculaceae', 'Resedaceae', 'Rosaceae', 'Rutaceae', 'Saururaceae', 'Saxifragaceae', 'Scrophulariaceae', 'Solanaceae', 'Theophrastaceae', 'Tropaeolaceae', 'Urticaceae', 'Violaceae', 'Violaceae'],
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'whorled leaves or no leaves',
  //       examples: [],
  //       value: ['Acanthaceae', 'Aizoaceae', 'Amaranthaceae', 'Apiaceae', 'Apocynaceae', 'Aristolochiaceae', 'Balsaminaceae', 'Boraginaceae', 'Brassicaceae', 'Cannabaceae', 'Caprifoliaceae', 'Caryophyllaceae', 'Cornaceae', 'Crassulaceae', 'Diapensiaceae', 'Ericaceae', 'Euphorbiaceae', 'Fabaceae', 'Frankeniaceae', 'Gentianaceae', 'Geraniaceae', 'Haloragaceae', 'Hypericaceae', 'Lamiaceae', 'Lentibulariaceae', 'Linaceae', 'Linderniaceae', 'Lythraceae', 'Malvaceae', 'Melanthiaceae', 'Melastomataceae', 'Molluginaceae', 'Myrsinaceae', 'Nyctaginaceae', 'Onagraceae', 'Orobanchaceae', 'Oxalidaceae', 'Papaveraceae', 'Penthoraceae', 'Phrymaceae', 'Plantaginaceae', 'Plumbaginaceae', 'Polemoniaceae', 'Polygalaceae', 'Portulacaceae', 'Primulaceae', 'Ranunculaceae', 'Rosaceae', 'Rubiaceae', 'Sarraceniaceae', 'Saxifragaceae', 'Scrophulariaceae', 'Solanaceae', 'Urticaceae', 'Verbenaceae', 'Violaceae', 'Zygophyllaceae'],
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'none of these',
  //       examples: [],
  //       value: ['Acanthaceae', 'Aizoaceae', 'Amaranthaceae', 'Apiaceae', 'Apocynaceae', 'Aristolochiaceae', 'Asteraceae', 'Balsaminaceae', 'Berberidaceae', 'Boraginaceae', 'Brassicaceae', 'Cactaceae', 'Campanulaceae', 'Cannabaceae', 'Caprifoliaceae', 'Caryophyllaceae', 'Cistaceae', 'Cleomaceae', 'Comandraceae', 'Convolvulaceae', 'Cornaceae', 'Crassulaceae', 'Cucurbitaceae', 'Diapensiaceae', 'Droseraceae', 'Elatinaceae', 'Ericaceae', 'Euphorbiaceae', 'Fabaceae', 'Frankeniaceae', 'Gentianaceae', 'Geraniaceae', 'Haloragaceae', 'Hypericaceae', 'Lamiaceae', 'Lentibulariaceae', 'Limnanthaceae', 'Linaceae', 'Linderniaceae', 'Loasaceae', 'Lythraceae', 'Malvaceae', 'Melanthiaceae', 'Melastomataceae', 'Menyanthaceae', 'Molluginaceae', 'Moraceae', 'Myrsinaceae', 'Nelumbonaceae', 'Nyctaginaceae', 'Onagraceae', 'Orobanchaceae', 'Oxalidaceae', 'Paeoniaceae', 'Papaveraceae', 'Parnassiaceae', 'Pedaliaceae', 'Penthoraceae', 'Phrymaceae', 'Phytolaccaceae', 'Plantaginaceae', 'Plumbaginaceae', 'Polemoniaceae', 'Polygalaceae', 'Polygonaceae', 'Pontederiaceae', 'Portulacaceae', 'Primulaceae', 'Ranunculaceae', 'Resedaceae', 'Rosaceae', 'Rubiaceae', 'Rutaceae', 'Sarraceniaceae', 'Saururaceae', 'Saxifragaceae', 'Scrophulariaceae', 'Solanaceae', 'Theophrastaceae', 'Tropaeolaceae', 'Urticaceae', 'Verbenaceae', 'Violaceae', 'Zygophyllaceae'],
  //       filterMatches: false,
  //       partialMatchOK: false,
  //     },
  //   ]
  }

];

export default questions;
