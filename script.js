/* Gunina Holidays - site interactions */
(function () {
  'use strict';

  const destinations = {
  "Malaysia": [
    "Kuala Lumpur",
    "Genting Highlands",
    "Langkawi",
    "Penang",
    "Malacca",
    "Cameron Highlands",
    "Perhentian Islands",
    "Redang Island",
    "Kota Kinabalu",
    "Taman Negara",
    "Putrajaya",
    "Batu Caves"
  ],
  "Japan": [
    "Tokyo",
    "Kyoto",
    "Osaka",
    "Mt. Fuji",
    "Sapporo",
    "Hiroshima",
    "Nara",
    "Hakone",
    "Okinawa",
    "Nikko",
    "Kamakura",
    "Fukuoka"
  ],
  "Dubai / UAE": [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Desert Safari",
    "Burj Khalifa",
    "Palm Jumeirah",
    "Jumeirah Beach",
    "Dubai Marina",
    "Al Ain",
    "Ras Al Khaimah",
    "Fujairah",
    "Yas Island"
  ],
  "Europe": [
    "Paris",
    "Switzerland",
    "Italy",
    "Amsterdam",
    "Austria",
    "Germany",
    "Spain",
    "Greece",
    "Portugal",
    "Czech Republic",
    "Hungary",
    "Belgium"
  ],
  "Thailand": [
    "Bangkok",
    "Phuket",
    "Krabi",
    "Pattaya",
    "Chiang Mai",
    "Koh Samui",
    "Ayutthaya",
    "Hua Hin",
    "Phi Phi Islands",
    "Koh Phangan",
    "Kanchanaburi",
    "Chiang Rai"
  ],
  "Bali / Indonesia": [
    "Ubud",
    "Kuta",
    "Nusa Penida",
    "Seminyak",
    "Uluwatu",
    "Gili Islands",
    "Canggu",
    "Lombok",
    "Jakarta",
    "Yogyakarta",
    "Komodo Island",
    "Bandung"
  ],
  "Singapore": [
    "Marina Bay",
    "Sentosa Island",
    "Gardens by the Bay",
    "Universal Studios",
    "Singapore Zoo",
    "Chinatown",
    "Little India",
    "Clarke Quay",
    "Orchard Road",
    "Merlion Park",
    "Jewel Changi",
    "East Coast Park"
  ],
  "Vietnam": [
    "Hanoi",
    "Halong Bay",
    "Da Nang",
    "Hoi An",
    "Ho Chi Minh City",
    "Phu Quoc",
    "Nha Trang",
    "Sapa",
    "Hue",
    "Ninh Binh",
    "Da Lat",
    "Mui Ne"
  ],
  "Turkey": [
    "Istanbul",
    "Cappadocia",
    "Antalya",
    "Pamukkale",
    "Bodrum",
    "Ephesus",
    "Fethiye",
    "Izmir",
    "Ankara",
    "Trabzon",
    "Konya",
    "Marmaris"
  ],
  "Switzerland": [
    "Zurich",
    "Lucerne",
    "Interlaken",
    "Zermatt",
    "Geneva",
    "Jungfrau",
    "Bern",
    "Montreux",
    "Lausanne",
    "Grindelwald",
    "St. Moritz",
    "Rhine Falls"
  ],
  "France": [
    "Paris",
    "Nice",
    "Lyon",
    "Versailles",
    "French Riviera",
    "Bordeaux",
    "Marseille",
    "Cannes",
    "Mont Saint-Michel",
    "Strasbourg",
    "Loire Valley",
    "Provence"
  ],
  "Italy": [
    "Rome",
    "Venice",
    "Florence",
    "Milan",
    "Amalfi Coast",
    "Pisa",
    "Naples",
    "Sicily",
    "Sardinia",
    "Cinque Terre",
    "Lake Como",
    "Bologna"
  ],
  "Australia": [
    "Sydney",
    "Melbourne",
    "Gold Coast",
    "Cairns",
    "Brisbane",
    "Perth",
    "Great Barrier Reef",
    "Uluru",
    "Adelaide",
    "Hobart",
    "Blue Mountains",
    "Whitsunday Islands"
  ],
  "New Zealand": [
    "Auckland",
    "Queenstown",
    "Rotorua",
    "Christchurch",
    "Milford Sound",
    "Wellington",
    "Wanaka",
    "Franz Josef Glacier",
    "Bay of Islands",
    "Taupo",
    "Dunedin",
    "Waitomo Caves"
  ],
  "USA": [
    "New York",
    "Los Angeles",
    "Las Vegas",
    "Miami",
    "Orlando",
    "San Francisco",
    "Washington, D.C.",
    "Chicago",
    "Boston",
    "Hawaii",
    "Grand Canyon",
    "Yellowstone"
  ],
  "Canada": [
    "Toronto",
    "Vancouver",
    "Banff",
    "Montreal",
    "Calgary",
    "Niagara Falls",
    "Ottawa",
    "Quebec City",
    "Whistler",
    "Jasper",
    "Victoria",
    "Halifax"
  ],
  "Egypt": [
    "Cairo",
    "Giza",
    "Luxor",
    "Hurghada",
    "Sharm El Sheikh",
    "Aswan",
    "Alexandria",
    "Abu Simbel",
    "Siwa Oasis",
    "Dahab",
    "Red Sea",
    "Nile Cruise"
  ],
  "Mauritius": [
    "Grand Baie",
    "Port Louis",
    "Chamarel",
    "Flic en Flac",
    "Ile aux Cerfs",
    "Black River Gorges",
    "Trou aux Biches",
    "Belle Mare",
    "Le Morne",
    "Casela",
    "Pamplemousses",
    "Blue Bay"
  ],
  "Maldives": [
    "Male",
    "Maafushi",
    "Hulhumale",
    "Private Island Resorts",
    "Vaavu Atoll",
    "Addu Atoll",
    "Baa Atoll",
    "Ari Atoll",
    "Raa Atoll",
    "Dhigurah",
    "Thulusdhoo",
    "Himmafushi"
  ],
  "Sri Lanka": [
    "Colombo",
    "Kandy",
    "Ella",
    "Bentota",
    "Nuwara Eliya",
    "Galle",
    "Sigiriya",
    "Mirissa",
    "Yala",
    "Dambulla",
    "Negombo",
    "Arugam Bay"
  ],
  "Greece": [
    "Athens",
    "Santorini",
    "Mykonos",
    "Crete",
    "Rhodes",
    "Meteora",
    "Corfu",
    "Zakynthos",
    "Thessaloniki",
    "Paros",
    "Naxos",
    "Delphi"
  ],
  "Spain": [
    "Madrid",
    "Barcelona",
    "Seville",
    "Valencia",
    "Granada",
    "Malaga",
    "Mallorca",
    "Ibiza",
    "Bilbao",
    "Tenerife",
    "Cordoba",
    "San Sebastian"
  ],
  "Portugal": [
    "Lisbon",
    "Porto",
    "Sintra",
    "Madeira",
    "Faro",
    "Algarve",
    "Coimbra",
    "Braga",
    "Aveiro",
    "Cascais",
    "Evora",
    "Azores"
  ],
  "Germany": [
    "Berlin",
    "Munich",
    "Frankfurt",
    "Hamburg",
    "Cologne",
    "Dresden",
    "Heidelberg",
    "Black Forest",
    "Neuschwanstein Castle",
    "Nuremberg",
    "Rhine Valley",
    "Rothenburg ob der Tauber"
  ],
  "Netherlands": [
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Giethoorn",
    "Keukenhof",
    "Delft",
    "Leiden",
    "Haarlem",
    "Maastricht",
    "Kinderdijk",
    "Zaanse Schans"
  ],
  "Austria": [
    "Vienna",
    "Salzburg",
    "Innsbruck",
    "Hallstatt",
    "Graz",
    "Kitzbuhel",
    "Zell am See",
    "Wachau Valley",
    "Tyrol",
    "Klagenfurt",
    "Bregenz",
    "Bad Ischl"
  ],
  "Czech Republic": [
    "Prague",
    "Cesky Krumlov",
    "Karlovy Vary",
    "Brno",
    "Kutna Hora",
    "Pilsen",
    "Olomouc",
    "Liberec",
    "Telc",
    "Moravian Karst",
    "Karlstejn Castle",
    "Bohemian Switzerland"
  ],
  "Hungary": [
    "Budapest",
    "Lake Balaton",
    "Szentendre",
    "Eger",
    "Debrecen",
    "Pecs",
    "Szeged",
    "Gyor",
    "Visegrad",
    "Hortobagy",
    "Tihany",
    "Tokaj"
  ],
  "Belgium": [
    "Brussels",
    "Bruges",
    "Ghent",
    "Antwerp",
    "Leuven",
    "Dinant",
    "Namur",
    "Liege",
    "Mechelen",
    "Ypres",
    "Ardennes",
    "Waterloo"
  ],
  "Norway": [
    "Oslo",
    "Bergen",
    "Tromso",
    "Geirangerfjord",
    "Lofoten Islands",
    "Stavanger",
    "Flam",
    "Alesund",
    "Trondheim",
    "Preikestolen",
    "North Cape",
    "Svalbard"
  ],
  "Sweden": [
    "Stockholm",
    "Gothenburg",
    "Malmo",
    "Kiruna",
    "Abisko",
    "Visby",
    "Uppsala",
    "Lund",
    "Icehotel",
    "Gotland",
    "Lake Siljan",
    "Swedish Lapland"
  ],
  "Denmark": [
    "Copenhagen",
    "Aarhus",
    "Odense",
    "Aalborg",
    "Roskilde",
    "Skagen",
    "Bornholm",
    "Legoland Billund",
    "Helsingor",
    "Frederiksborg",
    "Mols Bjerge",
    "Ribe"
  ],
  "Finland": [
    "Helsinki",
    "Rovaniemi",
    "Lapland",
    "Turku",
    "Tampere",
    "Porvoo",
    "Oulu",
    "Kemi",
    "Savonlinna",
    "Nuuksio",
    "Åland Islands",
    "Levi"
  ],
  "Iceland": [
    "Reykjavik",
    "Blue Lagoon",
    "Golden Circle",
    "Akureyri",
    "Vik",
    "Jokulsarlon",
    "Snaefellsnes",
    "Westfjords",
    "Husavik",
    "Landmannalaugar",
    "Skogafoss",
    "Northern Lights"
  ],
  "Ireland": [
    "Dublin",
    "Galway",
    "Cliffs of Moher",
    "Cork",
    "Killarney",
    "Ring of Kerry",
    "Belfast",
    "Dingle",
    "Limerick",
    "Wicklow",
    "Kilkenny",
    "Giant’s Causeway"
  ],
  "Scotland": [
    "Edinburgh",
    "Glasgow",
    "Isle of Skye",
    "Loch Ness",
    "Inverness",
    "St Andrews",
    "Fort William",
    "Glencoe",
    "Cairngorms",
    "Oban",
    "Loch Lomond",
    "Outer Hebrides"
  ],
  "Croatia": [
    "Dubrovnik",
    "Split",
    "Zagreb",
    "Hvar",
    "Plitvice Lakes",
    "Zadar",
    "Rovinj",
    "Pula",
    "Korcula",
    "Trogir",
    "Sibenik",
    "Makarska"
  ],
  "Slovenia": [
    "Ljubljana",
    "Lake Bled",
    "Lake Bohinj",
    "Postojna Cave",
    "Piran",
    "Maribor",
    "Kranjska Gora",
    "Triglav National Park",
    "Predjama Castle",
    "Portoroz",
    "Ptuj",
    "Soča Valley"
  ],
  "Russia": [
    "Moscow",
    "St. Petersburg",
    "Kazan",
    "Sochi",
    "Lake Baikal",
    "Golden Ring",
    "Vladivostok",
    "Yekaterinburg",
    "Murmansk",
    "Karelia",
    "Suzdal",
    "Nizhny Novgorod"
  ],
  "Georgia": [
    "Tbilisi",
    "Batumi",
    "Kazbegi",
    "Kutaisi",
    "Gudauri",
    "Svaneti",
    "Kakheti",
    "Borjomi",
    "Mtskheta",
    "Vardzia",
    "Uplistsikhe",
    "Bakuriani"
  ],
  "Armenia": [
    "Yerevan",
    "Lake Sevan",
    "Garni Temple",
    "Geghard Monastery",
    "Dilijan",
    "Gyumri",
    "Khor Virap",
    "Tatev",
    "Jermuk",
    "Tsaghkadzor",
    "Areni",
    "Amberd"
  ],
  "Azerbaijan": [
    "Baku",
    "Gabala",
    "Sheki",
    "Gobustan",
    "Quba",
    "Shamakhi",
    "Naftalan",
    "Lahij",
    "Ganja",
    "Mud Volcanoes",
    "Khinaliq",
    "Nakhchivan"
  ],
  "Israel": [
    "Jerusalem",
    "Tel Aviv",
    "Dead Sea",
    "Haifa",
    "Nazareth",
    "Eilat",
    "Masada",
    "Sea of Galilee",
    "Acre",
    "Bethlehem",
    "Caesarea",
    "Rosh Hanikra"
  ],
  "Jordan": [
    "Amman",
    "Petra",
    "Wadi Rum",
    "Dead Sea",
    "Aqaba",
    "Jerash",
    "Madaba",
    "Mount Nebo",
    "Wadi Mujib",
    "Dana",
    "Umm Qais",
    "Ajloun"
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Jeddah",
    "AlUla",
    "Mecca",
    "Medina",
    "Diriyah",
    "Taif",
    "Abha",
    "Dammam",
    "Red Sea Coast",
    "NEOM",
    "Farasan Islands"
  ],
  "Oman": [
    "Muscat",
    "Salalah",
    "Nizwa",
    "Wahiba Sands",
    "Wadi Shab",
    "Jebel Akhdar",
    "Sur",
    "Khasab",
    "Bahla",
    "Ras Al Jinz",
    "Misfat Al Abriyeen",
    "Daymaniyat Islands"
  ],
  "Qatar": [
    "Doha",
    "Souq Waqif",
    "The Pearl",
    "Katara",
    "National Museum",
    "Museum of Islamic Art",
    "Lusail",
    "Al Wakrah",
    "Zekreet",
    "Khor Al Adaid",
    "Al Zubarah",
    "Aspire Zone"
  ],
  "South Africa": [
    "Cape Town",
    "Johannesburg",
    "Kruger National Park",
    "Garden Route",
    "Durban",
    "Stellenbosch",
    "Hermanus",
    "Drakensberg",
    "Port Elizabeth",
    "Sun City",
    "Blyde River Canyon",
    "Robben Island"
  ],
  "Kenya": [
    "Nairobi",
    "Maasai Mara",
    "Mombasa",
    "Amboseli",
    "Lake Nakuru",
    "Tsavo",
    "Diani Beach",
    "Naivasha",
    "Samburu",
    "Lamu",
    "Mount Kenya",
    "Hell’s Gate"
  ],
  "Tanzania": [
    "Zanzibar",
    "Serengeti",
    "Mount Kilimanjaro",
    "Ngorongoro Crater",
    "Arusha",
    "Dar es Salaam",
    "Tarangire",
    "Lake Manyara",
    "Mafia Island",
    "Nungwi",
    "Paje",
    "Selous"
  ],
  "Morocco": [
    "Marrakech",
    "Casablanca",
    "Fes",
    "Chefchaouen",
    "Rabat",
    "Agadir",
    "Tangier",
    "Essaouira",
    "Merzouga",
    "Ouarzazate",
    "Atlas Mountains",
    "Ait Benhaddou"
  ],
  "Seychelles": [
    "Mahe",
    "Praslin",
    "La Digue",
    "Curieuse Island",
    "Beau Vallon",
    "Anse Lazio",
    "Anse Source d’Argent",
    "Morne Seychellois",
    "Silhouette Island",
    "Aldabra",
    "Victoria",
    "Saint Anne Marine Park"
  ],
  "Brazil": [
    "Rio de Janeiro",
    "São Paulo",
    "Salvador",
    "Iguazu Falls",
    "Amazon Rainforest",
    "Brasilia",
    "Florianopolis",
    "Fortaleza",
    "Recife",
    "Jericoacoara",
    "Paraty",
    "Fernando de Noronha"
  ],
  "Argentina": [
    "Buenos Aires",
    "Iguazu Falls",
    "Patagonia",
    "Mendoza",
    "Bariloche",
    "Ushuaia",
    "Salta",
    "Cordoba",
    "El Calafate",
    "Mar del Plata",
    "El Chalten",
    "Tigre"
  ],
  "Chile": [
    "Santiago",
    "Atacama Desert",
    "Torres del Paine",
    "Valparaiso",
    "Easter Island",
    "Puerto Varas",
    "Punta Arenas",
    "San Pedro de Atacama",
    "Chiloe",
    "Lake District",
    "Vina del Mar",
    "Carretera Austral"
  ],
  "Peru": [
    "Lima",
    "Machu Picchu",
    "Cusco",
    "Sacred Valley",
    "Arequipa",
    "Lake Titicaca",
    "Nazca Lines",
    "Huacachina",
    "Colca Canyon",
    "Paracas",
    "Iquitos",
    "Rainbow Mountain"
  ],
  "Mexico": [
    "Mexico City",
    "Cancun",
    "Tulum",
    "Playa del Carmen",
    "Chichen Itza",
    "Los Cabos",
    "Puerto Vallarta",
    "Oaxaca",
    "Guadalajara",
    "Merida",
    "Cozumel",
    "Acapulco"
  ],
  "Costa Rica": [
    "San Jose",
    "Arenal Volcano",
    "Monteverde",
    "Manuel Antonio",
    "Tamarindo",
    "Guanacaste",
    "Tortuguero",
    "Corcovado",
    "Jaco",
    "Puerto Viejo",
    "La Fortuna",
    "Nicoya Peninsula"
  ],
  "Bahamas": [
    "Nassau",
    "Paradise Island",
    "Exuma",
    "Grand Bahama",
    "Eleuthera",
    "Bimini",
    "Andros",
    "Harbour Island",
    "Long Island",
    "Abaco",
    "Atlantis",
    "Blue Lagoon Island"
  ],
  "Jamaica": [
    "Montego Bay",
    "Negril",
    "Ocho Rios",
    "Kingston",
    "Port Antonio",
    "Dunn’s River Falls",
    "Blue Mountains",
    "Doctor’s Cave Beach",
    "Seven Mile Beach",
    "YS Falls",
    "Martha Brae",
    "Rick’s Cafe"
  ],
  "USA - Hawaii": [
    "Honolulu",
    "Waikiki",
    "Maui",
    "Kauai",
    "Big Island",
    "Oahu North Shore",
    "Haleakala",
    "Na Pali Coast",
    "Waimea Canyon",
    "Volcanoes National Park",
    "Pearl Harbor",
    "Hana Road"
  ],
  "Philippines": [
    "Manila",
    "Boracay",
    "Palawan",
    "Cebu",
    "Bohol",
    "Siargao",
    "El Nido",
    "Coron",
    "Davao",
    "Baguio",
    "Vigan",
    "Puerto Princesa"
  ],
  "South Korea": [
    "Seoul",
    "Busan",
    "Jeju Island",
    "Incheon",
    "Gyeongju",
    "Daegu",
    "Suwon",
    "Nami Island",
    "Gangneung",
    "Jeonju",
    "Sokcho",
    "DMZ"
  ],
  "China": [
    "Beijing",
    "Shanghai",
    "Xi’an",
    "Guangzhou",
    "Shenzhen",
    "Chengdu",
    "Guilin",
    "Zhangjiajie",
    "Hangzhou",
    "Suzhou",
    "Chongqing",
    "Lhasa"
  ],
  "Hong Kong": [
    "Victoria Peak",
    "Tsim Sha Tsui",
    "Disneyland",
    "Lantau Island",
    "Ocean Park",
    "Temple Street",
    "Ngong Ping",
    "Central",
    "Repulse Bay",
    "Mong Kok",
    "Macau Day Trip",
    "Star Ferry"
  ],
  "Taiwan": [
    "Taipei",
    "Jiufen",
    "Taroko Gorge",
    "Sun Moon Lake",
    "Kaohsiung",
    "Tainan",
    "Hualien",
    "Taichung",
    "Alishan",
    "Kenting",
    "Yilan",
    "Keelung"
  ],
  "Nepal": [
    "Kathmandu",
    "Pokhara",
    "Everest Base Camp",
    "Chitwan",
    "Lumbini",
    "Nagarkot",
    "Bhaktapur",
    "Patan",
    "Annapurna",
    "Bandipur",
    "Mustang",
    "Langtang"
  ],
  "Bhutan": [
    "Thimphu",
    "Paro",
    "Punakha",
    "Tiger’s Nest",
    "Phobjikha Valley",
    "Bumthang",
    "Wangdue Phodrang",
    "Haa Valley",
    "Dochula Pass",
    "Trongsa",
    "Mongar",
    "Trashigang"
  ],
  "Cambodia": [
    "Siem Reap",
    "Angkor Wat",
    "Phnom Penh",
    "Sihanoukville",
    "Koh Rong",
    "Battambang",
    "Kampot",
    "Kep",
    "Tonle Sap",
    "Preah Vihear",
    "Kratie",
    "Mondulkiri"
  ],
  "Laos": [
    "Vientiane",
    "Luang Prabang",
    "Vang Vieng",
    "Pakse",
    "4000 Islands",
    "Kuang Si Falls",
    "Plain of Jars",
    "Savannakhet",
    "Thakhek",
    "Nong Khiaw",
    "Bolaven Plateau",
    "Phonsavan"
  ],
  "Malaysia - Borneo": [
    "Kota Kinabalu",
    "Mount Kinabalu",
    "Sepilok",
    "Sandakan",
    "Danum Valley",
    "Mulu Caves",
    "Kuching",
    "Bako National Park",
    "Semporna",
    "Sipadan",
    "Miri",
    "Batang Ai"
  ],
  "United Kingdom": [
    "London",
    "Edinburgh",
    "Manchester",
    "Liverpool",
    "Bath",
    "York",
    "Oxford",
    "Cambridge",
    "Stonehenge",
    "Lake District",
    "Cornwall",
    "Windsor"
  ],
  "Switzerland Alps": [
    "Jungfrau",
    "Zermatt",
    "Interlaken",
    "Grindelwald",
    "St. Moritz",
    "Lucerne",
    "Engelberg",
    "Verbier",
    "Davos",
    "Gstaad",
    "Andermatt",
    "Aletsch Glacier"
  ]
};

  const visaCountries = [
    ["🇦🇫", "Afghanistan"],
    ["🇦🇱", "Albania"],
    ["🇩🇿", "Algeria"],
    ["🇦🇩", "Andorra"],
    ["🇦🇴", "Angola"],
    ["🇦🇬", "Antigua and Barbuda"],
    ["🇦🇷", "Argentina"],
    ["🇦🇲", "Armenia"],
    ["🇦🇺", "Australia"],
    ["🇦🇹", "Austria"],
    ["🇦🇿", "Azerbaijan"],
    ["🇧🇸", "Bahamas"],
    ["🇧🇭", "Bahrain"],
    ["🇧🇩", "Bangladesh"],
    ["🇧🇧", "Barbados"],
    ["🇧🇾", "Belarus"],
    ["🇧🇪", "Belgium"],
    ["🇧🇿", "Belize"],
    ["🇧🇯", "Benin"],
    ["🇧🇹", "Bhutan"],
    ["🇧🇴", "Bolivia"],
    ["🇧🇦", "Bosnia and Herzegovina"],
    ["🇧🇼", "Botswana"],
    ["🇧🇷", "Brazil"],
    ["🇧🇳", "Brunei"],
    ["🇧🇬", "Bulgaria"],
    ["🇧🇫", "Burkina Faso"],
    ["🇧🇮", "Burundi"],
    ["🇨🇻", "Cabo Verde"],
    ["🇰🇭", "Cambodia"],
    ["🇨🇲", "Cameroon"],
    ["🇨🇦", "Canada"],
    ["🇨🇫", "Central African Republic"],
    ["🇹🇩", "Chad"],
    ["🇨🇱", "Chile"],
    ["🇨🇳", "China"],
    ["🇨🇴", "Colombia"],
    ["🇰🇲", "Comoros"],
    ["🇨🇩", "Congo, Democratic Republic of the"],
    ["🇨🇬", "Congo, Republic of the"],
    ["🇨🇷", "Costa Rica"],
    ["🇨🇮", "Côte d’Ivoire"],
    ["🇭🇷", "Croatia"],
    ["🇨🇺", "Cuba"],
    ["🇨🇾", "Cyprus"],
    ["🇨🇿", "Czech Republic"],
    ["🇩🇰", "Denmark"],
    ["🇩🇯", "Djibouti"],
    ["🇩🇲", "Dominica"],
    ["🇩🇴", "Dominican Republic"],
    ["🇪🇨", "Ecuador"],
    ["🇪🇬", "Egypt"],
    ["🇸🇻", "El Salvador"],
    ["🇬🇶", "Equatorial Guinea"],
    ["🇪🇷", "Eritrea"],
    ["🇪🇪", "Estonia"],
    ["🇸🇿", "Eswatini"],
    ["🇪🇹", "Ethiopia"],
    ["🇫🇯", "Fiji"],
    ["🇫🇮", "Finland"],
    ["🇫🇷", "France"],
    ["🇬🇦", "Gabon"],
    ["🇬🇲", "Gambia"],
    ["🇬🇪", "Georgia"],
    ["🇩🇪", "Germany"],
    ["🇬🇭", "Ghana"],
    ["🇬🇷", "Greece"],
    ["🇬🇩", "Grenada"],
    ["🇬🇹", "Guatemala"],
    ["🇬🇳", "Guinea"],
    ["🇬🇼", "Guinea-Bissau"],
    ["🇬🇾", "Guyana"],
    ["🇭🇹", "Haiti"],
    ["🇭🇳", "Honduras"],
    ["🇭🇺", "Hungary"],
    ["🇮🇸", "Iceland"],
    ["🇮🇳", "India"],
    ["🇮🇩", "Indonesia"],
    ["🇮🇷", "Iran"],
    ["🇮🇶", "Iraq"],
    ["🇮🇪", "Ireland"],
    ["🇮🇱", "Israel"],
    ["🇮🇹", "Italy"],
    ["🇯🇲", "Jamaica"],
    ["🇯🇵", "Japan"],
    ["🇯🇴", "Jordan"],
    ["🇰🇿", "Kazakhstan"],
    ["🇰🇪", "Kenya"],
    ["🇰🇮", "Kiribati"],
    ["🇰🇼", "Kuwait"],
    ["🇰🇬", "Kyrgyzstan"],
    ["🇱🇦", "Laos"],
    ["🇱🇻", "Latvia"],
    ["🇱🇧", "Lebanon"],
    ["🇱🇸", "Lesotho"],
    ["🇱🇷", "Liberia"],
    ["🇱🇾", "Libya"],
    ["🇱🇮", "Liechtenstein"],
    ["🇱🇹", "Lithuania"],
    ["🇱🇺", "Luxembourg"],
    ["🇲🇬", "Madagascar"],
    ["🇲🇼", "Malawi"],
    ["🇲🇾", "Malaysia"],
    ["🇲🇻", "Maldives"],
    ["🇲🇱", "Mali"],
    ["🇲🇹", "Malta"],
    ["🇲🇭", "Marshall Islands"],
    ["🇲🇷", "Mauritania"],
    ["🇲🇺", "Mauritius"],
    ["🇲🇽", "Mexico"],
    ["🇫🇲", "Micronesia"],
    ["🇲🇩", "Moldova"],
    ["🇲🇨", "Monaco"],
    ["🇲🇳", "Mongolia"],
    ["🇲🇪", "Montenegro"],
    ["🇲🇦", "Morocco"],
    ["🇲🇿", "Mozambique"],
    ["🇲🇲", "Myanmar"],
    ["🇳🇦", "Namibia"],
    ["🇳🇷", "Nauru"],
    ["🇳🇵", "Nepal"],
    ["🇳🇱", "Netherlands"],
    ["🇳🇿", "New Zealand"],
    ["🇳🇮", "Nicaragua"],
    ["🇳🇪", "Niger"],
    ["🇳🇬", "Nigeria"],
    ["🇰🇵", "North Korea"],
    ["🇲🇰", "North Macedonia"],
    ["🇳🇴", "Norway"],
    ["🇴🇲", "Oman"],
    ["🇵🇰", "Pakistan"],
    ["🇵🇼", "Palau"],
    ["🇵🇸", "Palestine"],
    ["🇵🇦", "Panama"],
    ["🇵🇬", "Papua New Guinea"],
    ["🇵🇾", "Paraguay"],
    ["🇵🇪", "Peru"],
    ["🇵🇭", "Philippines"],
    ["🇵🇱", "Poland"],
    ["🇵🇹", "Portugal"],
    ["🇶🇦", "Qatar"],
    ["🇷🇴", "Romania"],
    ["🇷🇺", "Russia"],
    ["🇷🇼", "Rwanda"],
    ["🇰🇳", "Saint Kitts and Nevis"],
    ["🇱🇨", "Saint Lucia"],
    ["🇻🇨", "Saint Vincent and the Grenadines"],
    ["🇼🇸", "Samoa"],
    ["🇸🇲", "San Marino"],
    ["🇸🇹", "Sao Tome and Principe"],
    ["🇸🇦", "Saudi Arabia"],
    ["🇸🇳", "Senegal"],
    ["🇷🇸", "Serbia"],
    ["🇸🇨", "Seychelles"],
    ["🇸🇱", "Sierra Leone"],
    ["🇸🇬", "Singapore"],
    ["🇸🇰", "Slovakia"],
    ["🇸🇮", "Slovenia"],
    ["🇸🇧", "Solomon Islands"],
    ["🇸🇴", "Somalia"],
    ["🇿🇦", "South Africa"],
    ["🇰🇷", "South Korea"],
    ["🇸🇸", "South Sudan"],
    ["🇪🇸", "Spain"],
    ["🇱🇰", "Sri Lanka"],
    ["🇸🇩", "Sudan"],
    ["🇸🇷", "Suriname"],
    ["🇸🇪", "Sweden"],
    ["🇨🇭", "Switzerland"],
    ["🇸🇾", "Syria"],
    ["🇹🇯", "Tajikistan"],
    ["🇹🇿", "Tanzania"],
    ["🇹🇭", "Thailand"],
    ["🇹🇱", "Timor-Leste"],
    ["🇹🇬", "Togo"],
    ["🇹🇴", "Tonga"],
    ["🇹🇹", "Trinidad and Tobago"],
    ["🇹🇳", "Tunisia"],
    ["🇹🇷", "Turkey"],
    ["🇹🇲", "Turkmenistan"],
    ["🇹🇻", "Tuvalu"],
    ["🇺🇬", "Uganda"],
    ["🇺🇦", "Ukraine"],
    ["🇦🇪", "United Arab Emirates"],
    ["🇬🇧", "United Kingdom"],
    ["🇺🇸", "United States"],
    ["🇺🇾", "Uruguay"],
    ["🇺🇿", "Uzbekistan"],
    ["🇻🇺", "Vanuatu"],
    ["🇻🇦", "Vatican City"],
    ["🇻🇪", "Venezuela"],
    ["🇻🇳", "Vietnam"],
    ["🇾🇪", "Yemen"],
    ["🇿🇲", "Zambia"],
    ["🇿🇼", "Zimbabwe"]
  ];

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const dateInput = document.querySelector('input[name="date"]');
    if (dateInput) {
      const now = new Date();
      dateInput.min = now.toISOString().split('T')[0];
    }

    const modalOpeners = document.querySelectorAll('.open-quote-picker');
    const pickerModal = document.getElementById('destinationPicker');
    const visaModal = document.getElementById('visaPicker');
    const feedbackModal = document.getElementById('feedbackModal');

    function openModal(modal) {
      if (!modal) return;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (!document.querySelector('.modal.open')) document.body.classList.remove('modal-open');
    }
    document.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal(el.closest('.modal'));
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
    });

    // Destination picker
    const countryPicker = document.getElementById('countryPicker');
    const placePicker = document.getElementById('placePicker');
    const placesStep = document.getElementById('placesStep');
    const selectedCountryLabel = document.getElementById('selectedCountryLabel');
    const selectionTags = document.getElementById('selectionTags');
    const proceedEnquiry = document.getElementById('proceedEnquiry');
    const destinationInput = document.getElementById('destinationInput');
    const selectedPlacesInput = document.getElementById('selectedPlacesInput');
    let selectedPlaces = new Set();

    function escapeHtml(value) {
      return String(value).replace(/[&<>'"]/g, function (char) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char];
      });
    }

    function fallbackDescription(place, country) {
      const p = place.toLowerCase();
      if (/beach|island|islands|coast|reef|atoll|bay/.test(p)) {
        return 'A scenic destination known for beautiful coastal views, leisure and memorable holiday experiences.';
      }
      if (/falls|glacier|mount|mountain|jungle|forest|park|oasis|cave|valley|highlands/.test(p)) {
        return 'A popular natural attraction offering impressive landscapes and great sightseeing opportunities.';
      }
      if (/temple|palace|castle|fort|museum|pyramid|church|cathedral|old town|historic/.test(p)) {
        return 'A notable cultural and historic attraction where visitors can experience local heritage and architecture.';
      }
      return 'A popular attraction in ' + country + ', offering visitors a chance to experience the destination, culture and local highlights.';
    }

    function placeSeed(place, country) {
      return encodeURIComponent((country + '-' + place).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120));
    }

    function guaranteedPlaceImage(place, country) {
      // Picsum is used as an immediate, reliable visual fallback.  It does not
      // depend on Wikipedia filenames and therefore cannot get stuck on a
      // "Loading photo…" overlay.  Wikipedia thumbnails can replace it later.
      return 'https://picsum.photos/seed/' + placeSeed(place, country) + '/900/560';
    }

    function setPlacePhoto(img, place, country) {
      // The card always starts with a real image URL. There is deliberately no
      // permanent loading overlay. If a later Wikipedia image fails, the
      // already-visible fallback image remains in place.
      img.src = guaranteedPlaceImage(place, country);
      img.alt = place + ', ' + country;
      img.dataset.fallbackUrl = img.src;

      img.addEventListener('error', function () {
        if (img.dataset.finalFallback !== '1') {
          img.dataset.finalFallback = '1';
          // A second independent Picsum URL protects against a transient CDN
          // failure while keeping the card visually complete.
          img.src = 'https://picsum.photos/900/560?random=' + Math.abs(hashCode(place + '|' + country));
        }
      });
    }

    function hashCode(value) {
      let hash = 0;
      for (let i = 0; i < value.length; i++) hash = ((hash << 5) - hash) + value.charCodeAt(i) | 0;
      return hash;
    }

    async function fetchPlaceDetails(place, country, img, description) {
      const wikiTitle = place.replace(/\s+/g, '_');
      const controller = new AbortController();
      const timeout = window.setTimeout(function () { controller.abort(); }, 7000);
      try {
        const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(wikiTitle), {
          headers: { 'Accept': 'application/json' },
          signal: controller.signal
        });
        if (!response.ok) throw new Error('No Wikipedia result');
        const data = await response.json();
        if (data.extract) description.textContent = data.extract;
        // Only use a Wikipedia image when the API actually returns a thumbnail.
        // If that image fails, the visible Picsum image is restored.
        if (data.thumbnail && data.thumbnail.source) {
          const wikiImg = data.thumbnail.source;
          const testImg = new Image();
          testImg.onload = function () {
            img.dataset.finalFallback = '0';
            img.src = wikiImg;
          };
          testImg.onerror = function () {
            // Keep the already-visible fallback photo.
          };
          testImg.src = wikiImg;
        }
      } catch (error) {
        description.textContent = fallbackDescription(place, country);
      } finally {
        window.clearTimeout(timeout);
      }
    }

    Object.keys(destinations).forEach(function (country) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'country-option';
      btn.innerHTML = '<strong>' + country + '</strong><small>' + destinations[country].length + ' popular places</small>';
      btn.addEventListener('click', function () {
        document.querySelectorAll('.country-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        placesStep.hidden = false;
        selectedCountryLabel.textContent = '— ' + country;
        placePicker.innerHTML = '';
        destinations[country].forEach(function (place) {
          const key = country + ' — ' + place;
          const placeBtn = document.createElement('button');
          placeBtn.type = 'button';
          placeBtn.className = 'place-option' + (selectedPlaces.has(key) ? ' selected' : '');
          placeBtn.setAttribute('aria-label', 'Select ' + place + ', ' + country);
          placeBtn.innerHTML = `
            <div class="place-photo-wrap">
              <img class="place-photo" alt="${escapeHtml(place)}" loading="eager" decoding="async">
            </div>
            <div class="place-info">
              <strong>${escapeHtml(place)}</strong>
              <small>${escapeHtml(country)}</small>
              <p class="place-description">Finding a short description…</p>
            </div>`;

          const img = placeBtn.querySelector('.place-photo');
          const description = placeBtn.querySelector('.place-description');

          setPlacePhoto(img, place, country);
          fetchPlaceDetails(place, country, img, description);

          placeBtn.addEventListener('click', function () {
            if (selectedPlaces.has(key)) {
              selectedPlaces.delete(key);
              placeBtn.classList.remove('selected');
            } else {
              selectedPlaces.add(key);
              placeBtn.classList.add('selected');
            }
            renderSelection();
          });
          placePicker.appendChild(placeBtn);
        });
      });
      countryPicker.appendChild(btn);
    });

    function renderSelection() {
      selectionTags.innerHTML = '';
      if (!selectedPlaces.size) {
        selectionTags.innerHTML = '<span class="empty-selection">No places selected yet.</span>';
        proceedEnquiry.disabled = true;
      } else {
        selectedPlaces.forEach(function (item) {
          const tag = document.createElement('span');
          tag.className = 'selection-tag';
          tag.innerHTML = item + ' <button type="button" aria-label="Remove">×</button>';
          tag.querySelector('button').addEventListener('click', function () {
            selectedPlaces.delete(item);
            renderSelection();
            document.querySelectorAll('.place-option').forEach(function (b) {
              if (b.textContent.startsWith(item.split(' — ')[1])) b.classList.remove('selected');
            });
          });
          selectionTags.appendChild(tag);
        });
        proceedEnquiry.disabled = false;
      }
    }

    modalOpeners.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(pickerModal);
      });
    });

    // More Countries card opens the full worldwide destination selector.
    const moreCountriesCard = document.querySelector('[data-more-countries="true"]');
    if (moreCountriesCard) {
      moreCountriesCard.addEventListener('click', function () {
        openModal(pickerModal);
      });
    }

    // Every destination card opens the same guided selector.
    document.querySelectorAll('.destination-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('button')) e.preventDefault();
        const country = card.dataset.destination;
        openModal(pickerModal);
        setTimeout(function () {
          const buttons = Array.from(countryPicker.querySelectorAll('.country-option'));
          const match = buttons.find(b => b.querySelector('strong').textContent === country);
          if (match) match.click();
        }, 0);
      });
    });

    proceedEnquiry.addEventListener('click', function () {
      const items = Array.from(selectedPlaces);
      if (!items.length) return;
      const grouped = items.join('; ');
      destinationInput.value = grouped;
      selectedPlacesInput.value = grouped;
      const message = document.querySelector('textarea[name="message"]');
      if (message && !message.value.trim()) {
        message.value = 'I would like an itinerary/quote for: ' + grouped;
      }
      closeModal(pickerModal);
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(function () { if (destinationInput) destinationInput.focus(); }, 500);
    });

    // Other visa countries
    const otherVisaGrid = document.getElementById('otherVisaGrid');
    const visaEnquire = document.getElementById('visaEnquire');
    let selectedVisa = '';
    visaCountries.forEach(function (item) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'other-visa-option';
      btn.innerHTML = '<span>' + item[0] + '</span> <strong>' + item[1] + ' Visa</strong><small>Visa assistance</small>';
      btn.addEventListener('click', function () {
        document.querySelectorAll('.other-visa-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedVisa = item[1];
        visaEnquire.disabled = false;
      });
      otherVisaGrid.appendChild(btn);
    });
    const openOtherVisa = document.getElementById('openOtherVisa');
    if (openOtherVisa) openOtherVisa.addEventListener('click', () => openModal(visaModal));
    visaEnquire.addEventListener('click', function () {
      if (!selectedVisa) return;
      const destination = document.getElementById('destinationInput');
      const service = document.querySelector('select[name="service"]');
      if (destination) destination.value = selectedVisa;
      if (selectedPlacesInput) selectedPlacesInput.value = selectedVisa + ' Visa Assistance';
      if (service) service.value = 'Visa Assistance';
      closeModal(visaModal);
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => destination && destination.focus(), 500);
    });

    // Feedback modal + Web3Forms
    const openFeedback = document.getElementById('openFeedback');
    if (openFeedback) openFeedback.addEventListener('click', () => openModal(feedbackModal));

    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (feedbackForm && feedbackMessage) {
      feedbackForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!feedbackForm.checkValidity()) {
          feedbackForm.reportValidity();
          return;
        }
        const button = feedbackForm.querySelector('.form-submit');
        const original = button.textContent;
        feedbackMessage.className = 'form-message';
        feedbackMessage.textContent = 'Sending your feedback...';
        button.disabled = true;
        button.textContent = 'Sending...';
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(feedbackForm)
          });
          const result = await response.json();
          if (!response.ok || !result.success) throw new Error(result.message || 'Unable to send feedback.');
          feedbackMessage.className = 'form-message success';
          feedbackMessage.textContent = 'Thank you! Your feedback has been sent successfully.';
          feedbackForm.reset();
        } catch (error) {
          console.error('Gunina Holidays feedback error:', error);
          feedbackMessage.className = 'form-message error';
          feedbackMessage.textContent = 'Sorry, your feedback could not be sent. Please try again or contact us on WhatsApp.';
        } finally {
          button.disabled = false;
          button.textContent = original;
        }
      });
    }

    // Quote form submission via Web3Forms.
    const form = document.getElementById('quoteForm');
    const messageBox = document.getElementById('formMessage');
    if (form && messageBox) {
      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const submitButton = form.querySelector('.form-submit');
        const originalText = submitButton ? submitButton.textContent : '';
        messageBox.className = 'form-message';
        messageBox.textContent = 'Sending your enquiry...';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
        }
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(form)
          });
          const result = await response.json();
          if (response.ok && result.success) {
            messageBox.className = 'form-message success';
            messageBox.textContent = 'Thank you! Your enquiry has been sent successfully. Gunina Holidays will contact you shortly.';
            form.reset();
            if (document.getElementById('selectedPlacesInput')) document.getElementById('selectedPlacesInput').value = '';
            if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
            const adults = form.querySelector('input[name="adults"]');
            const children = form.querySelector('input[name="children"]');
            const infants = form.querySelector('input[name="infants"]');
            if (adults) adults.value = '1';
            if (children) children.value = '0';
            if (infants) infants.value = '0';
          } else {
            throw new Error(result.message || 'Unable to send enquiry.');
          }
        } catch (error) {
          console.error('Gunina Holidays enquiry error:', error);
          messageBox.className = 'form-message error';
          messageBox.textContent = 'Sorry, we could not send your enquiry right now. Please call 9222336122 or contact us on WhatsApp.';
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }
        }
      });
    }
  });
})();
