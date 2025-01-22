// Variables globales
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let timer = 15;
let timerInterval;
let score = 0;
let totalQuestions = 0;

// Questions et niveaux
const levels = [
  {
    level: 1,
    questions: [
        { question: "Comment dit-on 'Bonjour' en Lingala ?", options: ["tata", "Bolingo", "Mbote"], answer: 2 },
        { question: "que signifie 'mbote'?", options: ["maison", "bonjour", "partir"], answer: 1 },
        { question: "Quelle est la traduction de 'Oui' en Lingala ?", options: ["boye", "Te", "Ndeko"], answer: 0 },
        { question: "Quelle est la traduction de 'Non' en Lingala ?", options: ["boye", "te", "Mokili"], answer: 1 },
        { question: "Comment demander 'Comment vas-tu ?' en Lingala ?", options: ["boni?", "Mbote na yo ?", "Matondo mingi ?"], answer: 0 },
        { question: "Quelle est la réponse à 'Comment vas-tu ?' en Lingala ?", options: ["te", "na zali malamu", "Te"], answer: 1 },
        { question: "Quelle est la traduction de 'Merci' en Lingala ?", options: ["Matondo", "Mbote", "Bolingo"], answer: 0 },
        { question: "Comment répondre à 'boni' en Lingala ?", options: ["Sango te", "Nazali malamu", "Ozali na yo"], answer: 1 },
        { question: "Comment dit-on 'Bonne journée' en Lingala ?", options: ["Mokolo malamu", "Mbote na yo", "Liboso malamu"], answer: 0 },
        { question: "Comment dire 'Bienvenue' en Lingala ?", options: ["na zali bien", "Liboso malamu", "boyei malamu"], answer: 2 },
   { question: "Comment dire 'maison' en lingala", options: ["mesa", "Liboso malamu", "ndako ou ndaku"], answer: 2 }

    ]
}
,{
    level: 2,
    questions: [
        { question: "Comment dit-on 'Tête' en Lingala ?", options: ["Libanga", "Mukongo", "Mutu"], answer: 2 },
        { question: "Quelle est la traduction de 'Main' en Lingala ?", options: ["Makolo", "Loboko ou liboko", "Miso ou misu"], answer: 1 },
        { question: "Comment dit-on 'lèvres en Lingala ?", options: ["Libumu", "Nkingo", "mbebo"], answer: 2 },
        { question: "Quelle est la traduction de 'Yeux' en Lingala ?", options: ["Litoyi", "Miso ou misu", "Motó"], answer: 1 },
        { question: "Comment dire 'Bouche' en Lingala ?", options: ["Matoyi", "Monoko ou munoko", "Loboko"], answer: 1 },
        { question: "Quelle est la traduction de 'Oreilles' en Lingala ?", options: ["Matoyi", "Ndenge", "Maboko"], answer: 0 },
        { question: "Comment dit-on 'Dos' en Lingala ?", options: ["Mukongo", "Libanga", "Libumu"], answer: 0 },
        { question: "Quelle est la traduction de 'Nez' en Lingala ?", options: ["Makolo", "Miso", "Zolo"], answer: 2 },
        { question: "Comment dire 'Ventre' en Lingala ?", options: ["Motó", "Libumu", "Mukongo"], answer: 1 },
        { question: "Quelle est la traduction de 'Cou' en Lingala ?", options: ["Motó", "Zolo", "Nkingo"], answer: 2 },
        { question: "Comment dit-on 'Épaules' en Lingala ?", options: ["Mapeka", "Makolo", "Monoko"], answer: 0 },
        { question: "Quelle est la traduction de 'Cœur' en Lingala ?", options: ["Matoyi", "Motema", "Mukongo"], answer: 1 },
        { question: "Comment dire 'pied'ou 'Jambes' en Lingala ?", options: ["Miso", "Loboko", "Makolo ou likolo"], answer: 2 },
        { question: "Quelle est la traduction de 'Doigts' en Lingala ?", options: ["Litoyi", "Zolo", "Misapi"], answer: 2 },
        { question: "Comment dit-on 'Cheveux' en Lingala ?", options: ["Libumu", "Suki", "Maboko ou liboko"], answer: 1 },
 { question: "Comment dit-on 'les dents' en Lingala ?", options: ["Libumu", "minu", "Maboko"], answer: 1 }

    ]
}
,
    {
    level: 3,
    questions: [
        { question: "Quelle est la traduction de 'Cinq' en Lingala ?", options: ["Minei", "Mitano", "Mibale"], answer: 1 },
        { question: "Comment dit-on 'Trois' en Lingala ?", options: ["Moko", "Mitano", "Misatu ou misato"], answer: 2 },
        { question: "Quelle est la traduction de 'Dix' en Lingala ?", options: ["Nsambo", "Zomi", "Motoba"], answer: 1 },
        { question: "Comment dit-on 'Un' en Lingala ?", options: ["Moko", "Minei", "Libwa"], answer: 0 },
        { question: "Quelle est la traduction de 'Sept' en Lingala ?", options: ["Mwambe", "Nsambo", "Misato"], answer: 1 },
        { question: "Comment dire 'Six' en Lingala ?", options: ["libwa", "Zomi", "motoba"], answer: 2 },
        { question: "Comment dit-on 'Huit' en Lingala ?", options: ["Mwambe", "Mitano", "Nsambo"], answer: 0 },
        { question: "Quelle est la traduction de 'Deux' en Lingala ?", options: ["Moko", "Mibale", "Moko"], answer: 1 },
        { question: "Comment dit-on 'Neuf' en Lingala ?", options: ["Libwa", "Motoba", "Nsambo"], answer: 0 },
        { question: "Comment dit-on 'Quatre' en Lingala ?", options: ["Misatu", "Minei", "Zomi"], answer: 1 },
  { question: "que signifie 'moko' en français ?", options: ["trois", "un", "dix"], answer: 1 }

    ]
}
,{
    level: 4,
    questions: [
        { question: "Comment dit-on 'Demain' en Lingala ?", options: ["Lobi", "Mokolo", "Pokwa"], answer: 0 },
        { question: "Quelle est la traduction de 'Matin' en Lingala ?", options: ["Pokwa", "Butu", "Ntongo"], answer: 2 },
        { question: "Comment dit-on 'la pluie' en Lingala ?", options: ["mbula", "Motema", "Mokolo"], answer: 0 },
        { question: "Quelle est la traduction de 'Nuit' en Lingala ?", options: ["Mokolo", "Ngonga", "Butu"], answer: 2 },
        { question: "Comment dire 'Soleil' en Lingala ?", options: ["Mokili", "Moi", "Lelo"], answer: 1 },
        { question: "Quelle est la traduction de 'Lune' en Lingala ?", options: ["Mbula", "Mokolo", "Sanza"], answer: 2 },
        { question: "Comment dit-on 'Jour' en Lingala ?", options: ["Mokolo", "Butu", "Zomi"], answer: 0 },
        { question: "Quelle est la traduction de 'Soir' en Lingala ?", options: ["Pokwa", "Ntongo", "Sanza"], answer: 0 },
        { question: "Comment dit-on 'Aujourd'hui' en Lingala ?", options: ["Mokili", "Lelo", "Lobi"], answer: 1 },
        { question: "Quelle est la traduction de 'Mois' en Lingala ?", options: ["Mokolo", "Sanza", "Mbula"], answer: 1 },
                { question: "Quelle est la traduction de 'hier' en Lingala ?", options: ["Mokolo", "lobi", "Mbula"], answer: 1 }

    ]
}
,{
    level: 5,
    questions: [
        { question: "Comment dit-on 'Père' en Lingala ?", options: ["Mwana", "Mama", "Tata"], answer: 2 },
        { question: "Quelle est la traduction de 'Mère' en Lingala ?", options: ["Mama", "Tata", "Mobali"], answer: 0 },
        { question: "Comment dire 'Garçon' en Lingala ?", options: ["Mwana mwasi", "Mama", "Mwana mobali"], answer: 2 },
        { question: "Quelle est la traduction de 'Fille' en Lingala ?", options: ["Tata", "Mwana mwasi", "Mama"], answer: 1 },
        { question: "Comment dit-on 'Grand-mère' en Lingala ?", options: ["Nkoko ya mwasi", "Nkoko ya mobali", "Mobali"], answer: 0 },
        { question: "Quelle est la traduction de 'Grand-père' en Lingala ?", options: ["Nkoko ya mobali", "Mama", "Mwana"], answer: 0 },
        { question: "Comment dire 'Oncle' en Lingala ?", options: ["Mobali", "Noko", "Nkoko"], answer: 1 },
        { question: "Quelle est la traduction de 'Tante' en Lingala ?", options: ["Mama", "mama leki", "Mwana"], answer: 1 },
        { question: "Comment dit-on 'Homme' en Lingala ?", options: ["Mwana mwasi", "Nkoko", "Mobali"], answer: 2 },
        { question: "Quelle est la traduction de 'Femme' en Lingala ?", options: ["Mwasi", "Nkoko ya mwasi", "Mama"], answer: 0 },
        { question: "Comment dire 'Frère' en Lingala ?", options: ["Nkoko", "Ndeko ya mobali", "Tata"], answer: 1 },
        { question: "Quelle est la traduction de 'Sœur' en Lingala ?", options: ["Noko", "Ndeko ya mwasi", "Mwana mwasi"], answer: 1 },
        { question: "Comment dit-on 'parent' en Lingala ?", options: ["Mwana ya tata", "Mama", "Moboti"], answer: 2 },
        { question: "Quelle est la traduction de 'famille' en Lingala ?", options: ["libota", "Mama", "Nkoko ya mwasi"], answer: 0 },
        { question: "Comment dire 'enfant' en Lingala ?", options: ["Moboti", "Tata", "mwana"], answer: 2 }
    ]
}
,{
    level: 6,
    questions: [
        { question: "Comment dit-on 'Je' en Lingala ?", options: ["Yo", "Na", "o"], answer: 1 },
        { question: "Quelle est la traduction de 'Tu' en Lingala ?", options: ["Bino", "Yo/o", "Bango"], answer: 1 },
        { question: "Comment dire 'Il/Elle' en Lingala ?", options: ["Biso", "Yo", "ye/a"], answer: 2 },
        { question: "Quelle est la traduction de 'Nous' en Lingala ?", options: ["Biso", "Bango", "Bino"], answer: 0 },
        { question: "Comment dit-on 'Vous' en Lingala ?", options: ["Ngai", "Bino", "Yo"], answer: 1 },
        { question: "Quelle est la traduction de 'Eux/Elles' en Lingala ?", options: ["Bango", "Biso", "Nayé"], answer: 0 },
        { question: "Comment dire 'Lui' en Lingala ?", options: ["Yo", "ye", "Ngai"], answer: 1 },
        { question: "Quelle est la traduction de 'Moi' en Lingala ?", options: ["Bino", "Ngai", "Biso"], answer: 1 },
        { question: "Comment dit-on 'Toi' en Lingala ?", options: ["Yo", "Nayé", "Bango"], answer: 0 },
        { question: "Quelle est la traduction de 'Nous-mêmes' en Lingala ?", options: ["Bango", "Biso moko", "Ngai"], answer: 1 }
    ]
},
{
    level: 7,
    questions: [
        { question: "Comment dit-on 'Mon' en Lingala ?", options: ["Na yo", "nangai", "Na biso"], answer: 1 },
        { question: "Quelle est la traduction de 'Ton' en Lingala ?", options: ["Ya ngai", "nayo", "Ya bango"], answer: 1 },
        { question: "Comment dire 'Son/Sa (à lui)' en Lingala ?", options: ["Ya bango", "na ye", "Ya bino"], answer: 1 },
        { question: "Quelle est la traduction de 'Notre' en Lingala ?", options: ["na biso", "Ya ngai", "Ya yo"], answer: 0 },
        { question: "Comment dit-on 'Votre' en Lingala ?", options: ["Ya yo", "na bino", "Ya bango"], answer: 1 },
        { question: "Quelle est la traduction de 'Leur' en Lingala ?", options: ["na bango", "Ya ye", "Ya biso"], answer: 0 },
        { question: "Comment dire 'À moi' en Lingala ?", options: ["Ya ngai", "Ya yo", "Ya bango"], answer: 0 },
        { question: "Quelle est la traduction de 'À toi' en Lingala ?", options: ["Ya biso", "Ya ngai", "Ya yo"], answer: 2 },
        { question: "Comment dit-on 'À lui/à elle' en Lingala ?", options: ["Ya ye", "Ya bango", "Ya yo"], answer: 0 },
        { question: "Quelle est la traduction de 'À eux/à elles' en Lingala ?", options: ["Ya yo", "Ya bango", "Ya biso"], answer: 1 }
    ]
},
{
    level: 8,
    questions: [
        {
            question: "Quelle est la traduction de 'et' en Lingala ?",
            options: ["Pe", "Lokola", "Nzokande"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'ou' en Lingala ?",
            options: ["soki", "to", "Ndenge"],
            answer: 1
        },
        {
            question: "Comment traduit-on 'mais' en Lingala ?",
            options: ["Kasi", "Na", "Tango"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'parce que' en Lingala ?",
            options: ["Pona nini", "pona", "Na ndenge"],
            answer: 1
        },
        {
            question: "Comment dit-on 'comme' en Lingala ?",
            options: ["Mpe", "Lokola/neti", "Nzokande"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'qui' en Lingala ?",
            options: ["nani", "Yango wana", "Pe"],
            answer: 0
        },
        {
            question: "Comment traduit-on 'si' en Lingala ?",
            options: ["Na", "Soki", "Tala"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'pourquoi' en Lingala ?",
            options: ["To...to", "pona nini", "Te...te"],
            answer: 1
        },
        {
            question: "Comment dit-on 'où' en Lingala ?",
            options: ["wapi", "Kasi", "Na ndenge"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'maintenant' en Lingala ?",
            options: ["Lokola", "sikoyo", "Yango wana"],
            answer: 1
        }
    ]
},
{
    level: 9,
    questions: [
        {
            question: "Comment dit-on 'viande' en Lingala ?",
            options: ["Madesu", "Nguba", "musuni"],
            answer: 2
        },
        {
            question: "Quelle est la traduction de 'lait' en Lingala ?",
            options: ["Miliki", "Mbisi", "Mbongo"],
            answer: 0
        },
        {
            question: "Comment traduit-on 'sucre' en Lingala ?",
            options: ["Sukali", "Soso", "Mandefu"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'sel' en Lingala ?",
            options: ["Limboka", "Mungwa", "Riz"],
            answer: 1
        },
        {
            question: "Comment dit-on 'huile' en Lingala ?",
            options: ["Esandale", "Nguba", "Mafuta"],
            answer: 2
        },
        {
            question: "Quelle est la traduction de 'arachides' en Lingala ?",
            options: ["Nguba", "Mbila", "Matiti"],
            answer: 0
        },
        {
            question: "Comment traduit-on 'poisson' en Lingala ?",
            options: ["Mbisi", "Makemba", "Lipwalo"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'manioc' en Lingala ?",
            options: ["songo", "Ntaba", "Lipwa"],
            answer: 0
        },
        {
            question: "Comment dit-on 'riz' en Lingala ?",
            options: ["Liembe", "loso", "Mbongo"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'haricots' en Lingala ?",
            options: ["Matiti", "Madesu", "Mandefu"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'maïs' en Lingala ?",
            options: ["Limboka", "Masangu", "Mbuma"],
            answer: 1
        },
        {
            question: "Comment traduit-on 'bananes plantains' en Lingala ?",
            options: ["Mbika", "Makemba", "Mololo"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'poulet' en Lingala ?",
            options: ["Soso", "Nguba", "Liboke"],
            answer: 0
        },
        {
            question: "Comment dit-on 'légumes' en Lingala ?",
            options: ["Matiti/ndunda", "Biteku", "Mbisi"],
            answer: 0
        },
    ]
}
,
{
    level: 10,
    questions: [
        {
            question: "Comment dit-on 'Chien' en Lingala ?",
            options: ["Mbwa", "Nkoko", "Ndeke"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'Chat' en Lingala ?",
            options: ["Kati", "Nyau", "Mbwa"],
            answer: 1
        },
        {
            question: "Comment traduit-on 'Mouton' en Lingala ?",
            options: ["soso", "Nkosi", "meme"],
            answer: 2
        },
        {
            question: "Quelle est la traduction de 'Chèvre' en Lingala ?",
            options: ["Buku", "Ntaba", "Mbwa"],
            answer: 1
        },
        {
            question: "Comment dit-on 'Poule' en Lingala ?",
            options: ["ndeke", "Mpata", "soso"],
            answer: 2
        },
        {
            question: "Quelle est la traduction de 'Coq' en Lingala ?",
            options: ["Nkoko", "soso ya mobali", "Ndeke"],
            answer: 1
        },
        {
            question: "Comment traduit-on 'Canard' en Lingala ?",
            options: ["Libata", "Nkoko", "Ndeke"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'Cheval' en Lingala ?",
            options: ["mpunda", "Nkosi", "Mpata"],
            answer: 0
        },
        {
            question: "Comment dit-on 'Porc' en Lingala ?",
            options: ["taba", "ngulu", "Farasi"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'souris' en Lingala ?",
            options: ["Zibola", "Nkosi", "mpuku"],
            answer: 2
        },
        {
            question: "Comment dit-on 'mpuku' en francais?",
            options: ["poule", "rat/souris", "chèvre"],
            answer: 1
        },
        {
            question: "Quelle est la traduction de 'Lézard' en Lingala ?",
            options: ["muselekete", "Nkoko", "Libata"],
            answer: 0
        },
        {
            question: "Comment traduit-on 'Serpent' en Lingala ?",
            options: ["Nyoka", "Mpata", "Farasi"],
            answer: 0
        },
        {
            question: "Quelle est la traduction de 'Oiseau' en Lingala ?",
            options: ["Ndeke", "Nkoko", "Ngulu"],
            answer: 0
        }
    ]
}, 
{
    level: 11,
    questions: [
        { question: "Comment dire 'Manger' en Lingala ?", options: ["Kosala", "Kokende", "Kolya"], answer: 2 },
        { question: "Comment dire 'Boire' en Lingala ?", options: ["Kolala", "Komela", "Kosala"], answer: 1 },
        { question: "Comment dire 'Marcher' en Lingala ?", options: ["Komema", "Kotambola", "Kokota"], answer: 1 },
        { question: "Comment dire 'Courir' en Lingala ?", options: ["Kokima", "Kobanda", "Koluka"], answer: 0 },
        { question: "Comment dire 'Dormir' en Lingala ?", options: ["Kokenda", "Kolala", "Koluka"], answer: 1 },
        { question: "Comment dire 'Écrire' en Lingala ?", options: ["Kosala", "Kokoma", "Kolya"], answer: 1 },
        { question: "Comment dire 'Lire' en Lingala ?", options: ["Kotanga", "Kosomba", "Kotalaka"], answer: 0 },
        { question: "Comment dire 'Écouter' en Lingala ?", options: ["Koyoka", "Kobongisa", "Koseka"], answer: 0 },
        { question: "Comment dire 'Regarder' en Lingala ?", options: ["Kotalela", "Kotala", "Kosala"], answer: 1 },
        { question: "Comment dire 'Parler' en Lingala ?", options: ["Kokanga", "Koloba", "Kosala"], answer: 1 },
        { question: "Comment dire 'Aimer' en Lingala ?", options: ["Kolinga", "Kokoma", "Kokoka"], answer: 0 },
        { question: "Comment dire 'Détester' en Lingala ?", options: ["Koloba", "Kosala", "Ko ina"], answer: 2 }
    ]
},
{
    level: 12,
    questions: [
        { question: "Comment dire 'Comment ça va ?' en Lingala ?", options: ["Likambo nini ?", "boni ?", "Okomi wapi ?"], answer: 1 },
        { question: "Comment répondre 'Je vais bien' en Lingala ?", options: ["Nakeyi", "Nazali malamu", "Likambo te"], answer: 1 },
        { question: "Comment dire 'Merci beaucoup' en Lingala ?", options: ["Tosa ngai", "Matondo mingi", "Limbisa ngai"], answer: 1 },
      { question: "Comment dire 'Excusez-moi' en Lingala ?", options: ["Sokisi yango", "Napesi yo", "Limbisa ngai"], answer: 2 },
        { question: "Comment dire 'Aurevoir' en Lingala ?", options: ["Botondi", "Tokomonana", "Mawa mingi"], answer: 1 },
        { question: "Comment dire 'Je t’aime' en Lingala ?", options: ["Naleli yo", "Nalingi yo", "Nazali yo"], answer: 1 },
        { question: "Comment demander 'Combien ça coûte ?' en Lingala ?", options: ["Eza ya nani ?", "Eza boni ?", "Nani azali ?"], answer: 1 },
        { question: "Comment dire 'Oui, c’est correct' en Lingala ?", options: ["boye nde bongo, ezali malamu", "Te, ezali mabe", "Nalingi yango"], answer: 0 },
        { question: "Comment dire 'Je ne sais pas' en Lingala ?", options: ["Nayebi te", "Napesi te", "Nazangi yango"], answer: 0 },
        { question: "Comment demander 'Où est la toilette ?' en Lingala ?", options: ["Wapi W.C ?", "Toleka wapi ?", "Nayaki wapi ?"], answer: 0 }
    ]
},
{
    level: 13,
    questions: [
        { question: "Comment dire 'Table' en Lingala ?", options: ["Mbeto", "Etabe", "Mesa"], answer: 2 },
        { question: "Comment dire 'Chaise' en Lingala ?", options: ["Kiti", "Elenge", "Biloko"], answer: 0 },
        { question: "Comment dire 'Lit' en Lingala ?", options: ["Mbeto", "Ekoki", "Elamba"], answer: 0 },
        { question: "Comment dire 'couteau' en Lingala ?", options: ["Ekuke", "Mbeli", "Etabe"], answer: 1 },
        { question: "Comment dire 'Fenêtre' en Lingala ?", options: ["Mwinda", "Fenetre", "Ezipeli"], answer: 1 },
        { question: "Comment dire 'Lampe' en Lingala ?", options: ["Mwinda", "Litoyi", "Kiti"], answer: 0 },
        { question: "Comment dire 'Miroir' en Lingala ?", options: ["kitalatala", "Eshula", "Mosolo"], answer: 0 },
        { question: "Comment dire 'Assiette' en Lingala ?", options: ["Lipapu", "Esalaka", "Sani"], answer: 2 },
        { question: "Comment dire 'Casserole' en Lingala ?", options: ["Liboke", "Maboke", "nzungu"], answer: 2 },
        { question: "Comment dire 'babouche' en Lingala ?", options: ["Moninga", "mapapa", "Likonzi"], answer: 1 }
    ]
},
{
    level: 14,
    questions: [
        { question: "Que signifie 'A lela nga' ?", options: ["Il/elle pleure pour moi", "Il/elle m'aime", "Il/elle me déteste"], answer: 1 },
        { question: "Que signifie 'A kufela nga' ?", options: ["Il/elle est fou/folle de moi", "Il/elle veut m'aider", "Il/elle m'ignore"], answer: 0 },
        { question: "Que signifie 'Mutu makasi' ?", options: ["Têtu", "Intelligent", "Courageux"], answer: 0 },
      { question: "Que signifie 'Motema mabe' ?", options: ["égoïste", "Généreux", "méchant"], answer: 2 },
       { question: "Que signifie 'Motema malamu' ?", options: ["courageux", "gentil", "Jaloux"], answer: 1 },
        { question: "Que signifie 'Ko beta mayi' ?", options: ["faire la cuisine", "Pleurer", "faire l'amour"], answer: 2 },
        { question: "Que signifie 'Nazo bima na ye' ?", options: ["Je sors avec lui/elle", "Je me dispute avec lui/elle", "Je l'aide"], answer: 0 },
      { question: "Que signifie 'Na sepeli na yo' ?", options: ["Je partage avec toi", "tu me plait", "Je chante pour toi"], answer: 1 },
        { question: "Que signifie 'Oza motema monene' ?", options: ["Tu es malade", "Tu es têtu", "généreux/gentil"], answer: 2 },
        { question: "Que signifie 'Oza motema makasi' ?", options: ["Tu es courageux", "Tu es patient/persévérant", "Tu es intelligent"], answer: 1 },
        { question: "Que signifie 'Oza maboko makasi' ?", options: ["Tu es travailleur/employé", "Tu es égoïste", "Tu es avare"], answer: 2 },
        { question: "Que signifie 'Maboko milayi' ?", options: ["Généreux", "Têtu", "voleur"], answer: 2 },
        { question: "Que signifie 'Oza motema mukuse' ?", options: ["Tu es impatient", "Tu te fache vite", "Tu es jaloux"], answer: 1 }
    ]
},
{
    level: 15,
    questions: [
        { 
            question: "Comment traduit-on cette phrase en Lingala : 'Si j'avais de l'argent, j'achèterai une voiture' ?", 
            options: [
                "Soki nazalaki na mbongo, nakoki kotonga ndako.", 
                "Soki nazalaki na mbongo, mbele na sombi mutuka.", 
                "Soki nazalaki na mbongo, nakoki kokende mobembo."
            ], 
            answer: 1 
        },
        { 
            question: "Traduis cette phrase en Lingala : 'Je ne l'aime pas parce qu'il a un mauvais caractère' ?", 
            options: [
                "Nalingaka ye te mpona azali na bizaleli mabe", 
                "Nalingi ye mpo ete azali na lokuta.", 
                "Nalingi ye te mpo azali na posa ya maloba."
            ], 
            answer: 0 
        },
        { 
            question: "Comment dit-on en Lingala : 'Je sors avec ma collègue de classe' ?", 
            options: [
                "Nazali kobima na moninga na ngai ya kelasi.", 
                "Nazali kolinga moninga ya kelasi na ngai.", 
                "Nazali kosala kelasi na moninga na ngai."
            ], 
            answer: 0 
        },
        { 
            question: "Traduis en Lingala : 'J'ai faim'.", 
            options: [
                "Nazali na posa ya kolya mbisi.", 
                "Nazali na posa ya mayi.", 
                "Nazali na nzala."
            ], 
            answer: 2 
        },
        { 
            question: "Comment traduit-on : 'J'ai envie de manger du poulet' ?", 
            options: [
                "Nazali na posa ya kolya saka-saka.", 
                "Nazali na posa ya kolya nsoso.", 
                "Nazali na posa ya kolya mbisi."
            ], 
            answer: 1 
        },
        { 
            question: "En Lingala, comment dit-on : 'Ma femme a accouché un garçon' ?", 
            options: [
                "Mwasi na ngai azali kobota lelo.", 
                "Mwasi na ngai aboti mwana mobali.", 
                "Mwasi na ngai aboti mwana mwasi."
            ], 
            answer: 1 
        },
        { 
            question: "Traduis cette phrase : 'Certaines filles aiment les garçons pour de l'argent' ?", 
            options: [
                "Bana basi mosusu balingaka bana mibali mpo na ndenge.", 
                "Bana basi mosusu balingaka bana mibali mpo na biloko.", 
                "Bana basi mosusu balingaka bana mibali mpo na mbongo."
            ], 
            answer: 2 
        },
        { 
            question: "Comment traduit-on : 'Mon voisin est méchant' en Lingala ?", 
            options: [
                "Moninga na ngai ya mboka azali moto ya lokuta.", 
                "voisin na ngai azali motema mabe mabe.", 
                "Moninga na ngai ya mboka azali moto malamu."
            ], 
            answer: 1 
        },
        { 
            question: "Comment dit-on : 'Sois courageux' en Lingala ?", 
            options: [
                "Limbisa bango.", 
                "Talela yango te.", 
                "Kanga motema."
            ], 
            answer: 2 
        },
        { 
            question: "Traduis : 'J'ai soif' en Lingala.", 
            options: [
                "Nazali na posa ya kolala.", 
                "Nazali na nzala.", 
                "Nazali na posa ya mayi."
            ], 
            answer: 2 
        }
    ]
}

    // Continuez pour tous les niveaux jusqu'au 15
];

// Générer les boutons des niveaux
const levelButtonsContainer = document.getElementById("level-selection");
for (let i = 1; i <= 15; i++) {
    const button = document.createElement("button");
    button.textContent = `Niveau ${i}`;
    button.className = "level-button";
    button.onclick = () => startLevel(i);
    levelButtonsContainer.appendChild(button);
}

// Démarrer un niveau
function startLevel(levelIndex) {
    currentLevelIndex = levelIndex - 1;
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = levels[currentLevelIndex].questions.length;

    document.getElementById("level-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";

    loadQuestion();
}

// Charger une question
function loadQuestion() {
    const currentQuestion = levels[currentLevelIndex].questions[currentQuestionIndex];
    document.getElementById("question").textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    document.getElementById("options").innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-button";
        button.onclick = () => selectOption(index, button);
        document.getElementById("options").appendChild(button);
    });

    document.getElementById("correcteur").textContent = "Correcteur : Cliquez sur une réponse.";
    document.getElementById("next-button").style.display = "none";
    startTimer();
}

// Démarrer le timer
function startTimer() {
    timer = 15;
    document.getElementById("timer").textContent = timer;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById("timer").textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            showCorrectAnswer();
        }
    }, 1000);
}
function showCorrectAnswer() {
    const currentQuestion = levels[currentLevelIndex].questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-button");

    // Marquer la bonne réponse
    buttons[currentQuestion.answer].classList.add("correct");

    // Ajouter la correction
    document.getElementById("correcteur").textContent = `Temps écoulé. La bonne réponse était : ${currentQuestion.options[currentQuestion.answer]}`;
    document.getElementById("correcteur").style.color = "red";

    // Montrer le bouton "Suivant"
    document.getElementById("next-button").style.display = "inline-block";
}
// Gérer la sélection d'une réponse
function selectOption(selectedIndex, button) {
    clearInterval(timerInterval);

    const currentQuestion = levels[currentLevelIndex].questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-button");

    if (selectedIndex === currentQuestion.answer) {
        score++;
        button.classList.add("correct");
        document.getElementById("correcteur").textContent = "Bonne réponse !";
        document.getElementById("correcteur").style.color = "green";
    } else {
        button.classList.add("wrong");
        document.getElementById("correcteur").textContent = `Mauvaise réponse. La bonne réponse était : ${currentQuestion.options[currentQuestion.answer]}`;
        document.getElementById("correcteur").style.color = "red";
        buttons[currentQuestion.answer].classList.add("correct");
    }

    document.getElementById("next-button").style.display = "inline-block";
}

// Passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById("score").textContent = `Votre score : ${percentage}%`;
}

// Recommencer le niveau
function retryLevel() {
    startLevel(currentLevelIndex + 1);
          }
