export const oromiaTouristMap = {
  mid: "191qIsBmBzyJGPwwV3cokkA_QTndq4Vzg",
  title: "Oromia Tourist map",
  viewerUrl:
    "https://www.google.com/maps/d/viewer?mid=191qIsBmBzyJGPwwV3cokkA_QTndq4Vzg&ll=7.004418366784159,38.6050355&z=7",
  embedUrl:
    "https://www.google.com/maps/d/embed?mid=191qIsBmBzyJGPwwV3cokkA_QTndq4Vzg&ehbc=111827",
  center: { lat: 7.004418, lng: 38.605035, zoom: 7 },
} as const;

export const mapSiteTypes = [
  "cave",
  "lake",
  "forest",
  "waterfall",
  "mountain",
  "gada",
  "heritage",
  "spring",
  "gorge",
  "museum",
] as const;

export type MapSiteType = (typeof mapSiteTypes)[number];

export type MapSite = {
  id: string;
  name: string;
  type: MapSiteType;
  zone: string;
  woreda: string;
  lat: number;
  lng: number;
  summary: string;
};

export const mapSites: MapSite[] = [
  {
    "id": "aba-gada-hall",
    "name": "Aba Gada Hall",
    "type": "gada",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.75065,
    "lng": 38.95934,
    "summary": "Abba-Gadaa Hall is a community center in Ethiopia."
  },
  {
    "id": "aba-gada-hall-2",
    "name": "Aba Gada Hall",
    "type": "gada",
    "zone": "Bale",
    "woreda": "Robe Town",
    "lat": 7.1187,
    "lng": 40.00249,
    "summary": "Abba-Gadaa Hall is a community center in Ethiopia."
  },
  {
    "id": "aba-jifar-palace",
    "name": "Aba Jifar Palace",
    "type": "heritage",
    "zone": "Jimma",
    "woreda": "Jimma town",
    "lat": 7.70098,
    "lng": 36.87231,
    "summary": "is the most important heritage site in the Oromia Region of Ethiopia, and a symbol of Oromia cultural identity. ..."
  },
  {
    "id": "abo-monastery",
    "name": "Abo Monastery",
    "type": "heritage",
    "zone": "East Shewa",
    "woreda": "Awash",
    "lat": 9.2137,
    "lng": 40.61231,
    "summary": "The Monastery of Saint Fana is a Coptic Orthodox monastery. It is named after Saint Fana, also known as Bane (c. 354–395), Coptic Christian hermit."
  },
  {
    "id": "adola-shakiso-gold-minin",
    "name": "Adola Shakiso Gold Mining",
    "type": "heritage",
    "zone": "",
    "woreda": ", Guji",
    "lat": 5.71566,
    "lng": 38.89518,
    "summary": "is the only large-scale gold mining company operating in Odo-Shakiso."
  },
  {
    "id": "african-art-gallery",
    "name": "African Art Gallery",
    "type": "museum",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.75026,
    "lng": 38.95958,
    "summary": "- This gallary is founded by honorary Doctor Artist Lema Guya. The artist is known for his goat skin portrait paintings which are his own creativity."
  },
  {
    "id": "ambo-hot-spring",
    "name": "Ambo Hot Spring",
    "type": "spring",
    "zone": "West Shewa",
    "woreda": "Dendi",
    "lat": 8.828,
    "lng": 38.02635,
    "summary": "was a spring produced by the emergence of geothermally heated groundwater from a planet's crust."
  },
  {
    "id": "ambo-mineral-water",
    "name": "Ambo Mineral Water",
    "type": "heritage",
    "zone": "West Shewa",
    "woreda": "Ambo town",
    "lat": 8.9923,
    "lng": 37.81414,
    "summary": "has been in business since 1930 and is sourced from a thermal mineral spring that has significant amounts of natural calcium, magnesium, potassium and bicarbonate",
  },
  {
    "id": "ambo-university-tulu-korma-center-for-na",
    "name": "Ambo University Tulu Korma Center for Native trees",
    "type": "forest",
    "zone": "West Shewa",
    "woreda": "Ejere /Addis Alem",
    "lat": 9.02024,
    "lng": 38.36058,
    "summary": "Center for Indigenous Tree"
  },
  {
    "id": "amerti-lake",
    "name": "Amerti Lake",
    "type": "lake",
    "zone": "Horo Gudru Wellega",
    "woreda": "Abay Chomen",
    "lat": 9.758,
    "lng": 37.2991,
    "summary": "is a lake used for irregation"
  },
  {
    "id": "andode-tuma",
    "name": "Andode Tuma",
    "type": "heritage",
    "zone": "Finfinnee Special",
    "woreda": "Akaki",
    "lat": 8.84735,
    "lng": 38.76796,
    "summary": ""
  },
  {
    "id": "anferara",
    "name": "Anferara",
    "type": "forest",
    "zone": ".\\n",
    "woreda": "Adola",
    "lat": 5.94533,
    "lng": 38.90843,
    "summary": "The Anferara forests are around Negele–Borena, 310 km south-east of Awassa and 470 km from Addis Ababa, in Borena"
  },
  {
    "id": "anger-forest",
    "name": "Anger Forest",
    "type": "forest",
    "zone": "Horo Gudru Wellega",
    "woreda": "Jarte Jardega",
    "lat": 9.92895,
    "lng": 37.05723,
    "summary": "is a large forest in Horo guduru wollega"
  },
  {
    "id": "anole-monument",
    "name": "Anole Monument",
    "type": "heritage",
    "zone": "Arsi",
    "woreda": "Iteya",
    "lat": 8.18368,
    "lng": 39.18038,
    "summary": "It is erected as a tribute to the Arsi Oromo whose hands and breasts were mutilated by 19th century Ethiopian emperor Menelik II."
  },
  {
    "id": "arero-forest",
    "name": "Arero Forest",
    "type": "forest",
    "zone": "",
    "woreda": "Arero",
    "lat": 4.7866,
    "lng": 38.82706,
    "summary": "is the most southerly of the high forests of Ethiopia and is one of the few places in Borena"
  },
  {
    "id": "awash-waterfall",
    "name": "Awash Waterfall",
    "type": "waterfall",
    "zone": "East shewa",
    "woreda": "Awash",
    "lat": 9.13012,
    "lng": 39.91534,
    "summary": "The Awash River is a major river in Ethiopia, forming part of a closed drainage basin"
  },
  {
    "id": "aynage-achere-cave",
    "name": "Aynage/Achere Cave",
    "type": "cave",
    "zone": "West Hararge",
    "woreda": "Daro Lebu",
    "lat": 8.61059,
    "lng": 40.37293,
    "summary": "Caves were identified as the second biggest caves in Ethiopia, next to the Sof Umar Cave"
  },
  {
    "id": "babile-rock-formation",
    "name": "Babile Rock Formation",
    "type": "heritage",
    "zone": "East Wellega",
    "woreda": "Sasiga",
    "lat": 9.20855,
    "lng": 36.36819,
    "summary": "a rock formation is an isolated, scenic, or spectacular surface rock outcrop. Rock formations are usually the result of weathering and erosion sculpting the exi"
  },
  {
    "id": "babile-valley-of-marvels",
    "name": "Babile Valley of Marvels",
    "type": "gorge",
    "zone": "East Hararghe",
    "woreda": "Elevation",
    "lat": 9.08678,
    "lng": 42.53006,
    "summary": "It is an area where time, rain and wind have carved intriguing phallic forms out of the red roadside rocks."
  },
  {
    "id": "bele-hotspring",
    "name": "Bele Hotspring",
    "type": "spring",
    "zone": "Bale",
    "woreda": "Robe",
    "lat": 7.68916,
    "lng": 39.89837,
    "summary": "is a spring produced by the emergence of geothermally heated groundwater onto the surface of the Earth."
  },
  {
    "id": "belete-gera-forest",
    "name": "Belete Gera Forest",
    "type": "forest",
    "zone": "Jimma",
    "woreda": "Shebe Sambo",
    "lat": 7.54634,
    "lng": 36.5832,
    "summary": "is 150,000 ha in size and is located in the Gera District and the Shabe Sombo District in the Oromiya Region"
  },
  {
    "id": "bishoftu-cultural-hall",
    "name": "Bishoftu Cultural Hall",
    "type": "heritage",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.74897,
    "lng": 38.97172,
    "summary": "Built on over 70,000sqm of land"
  },
  {
    "id": "blue-nile-gorge",
    "name": "Blue Nile Gorge",
    "type": "gorge",
    "zone": "North Shewa (OR)",
    "woreda": "Wara Jarso",
    "lat": 10.03338,
    "lng": 38.23969,
    "summary": "Located on the boundary of Amhara and Oromiya regions, in Northern Ethiopia"
  },
  {
    "id": "boke-dilo",
    "name": "Boke Dilo",
    "type": "heritage",
    "zone": "Borena",
    "woreda": "includes 12 grain mills.\\n",
    "lat": 4.2626,
    "lng": 37.70422,
    "summary": "Boke Dilo well. Corn, haricot beans, wheat and barley are important crops.Industry in the"
  },
  {
    "id": "boke-megado-salty-creater-site",
    "name": "Boke Megado Salty Creater Site",
    "type": "heritage",
    "zone": "Borena",
    "woreda": "Dire",
    "lat": 3.89757,
    "lng": 38.21898,
    "summary": "is a natural salty site"
  },
  {
    "id": "boke-soda-salty-creater-site",
    "name": "Boke Soda Salty Creater Site",
    "type": "lake",
    "zone": "Borena",
    "woreda": "Dire",
    "lat": 4.20705,
    "lng": 38.39533,
    "summary": "Five wonderful volcanic craters located at various distances, most of the craters are characterized by their deep and circular feature with the flat topography"
  },
  {
    "id": "bole-cave",
    "name": "Bole Cave",
    "type": "cave",
    "zone": "North Shewa (OR)",
    "woreda": "Wuchale",
    "lat": 9.51553,
    "lng": 38.76316,
    "summary": "is a flat top mountain (or amba) in the ... In the same range,"
  },
  {
    "id": "bolo-cave",
    "name": "Bolo Cave",
    "type": "cave",
    "zone": "East Wellega",
    "woreda": "Guto Gida",
    "lat": 9.11172,
    "lng": 36.5711,
    "summary": "is one of the cave in the Oromia Region of Ethiopia."
  },
  {
    "id": "bolo-waterfall",
    "name": "Bolo Waterfall",
    "type": "waterfall",
    "zone": "East Wellega",
    "woreda": "Guto Gida",
    "lat": 9.10998,
    "lng": 36.57097,
    "summary": "Amazing Waterfall"
  },
  {
    "id": "bolole-forest",
    "name": "Bolole Forest",
    "type": "forest",
    "zone": "East Wellega",
    "woreda": "Bila Seyo",
    "lat": 9.32737,
    "lng": 36.99365,
    "summary": "natural forest"
  },
  {
    "id": "bore-uraga-forest",
    "name": "Bore-Uraga Forest",
    "type": "forest",
    "zone": "",
    "woreda": "",
    "lat": 5.95658,
    "lng": 38.62926,
    "summary": "Uraga is one of the woredas in the Oromia Region of Ethiopia. Part of the Guji"
  },
  {
    "id": "borena-national-park",
    "name": "Borena National Park",
    "type": "forest",
    "zone": "Borena",
    "woreda": "Yabelo",
    "lat": 5.10807,
    "lng": 38.53432,
    "summary": "The park embressed five conservation blocks namely; Yabelo, Sarite, Dire Dida Soda, Danbala Dhibayu, and Megado Gamedo Mountain. It is open vast range land with"
  },
  {
    "id": "british-consulate",
    "name": "British Consulate",
    "type": "heritage",
    "zone": "West Hararge",
    "woreda": "Burqua Dhintu",
    "lat": 8.16024,
    "lng": 41.53664,
    "summary": "Ethiopia maintains and develops relations between the UK and Ethiopia."
  },
  {
    "id": "burka-and-sama-hot-spring",
    "name": "Burka and Sama Hot Spring",
    "type": "spring",
    "zone": "East Shewa",
    "woreda": "Awash",
    "lat": 8.89856,
    "lng": 40.1225,
    "summary": "was a spring produced by the emergence of geothermally heated groundwater from a planet's crust."
  },
  {
    "id": "chato-forest",
    "name": "Chato Forest",
    "type": "forest",
    "zone": "Horo Gudru Wellega",
    "woreda": "Horo Buluk",
    "lat": 9.67026,
    "lng": 37.03277,
    "summary": "is a Natural forest"
  },
  {
    "id": "chefe-tuma",
    "name": "Chefe Tuma",
    "type": "heritage",
    "zone": "East Shewa",
    "woreda": "Bishoftu",
    "lat": 8.85097,
    "lng": 38.78224,
    "summary": "is name place and cultural heritage"
  },
  {
    "id": "chekorsa-waterfall",
    "name": "Chekorsa Waterfall",
    "type": "waterfall",
    "zone": "of the Oromia Region\\n",
    "woreda": "Seka Chekorsa",
    "lat": 7.60712,
    "lng": 36.71181,
    "summary": "Located in the Jimma"
  },
  {
    "id": "cheleleka-gorge",
    "name": "Cheleleka Gorge",
    "type": "gorge",
    "zone": "West Wollega",
    "woreda": "Mendi",
    "lat": 9.47951,
    "lng": 35.09156,
    "summary": "Is an natural gorge found in west wollega"
  },
  {
    "id": "chilimo-gaji-forest",
    "name": "Chilimo Gaji Forest",
    "type": "forest",
    "zone": "",
    "woreda": "Dendi",
    "lat": 9.04791,
    "lng": 38.12878,
    "summary": "Chilimo forest is in Western Shoa"
  },
  {
    "id": "chororapithecus-arcological-site",
    "name": "Chororapithecus Arcological Site",
    "type": "heritage",
    "zone": "West Hararge",
    "woreda": "Gumbi Bordede",
    "lat": 8.88893,
    "lng": 40.30794,
    "summary": "Chororapithecus is an extinct great ape from the Afar region of Ethiopia roughly 8 million years ago during the Late Miocene, comprising one species, C. abyssin"
  },
  {
    "id": "coffee-arabica-origin",
    "name": "Coffee Arabica Origin",
    "type": "heritage",
    "zone": "Jimma",
    "woreda": "Goma",
    "lat": 7.89816,
    "lng": 36.67725,
    "summary": "is a"
  },
  {
    "id": "dabena-waterfall",
    "name": "Dabena Waterfall",
    "type": "waterfall",
    "zone": "Buno Bedele",
    "woreda": "Dega",
    "lat": 8.63496,
    "lng": 36.19073,
    "summary": "is energy from water sources such as the rivers, ocean, and waterfalls"
  },
  {
    "id": "daka-kake",
    "name": "Daka Kake",
    "type": "heritage",
    "zone": "Borena",
    "woreda": "Yabelo town",
    "lat": 4.88956,
    "lng": 38.11547,
    "summary": ""
  },
  {
    "id": "debrelibanos-monastry-and-church",
    "name": "Debrelibanos Monastry and Church",
    "type": "heritage",
    "zone": "North Shewa (OR)",
    "woreda": "Debre Libanos",
    "lat": 9.71161,
    "lng": 38.84623,
    "summary": "Founded in 13th century, it has ecclesiastical, cultural, and historical relics. One also have a chanse to watch birds and baboon aroun the beautiful gorge arou"
  },
  {
    "id": "debresina-island",
    "name": "Debresina Island",
    "type": "lake",
    "zone": "East Shewa",
    "woreda": "Adama Tulu Jido Kombolcha",
    "lat": 7.90598,
    "lng": 38.77272,
    "summary": "is the name of a number of places in Eritrea and Ethiopia. Debre Sina (church), a church near Gorgora, on the northern shore of Lake Tana"
  },
  {
    "id": "dejazmach-tsehay-inku-silase-palace",
    "name": "Dejazmach Tsehay Inku Silase Palace",
    "type": "heritage",
    "zone": "Jimma",
    "woreda": "Jimma town",
    "lat": 7.67507,
    "lng": 36.82774,
    "summary": "the palace named by Governor General of Gojjam in the 1960s was Dejazmach Tsehay Inqu Selassie"
  },
  {
    "id": "dendi-lake",
    "name": "Dendi Lake",
    "type": "lake",
    "zone": "West Shewa",
    "woreda": "Dendi",
    "lat": 8.82802,
    "lng": 38.02636,
    "summary": "is a crater lake in West Shewa about 87km southwest of Addis Ababa"
  },
  {
    "id": "dengewaj-waterfall",
    "name": "Dengewaj Waterfall",
    "type": "waterfall",
    "zone": "Buno Bedele",
    "woreda": "Gechi",
    "lat": 8.32318,
    "lng": 36.41011,
    "summary": "is a natural waterfall used for recreational"
  },
  {
    "id": "dhadacha-island",
    "name": "Dhadacha Island",
    "type": "lake",
    "zone": "Arsi",
    "woreda": "Ziway Dugda",
    "lat": 7.97089,
    "lng": 38.89089,
    "summary": "An island is a piece of land that is completely surrounded by water"
  },
  {
    "id": "didessa-gorge-gorge",
    "name": "Didessa Gorge",
    "type": "gorge",
    "zone": "West Wollega",
    "woreda": "Gimbi",
    "lat": 9.20059,
    "lng": 35.8508,
    "summary": "is a gore in western Ethiopia. A tributary of the Abay River, it rises in the mountains of Gomma,"
  },
  {
    "id": "dilla-gogola-water-fall",
    "name": "Dilla Gogola Water Fall",
    "type": "waterfall",
    "zone": "West Wollega",
    "woreda": "Badessa",
    "lat": 9.25294,
    "lng": 35.30507,
    "summary": "is one of the natural water fall found in Oromia region"
  },
  {
    "id": "dima-cave",
    "name": "Dima Cave",
    "type": "cave",
    "zone": "North shewa",
    "woreda": "fiche",
    "lat": 9.47071,
    "lng": 38.48539,
    "summary": "Dima natural cave is found in Eastern Hararge, Badano district at the distance of about 646 kms from Addis Ababa, or 125km from the Harar"
  },
  {
    "id": "dinden-forest",
    "name": "Dinden Forest",
    "type": "forest",
    "zone": "West Hararge",
    "woreda": "Anchar",
    "lat": 8.65391,
    "lng": 40.25253,
    "summary": "Rainforest cloaks the wetter eastern side of the range while eucalypt woodland covers the drier rain-shadowed western slopes"
  },
  {
    "id": "ensessa-kotteh-park",
    "name": "Ensessa Kotteh Park",
    "type": "forest",
    "zone": "Finfine Special",
    "woreda": "Welmera",
    "lat": 9.06398,
    "lng": 38.54385,
    "summary": "is situated on an impressive 77 hectares (190 acres) partly-wooded site"
  },
  {
    "id": "fulduro-island",
    "name": "Fulduro island",
    "type": "lake",
    "zone": "Arsi",
    "woreda": "Ziway Dugda",
    "lat": 7.95845,
    "lng": 38.88646,
    "summary": "An island is a piece of land"
  },
  {
    "id": "gada-gilinde-lower-cave",
    "name": "Gada Gilinde Lower Cave",
    "type": "cave",
    "zone": "East Wellega",
    "woreda": "Sasiga",
    "lat": 9.2018,
    "lng": 36.41485,
    "summary": "Cave is one of the easiest caves on the island"
  },
  {
    "id": "gada-gilinde-upper-cave",
    "name": "Gada Gilinde Upper Cave",
    "type": "cave",
    "zone": "East Wellega",
    "woreda": "Sasiga",
    "lat": 9.20159,
    "lng": 36.41509,
    "summary": "is a natural void in the ground"
  },
  {
    "id": "galila-island",
    "name": "Galila Island",
    "type": "lake",
    "zone": "East Shewa",
    "woreda": "Adama Tulu Jido Kombolcha",
    "lat": 7.92376,
    "lng": 38.75512,
    "summary": "is a circular, forested cone with the monastery church of Iyasus at the peak."
  },
  {
    "id": "gargadi-hot-springl",
    "name": "Gargadi Hot Spring",
    "type": "spring",
    "zone": "East Shewa",
    "woreda": "Adama",
    "lat": 8.46048,
    "lng": 39.19218,
    "summary": ""
  },
  {
    "id": "gibe-gorge",
    "name": "Gibe Gorge",
    "type": "gorge",
    "zone": "Jimma",
    "woreda": "Sekoru",
    "lat": 8.21029,
    "lng": 37.55889,
    "summary": "is by far the largest tributary of the Omo River in Ethiopia and typically flowing south / southeast."
  },
  {
    "id": "girawa-mountain",
    "name": "Girawa Mountain",
    "type": "mountain",
    "zone": "East Hararge",
    "woreda": "Girawa",
    "lat": 7.00894,
    "lng": 40.59548,
    "summary": "is a mountain in the Oromia"
  },
  {
    "id": "guder-water-fall",
    "name": "Guder Water Fall",
    "type": "waterfall",
    "zone": "West Shewa",
    "woreda": "Toke Kutaye",
    "lat": 8.96498,
    "lng": 37.75634,
    "summary": "is located at 136km from Finfine on the Ambo Nekemte road to the west of Ambo town"
  },
  {
    "id": "gumi-gayo-gada-site",
    "name": "Gumi Gayo Gada Site",
    "type": "gada",
    "zone": "Borena",
    "woreda": "Dhas",
    "lat": 4.23132,
    "lng": 38.55376,
    "summary": "is its legislative body commonly known as Gada General Assembly (Gumi Gayo)."
  },
  {
    "id": "hadas-forest",
    "name": "Hadas Forest",
    "type": "forest",
    "zone": "West Hararge",
    "woreda": "Doba",
    "lat": 9.31065,
    "lng": 41.24588,
    "summary": "Hadas, in Encyclopedia of Soils in the Environment, 2005 ... to increase seedling establishment and recovery of forests by planting seedlings of the timber tree"
  },
  {
    "id": "harala-ruins",
    "name": "Harala Ruins",
    "type": "heritage",
    "zone": "Dire Dawa",
    "woreda": "Elevation 1701",
    "lat": 9.48958,
    "lng": 41.9091,
    "summary": "The Harla, also known as Harala, or Arla,[1] were an ethnic group that inhabited Djibouti, Ethiopia and Somaliland. They spoke the now-extinct Harla language, w"
  },
  {
    "id": "harmufoo-soolee-megalithic-site",
    "name": "Harmufoo Soolee Megalithic Site",
    "type": "heritage",
    "zone": "South West Shewa",
    "woreda": "Tole",
    "lat": 8.60879,
    "lng": 38.34743,
    "summary": "is a large pre-historic stone that has been used to construct a structure or monument"
  },
  {
    "id": "haro-aba-dika-national-hunting-center",
    "name": "Haro Aba Dika National Hunting Center",
    "type": "forest",
    "zone": "Buno Bedele",
    "woreda": "Dabo Hana",
    "lat": 8.74709,
    "lng": 36.16288,
    "summary": "Haro Aba Diko, the so-called controlled hunting threatens the few ... from the center of the forest to the vicinity of villages by illegal hunters."
  },
  {
    "id": "huluko-cave-and-waterfall",
    "name": "Huluko Cave and Waterfall",
    "type": "cave",
    "zone": "North Shewa (OR)",
    "woreda": "Aleltu",
    "lat": 9.09414,
    "lng": 39.14592,
    "summary": "is a natural cave used for tourist"
  },
  {
    "id": "irecha-festival-site",
    "name": "Irecha festival Site",
    "type": "gada",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.76565,
    "lng": 38.99582,
    "summary": "- Irrecha is an Oromo cultural thanks giving ceremony."
  },
  {
    "id": "jal-o-forest",
    "name": "Jal'o Forest",
    "type": "forest",
    "zone": "West Hararge",
    "woreda": "Chiro Zuria",
    "lat": 9.0028,
    "lng": 40.86342,
    "summary": "Park. Jallo Forest Park is one of the three main Wildlife Park located in Lahore"
  },
  {
    "id": "jibat-forest",
    "name": "Jibat Forest",
    "type": "forest",
    "zone": "",
    "woreda": "Jibat",
    "lat": 8.76886,
    "lng": 37.45982,
    "summary": "is in Nono District of Western Shoa"
  },
  {
    "id": "jimma-cinema",
    "name": "Jimma Cinema",
    "type": "heritage",
    "zone": "Jimma",
    "woreda": "Jimma town",
    "lat": 7.67688,
    "lng": 36.83375,
    "summary": "Ethiopian Business Directory"
  },
  {
    "id": "kero-rock",
    "name": "Kero Rock",
    "type": "heritage",
    "zone": "Horo Gudru Wellega",
    "woreda": "Amuru",
    "lat": 9.94001,
    "lng": 37.04316,
    "summary": "natural rock"
  },
  {
    "id": "ketketo-hot-spring",
    "name": "Ketketo Hot Spring",
    "type": "spring",
    "zone": "East Wellega",
    "woreda": "Nunu Kumba",
    "lat": 8.54159,
    "lng": 36.69186,
    "summary": "hot springs may also be indicative of the presence of magmatic anomaly in the area. Ketketo hotspring distance of 5–250 m"
  },
  {
    "id": "keto-waterfall",
    "name": "Keto Waterfall",
    "type": "waterfall",
    "zone": "Woreda",
    "woreda": "Elevation",
    "lat": 8.91801,
    "lng": 35.20161,
    "summary": "is natural water fall"
  },
  {
    "id": "konchi-natural-forest",
    "name": "Konchi Natural Forest",
    "type": "forest",
    "zone": "East Wellega",
    "woreda": "Boneya Boshe",
    "lat": 8.89382,
    "lng": 37.05223,
    "summary": "Konchi forest is a natural forest for agricultural use and the cutting of trees for fuel gradually changed the scene, and today forest areas have dwindled to le"
  },
  {
    "id": "kubi-chora-gada-center",
    "name": "Kubi Chora Gada Center",
    "type": "gada",
    "zone": "Borena",
    "woreda": "Yabelo town",
    "lat": 4.88118,
    "lng": 38.12275,
    "summary": ""
  },
  {
    "id": "kundudo-mountain",
    "name": "Kundudo Mountain",
    "type": "mountain",
    "zone": "",
    "woreda": "Elevation 2159",
    "lat": 9.42123,
    "lng": 36.32566,
    "summary": "is a flat top mountain (or amba) in the Fafan"
  },
  {
    "id": "lake-boye",
    "name": "Lake Boye",
    "type": "lake",
    "zone": "Jimma",
    "woreda": "Kersa (Jimma)",
    "lat": 7.6561,
    "lng": 36.87501,
    "summary": "was to assess the causes of Boye wetland degradation and to ... Distribution, Status of Migratory Resident Waterfowls of Drigh Lake"
  },
  {
    "id": "lake-fincha-a",
    "name": "Lake Fincha-a",
    "type": "lake",
    "zone": "Horo Gudru Wellega",
    "woreda": "Guduru",
    "lat": 9.55677,
    "lng": 37.36558,
    "summary": "is an artificial lake created as a reservoir of Hydroelectric dam on Fincha river"
  },
  {
    "id": "lake-hadiya",
    "name": "Lake Hadiya",
    "type": "lake",
    "zone": "East Wellega",
    "woreda": "Guto Gida",
    "lat": 9.07824,
    "lng": 36.59835,
    "summary": "is a lake locate in East Wollega"
  },
  {
    "id": "lake-wonchi",
    "name": "Lake Wonchi",
    "type": "lake",
    "zone": "South West Shewa",
    "woreda": "Wenchi",
    "lat": 8.78747,
    "lng": 37.8878,
    "summary": "is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic era"
  },
  {
    "id": "lega-oda-arcological-site",
    "name": "Lega Oda Arcological Site",
    "type": "gada",
    "zone": "Dire Dawa",
    "woreda": "Harar",
    "lat": 9.50098,
    "lng": 41.67757,
    "summary": "one of the sites, around 38 Kms"
  },
  {
    "id": "lephis-water-fall",
    "name": "Lephis water Fall",
    "type": "waterfall",
    "zone": "East Shewa",
    "woreda": "Adama Tulu Jido Kombolcha",
    "lat": 7.92375,
    "lng": 38.7551,
    "summary": "is located in Negele Arsi district"
  },
  {
    "id": "magada-forest",
    "name": "Magada Forest",
    "type": "forest",
    "zone": "West Guji",
    "woreda": "Bule Hora",
    "lat": 5.54997,
    "lng": 38.24569,
    "summary": "is estimated to cover an area of around 19,980 hectare"
  },
  {
    "id": "me-o-boku-gada-center",
    "name": "Me'o Boku Gada Center",
    "type": "gada",
    "zone": "Guji",
    "woreda": "Ana Sora",
    "lat": 6.10403,
    "lng": 38.75956,
    "summary": "is a historical heritages"
  },
  {
    "id": "melka-kunture-prehistoric-site",
    "name": "Melka Kunture Prehistoric Site",
    "type": "heritage",
    "zone": "South West Shewa",
    "woreda": "Kersana Malima",
    "lat": 8.70433,
    "lng": 38.59869,
    "summary": "one of the most important places in the world to study Hominids'biological & cultural evolution. Ther are more than 50 prehitoric sites which agess up to 1.7.mi"
  },
  {
    "id": "menagesha-forest",
    "name": "Menagesha Forest",
    "type": "forest",
    "zone": "Finfine Special",
    "woreda": "Welmera",
    "lat": 9.05791,
    "lng": 38.57438,
    "summary": "Is small forest located in Menagesha,Oromia"
  },
  {
    "id": "mount-chilalo",
    "name": "Mount Chilalo",
    "type": "mountain",
    "zone": "Arsi",
    "woreda": "Chilalo",
    "lat": 7.91817,
    "lng": 39.26753,
    "summary": "is an isolated, extinct silicic volcanic mountain in southeastern Ethiopia"
  },
  {
    "id": "mount-fentale",
    "name": "Mount Fentale",
    "type": "mountain",
    "zone": "East shewa",
    "woreda": "Fentale",
    "lat": 8.98115,
    "lng": 39.92732,
    "summary": "is a stratovolcano located in the Oromia Region, Ethiopia"
  },
  {
    "id": "mount-ziquala",
    "name": "Mount Ziquala",
    "type": "mountain",
    "zone": "East shewa",
    "woreda": "Bishoftu",
    "lat": 8.53509,
    "lng": 38.85805,
    "summary": "Cukala/Zikuala mountain has a volcanic crater lake at the top and known for Mountain tricking, Hiking Religious tourist ceremony with a shallow lake at the bott"
  },
  {
    "id": "mt-gara-muleta-weter-3381m",
    "name": "Mt. Gara Muleta Weter 3381M",
    "type": "mountain",
    "zone": "Hararghe",
    "woreda": "Elevation",
    "lat": 9.26713,
    "lng": 41.73592,
    "summary": "is a mountain (class T - Hypsographic) in ((ET07)), Ethiopia (Africa) with the region font code of Africa/Middle East."
  },
  {
    "id": "mt-kaka-4180m",
    "name": "Mt. Kaka 4180m",
    "type": "mountain",
    "zone": "Arsi",
    "woreda": "Bekoji",
    "lat": 7.33716,
    "lng": 39.15461,
    "summary": "is a mountain (class T - Hypsographic) in The State of Oromia ((ET01)), Ethiopia (Africa) with the region font code of Africa/Middle East"
  },
  {
    "id": "mt-tulu-welwel-3200m-mountain",
    "name": "Mt.Tulu Welwel 3200m Mountain",
    "type": "mountain",
    "zone": "",
    "woreda": "Gidami",
    "lat": 8.86576,
    "lng": 34.79512,
    "summary": "is a mountain in southwestern Ethiopia. Located in the Mirab Welega"
  },
  {
    "id": "muktar-forest",
    "name": "Muktar Forest",
    "type": "forest",
    "zone": "West Hararge",
    "woreda": "Gemechis",
    "lat": 8.99142,
    "lng": 40.90413,
    "summary": "is a high-carbon repository"
  },
  {
    "id": "musium",
    "name": "Shashemene Museum",
    "type": "museum",
    "zone": "West Arsi",
    "woreda": "Shashemene town",
    "lat": 7.20934,
    "lng": 38.6132,
    "summary": "is a non-profit, permanent institution in the service of society and its development, open to the public, which acquires, conserves, researches, communicates an"
  },
  {
    "id": "neshe-lake",
    "name": "Neshe Lake",
    "type": "lake",
    "zone": "Horo Gudru Wellega",
    "woreda": "Abay Chomen",
    "lat": 9.76002,
    "lng": 37.26016,
    "summary": "dam's height is 38"
  },
  {
    "id": "oda-arjo",
    "name": "Oda Arjo",
    "type": "gada",
    "zone": "East Wellega",
    "woreda": "Jimma Arjo",
    "lat": 8.73367,
    "lng": 36.50968,
    "summary": "is a cultural heritage found in jimma arjo wored"
  },
  {
    "id": "oda-bisil",
    "name": "Oda Bisil",
    "type": "gada",
    "zone": "West Shewa",
    "woreda": "Illu Galan",
    "lat": 8.94923,
    "lng": 37.35584,
    "summary": "the Oromo history, politics and religion"
  },
  {
    "id": "oda-bulluk",
    "name": "Oda Bulluk",
    "type": "gada",
    "zone": "Horo Gudru Wellega",
    "woreda": "Horo Buluk",
    "lat": 9.64986,
    "lng": 37.08325,
    "summary": "the Oromo history, politics and religion"
  },
  {
    "id": "oda-bulluk-hall-esatablished-area",
    "name": "Oda Bulluk Hall Esatablished Area",
    "type": "gada",
    "zone": "Horo Gudru Wellega",
    "woreda": "Horo Buluk",
    "lat": 9.64871,
    "lng": 37.08288,
    "summary": "the Oromo history, politics and religion"
  },
  {
    "id": "oda-bultum-cultural-center",
    "name": "Oda Bultum Cultural Center",
    "type": "gada",
    "zone": "North Shewa (OR)",
    "woreda": "Gerar Jarso",
    "lat": 9.73377,
    "lng": 38.81385,
    "summary": "The Oda Bultum center, with a monument representing Gada system"
  },
  {
    "id": "oda-bultum-gada-center",
    "name": "Oda Bultum Gada Center",
    "type": "gada",
    "zone": "West Hararge",
    "woreda": "Kuni /Oda Bultum",
    "lat": 8.84679,
    "lng": 40.70641,
    "summary": "is a site which holds important place in the history of the Eastern Oromo people."
  },
  {
    "id": "oda-hulle",
    "name": "Oda Hulle",
    "type": "gada",
    "zone": "Jimma",
    "woreda": "Omo Nada",
    "lat": 7.66869,
    "lng": 37.11386,
    "summary": ""
  },
  {
    "id": "oda-nabe",
    "name": "oda nabe",
    "type": "gada",
    "zone": "East Shewa",
    "woreda": "Dukem",
    "lat": 8.79438,
    "lng": 38.85798,
    "summary": "Oda Nabe is located in Akaki region of Oromia."
  },
  {
    "id": "oda-nabe-gada-center",
    "name": "Oda nabe Gada Center",
    "type": "gada",
    "zone": "Finfine Special",
    "woreda": "Akaki",
    "lat": 8.78106,
    "lng": 38.85621,
    "summary": "was also the politico-religious center of the ... main actor and reformist who contributed for the reorganization of Gada structure"
  },
  {
    "id": "oda-roba",
    "name": "Oda Roba",
    "type": "gada",
    "zone": "East Bale",
    "woreda": "Ginir",
    "lat": 7.1053,
    "lng": 40.78755,
    "summary": "found in central and Northern Oromia"
  },
  {
    "id": "okote-cave-and-mountain",
    "name": "Okote Cave and Mountain",
    "type": "cave",
    "zone": "East Wellega",
    "woreda": "Wama Hagalo",
    "lat": 8.76756,
    "lng": 36.91135,
    "summary": ""
  },
  {
    "id": "onesmos-nasib-monument",
    "name": "Onesmos Nasib Monument",
    "type": "heritage",
    "zone": "East Hararge",
    "woreda": "Kumbi",
    "lat": 8.33639,
    "lng": 41.69026,
    "summary": "a Monument native Oromo scholar who converted to Lutheran Christianity"
  },
  {
    "id": "oromo-cave",
    "name": "Oromo Cave",
    "type": "cave",
    "zone": "Eastern Hararge",
    "woreda": "Grusum",
    "lat": 9.42127,
    "lng": 36.32605,
    "summary": "the Oromo cave is best known as Africa's three best marvelous caves with stalegmite and stalectites."
  },
  {
    "id": "oromo-cultural-center",
    "name": "Oromo Cultural Center",
    "type": "heritage",
    "zone": "",
    "woreda": "Elevation",
    "lat": 9.01076,
    "lng": 38.75704,
    "summary": "-The Oromo cultural center was stablished in 2015. it was meant to serve as a research center, regional national Museum, conference halls, Cinema hall, tourist"
  },
  {
    "id": "oromo-cultural-musium",
    "name": "Oromo Cultural Musium",
    "type": "museum",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.74953,
    "lng": 38.97024,
    "summary": "was established to work on research and development of Oromo culture, history, language and art"
  },
  {
    "id": "sedekiyu-ritual-site",
    "name": "Sedekiyu Ritual Site",
    "type": "heritage",
    "zone": "Jimma",
    "woreda": "Sekoru",
    "lat": 8.06735,
    "lng": 37.53465,
    "summary": ""
  },
  {
    "id": "shaphe-rock-carving",
    "name": "Shaphe Rock Carving",
    "type": "heritage",
    "zone": "West Guji",
    "woreda": "Abaya",
    "lat": 6.44163,
    "lng": 38.24567,
    "summary": "Carvings on the rocks indicate some of the art works done by ancient people, the carving depicts a number of cow pictures"
  },
  {
    "id": "sof-omar-cave",
    "name": "Sof Omar Cave",
    "type": "cave",
    "zone": "Bale",
    "woreda": "Dawe Qachan",
    "lat": 6.20322,
    "lng": 39.7638,
    "summary": "- Cave of mystery, one of the longest underground cave in Africa with a total length of 15kms having meandering Web river passing through its entrenched gorge."
  },
  {
    "id": "sof-omar-caves",
    "name": "Sof Omar Caves",
    "type": "cave",
    "zone": "Bale",
    "woreda": "Dawe Qachan",
    "lat": 6.93817,
    "lng": 40.85018,
    "summary": "-one of the longest underground cave in Africa with a total length of 15kms having meandering Web river passing through its entrenched gorge. This cave is liste"
  },
  {
    "id": "sor-waterfall",
    "name": "Sor Waterfall",
    "type": "waterfall",
    "zone": "East Hararge",
    "woreda": "Kumbi",
    "lat": 8.23548,
    "lng": 41.70737,
    "summary": "Breathakingly attractive and dazzling water fall situated amidst a dense coffee forest which is the secod largest in ethiopia."
  },
  {
    "id": "sorga-lake",
    "name": "Sorga Lake",
    "type": "lake",
    "zone": "East Wellega",
    "woreda": "Nekemte town",
    "lat": 9.06574,
    "lng": 36.51114,
    "summary": "Lake near Nekemte.",
  },
  {
    "id": "sorga-lake-and-recreation-area",
    "name": "Sorga Lake and Recreation Area",
    "type": "lake",
    "zone": "East Wellega",
    "woreda": "Nekemte town",
    "lat": 9.0656,
    "lng": 36.51414,
    "summary": "Lake near Nekemte.",
  },
  {
    "id": "suba-menagesha-park-natural-forest-mount",
    "name": "Suba Menagesha Park Natural forest – Mountain Scenic beauty",
    "type": "forest",
    "zone": "",
    "woreda": "",
    "lat": 8.9792,
    "lng": 38.55338,
    "summary": ""
  },
  {
    "id": "tullu-dimtu-mountain-sente",
    "name": "Tullu Dimtu mountain(sente)",
    "type": "mountain",
    "zone": "Bale",
    "woreda": "Bale",
    "lat": 6.9085,
    "lng": 39.89068,
    "summary": "is part of the Bale Mountain range in Oromia Region in southeast Ethiopia, located in the Bale National Park"
  },
  {
    "id": "tulu-gudo-island",
    "name": "Tulu Gudo Island",
    "type": "lake",
    "zone": "Arsi",
    "woreda": "Ziway Dugda",
    "lat": 7.93038,
    "lng": 38.85967,
    "summary": "is one of the five islands on Lake Ziway"
  },
  {
    "id": "tulu-lafto-forest-and-wildlife-conservat",
    "name": "Tulu Lafto Forest and wildlife conservation",
    "type": "forest",
    "zone": "Horo Gudru Wellega",
    "woreda": "Abe Dongoro",
    "lat": 9.59411,
    "lng": 36.90622,
    "summary": "is a natural forest"
  },
  {
    "id": "wallame-hot-spring",
    "name": "Wallame Hot Spring",
    "type": "spring",
    "zone": "West Guji",
    "woreda": "Abaya",
    "lat": 6.39287,
    "lng": 38.26841,
    "summary": "This marvelous natural hot spring Springing from the foot of Gambella hills.The hot water creates rivulet to keep down powering to Lagadar stream throughout the"
  },
  {
    "id": "wollega-museum",
    "name": "Wollega Museum",
    "type": "museum",
    "zone": "East Wellega",
    "woreda": "Nekemte town",
    "lat": 9.09057,
    "lng": 36.54676,
    "summary": "is the first Ethnographic museum established in the country during Dargue regime museum found in East Wollega Nekemte, Ethiopia."
  },
  {
    "id": "yayo-forest",
    "name": "Yayo Forest",
    "type": "forest",
    "zone": "Illubabor",
    "woreda": "Chora (Buno Bedele)",
    "lat": 8.36119,
    "lng": 36.04098,
    "summary": "is in the Illubabor"
  },
  {
    "id": "yayo-forest-2",
    "name": "Yayo Forest",
    "type": "forest",
    "zone": "East Hararge",
    "woreda": "Meyu Muleke",
    "lat": 8.36337,
    "lng": 41.87506,
    "summary": "is in the Illubabor"
  },
  {
    "id": "yerer-mountain",
    "name": "Yerer Mountain",
    "type": "mountain",
    "zone": "East Shewa",
    "woreda": "Bishoftu town",
    "lat": 8.86994,
    "lng": 38.98577,
    "summary": "is one of the tallest, awesome and majestic mountain near Addis Ababa"
  }
];

export function touristMapEmbed(lat?: number, lng?: number, zoom = 11) {
  const base = oromiaTouristMap.embedUrl;
  if (lat == null || lng == null) {
    return `${base}&ll=${oromiaTouristMap.center.lat},${oromiaTouristMap.center.lng}&z=${oromiaTouristMap.center.zoom}`;
  }
  return `${base}&ll=${lat},${lng}&z=${zoom}`;
}

export function quizSiteId(siteName: string) {
  const n = siteName.toLowerCase();
  const hints: Record<string, string[]> = {
    "sof-omar": ["sof omar", "sof umar"],
    wenchi: ["wonchi", "wanchi"],
    "melka-kunture": ["melka kunture"],
    "abba-jifar": ["aba jifar", "abba jifar"],
    babile: ["babile valley", "babile rock"],
    bale: ["tullu dimtu", "sente"],
  };
  for (const [id, keys] of Object.entries(hints)) {
    if (keys.some((k) => n.includes(k))) return id;
  }
  return null;
}
