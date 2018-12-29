const questions = [
  {
    id: 0,
    text: 'Is it a tree, grass, vine, or fern?',
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
        text: 'fern',
        examples: [],
        value: 'Fern',
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
        value: ['Tree', 'Graminoid', 'Vine', 'Fern'],
        filterMatches: false,
        partialMatchOK: true,
      }
    ],
  }, {
    id: 1,
    text: 'Is there a visible flower? What color is it?',
    filterKey: 'Flower_Color',
    options: [
      {
        text: 'white',
        examples: [],
        value: 'White',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'red',
        examples: [],
        value: 'Red',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'yellow',
        examples: [],
        value: 'Yellow',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'purple',
        examples: [],
        value: 'Purple',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'blue',
        examples: [],
        value: 'Blue',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'orange',
        examples: [],
        value: 'Orange',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'brown',
        examples: [],
        value: 'Brown',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'green',
        examples: [],
        value: 'Green',
        filterMatches: true,
        partialMatchOK: true,
      },
      {
        text: 'none visible',
        examples: [],
        value: ['White', 'Red', 'Yellow', 'Purple', 'Blue', 'Orange', 'Brown', 'Green'],
        filterMatches: false,
        partialMatchOK: true,
      },
    ],
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
  }, {
    id: 4,
    text: 'Is it a monocot or a dicot? oh, or any of these other things',
    filterKey: 'Category',
    options: [
      {
        text: 'monocot',
        examples: [],
        value: 'Monocot',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'dicot',
        examples: [],
        value: 'Dicot',
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'something else',
        examples: [],
        value: ['Lichen', 'Fern', 'Gymnosperm', 'Moss', 'Horsetail', 'Quillwort', 'Lycopod'],
        filterMatches: true,
        partialMatchOK: false,
      }
    ]
  }, {
    id: 5,
    text: 'Extremely unhelpful question about what family the plant is in',
    filterKey: 'Family',
    options: [
      {
        text: 'Acanthaceae',
        examples: [],
        value: 'Acanthaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Acarosporaceae',
        examples: [],
        value: 'Acarosporaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Aceraceae',
        examples: [],
        value: 'Aceraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Acoraceae',
        examples: [],
        value: 'Acoraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Adoxaceae',
        examples: [],
        value: 'Adoxaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Agavaceae',
        examples: [],
        value: 'Agavaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Alismataceae',
        examples: [],
        value: 'Alismataceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Amaranthaceae',
        examples: [],
        value: 'Amaranthaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Anacardiaceae',
        examples: [],
        value: 'Anacardiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Annonaceae',
        examples: [],
        value: 'Annonaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Apiaceae',
        examples: [],
        value: 'Apiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Apocynaceae',
        examples: [],
        value: 'Apocynaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Aquifoliaceae',
        examples: [],
        value: 'Aquifoliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Araceae',
        examples: [],
        value: 'Araceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Araliaceae',
        examples: [],
        value: 'Araliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Aristolochiaceae',
        examples: [],
        value: 'Aristolochiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Asclepiadaceae',
        examples: [],
        value: 'Asclepiadaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Aspleniaceae',
        examples: [],
        value: 'Aspleniaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Asteraceae',
        examples: [],
        value: 'Asteraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Azollaceae',
        examples: [],
        value: 'Azollaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Bacidiaceae',
        examples: [],
        value: 'Bacidiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Balsaminaceae',
        examples: [],
        value: 'Balsaminaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Berberidaceae',
        examples: [],
        value: 'Berberidaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Betulaceae',
        examples: [],
        value: 'Betulaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Bignoniaceae',
        examples: [],
        value: 'Bignoniaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Boraginaceae',
        examples: [],
        value: 'Boraginaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Brassicaceae',
        examples: [],
        value: 'Brassicaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cabombaceae',
        examples: [],
        value: 'Cabombaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cactaceae',
        examples: [],
        value: 'Cactaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Callitrichaceae',
        examples: [],
        value: 'Callitrichaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Campanulaceae',
        examples: [],
        value: 'Campanulaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cannabaceae',
        examples: [],
        value: 'Cannabaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Capparaceae',
        examples: [],
        value: 'Capparaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Caprifoliaceae',
        examples: [],
        value: 'Caprifoliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Caryophyllaceae',
        examples: [],
        value: 'Caryophyllaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Celastraceae',
        examples: [],
        value: 'Celastraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ceratophyllaceae',
        examples: [],
        value: 'Ceratophyllaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Chenopodiaceae',
        examples: [],
        value: 'Chenopodiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cistaceae',
        examples: [],
        value: 'Cistaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cladoniaceae',
        examples: [],
        value: 'Cladoniaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Clusiaceae',
        examples: [],
        value: 'Clusiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Commelinaceae',
        examples: [],
        value: 'Commelinaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Convolvulaceae',
        examples: [],
        value: 'Convolvulaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cornaceae',
        examples: [],
        value: 'Cornaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Crassulaceae',
        examples: [],
        value: 'Crassulaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cucurbitaceae',
        examples: [],
        value: 'Cucurbitaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cupressaceae',
        examples: [],
        value: 'Cupressaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cuscutaceae',
        examples: [],
        value: 'Cuscutaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Cyperaceae',
        examples: [],
        value: 'Cyperaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Dennstaedtiaceae',
        examples: [],
        value: 'Dennstaedtiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Dioscoreaceae',
        examples: [],
        value: 'Dioscoreaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Dipsacaceae',
        examples: [],
        value: 'Dipsacaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ditrichaceae',
        examples: [],
        value: 'Ditrichaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Droseraceae',
        examples: [],
        value: 'Droseraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Dryopteridaceae',
        examples: [],
        value: 'Dryopteridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ebenaceae',
        examples: [],
        value: 'Ebenaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Elaeagnaceae',
        examples: [],
        value: 'Elaeagnaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Elatinaceae',
        examples: [],
        value: 'Elatinaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Equisetaceae',
        examples: [],
        value: 'Equisetaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ericaceae',
        examples: [],
        value: 'Ericaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Euphorbiaceae',
        examples: [],
        value: 'Euphorbiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Fabaceae',
        examples: [],
        value: 'Fabaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Fagaceae',
        examples: [],
        value: 'Fagaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Fissidentaceae',
        examples: [],
        value: 'Fissidentaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Fumariaceae',
        examples: [],
        value: 'Fumariaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Gentianaceae',
        examples: [],
        value: 'Gentianaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Geraniaceae',
        examples: [],
        value: 'Geraniaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Grimmiaceae',
        examples: [],
        value: 'Grimmiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Grossulariaceae',
        examples: [],
        value: 'Grossulariaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Haloragaceae',
        examples: [],
        value: 'Haloragaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hamamelidaceae',
        examples: [],
        value: 'Hamamelidaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hippocastanaceae',
        examples: [],
        value: 'Hippocastanaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hippuridaceae',
        examples: [],
        value: 'Hippuridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hydrangeaceae',
        examples: [],
        value: 'Hydrangeaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hydrocharitaceae',
        examples: [],
        value: 'Hydrocharitaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hydrophyllaceae',
        examples: [],
        value: 'Hydrophyllaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Hymeneliaceae',
        examples: [],
        value: 'Hymeneliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Iridaceae',
        examples: [],
        value: 'Iridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Isoetaceae',
        examples: [],
        value: 'Isoetaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Juglandaceae',
        examples: [],
        value: 'Juglandaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Juncaceae',
        examples: [],
        value: 'Juncaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Juncaginaceae',
        examples: [],
        value: 'Juncaginaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lamiaceae',
        examples: [],
        value: 'Lamiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lauraceae',
        examples: [],
        value: 'Lauraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lecanoraceae',
        examples: [],
        value: 'Lecanoraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lemnaceae',
        examples: [],
        value: 'Lemnaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lentibulariaceae',
        examples: [],
        value: 'Lentibulariaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Liliaceae',
        examples: [],
        value: 'Liliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Limnanthaceae',
        examples: [],
        value: 'Limnanthaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Linaceae',
        examples: [],
        value: 'Linaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Loasaceae',
        examples: [],
        value: 'Loasaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lycopodiaceae',
        examples: [],
        value: 'Lycopodiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Lythraceae',
        examples: [],
        value: 'Lythraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Magnoliaceae',
        examples: [],
        value: 'Magnoliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Malvaceae',
        examples: [],
        value: 'Malvaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Marsileaceae',
        examples: [],
        value: 'Marsileaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Melastomataceae',
        examples: [],
        value: 'Melastomataceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Menispermaceae',
        examples: [],
        value: 'Menispermaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Menyanthaceae',
        examples: [],
        value: 'Menyanthaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Molluginaceae',
        examples: [],
        value: 'Molluginaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Monotropaceae',
        examples: [],
        value: 'Monotropaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Moraceae',
        examples: [],
        value: 'Moraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Najadaceae',
        examples: [],
        value: 'Najadaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Nelumbonaceae',
        examples: [],
        value: 'Nelumbonaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Nyctaginaceae',
        examples: [],
        value: 'Nyctaginaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Nymphaeaceae',
        examples: [],
        value: 'Nymphaeaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Oleaceae',
        examples: [],
        value: 'Oleaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Onagraceae',
        examples: [],
        value: 'Onagraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ophioglossaceae',
        examples: [],
        value: 'Ophioglossaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Orchidaceae',
        examples: [],
        value: 'Orchidaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Orobanchaceae',
        examples: [],
        value: 'Orobanchaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Osmundaceae',
        examples: [],
        value: 'Osmundaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Oxalidaceae',
        examples: [],
        value: 'Oxalidaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Papaveraceae',
        examples: [],
        value: 'Papaveraceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Parmeliaceae',
        examples: [],
        value: 'Parmeliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pedaliaceae',
        examples: [],
        value: 'Pedaliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Phytolaccaceae',
        examples: [],
        value: 'Phytolaccaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pinaceae',
        examples: [],
        value: 'Pinaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Plantaginaceae',
        examples: [],
        value: 'Plantaginaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Platanaceae',
        examples: [],
        value: 'Platanaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Poaceae',
        examples: [],
        value: 'Poaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Polemoniaceae',
        examples: [],
        value: 'Polemoniaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Polygalaceae',
        examples: [],
        value: 'Polygalaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Polygonaceae',
        examples: [],
        value: 'Polygonaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Polypodiaceae',
        examples: [],
        value: 'Polypodiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pontederiaceae',
        examples: [],
        value: 'Pontederiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Portulacaceae',
        examples: [],
        value: 'Portulacaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Potamogetonaceae',
        examples: [],
        value: 'Potamogetonaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pottiaceae',
        examples: [],
        value: 'Pottiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Primulaceae',
        examples: [],
        value: 'Primulaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pteridaceae',
        examples: [],
        value: 'Pteridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Pyrolaceae',
        examples: [],
        value: 'Pyrolaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ranunculaceae',
        examples: [],
        value: 'Ranunculaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Resedaceae',
        examples: [],
        value: 'Resedaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Rhamnaceae',
        examples: [],
        value: 'Rhamnaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Rosaceae',
        examples: [],
        value: 'Rosaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Rubiaceae',
        examples: [],
        value: 'Rubiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ruppiaceae',
        examples: [],
        value: 'Ruppiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Rutaceae',
        examples: [],
        value: 'Rutaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Salicaceae',
        examples: [],
        value: 'Salicaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Santalaceae',
        examples: [],
        value: 'Santalaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Saxifragaceae',
        examples: [],
        value: 'Saxifragaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Scheuchzeriaceae',
        examples: [],
        value: 'Scheuchzeriaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Scrophulariaceae',
        examples: [],
        value: 'Scrophulariaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Selaginellaceae',
        examples: [],
        value: 'Selaginellaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Simaroubaceae',
        examples: [],
        value: 'Simaroubaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Smilacaceae',
        examples: [],
        value: 'Smilacaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Solanaceae',
        examples: [],
        value: 'Solanaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Sparganiaceae',
        examples: [],
        value: 'Sparganiaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Sphagnaceae',
        examples: [],
        value: 'Sphagnaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Staphyleaceae',
        examples: [],
        value: 'Staphyleaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Taxaceae',
        examples: [],
        value: 'Taxaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Teloschistaceae',
        examples: [],
        value: 'Teloschistaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Thelypteridaceae',
        examples: [],
        value: 'Thelypteridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Thymelaeaceae',
        examples: [],
        value: 'Thymelaeaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Tiliaceae',
        examples: [],
        value: 'Tiliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Typhaceae',
        examples: [],
        value: 'Typhaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Ulmaceae',
        examples: [],
        value: 'Ulmaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Urticaceae',
        examples: [],
        value: 'Urticaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Valerianaceae',
        examples: [],
        value: 'Valerianaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Verbenaceae',
        examples: [],
        value: 'Verbenaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Violaceae',
        examples: [],
        value: 'Violaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Vitaceae',
        examples: [],
        value: 'Vitaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Xyridaceae',
        examples: [],
        value: 'Xyridaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Zannichelliaceae',
        examples: [],
        value: 'Zannichelliaceae',
        filterMatches: true,
        partialMatchOK: false
      },
      {
        text: 'Zygophyllaceae',
        examples: [],
        value: 'Zygophyllaceae',
        filterMatches: true,
        partialMatchOK: false
      }
    ],
  // }, {
  //   id: 6,
  //   text: 'Does it have broad leaves or needles?',
  //   filterKey: 'Family',
  //   options: [
  //     {
  //       text: 'broad leaves',
  //       examples: [],
  //       value: ['Cupressaceae', 'Pinaceae', 'Taxaceae'],
  //       filterMatches: false,
  //       partialMatchOK: false,
  //     },
  //     {
  //       text: 'needles',
  //       examples: [],
  //       value: ['Cupressaceae', 'Pinaceae', 'Taxaceae'],
  //       filterMatches: true,
  //       partialMatchOK: false,
  //     }
  //   ],
  }, {
    id: 7,
    text: 'Is it in a shady location?',
    filterKey: 'Shade_Tolerance',
    options: [
      {
        text: 'yes',
        examples: [],
        value: ['Tolerant', 'Intermediate'],
        filterMatches: true,
        partialMatchOK: false,
      },
      {
        text: 'no',
        examples: [],
        value: ['Tolerant', 'Intermediate'],
        filterMatches: false,
        partialMatchOK: false,
      }
    ]
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
