import bcryptjs from 'bcryptjs';


const userData = [
    {
        name: "Alexandro",
        email: "acookney0@sfgate.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Rudolph",
        email: "rpickover1@ted.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Wilburt",
        email: "wlere2@dion.ne.jp",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Josias",
        email: "jcoraini3@desdev.cn",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Cristobal",
        email: "catkinson4@latimes.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Bronnie",
        email: "bratledge5@cloudflare.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Ches",
        email: "ccottey6@blinklist.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Hobard",
        email: "htrewartha7@dell.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Ailyn",
        email: "agiacubbo8@unesco.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Sheffy",
        email: "sbernhardi9@kickstarter.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Peggy",
        email: "pblunsoma@networksolutions.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Raynor",
        email: "rpelchatb@technorati.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Dina",
        email: "duccelic@jimdo.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Amelie",
        email: "athrelfalld@yolasite.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Jemimah",
        email: "jfeldhorne@smugmug.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Devi",
        email: "dcorsorf@wiley.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Beatrix",
        email: "bropsg@blogger.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Eadith",
        email: "estintonh@constantcontact.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Shell",
        email: "smccarlichi@latimes.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lydon",
        email: "lstanlikej@cornell.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Rickie",
        email: "rtimnyk@gov.uk",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Abdul",
        email: "adiclaudiol@homestead.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Wilmer",
        email: "wtatchellm@yellowpages.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Cortney",
        email: "cbreezen@phpbb.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Mabel",
        email: "mvasentsovo@archive.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Roddie",
        email: "rfallowp@alexa.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Cate",
        email: "chinzerq@unicef.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Murvyn",
        email: "mhurburtr@wiley.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Sidney",
        email: "skyberts@yandex.ru",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Ester",
        email: "enewlandt@usnews.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lorne",
        email: "loakwellu@mit.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Bennett",
        email: "bfaichneyv@webeden.co.uk",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Dorella",
        email: "dwitherdonw@pbs.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Cookie",
        email: "ctremellierx@e-recht24.de",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Gladi",
        email: "ggannony@bizjournals.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Brnaba",
        email: "bhazeupz@wikimedia.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Corabel",
        email: "cdimelow10@oaic.gov.au",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Spenser",
        email: "speirpoint11@instagram.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lydon",
        email: "lscown12@cdc.gov",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lezley",
        email: "lmcgrale13@mayoclinic.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Augy",
        email: "abrech14@github.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Hyatt",
        email: "hwent15@theglobeandmail.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Greggory",
        email: "gcornish16@wikispaces.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Winfield",
        email: "wbocken17@craigslist.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Tito",
        email: "tbattelle18@arizona.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Zarah",
        email: "zgilphillan19@guardian.co.uk",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Aurelie",
        email: "asherbrooke1a@livejournal.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Aridatha",
        email: "akenchington1b@last.fm",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Caesar",
        email: "cswithenby1c@webs.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Melvin",
        email: "mgambrell1d@tiny.cc",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Rochella",
        email: "rdeeney1e@facebook.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Rudd",
        email: "rcolicot1f@pen.io",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Findley",
        email: "fkigelman1g@hostgator.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Buckie",
        email: "bwotton1h@addthis.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Neale",
        email: "nbusain1i@yahoo.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Joya",
        email: "jlightewood1j@cornell.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Essie",
        email: "ejago1k@geocities.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Sheela",
        email: "shendrick1l@java.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Sal",
        email: "scovert1m@cdc.gov",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Tam",
        email: "tsollner1n@wp.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Kippie",
        email: "kmcpeice1o@ucoz.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Myrah",
        email: "mpozer1p@bloomberg.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Willi",
        email: "wmccurdy1q@histats.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lemar",
        email: "lonyon1r@livejournal.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Rosaleen",
        email: "rorrocks1s@bing.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Ronda",
        email: "rjirsa1t@yale.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Mordecai",
        email: "mpasso1u@godaddy.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Faunie",
        email: "fcutchie1v@goo.ne.jp",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Inglis",
        email: "iingle1w@japanpost.jp",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Barde",
        email: "bbartholomaus1x@drupal.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Hiram",
        email: "hmattes1y@jalbum.net",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Anselma",
        email: "adurnford1z@cpanel.net",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Donny",
        email: "dbyatt20@tripod.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Netty",
        email: "nwhitford21@npr.org",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Latisha",
        email: "lpahler22@tuttocitta.it",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Sherwynd",
        email: "spyer23@ameblo.jp",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Aliza",
        email: "agosland24@is.gd",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Tove",
        email: "tveare25@japanpost.jp",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Thekla",
        email: "tpash26@reuters.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Eberto",
        email: "ewederell27@youku.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Janaye",
        email: "jbraidford28@walmart.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Gilberta",
        email: "gphilips29@army.mil",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Bren",
        email: "bdilkes2a@accuweather.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Lyon",
        email: "lgarett2b@biblegateway.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Mattias",
        email: "mpoznanski2c@liveinternet.ru",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Cybil",
        email: "cnesby2d@google.ca",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Loise",
        email: "lhexter2e@angelfire.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Raynell",
        email: "rmcfadzean2f@salon.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Shepperd",
        email: "sgroger2g@surveymonkey.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Hedwiga",
        email: "hsouley2h@yale.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Eugine",
        email: "erockliffe2i@livejournal.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Gertie",
        email: "ghouchin2j@msu.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Frants",
        email: "fdods2k@elegantthemes.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Jamal",
        email: "jfiler2l@1und1.de",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Justen",
        email: "jmeffin2m@de.vu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Jayme",
        email: "jdabrowski2n@ow.ly",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Yorke",
        email: "ymegahey2o@cornell.edu",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Allyce",
        email: "aelsom2p@rediff.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Dukie",
        email: "dchazier2q@bloglines.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }, {
        name: "Philomena",
        email: "pskain2r@phpbb.com",
        password: bcryptjs.hashSync('password', bcryptjs.genSaltSync(10)),
    }
];

export default userData;