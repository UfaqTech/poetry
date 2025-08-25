// === Hardcoded Data for a Static Demo ===
// This array holds all the comment data. Each comment includes an author, text, and date.
const allComments = [
    { author: 'Creative Writer', text: 'Beautifully written. The imagery is so vivid.', date: '2024-03-01'},
    { author: 'Poetry Lover', text: 'This resonates with me deeply. A true masterpiece.', date: '2024-03-02'},
    { author: 'Art Enthusiast', text: 'Simply stunning. Thanks for sharing this gem.', date: '2024-03-03'},
    { author: 'Literature Student', text: 'The meter and rhyme scheme are perfect. A great example of classic form.', date: '2024-03-04'},
    { author: 'Casual Reader', text: 'I don\'t usually read poetry, but this one really caught my attention.', date: '2024-03-05'},
    { author: 'Deep Thinker', text: 'This poem makes me reflect on life. A thoughtful piece.', date: '2024-03-06'},
    { author: 'Inspired by Nature', text: 'Reminds me of a peaceful walk in the forest. Lovely.', date: '2024-03-07'},
    { author: 'Poetic Soul', text: 'Every line is a brushstroke of emotion. Simply enchanting.', date: '2024-03-08'},
    { author: 'Reader X', text: 'I felt every word. Thank you for this.', date: '2024-03-09'},
    { author: 'Anonymous Admirer', text: 'Profound and beautifully articulated.', date: '2024-03-10'},
    { author: 'Word Weaver', text: 'The depth of thought here is incredible.', date: '2024-03-11'},
    { author: 'Nature Lover', text: 'Captures the essence of the world around us perfectly.', date: '2024-03-12'},
    { author: 'Happy Reader', text: 'Made my day! So uplifting.', date: '2024-03-13'},
    { author: 'Thinking Cap', text: 'Got me thinking... that\'s what good poetry does!', date: '2024-03-14'},
    { author: 'Lost in Words', text: 'Completely absorbed. The language is exquisite.', date: '2024-03-15'},
    { author: 'Just Enjoying', text: 'Simple yet powerful. Loved it!', date: '2024-03-16'},
    { author: 'Young Poet', text: 'Aspiring to write like this one day. Truly inspiring.', date: '2024-03-17'},
    { author: 'Old Soul', text: 'Takes me back to simpler times. Nostalgic and beautiful.', date: '2024-03-18'},
    { author: 'Literary Critic', text: 'A strong piece with compelling narrative and imagery.', date: '2024-03-19'},
    { author: 'Artistic Eye', text: 'The visual metaphors are striking.', date: '2024-03-20'},
    { author: 'Calm Spirit', text: 'Reading this brought a sense of peace.', date: '2024-03-21'},
    { author: 'Insightful', text: 'Deep thoughts conveyed beautifully.', date: '2024-03-22'},
    { author: 'So True', text: 'Relatable and poignant.', date: '2024-03-23'},
    { author: 'Timeless', text: 'This will be remembered for years.', date: '2024-03-24'},
    { author: 'Pure Gold', text: 'Every word shines!', date: '2024-03-25'},
    { author: 'Masterful', text: 'A true master at work.', date: '2024-03-26'},
    { author: 'Highly Recommended', text: 'Everyone should read this.', date: '2024-03-27'},
    { author: 'Simply Elegant', 'text': 'The simplicity adds to its elegance.', date: '2024-03-28'},
];

// Helper function to get a random subset of comments for a poem.
const getRandomComments = () => {
    const shuffled = [...allComments].sort(() => 0.5 - Math.random());
    const numComments = Math.floor(Math.random() * 2) + 2; // Returns 2 to 3 comments
    return shuffled.slice(0, numComments);
};

// --- START OF poetryData ARRAY ---
// This is the main dataset for all poetry entries. Each object represents a poem
// with various attributes like title, content, author, category, likes, rating, etc.
const poetryData = [
    {
        id: '1',
        title: 'Love\'s Eternal Bloom',
        content: `In every beat, my heart whispers your name,
A love so pure, an everlasting flame.
Through joyous days and silent, starry nights,
You are my guiding star, my endless lights.`,
        author: 'William Shakespeare',
        category: 'Love',
        language: 'English',
        lines: '4 Lines',
        likes: 280,
        rating: 4.8,
        liked: true,
        date: '2025-09-01',
        comments: getRandomComments()
    },
    {
        id: '2',
        title: 'Shab-e-Hijran Ki Udasi',
        content: `شبِ ہجراں کی اداسی چھائی ہے دل پر،
ہر تارہ بھی آج اجنبی لگتا ہے۔
تیری یادوں میں کھو کر ہر لمحہ،
یہ دل بس تنہا بیٹھا روتا رہتا ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 410,
        rating: 4.7,
        liked: false,
        date: '2025-09-02',
        comments: getRandomComments()
    },
    {
        id: '3',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan kuch aisa hai,
Har lamha ik nayi kahani hai.
Kabhi khushi hai, kabhi gham,
Ye safar chalta hi rehta hai.`,
        author: 'Parveen Shakir',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 395,
        rating: 4.6,
        liked: true,
        date: '2025-09-03',
        comments: getRandomComments()
    },
    {
        id: '4',
        title: 'Khudi Ka Safar',
        content: `خودی کا سفر ہے یہ کیسا سفر،
جہاں اپنی پہچان خود کرنی ہے۔
ہر مشکل میں ہے اک نئی راہ،
بس عزمِ مصمم سے آگے بڑھنی ہے۔`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2025-09-04',
        comments: getRandomComments()
    },
    {
        id: '5',
        title: 'The Road Less Traveled',
        content: `I took the one less traveled by,
And that has made all the difference.`,
        author: 'Robert Frost',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2025-09-05',
        comments: getRandomComments()
    },
    {
        id: '6',
        title: 'Ishq-e-Haqiqi Ki Pyaas',
        content: `Ishq-e-Haqiqi ki pyaas lagi hai,
Rooh har pal usi ki talaash mein hai.
Ye dil hai ya koi masjid ka minar,
Har saans mein bas Khuda ka naam hai.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 420,
        rating: 4.7,
        liked: false,
        date: '2025-09-06',
        comments: getRandomComments()
    },
    {
        id: '7',
        title: 'Dil Ki Baat',
        content: `دل کی بات کہے بھی تو کس سے کہے،
ہر چہرہ یہاں پرایا سا لگتا ہے۔
اک تو ہی ہے جو سُنتا ہے مجھے،
ورنہ یہ دنیا تو بس مطلب کا یار ہے۔`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.8,
        liked: true,
        date: '2025-09-07',
        comments: getRandomComments()
    },
    {
        id: '8',
        title: 'Mahi Bina',
        content: `Mahi bina dil lagda nai,
Har pal teri yaad satandi ae.
Akh vich athru, dil vich dard,
Meri zindri mukdi jandi ae.`,
        author: 'Ataullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 350,
        rating: 4.5,
        liked: false,
        date: '2025-09-08',
        comments: getRandomComments()
    },
    {
        id: '9',
        title: 'Ishq Di Hadh',
        content: `Ishq di hadh vich, khud nu gavaya,
Na duniyan di khabar, na rab di parwah.
Har saah de naal tera naam lena,
Bulleh Shah nu vi tu hi banaya.`,
        author: 'Bulleh Shah',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 490,
        rating: 4.9,
        liked: true,
        date: '2025-09-09',
        comments: getRandomComments()
    },
    {
        id: '10',
        title: 'Nature\'s First Green',
        content: `Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 560,
        rating: 4.8,
        liked: true,
        date: '2025-09-10',
        comments: getRandomComments()
    },
    {
        id: '11',
        title: 'Silsila-e-Ishq',
        content: `Silsila-e-ishq ab rukta nahin,
Har lamha teri yaad aati hai.
Ye dil hai ya koi aaina,
Jis mein bas teri hi tasveer nazar aati hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 430,
        rating: 4.7,
        liked: true,
        date: '2025-09-11',
        comments: getRandomComments()
    },
    {
        id: '12',
        title: 'Maatami Shaam',
        content: `ماتمی شام ہے، ہر سو خاموشی ہے،
شہرِ خموشاں میں آواز نہیں آتی۔
ہر پھول ہے مرجھایا، ہر پتا ہے بکھرا،
اس ویرانی کی کوئی انتہا نہیں آتی۔`,
        author: 'Parveen Shakir',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 400,
        rating: 4.6,
        liked: false,
        date: '2025-09-12',
        comments: getRandomComments()
    },
    {
        id: '13',
        title: 'Jazba-e-Zindgi',
        content: `Jazba-e-zindgi ko kar buland itna,
Ke har mushkil khud hi hal ho.
Ye duniya hai, ye imtehan hai,
Bas apni manzil ki taraf badho.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2025-09-13',
        comments: getRandomComments()
    },
    {
        id: '14',
        title: 'The Fault, Dear Brutus',
        content: `The fault, dear Brutus, is not in our stars,
But in ourselves, that we are underlings.`,
        author: 'William Shakespeare',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2025-09-14',
        comments: getRandomComments()
    },
    {
        id: '15',
        title: 'Dard-e-Dil Ki Sada',
        content: `دردِ دل کی صدا کس کو سناؤں میں،
جب ہر کوئی اپنی دھن میں مگن ہے۔
یہ تنہائی ہے یا مقدر کا کھیل،
بس اکیلا میں ہی غم میں غرق ہوں۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: false,
        date: '2025-09-15',
        comments: getRandomComments()
    },
    {
        id: '16',
        title: 'Fikr-e-Jaun',
        content: `Fikr-e-Jaun kuch aisi hai,
Jo har dil mein utar jaye.
Ye shayri hai ya koi jadoo,
Har lafz mein hai ek naya raaz.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.8,
        liked: true,
        date: '2025-09-16',
        comments: getRandomComments()
    },
    {
        id: '17',
        title: 'Meri Zindagi',
        content: `Meri zindagi hai tanha safar,
Na koi hamsafar, na koi khabar.
Mahi bina dil ujad gaya,
Hun kivein jeewan main, dass rabba!`,
        author: 'Ataullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 360,
        rating: 4.5,
        liked: false,
        date: '2025-09-17',
        comments: getRandomComments()
    },
    {
        id: '18',
        title: 'Ishq Di Kitab',
        content: `Ishq di kitab da, har warka,
Mainu tera naam disda ae.
Bulleh Shah ishq di gali vich,
Rabb nu vi bhull gaya ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 510,
        rating: 4.9,
        liked: true,
        date: '2025-09-18',
        comments: getRandomComments()
    },
    {
        id: '19',
        title: 'Still I Rise',
        content: `You may shoot me with your words,
You may cut me with your eyes,
You may kill me with your hatefulness,
But still, like air, I'll rise.`,
        author: 'Maya Angelou',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2025-09-19',
        comments: getRandomComments()
    },
    {
        id: '20',
        title: 'Dard-e-Judai',
        content: `Dard-e-judai ka aalam na poochho,
Har lamha ek sadi sa lagta hai.
Teri yaad mein doob kar har raat,
Ye dil bas tanhai mein rota rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: false,
        date: '2025-09-20',
        comments: getRandomComments()
    },
    {
        id: '21',
        title: 'Zindagi Aik Kahani',
        content: `Zindagi aik kahani hai, har roop mein,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Parveen Shakir',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 420,
        rating: 4.7,
        liked: false,
        date: '2025-09-21',
        comments: getRandomComments()
    },
    {
        id: '22',
        title: 'Jahan-e-Faani',
        content: `جہاں فانی ہے، ہر شے فنا ہو گی،
باقی رہے گا بس رب کا نام۔
اپنی ہستی کو پہچان لے تو،
مل جائے گا تجھے سکون و آرام۔`,
        author: 'Allama Iqbal',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.9,
        liked: true,
        date: '2025-09-22',
        comments: getRandomComments()
    },
    {
        id: '23',
        title: 'Sonnet 116',
        content: `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.`,
        author: 'William Shakespeare',
        category: 'Love',
        language: 'English',
        lines: 'Larger',
        likes: 615,
        rating: 4.9,
        liked: true,
        date: '2025-09-23',
        comments: getRandomComments()
    },
    {
        id: '24',
        title: 'Sham-e-Tanhai',
        content: `شامِ تنہائی میں جب یاد آتی ہے،
دل کی ہر دھڑکن میں تیرا نام ہے۔
آنکھوں میں نمی، لبوں پہ خاموشی،
یہ زندگی بس تیرے ہی نام ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 440,
        rating: 4.6,
        liked: false,
        date: '2025-09-24',
        comments: getRandomComments()
    },
    {
        id: '25',
        title: 'Dil Ki Baat',
        content: `Dil ki baat kehne ko dil chahta hai,
Magar lafz honthon pe aate nahin.
Ye kaisa dard hai, ye kaisa gham hai,
Jo aankhon se behte hain, magar dikhte nahin.`,
        author: 'Jaun Elia',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 465,
        rating: 4.7,
        liked: false,
        date: '2025-09-25',
        comments: getRandomComments()
    },
    {
        id: '26',
        title: 'Sajan Mera',
        content: `Sajan mera, dildar mera,
Tere ishq ne mainu pagal kita.
Har saah de naal tera naam lena,
Tere bin jeena hun aukha hai.`,
        author: 'Shakir Shujabadi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 370,
        rating: 4.6,
        liked: true,
        date: '2025-09-26',
        comments: getRandomComments()
    },
    {
        id: '27',
        title: 'Bulleh Shah di Hikmat',
        content: `Mandir, masjid, gurudware,
Har thaan te rab disda ae.
Dil de andar jhaati mar,
Asli rab othe vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 520,
        rating: 4.9,
        liked: true,
        date: '2025-09-27',
        comments: getRandomComments()
    },
    {
        id: '28',
        title: 'Oscar Wilde on Truth',
        content: `The truth is rarely pure and never simple.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2025-09-28',
        comments: getRandomComments()
    },
    {
        id: '29',
        title: 'My Prayer',
        content: `O Lord, grant me strength to face,
The trials of life with grace.
Fill my heart with peace and light,
And guide me on the path of right.`,
        author: 'Anonymous',
        category: 'Dua',
        language: 'English',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2025-09-29',
        comments: getRandomComments()
    },
    {
        id: '30',
        title: 'Tanhai Ka Safar',
        content: `Tanhai ka safar ab bhi jaari hai,
Har mod par ek naya imtehan hai.
Na koi humsafar, na koi manzil,
Bas andheron mein bhatak raha hoon.`,
        author: 'Mohsin Naqvi',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: false,
        date: '2025-09-30',
        comments: getRandomComments()
    },
    {
        id: '31',
        title: 'Bichhde Log',
        content: `بچھڑے لوگ اب کہاں ملتے ہیں،
یادوں کے سوا کچھ نہیں رہتا۔
ہر سانس میں ہے ایک دردِ پنہاں،
دل کا آنسو اب دل میں ہی بہتا ہے۔`,
        author: 'Parveen Shakir',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: false,
        date: '2025-10-01',
        comments: getRandomComments()
    },
    {
        id: '32',
        title: 'Parwaaz-e-Khudi',
        content: `Parwaaz-e-khudi ko roko na,
Har hadd se aage nikal jao.
Ye duniya hai, ye fanah hai,
Apni manzil khud banao.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2025-10-02',
        comments: getRandomComments()
    },
    {
        id: '33',
        title: 'Hope Is The Thing With Feathers',
        content: `Hope is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -`,
        author: 'Emily Dickinson',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 570,
        rating: 4.8,
        liked: true,
        date: '2025-10-03',
        comments: getRandomComments()
    },
    {
        id: '34',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی نے ستایا بہت،
ہر موڑ پر ایک نیا درد ملا۔
کبھی ہنسی آئی، کبھی آنسو بہے،
یہ کیسا سفر ہے، جو کبھی ختم نہ ہوا۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 450,
        rating: 4.6,
        liked: false,
        date: '2025-10-04',
        comments: getRandomComments()
    },
    {
        id: '35',
        title: 'Ishq Ki Raah',
        content: `Ishq ki raah mein chalna mushkil hai,
Har kadam pe hai ek naya imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2025-10-05',
        comments: getRandomComments()
    },
    {
        id: '36',
        title: 'Mahi Mere',
        content: `Mahi mere, dil vich tu wasda,
Tere bina hun jeevan aukha.
Har saah de naal tera naam,
Tu mera sab kuch, tu mera dhoka.`,
        author: 'Mansoor Malangi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 380,
        rating: 4.6,
        liked: true,
        date: '2025-10-06',
        comments: getRandomComments()
    },
    {
        id: '37',
        title: 'Amrita Pritam\'s Lament',
        content: `Aj aakhan Waris Shah nu,
Kiton qabraan vichon bol.
Te aj kitab-e-ishq da,
Koi agla warka khol.`,
        author: 'Amrita Pritam',
        category: 'Heartbroken',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: false,
        date: '2025-10-07',
        comments: getRandomComments()
    },
    {
        id: '38',
        title: 'Rumi on Love\'s Journey',
        content: `The universe is not outside of you.
Look inside yourself; everything that you want,
You already are.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2025-10-08',
        comments: getRandomComments()
    },
    {
        id: '39',
        title: 'Oscar Wilde\'s Wit',
        content: `I can resist everything except temptation.`,
        author: 'Oscar Wilde',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 460,
        rating: 4.7,
        liked: false,
        date: '2025-10-09',
        comments: getRandomComments()
    },
    {
        id: '40',
        title: 'Eid Ki Khushiyan',
        content: `Eid ki khushiyan lekar aayi hai,
Har dil mein hai ek naya josh.
Ye din hai mohabbat ka,
Sab ko gale lagao, bhool jao ranj-o-malal.`,
        author: 'Mohsin Naqvi',
        category: 'Eid',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2025-10-10',
        comments: getRandomComments()
    },
    {
        id: '41',
        title: 'Watan Ki Shan',
        content: `وطن کی شان پہ جان بھی قربان ہے،
ہر ذرہ یہاں اپنی پہچان ہے۔
یہ سرزمیں ہے میری، یہ میرا پاکستان،
اس پہ قربان ہے میری ہر آن بان۔`,
        author: 'Parveen Shakir',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.9,
        liked: true,
        date: '2025-10-11',
        comments: getRandomComments()
    },
    {
        id: '42',
        title: 'Ummat Ki Pukar',
        content: `Ummat ki pukar hai aisi,
Jo arsh tak pohanchti hai.
Har dil mein hai ek josh-e-junoon,
Ye dastaan kabhi khatam na ho.`,
        author: 'Allama Iqbal',
        category: 'Islamic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 5.0,
        liked: true,
        date: '2025-10-12',
        comments: getRandomComments()
    },
    {
        id: '43',
        title: 'Fire and Ice',
        content: `Some say the world will end in fire,
Some say in ice.
From what I’ve tasted of desire
I hold with those who favor fire.`,
        author: 'Robert Frost',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2025-10-13',
        comments: getRandomComments()
    },
    {
        id: '44',
        title: 'Qalb Ki Sada',
        content: `قلب کی صدا کچھ ایسی ہے،
جو خاموش بھی ہو تو سنائی دے۔
یہ عشق ہے، یہ احساس ہے،
جو ہر سانس میں بستا ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: true,
        date: '2025-10-14',
        comments: getRandomComments()
    },
    {
        id: '45',
        title: 'Dunya Ka Fareb',
        content: `Dunya ka fareb kuch aisa hai,
Har shakhs yahan badal jata hai.
Na koi apna hai, na koi begana,
Bas matlab ke yaar reh jate hain.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: false,
        date: '2025-10-15',
        comments: getRandomComments()
    },
    {
        id: '46',
        title: 'Yaar Di Yaad',
        content: `Yaar di yaad ne pagal kita,
Din raat hun chain nahin.
Har saah de naal tera naam,
Tere bina hun kuch vi nahin.`,
        author: 'Ataullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 390,
        rating: 4.6,
        liked: false,
        date: '2025-10-16',
        comments: getRandomComments()
    },
    {
        id: '47',
        title: 'Sultan Bahu Ki Shan',
        content: `Sultan Bahu, ishq da banda,
Rab di talaash vich phirda.
Har saah de naal Allah Allah,
Dil vich noor bhar da.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2025-10-17',
        comments: getRandomComments()
    },
    {
        id: '48',
        title: 'Rumi on Thirst',
        content: `Seek not the water, but be thirsty;
For only then will the water find you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '2 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2025-10-18',
        comments: getRandomComments()
    },
    {
        id: '49',
        title: 'The Caged Bird',
        content: `The caged bird sings
with a fearful trill
of things unknown
but longed for still
and his tune is heard
on the distant hill
for the caged bird
sings of freedom.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2025-10-19',
        comments: getRandomComments()
    },
    {
        id: '50',
        title: 'Dil Ki Baat',
        content: `Dil ki baat ab kis se kahoon,
Jab har koi ajnabi sa lagta hai.
Ye zindagi hai ya koi saza,
Har lamha tanhai mein guzarta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2025-10-20',
        comments: getRandomComments()
    },
    {
        id: '51',
        title: 'Mausam-e-Bahar',
        content: `موسمِ بہار ہے، پھول کھل رہے ہیں،
ہر سو رنگ ہی رنگ نظر آتے ہیں۔
یہ قدرت کا کمال ہے، یہ خدا کی کریمی،
ہر ذرہ میں ہے اس کی نشانی۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.8,
        liked: true,
        date: '2025-10-21',
        comments: getRandomComments()
    },
    {
        id: '52',
        title: 'Jahan-e-Nou',
        content: `Jahan-e-nou hai, uss ki talaash mein,
Apni khudi ko pehchan le tu.
Ye duniya hai, ye fanah hai,
Bas apni manzil ko pa le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2025-10-22',
        comments: getRandomComments()
    },
    {
        id: '53',
        title: 'The Last Word',
        content: `As I am, so will I be.`,
        author: 'Emily Dickinson',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2025-10-23',
        comments: getRandomComments()
    },
    {
        id: '54',
        title: 'Aashna-e-Gham',
        content: `آشنائے غم ہیں ہم، ہر موڑ پر،
دل میں جل رہا ہے ایک دیا.
تاریکی ہے ہر سو، کوئی راہ نہیں،
بس درد کا ہے اک لامتناہی سلسلہ.`,
        author: 'Faiz Ahmed Faiz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: false,
        date: '2025-10-24',
        comments: getRandomComments()
    },
    {
        id: '55',
        title: 'Zindagi Ka Raaz',
        content: `Zindagi ka raaz kuch aisa hai,
Jo samajh jaye to sab kuch hai.
Ye safar hai, ye manzil hai,
Har lamha ek naya imtehan hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2025-10-25',
        comments: getRandomComments()
    },
    {
        id: '56',
        title: 'Dunya Di Reet',
        content: `Dunya di reet hai wakhri,
Har shakhs yahan matlab da.
Na koi apna, na koi paraya,
Bas har koi matlab da yaar.`,
        author: 'Mansoor Malangi',
        category: 'Life',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 400,
        rating: 4.6,
        liked: false,
        date: '2025-10-26',
        comments: getRandomComments()
    },
    {
        id: '57',
        title: 'Bulleh Shah Ki Taqwa',
        content: `Dil di safai kar le Bulleya,
Andar hi andar rabb wasda.
Kyun labda ae bahar tu,
Jadon sab kujh andar ae labda.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2025-10-27',
        comments: getRandomComments()
    },
    {
        id: '58',
        title: 'The Picture of Dorian Gray',
        content: `It is better to be beautiful than to be good.
But it is better to be good than to be ugly.`,
        author: 'Oscar Wilde',
        category: 'Funny',
        language: 'English',
        lines: '2 Lines',
        likes: 470,
        rating: 4.7,
        liked: false,
        date: '2025-10-28',
        comments: getRandomComments()
    },
    {
        id: '59',
        title: 'Imam Shafi on Wisdom',
        content: `My burden is lightened by knowledge,
My heart is enlightened by truth.`,
        author: 'Imam Shafi',
        category: 'Quotes',
        language: 'Arabic',
        lines: '2 Lines',
        likes: 640,
        rating: 5.0,
        liked: true,
        date: '2025-10-29',
        comments: getRandomComments()
    },
    {
        id: '60',
        title: 'Musafir Dil',
        content: `Musafir dil ko manzil na mile,
Har mod par ek naya imtehan hai.
Ye zindagi hai ya koi saza,
Bas chalte hi rehna hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 440,
        rating: 4.6,
        liked: false,
        date: '2025-10-30',
        comments: getRandomComments()
    },
    {
        id: '61',
        title: 'Dil Ki Pukaar',
        content: `دل کی پکار کچھ ایسی ہے،
جو آسمان تک پہنچتی ہے۔
ہر لفظ میں ہے ایک دعا،
جو رب کی رحمت کو بلاتی ہے۔`,
        author: 'Parveen Shakir',
        category: 'Dua',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.9,
        liked: true,
        date: '2025-10-31',
        comments: getRandomComments()
    },
    {
        id: '62',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai unchi,
Hadd-e-nazar se bhi aage.
Ye azm hai, ye junoon hai,
Apni manzil khud banaye.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 5.0,
        liked: true,
        date: '2025-11-01',
        comments: getRandomComments()
    },
    {
        id: '63',
        title: 'The Pasture',
        content: `I'm going out to clean the pasture spring;
I'll only stop to rake the leaves away
(And wait to watch the water clear, I may):
I sha'n't be gone long.—You come too.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: 'Larger',
        likes: 590,
        rating: 4.8,
        liked: true,
        date: '2025-11-02',
        comments: getRandomComments()
    },
    {
        id: '64',
        title: 'Chandni Raat',
        content: `چاندنی رات میں کیا کیا نہیں ہوتا،
ہر سو تیری یادوں کا میلا ہے۔
یہ حسن ہے یا کوئی جادو،
ہر دل میں تیرا ہی بسیرا ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Romantic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.8,
        liked: true,
        date: '2025-11-03',
        comments: getRandomComments()
    },
    {
        id: '65',
        title: 'Khamushi Ka Shor',
        content: `Khamushi ka shor kuch aisa hai,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Har lamha dil mein rehta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: true,
        date: '2025-11-04',
        comments: getRandomComments()
    },
    {
        id: '66',
        title: 'Pyaar Da Dard',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera dhoka.`,
        author: 'Ataullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 410,
        rating: 4.6,
        liked: false,
        date: '2025-11-05',
        comments: getRandomComments()
    },
    {
        id: '67',
        title: 'Sultan Bahu Di Tasawwuf',
        content: `Jis din de vich sohni yaar wasse,
Us din Rab da deedar hove.
Sultan Bahu ishq da payala,
Pee ke har shai da raaz khule.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2025-11-06',
        comments: getRandomComments()
    },
    {
        id: '68',
        title: 'A Woman Speaks',
        content: `It's in the reach of my arms,
The span of my hips,
The stride of my step,
The curl of my lips.
I'm a woman
Phenomenally.`,
        author: 'Maya Angelou',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2025-11-07',
        comments: getRandomComments()
    },
    {
        id: '69',
        title: 'The Critic as Artist',
        content: `The critic is he who can translate into another manner or a new material his impression of beautiful things.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 480,
        rating: 4.8,
        liked: false,
        date: '2025-11-08',
        comments: getRandomComments()
    },
    {
        id: '70',
        title: 'Dostana',
        content: `Dostana kuch aisa hai,
Jo kabhi na toote.
Har pal sath hai,
Har mushkil mein saath hai.`,
        author: 'Mohsin Naqvi',
        category: 'Friendship',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: true,
        date: '2025-11-09',
        comments: getRandomComments()
    },
    {
        id: '71',
        title: 'Zindagi Ki Haqeeqat',
        content: `زندگی کی حقیقت کچھ ایسی ہے،
جو سمجھ آئے تو سب کچھ بدل جائے۔
یہ سفر ہے، یہ منزل ہے،
ہر پل ایک نیا سبق ہے۔`,
        author: 'Parveen Shakir',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: false,
        date: '2025-11-10',
        comments: getRandomComments()
    },
    {
        id: '72',
        title: 'Payam-e-Amal',
        content: `Payam-e-amal hai yeh,
Apni khudi ko pehchan.
Ye duniya hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2025-11-11',
        comments: getRandomComments()
    },
    {
        id: '73',
        title: 'The Sound of Trees',
        content: `I wonder about the trees.
They seem to have a sort of soft,
Blindness about them, as if they knew
They were not meant to see,
But only to be seen.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: 'Larger',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2025-11-12',
        comments: getRandomComments()
    },
    {
        id: '74',
        title: 'Gulshan-e-Ishq',
        content: `گلشنِ عشق میں کیا کیا نہیں ہوتا،
ہر پھول میں ہے اک تیری خوشبو۔
یہ دل ہے یا کوئی باغِ ارم،
جہاں ہر سانس میں ہے تیری آرزو۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2025-11-13',
        comments: getRandomComments()
    },
    {
        id: '75',
        title: 'Shab-e-Gham',
        content: `Shab-e-gham ki kahani kuch aisi hai,
Jo khatam na ho, bas chalti rahe.
Ye dil hai ya koi deewana,
Jo tere naam pe hi rota rahe.`,
        author: 'Jaun Elia',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: false,
        date: '2025-11-14',
        comments: getRandomComments()
    },
    {
        id: '76',
        title: 'Pyaar Da Wada',
        content: `Pyaar da wada hai nibhaya,
Tere naal har pal bitaya.
Na chhodanga tera saath,
Tere bin jeena aukha.`,
        author: 'Shakir Shujabadi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 420,
        rating: 4.6,
        liked: true,
        date: '2025-11-15',
        comments: getRandomComments()
    },
    {
        id: '77',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2025-11-16',
        comments: getRandomComments()
    },
    {
        id: '78',
        title: 'Rumi on Inner Light',
        content: `The lamps are different, but the Light is the same.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2025-11-17',
        comments: getRandomComments()
    },
    {
        id: '79',
        title: 'To Be Or Not To Be',
        content: `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take Arms against a Sea of troubles.`,
        author: 'William Shakespeare',
        category: 'Deep',
        language: 'English',
        lines: 'Larger',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2025-11-18',
        comments: getRandomComments()
    },
    {
        id: '80',
        title: 'Mohabbat Ka Afsana',
        content: `Mohabbat ka afsana kuch aisa hai,
Jo lafzon mein bayan na ho.
Ye ishq hai, ye junoon hai,
Jo har dil mein sama jaye.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.8,
        liked: true,
        date: '2025-11-19',
        comments: getRandomComments()
    },
    {
        id: '81',
        title: 'Yaad-e-Watan',
        content: `یادِ وطن ہے ہر سانس میں،
ہر پل ہے دل میں اک لگن۔
یہ دھرتی ہے میری ماں،
اس پہ قربان ہے میرا تن من۔`,
        author: 'Parveen Shakir',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.9,
        liked: true,
        date: '2025-11-20',
        comments: getRandomComments()
    },
    {
        id: '82',
        title: 'Shaheen Ka Khwab',
        content: `Shaheen ka khwab hai uncha,
Wo udta hai hadd se aage.
Ye azm hai, ye hausla hai,
Apni manzil khud banaye.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 5.0,
        liked: true,
        date: '2025-11-21',
        comments: getRandomComments()
    },
    {
        id: '83',
        title: 'A Question',
        content: `A voice said, "Look me in the stars
And tell me if you see
The things I see, the things that are
Working in the heart of me."`,
        author: 'Robert Frost',
        category: 'Deep',
        language: 'English',
        lines: 'Larger',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2025-11-22',
        comments: getRandomComments()
    },
    {
        id: '84',
        title: 'Firaq Ka Dard',
        content: `فراق کا درد ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: false,
        date: '2025-11-23',
        comments: getRandomComments()
    },
    {
        id: '85',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag kuch aisi hai,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewanapan,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.8,
        liked: true,
        date: '2025-11-24',
        comments: getRandomComments()
    },
    {
        id: '86',
        title: 'Yaar Di Yaari',
        content: `Yaar di yaari sab ton pyari,
Har mushkil vich sath nibhave.
Na chhodanga tera saath,
Tu hi mera yaar, tu hi mera sahara.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: true,
        date: '2025-11-25',
        comments: getRandomComments()
    },
    {
        id: '87',
        title: 'Amrita Pritam\'s Love',
        content: `Mere dil di gal sun,
Tere ishq ne mainu pagal kita.
Har saah de naal tera naam lena,
Tere bin jeena hun aukha hai.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2025-11-26',
        comments: getRandomComments()
    },
    {
        id: '88',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2025-11-27',
        comments: getRandomComments()
    },
    {
        id: '89',
        title: 'Oscar Wilde\'s Humour',
        content: `I am so clever that sometimes I don't understand a single word of what I am saying.`,
        author: 'Oscar Wilde',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 490,
        rating: 4.8,
        liked: false,
        date: '2025-11-28',
        comments: getRandomComments()
    },
    {
        id: '90',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana kuch aisa hai,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2025-11-29',
        comments: getRandomComments()
    },
    {
        id: '91',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل میں کیا کیا نہیں ہوتا،
ہر پتی میں ہے اک نئی کہانی۔
یہ موسم ہے بہار کا، یہ قدرت ہے،
ہر رنگ میں ہے اک نئی نشانی۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.8,
        liked: true,
        date: '2025-11-30',
        comments: getRandomComments()
    },
    {
        id: '92',
        title: 'Payam-e-Amal (Part 2)',
        content: `Payam-e-amal hai yeh,
Apni khudi ko pehchan.
Ye duniya hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2025-12-01',
        comments: getRandomComments()
    },
    {
        id: '93',
        title: 'Nothing Gold Can Stay',
        content: `Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2025-12-02',
        comments: getRandomComments()
    },
    {
        id: '94',
        title: 'Shab-e-Wisaal',
        content: `شبِ وصال کی خواہش ہے ایسی،
جو ہر دل میں اتر جائے۔
یہ عشق ہے، یہ جنوں ہے،
جو ہر سانس میں بستا ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Romantic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2025-12-03',
        comments: getRandomComments()
    },
    {
        id: '95',
        title: 'Zindagi Ka Raaz (Part 2)',
        content: `Zindagi ka raaz kuch aisa hai,
Jo samajh jaye to sab kuch hai.
Ye safar hai, ye manzil hai,
Har lamha ek naya imtehan hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2025-12-04',
        comments: getRandomComments()
    },
    {
        id: '96',
        title: 'Mahi Mera',
        content: `Mahi mera, dildar mera,
Tere bina jeena mushkil hai.
Har saah de naal tera naam lena,
Tere bin mera koi na wajood kita.`,
        author: 'Mansoor Malangi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 440,
        rating: 4.7,
        liked: true,
        date: '2025-12-05',
        comments: getRandomComments()
    },
    {
        id: '97',
        title: 'Bulleh Shah Ishq Di Baat',
        content: `Ishq di baat hai wakhri,
Jithe jaave ishq, othe rab disda.
Bulleh Shah ishq di agg vich,
Har shai nu jala ditta.`,
        author: 'Bulleh Shah',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 590,
        rating: 4.9,
        liked: true,
        date: '2025-12-06',
        comments: getRandomComments()
    },
    {
        id: '98',
        title: 'Rumi on Unity',
        content: `The lamps are different, but the Light is the same.`,
        author: 'Rumi',
        category: 'Peace',
        language: 'Farsi',
        lines: '1 Line',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2025-12-07',
        comments: getRandomComments()
    },
    {
        id: '99',
        title: 'Oscar Wilde on Experience',
        content: `Experience is simply the name we give our mistakes.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 500,
        rating: 4.8,
        liked: false,
        date: '2025-12-08',
        comments: getRandomComments()
    },
    {
        id: '100',
        title: 'Aankhon Ki Zubaan',
        content: `Aankhon ki zubaan kuch aisi hai,
Jo lafzon mein bayan na ho.
Ye ishq hai, ye ehsaas hai,
Jo sirf dil hi dil mein rahe.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2025-12-09',
        comments: getRandomComments()
    },
    {
        id: '101',
        title: 'The Silent Whispers of Love',
        content: `In realms unseen, where true emotions dwell,
A love profound, a story words can't tell.
It lingers in the air, a gentle breeze,
Bringing comfort, putting hearts at ease.`,
        author: 'John Keats',
        category: 'Love',
        language: 'English',
        lines: '4 Lines',
        likes: 310,
        rating: 4.9,
        liked: true,
        date: '2025-12-10',
        comments: getRandomComments()
    },
    {
        id: '102',
        title: 'Sehmi Hui Khamoshi',
        content: `سہمی ہوئی خاموشی، تنہا ہے ہر گلی،
شہرِ دل میں ہے اب صرف ویرانی۔
کس سے کہیں اپنا دردِ دل، اے دوست،
ہر شے ہے آج یہاں پر اجنبی۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 380,
        rating: 4.6,
        liked: false,
        date: '2025-12-11',
        comments: getRandomComments()
    },
    {
        id: '103',
        title: 'Har Safar Ik Kahani',
        content: `Har safar ik nayi kahani hai,
Har lamha ik nayi rawani hai.
Gir ke uthna, uth ke chalna,
Yehi to asal zindagani hai.`,
        author: 'Wasi Shah',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 410,
        rating: 4.7,
        liked: true,
        date: '2025-12-12',
        comments: getRandomComments()
    },
    {
        id: '104',
        title: 'Manzil Ki Lagan',
        content: `منزل کی لگن میں یوں گم ہیں،
کہ راہوں کی تھکان بھول گئے ہیں۔
عزمِ عالی ہے جب اپنا ساتھی،
پھر کیسے بھلا پیچھے ہٹیں گے؟`,
        author: 'Mirza Ghalib',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2025-12-13',
        comments: getRandomComments()
    },
    {
        id: '105',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2025-12-14',
        comments: getRandomComments()
    },
    {
        id: '106',
        title: 'Ya Rab Tera Karam',
        content: `Ya Rab, tera karam hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Qateel Shifai',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2025-12-15',
        comments: getRandomComments()
    },
    {
        id: '107',
        title: 'Zehan Ki Gehraiyan',
        content: `ذہن کی گہرائیاں، دل کے پیچ و خم،
کس نے سمجھا ہے اس راز کو بھلا۔
ہر لفظ میں ہے اک نیا معنی پنہاں،
یہ شاعری ہے یا کوئی فلسفہ۔`,
        author: 'Parveen Shakir',
        category: 'Deep',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.8,
        liked: true,
        date: '2025-12-16',
        comments: getRandomComments()
    },
    {
        id: '108',
        title: 'Dhola Mera',
        content: `Dhola mera pardes gaya,
Meri akh vich athru aa gaya.
Kis ko sunawan dukh aapna,
Meri zindri te rog pe gaya.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 370,
        rating: 4.5,
        liked: false,
        date: '2025-12-17',
        comments: getRandomComments()
    },
    {
        id: '109',
        title: 'Noor-e-Hidayat',
        content: `Noor-e-Hidayat hai dil mein,
Har pal hai Rab ki yaad.
Apni rooh ko pak kar,
Tabhi milega Rab ka sath.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 530,
        rating: 4.9,
        liked: true,
        date: '2025-12-18',
        comments: getRandomComments()
    },
    {
        id: '110',
        title: 'The Poet\'s Lament',
        content: `Oh, what a tangled web we weave,
When first we practice to deceive!`,
        author: 'Walter Scott',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2025-12-19',
        comments: getRandomComments()
    },
    {
        id: '111',
        title: 'Zindagi Ki Roshni',
        content: `Zindagi ki roshni hai kuch aisi,
Kabhi ujala, kabhi andhera.
Har safar mein hai ik naya mod,
Yehi to hai iska khel.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 420,
        rating: 4.7,
        liked: false,
        date: '2025-12-20',
        comments: getRandomComments()
    },
    {
        id: '112',
        title: 'Jashn-e-Eid',
        content: `جشنِ عید ہے ہر سو،
خوشیوں کا سماں ہے۔
رب کی ہے یہ عنایت،
ہر دل میں ہے مسکان۔`,
        author: 'Ahmed Faraz',
        category: 'Eid',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.9,
        liked: true,
        date: '2025-12-21',
        comments: getRandomComments()
    },
    {
        id: '113',
        title: 'Pak Watan',
        content: `Pak watan ki shan hai aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Qateel Shifai',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2025-12-22',
        comments: getRandomComments()
    },
    {
        id: '114',
        title: 'A Lover\'s Plea',
        content: `If music be the food of love, play on;
Give me excess of it, that, surfeiting,
The appetite may sicken, and so die.`,
        author: 'William Shakespeare',
        category: 'Romantic',
        language: 'English',
        lines: 'Larger',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2025-12-23',
        comments: getRandomComments()
    },
    {
        id: '115',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے ایسا سچ،
جو ہر دل میں بستا ہے۔
یہ خاموشی ہے یا کوئی درد،
جو اندر ہی اندر گھلتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.6,
        liked: false,
        date: '2025-12-24',
        comments: getRandomComments()
    },
    {
        id: '116',
        title: 'Dil Ki Kitab',
        content: `Dil ki kitab mein tera naam hai,
Har warka pe teri tasveer hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tera khayal hai.`,
        author: 'Wasi Shah',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: true,
        date: '2025-12-25',
        comments: getRandomComments()
    },
    {
        id: '117',
        title: 'Dostaan Naal',
        content: `Dostaan naal masti ae,
Har pal khushiyan di basti ae.
Na koi gham, na koi dard,
Bas yaariyan di jannat ae.`,
        author: 'Nusrat Fateh Ali Khan',
        category: 'Friendship',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 440,
        rating: 4.7,
        liked: true,
        date: '2025-12-26',
        comments: getRandomComments()
    },
    {
        id: '118',
        title: 'Bulleh Shah Ka Paigham',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 540,
        rating: 4.9,
        liked: true,
        date: '2025-12-27',
        comments: getRandomComments()
    },
    {
        id: '119',
        title: 'Carpe Diem',
        content: `Gather ye rosebuds while ye may,
Old Time is still a-flying;
And this same flower that smiles today,
Tomorrow will be dying.`,
        author: 'Robert Herrick',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2025-12-28',
        comments: getRandomComments()
    },
    {
        id: '120',
        title: 'Khuda Ki Qudrat',
        content: `Khuda ki qudrat hai aisi,
Har shai mein hai uski shan.
Ye duniya hai, ye imtehan hai,
Bas sabar rakh, aur shukr kar.`,
        author: 'Qateel Shifai',
        category: 'Islamic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2025-12-29',
        comments: getRandomComments()
    },
    {
        id: '121',
        title: 'Phoolon Ki Waadi',
        content: `پھولوں کی وادی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انمول تحفہ،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2025-12-30',
        comments: getRandomComments()
    },
    {
        id: '122',
        title: 'Himmat Na Haro',
        content: `Himmat na haro, chalte raho,
Manzil khud hi mil jayegi.
Har mushkil mein hai asani,
Bas hausla rakh, aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2025-12-31',
        comments: getRandomComments()
    },
    {
        id: '123',
        title: 'The Echoing Green',
        content: `The Sun does arise,
And make happy the skies.
The merry bells ring
To welcome the Spring.`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-01-01',
        comments: getRandomComments()
    },
    {
        id: '124',
        title: 'Dard Ki Intiha',
        content: `درد کی انتہا ہے یہ کیسی،
جو ہر سانس میں گھلتی ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: false,
        date: '2026-01-02',
        comments: getRandomComments()
    },
    {
        id: '125',
        title: 'Ishq Ki Dunya',
        content: `Ishq ki dunya hai ajeeb,
Jahan har shai hai mehboob.
Ye dil hai ya koi deewana,
Jo har pal teri yaad mein dooba.`,
        author: 'Wasi Shah',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2026-01-03',
        comments: getRandomComments()
    },
    {
        id: '126',
        title: 'Haseen Jori',
        content: `Haseen jori hai hamari,
Rab ne banayi hai anokhi.
Na chhodenge ik duje ka sath,
Ye pyaar hai hamara, amar hai ye rishta.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-01-04',
        comments: getRandomComments()
    },
    {
        id: '127',
        title: 'Sufi Kalam',
        content: `Rab de naam te zindagi,
Har pal hai Rab di yaad.
Apni rooh nu kar saaf,
Tabhi milega Rab da sath.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2026-01-05',
        comments: getRandomComments()
    },
    {
        id: '128',
        title: 'What is Truth?',
        content: `Pilate saith unto him, What is truth?`,
        author: 'Francis Bacon',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 490,
        rating: 4.7,
        liked: false,
        date: '2026-01-06',
        comments: getRandomComments()
    },
    {
        id: '129',
        title: 'The Will to Win',
        content: `The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.`,
        author: 'Confucius',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-01-07',
        comments: getRandomComments()
    },
    {
        id: '130',
        title: 'Dil Ki Baatain',
        content: `Dil ki baatain hain kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: false,
        date: '2026-01-08',
        comments: getRandomComments()
    },
    {
        id: '131',
        title: 'Gulshan Ki Bahar',
        content: `گلشن کی بہار ہے ہر سو،
ہر پھول میں ہے اک رنگ نیا۔
یہ قدرت کا کمال ہے، یہ خدا کی عظمت،
ہر ذرہ میں ہے اس کی نشانی۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-01-09',
        comments: getRandomComments()
    },
    {
        id: '132',
        title: 'Khudi Ka Safar',
        content: `Khudi ka safar hai anokha,
Apni manzil khud bana.
Ye duniya hai, ye imtehan hai,
Bas hausla rakh, aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-01-10',
        comments: getRandomComments()
    },
    {
        id: '133',
        title: 'Friendship\'s Embrace',
        content: `A true friend is a treasure,
A bond that time cannot measure.
Through laughter and tears, they stand by,
A loyal companion, until the day we die.`,
        author: 'Anonymous',
        category: 'Friendship',
        language: 'English',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-01-11',
        comments: getRandomComments()
    },
    {
        id: '134',
        title: 'Tanhai Ka Alam',
        content: `تنہائی کا عالم ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: false,
        date: '2026-01-12',
        comments: getRandomComments()
    },
    {
        id: '135',
        title: 'Ishq Ki Dhun',
        content: `Ishq ki dhun mein kho jao,
Har gham ko bhool jao.
Ye dil hai ya koi deewana,
Jo bas tera naam leta rahe.`,
        author: 'Wasi Shah',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.8,
        liked: true,
        date: '2026-01-13',
        comments: getRandomComments()
    },
    {
        id: '136',
        title: 'Mahi De Pyaar',
        content: `Mahi de pyaar ne pagal kita,
Din raat hun chain nahin.
Har saah de naal tera naam,
Tere bina hun kuch vi nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: true,
        date: '2026-01-14',
        comments: getRandomComments()
    },
    {
        id: '137',
        title: 'Zindagi Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2026-01-15',
        comments: getRandomComments()
    },
    {
        id: '138',
        title: 'Rumi on Surrender',
        content: `Only from the heart can you touch the sky.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-01-16',
        comments: getRandomComments()
    },
    {
        id: '139',
        title: 'Benjamin Franklin\'s Wisdom',
        content: `Tell me and I forget. Teach me and I remember. Involve me and I learn.`,
        author: 'Benjamin Franklin',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2026-01-17',
        comments: getRandomComments()
    },
    {
        id: '140',
        title: 'Eid Mubarak',
        content: `Eid mubarak ho sab ko,
Khushiyon se bhara ho din.
Ye rab ki rehmat hai,
Apno ke sath ho haseen.`,
        author: 'Qateel Shifai',
        category: 'Eid',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.9,
        liked: true,
        date: '2026-01-18',
        comments: getRandomComments()
    },
    {
        id: '141',
        title: 'Mera Pakistan',
        content: `میرا پاکستان ہے میری جان،
اس پہ قربان ہے میرا ایمان۔
ہر ذرہ میں ہے اس کی خوشبو،
یہ ہے میری ماں، یہ ہے میری شان۔`,
        author: 'Ahmed Faraz',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-01-19',
        comments: getRandomComments()
    },
    {
        id: '142',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-01-20',
        comments: getRandomComments()
    },
    {
        id: '143',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-01-21',
        comments: getRandomComments()
    },
    {
        id: '144',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2026-01-22',
        comments: getRandomComments()
    },
    {
        id: '145',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2026-01-23',
        comments: getRandomComments()
    },
    {
        id: '146',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-01-24',
        comments: getRandomComments()
    },
    {
        id: '147',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-01-25',
        comments: getRandomComments()
    },
    {
        id: '148',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-01-26',
        comments: getRandomComments()
    },
    {
        id: '149',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-01-27',
        comments: getRandomComments()
    },
    {
        id: '150',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: false,
        date: '2026-01-28',
        comments: getRandomComments()
    },
    {
        id: '151',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: true,
        date: '2026-01-29',
        comments: getRandomComments()
    },
    {
        id: '152',
        title: 'Iqbal Ka Paigham',
        content: `Iqbal ka paigham hai yehi,
Apni khudi ko pehchan.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh, aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-01-30',
        comments: getRandomComments()
    },
    {
        id: '153',
        title: 'Truth and Lies',
        content: `A lie gets halfway around the world before the truth has a chance to get its pants on.`,
        author: 'Winston Churchill',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2026-01-31',
        comments: getRandomComments()
    },
    {
        id: '154',
        title: 'Judai Ka Gham',
        content: `جدائی کا غم ہے کچھ ایسا،
جو ہر پل تڑپائے۔
نہ کوئی چین ہے، نہ کوئی آرام،
بس تیری یاد میں آنسو بہائے۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: false,
        date: '2026-02-01',
        comments: getRandomComments()
    },
    {
        id: '155',
        title: 'Dhoka-e-Dunya',
        content: `Dhoka-e-dunya kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna, na koi begana,
Bas matlab ke yaar reh jate hain.`,
        author: 'Jaun Elia',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.8,
        liked: false,
        date: '2026-02-02',
        comments: getRandomComments()
    },
    {
        id: '156',
        title: 'The Joker\'s Grin',
        content: `Why so serious? Let's put a smile on that face!`,
        author: 'The Joker',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 500,
        rating: 4.7,
        liked: false,
        date: '2026-02-03',
        comments: getRandomComments()
    },
    {
        id: '157',
        title: 'Sufi Dil',
        content: `Sufi dil hai mera,
Ishq-e-Rab mein dooba.
Har saans mein hai Rab ka naam,
Yehi hai mera sachcha maqam.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-02-04',
        comments: getRandomComments()
    },
    {
        id: '158',
        title: 'Rumi on Truth',
        content: `Raise your words, not your voice. It is rain that grows flowers, not thunder.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-02-05',
        comments: getRandomComments()
    },
    {
        id: '159',
        title: 'Einstein\'s Wisdom',
        content: `Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.`,
        author: 'Albert Einstein',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-02-06',
        comments: getRandomComments()
    },
    {
        id: '160',
        title: 'Dua-e-Hajat',
        content: `Ya Allah, meri haajat qubool farma,
Har mushkil ko hal farma.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Qateel Shifai',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.9,
        liked: true,
        date: '2026-02-07',
        comments: getRandomComments()
    },
    {
        id: '161',
        title: 'Azaadi Ka Naghma',
        content: `آزادی کا نغمہ ہے ہر سو،
جشنِ آزادی ہے آیا۔
قربانی دی ہے لاکھوں نے،
تب جا کر یہ دن آیا۔`,
        author: 'Ahmed Faraz',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-02-08',
        comments: getRandomComments()
    },
    {
        id: '162',
        title: 'Iman Ki Roshni',
        content: `Iman ki roshni hai dil mein,
Har pal hai Rab ki yaad.
Yehi hai zindagi ka maksad,
Yehi hai asal ibadat.`,
        author: 'Allama Iqbal',
        category: 'Islamic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 5.0,
        liked: true,
        date: '2026-02-09',
        comments: getRandomComments()
    },
    {
        id: '163',
        title: 'Whispers of the Wind',
        content: `The wind whispers secrets through the trees,
A melody of rustling leaves.
It carries tales of distant lands,
And softly touches, with unseen hands.`,
        author: 'Emily Dickinson',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-02-10',
        comments: getRandomComments()
    },
    {
        id: '164',
        title: 'Toote Dil Ki Sada',
        content: `ٹوٹے دل کی صدا ہے کچھ ایسی،
جو خاموشی میں بھی سنائی دے۔
یہ درد ہے یا کوئی آواز،
جو روح کو بھی تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: false,
        date: '2026-02-11',
        comments: getRandomComments()
    },
    {
        id: '165',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.8,
        liked: true,
        date: '2026-02-12',
        comments: getRandomComments()
    },
    {
        id: '166',
        title: 'Mahi Di Yaad',
        content: `Mahi di yaad ne tarpaya,
Din raat mainu rulaya.
Akh vich athru, dil vich dard,
Meri zindri mukdi jandi ae.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2026-02-13',
        comments: getRandomComments()
    },
    {
        id: '167',
        title: 'Waris Shah De Bol',
        content: `Waris Shah de bol ne sache,
Ishq da raaz dasde ne.
Har dil vich hai Rab da noor,
Te ishq di mehek aandi ae.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-02-14',
        comments: getRandomComments()
    },
    {
        id: '168',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-02-15',
        comments: getRandomComments()
    },
    {
        id: '169',
        title: 'The Unstoppable Spirit',
        content: `The human spirit is indomitable,
It rises above every obstacle.
With strength and grace, it moves on,
A beacon of hope, until the break of dawn.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-02-16',
        comments: getRandomComments()
    },
    {
        id: '170',
        title: 'Dosti Ka Rishta',
        content: `Dosti ka rishta hai anmol,
Jo kabhi na toote.
Har sukh dukh mein sath hai,
Yehi hai asal dosti ka mol.`,
        author: 'Mohsin Naqvi',
        category: 'Friendship',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.8,
        liked: true,
        date: '2026-02-17',
        comments: getRandomComments()
    },
    {
        id: '171',
        title: 'Chand Aur Sitare',
        content: `چاند اور ستارے ہیں گواہ،
تیری یادوں کے ہر پل کے۔
یہ رات ہے، یہ خاموشی ہے،
بس تیری الفت کی پناہ۔`,
        author: 'Parveen Shakir',
        category: 'Romantic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-02-18',
        comments: getRandomComments()
    },
    {
        id: '172',
        title: 'Junoon-e-Parwaaz',
        content: `Junoon-e-parwaaz hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 5.0,
        liked: true,
        date: '2026-02-19',
        comments: getRandomComments()
    },
    {
        id: '173',
        title: 'The Power of Words',
        content: `Words are seeds,
And they sprout thoughts,
That shape our deeds,
And forge our lots.`,
        author: 'Ralph Waldo Emerson',
        category: 'Quotes',
        language: 'English',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-02-20',
        comments: getRandomComments()
    },
    {
        id: '174',
        title: 'Gham-e-Dunya',
        content: `غمِ دنیا ہے ایسا سچ،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: false,
        date: '2026-02-21',
        comments: getRandomComments()
    },
    {
        id: '175',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2026-02-22',
        comments: getRandomComments()
    },
    {
        id: '176',
        title: 'Pyara Bandhan',
        content: `Pyara bandhan hai tera mera,
Jaan se bhi pyara.
Na chhodunga tera saath,
Yehi hai mera wada.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: true,
        date: '2026-02-23',
        comments: getRandomComments()
    },
    {
        id: '177',
        title: 'Bulleh Shah Di Nazar',
        content: `Bulleh Shah di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 590,
        rating: 4.9,
        liked: true,
        date: '2026-02-24',
        comments: getRandomComments()
    },
    {
        id: '178',
        title: 'Hafez on the Soul',
        content: `The soul is a divine ocean.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-02-25',
        comments: getRandomComments()
    },
    {
        id: '179',
        title: 'Attitude of Gratitude',
        content: `Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.`,
        author: 'Brian Tracy',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-02-26',
        comments: getRandomComments()
    },
    {
        id: '180',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: false,
        date: '2026-02-27',
        comments: getRandomComments()
    },
    {
        id: '181',
        title: 'Haseen Nazare',
        content: `حسین نظارے ہیں ہر سو،
قدرت کا ہے یہ کمال۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2026-02-28',
        comments: getRandomComments()
    },
    {
        id: '182',
        title: 'Azm Ki Bulandi',
        content: `Azm ki bulandi hai aisi,
Jo har mushkil ko hara de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 5.0,
        liked: true,
        date: '2026-03-01',
        comments: getRandomComments()
    },
    {
        id: '183',
        title: 'The Raven',
        content: `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—`,
        author: 'Edgar Allan Poe',
        category: 'Deep',
        language: 'English',
        lines: '2 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2026-03-02',
        comments: getRandomComments()
    },
    {
        id: '184',
        title: 'Wafa Ka Safar',
        content: `وفا کا سفر ہے ایسا سچ،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-03-03',
        comments: getRandomComments()
    },
    {
        id: '185',
        title: 'Zindagi Ki Dhun',
        content: `Zindagi ki dhun hai kuch aisi,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.8,
        liked: false,
        date: '2026-03-04',
        comments: getRandomComments()
    },
    {
        id: '186',
        title: 'Yaar Di Dosty',
        content: `Yaar di dosty hai aisi,
Jo jaan se bhi pyari.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-03-05',
        comments: getRandomComments()
    },
    {
        id: '187',
        title: 'Punjabi Sufi Kalam',
        content: `Rab labhda dil de andar,
Kyun phirda ae baahar tu.
Apni rooh nu kar saaf,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-03-06',
        comments: getRandomComments()
    },
    {
        id: '188',
        title: 'Rumi on Love\'s Fire',
        content: `Do not feel lonely, the entire universe is inside you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-03-07',
        comments: getRandomComments()
    },
    {
        id: '189',
        title: 'Funny Philosophy',
        content: `I'm not lazy, I'm just on energy-saving mode.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 530,
        rating: 4.8,
        liked: false,
        date: '2026-03-08',
        comments: getRandomComments()
    },
    {
        id: '190',
        title: 'Dil Ki Dunya',
        content: `Dil ki dunya hai kuch aisi,
Jahan har shai hai mehboob.
Ye ishq hai ya koi junoon,
Jo har pal teri yaad mein dooba.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.8,
        liked: true,
        date: '2026-03-09',
        comments: getRandomComments()
    },
    {
        id: '191',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2026-03-10',
        comments: getRandomComments()
    },
    {
        id: '192',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 5.0,
        liked: true,
        date: '2026-03-11',
        comments: getRandomComments()
    },
    {
        id: '193',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-03-12',
        comments: getRandomComments()
    },
    {
        id: '194',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: false,
        date: '2026-03-13',
        comments: getRandomComments()
    },
    {
        id: '195',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2026-03-14',
        comments: getRandomComments()
    },
    {
        id: '196',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: true,
        date: '2026-03-15',
        comments: getRandomComments()
    },
    {
        id: '197',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-03-16',
        comments: getRandomComments()
    },
    {
        id: '198',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2026-03-17',
        comments: getRandomComments()
    },
    {
        id: '199',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2026-03-18',
        comments: getRandomComments()
    },
    {
        id: '200',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2026-03-19',
        comments: getRandomComments()
    },
    {
        id: '201',
        title: 'Dawn\'s Gentle Embrace',
        content: `As morning paints the sky with golden hue,
A gentle breeze, carrying dreams anew.
The world awakens, bathed in softest light,
A canvas waiting, fresh from darkest night.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 350,
        rating: 4.8,
        liked: true,
        date: '2026-03-20',
        comments: getRandomComments()
    },
    {
        id: '202',
        title: 'Khamosh Sham',
        content: `خاموش شام ہے، دل میں ہے ویرانی،
تیری یادوں سے بجھ گئی ہر کہانی۔
تنہا میں بیٹھا ہوں، آنکھوں میں نمی،
کیا کروں اس بے بس زندگی کا؟`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: false,
        date: '2026-03-21',
        comments: getRandomComments()
    },
    {
        id: '203',
        title: 'Rooh Ka Safar',
        content: `Rooh ka safar hai kuch aisa,
Jo manzil se bekhabar hai.
Har mod pe naya raaz,
Ye zindagi hai ya koi aaina.`,
        author: 'Wasi Shah',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: true,
        date: '2026-03-22',
        comments: getRandomComments()
    },
    {
        id: '204',
        title: 'Jazba-e-Zindagi',
        content: `جذبہِ زندگی ہے ہر سو،
ہر چیلنج میں ہے اک موقع۔
کبھی نہ ہار مانو تم،
یہی ہے کامیابی کا نشان۔`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-03-23',
        comments: getRandomComments()
    },
    {
        id: '205',
        title: 'The Only Way',
        content: `The only way to do great work is to love what you do.`,
        author: 'Steve Jobs',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-03-24',
        comments: getRandomComments()
    },
    {
        id: '206',
        title: 'Bakhshish Ki Dua',
        content: `Ya Rab, bakhshish farma hamari,
Har gunah ko maaf kar de.
Hamari tobas hai, tu hi Qadir,
Apni rehmat se nawaz de.`,
        author: 'Anonymous',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: false,
        date: '2026-03-25',
        comments: getRandomComments()
    },
    {
        id: '207',
        title: 'Safar-e-Ishq',
        content: `سفرِ عشق میں ہے ہر سو امتحان،
دل میں جل رہا ہے تیری یاد کا دیوان۔
ہر قدم پہ ہے نیا غم، نیا درد،
یہ زندگی ہے یا کوئی طوفان۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.8,
        liked: true,
        date: '2026-03-26',
        comments: getRandomComments()
    },
    {
        id: '208',
        title: 'Yaadan Teriyan',
        content: `Yaadan teriyan sataundiyan ne,
Din raat mainu rulaundiyan ne.
Kithon aawan, kithon jaawan,
Tere bina hun jeevan aukha.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 390,
        rating: 4.5,
        liked: false,
        date: '2026-03-27',
        comments: getRandomComments()
    },
    {
        id: '209',
        title: 'Tasawwuf Ka Raaz',
        content: `Tasawwuf ka raaz hai kuch aisa,
Jo har dil mein sama jaye.
Rab ka noor hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2026-03-28',
        comments: getRandomComments()
    },
    {
        id: '210',
        title: 'The Journey of a Thousand Miles',
        content: `A journey of a thousand miles begins with a single step.`,
        author: 'Lao Tzu',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-03-29',
        comments: getRandomComments()
    },
    {
        id: '211',
        title: 'Zindagi Ki Roshni',
        content: `Zindagi ki roshni hai kuch aisi,
Kabhi ujala, kabhi andhera.
Har lamha ik naya mod,
Bas chalte hi rehna hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 440,
        rating: 4.6,
        liked: false,
        date: '2026-03-30',
        comments: getRandomComments()
    },
    {
        id: '212',
        title: 'Shab-e-Qadar',
        content: `شبِ قدر ہے، رحمتوں کا نزول،
ہر دعا ہے آج قبول.
مغفرت مانگو، گناہوں کی معافی،
یہ ہے رب کا انمول فیض۔`,
        author: 'Qateel Shifai',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-03-31',
        comments: getRandomComments()
    },
    {
        id: '213',
        title: 'Hum Hain Pakistani',
        content: `Hum hain Pakistani, hamari shan,
Is watan pe qurban hai har jaan.
Jazba-e-jihad hai dil mein,
Yehi hai hamara imaan.`,
        author: 'Mohsin Naqvi',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-04-01',
        comments: getRandomComments()
    },
    {
        id: '214',
        title: 'Sonnet 29',
        content: `When, in disgrace with fortune and men’s eyes,
I all alone beweep my outcast state,`,
        author: 'William Shakespeare',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 630,
        rating: 4.8,
        liked: false,
        date: '2026-04-02',
        comments: getRandomComments()
    },
    {
        id: '215',
        title: 'Gham-e-Zindagi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 450,
        rating: 4.6,
        liked: false,
        date: '2026-04-03',
        comments: getRandomComments()
    },
    {
        id: '216',
        title: 'Dil Ka Afsana',
        content: `Dil ka afsana kuch aisa hai,
Jo khud ko hi sunata hai.
Na koi sathi, na koi hamdard,
Bas tanhai ka sath rehta hai.`,
        author: 'Wasi Shah',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: false,
        date: '2026-04-04',
        comments: getRandomComments()
    },
    {
        id: '217',
        title: 'Yaariyan Zindabad',
        content: `Yaariyan zindabad, yehi hai sach,
Har mushkil mein saath hai yaar.
Na koi gham, na koi dard,
Bas dosti ka hai pyaar.`,
        author: 'Nusrat Fateh Ali Khan',
        category: 'Friendship',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: true,
        date: '2026-04-05',
        comments: getRandomComments()
    },
    {
        id: '218',
        title: 'Rumi on Silence',
        content: `The quieter you become, the more you can hear.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-04-06',
        comments: getRandomComments()
    },
    {
        id: '219',
        title: 'The Value of Time',
        content: `Time is what we want most, but what we use worst.`,
        author: 'William Penn',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2026-04-07',
        comments: getRandomComments()
    },
    {
        id: '220',
        title: 'Jahan-e-Ishq',
        content: `Jahan-e-ishq hai kuch aisa,
Jahan har shai hai mehboob.
Ye dil hai ya koi deewana,
Jo har pal teri yaad mein dooba.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: true,
        date: '2026-04-08',
        comments: getRandomComments()
    },
    {
        id: '221',
        title: 'Barish Ka Mausam',
        content: `بارش کا موسم ہے کچھ ایسا،
جو دل کو بھی تر کر دے۔
ہر قطر ہے ایک کہانی،
یہ موسم ہے یا کوئی جادو۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2026-04-09',
        comments: getRandomComments()
    },
    {
        id: '222',
        title: 'Khudi Ka Junoon',
        content: `Khudi ka junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-04-10',
        comments: getRandomComments()
    },
    {
        id: '223',
        title: 'The Human Spirit',
        content: `The human spirit is more powerful than any drug and that is what needs to be nourished: with work, play, friendship, family. These are the things that matter.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-04-11',
        comments: getRandomComments()
    },
    {
        id: '224',
        title: 'Tanhai Ka Naghma',
        content: `تنہائی کا نغمہ ہے ہر سو،
دل میں بس ایک تیری ہی یاد رہے۔
یہ زندگی ہے یا کوئی سراب،
جہاں ہر پل تیرا ہی انتظار رہے۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 460,
        rating: 4.6,
        liked: false,
        date: '2026-04-12',
        comments: getRandomComments()
    },
    {
        id: '225',
        title: 'Zindagi Ka Raaz',
        content: `Zindagi ka raaz hai gehra,
Samajh aaye to sab kuch hai.
Kabhi khushi, kabhi gham ka mel,
Ye safar chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: true,
        date: '2026-04-13',
        comments: getRandomComments()
    },
    {
        id: '226',
        title: 'Dil Ki Pukar',
        content: `Dil ki pukar hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 400,
        rating: 4.6,
        liked: true,
        date: '2026-04-14',
        comments: getRandomComments()
    },
    {
        id: '227',
        title: 'Bulleh Shah Ki Sohni',
        content: `Bulleh Shah ki sohni hai,
Jithe Rab da noor wasda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2026-04-15',
        comments: getRandomComments()
    },
    {
        id: '228',
        title: 'Albert Einstein on Imagination',
        content: `Imagination is everything. It is the preview of life's coming attractions.`,
        author: 'Albert Einstein',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-04-16',
        comments: getRandomComments()
    },
    {
        id: '229',
        title: 'Bruce Lee\'s Philosophy',
        content: `Empty your mind, be nameless, be formless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.`,
        author: 'Bruce Lee',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-04-17',
        comments: getRandomComments()
    },
    {
        id: '230',
        title: 'Dostana Mohabbat',
        content: `Dostana mohabbat hai kuch aisi,
Jo har dil ko jod de.
Na koi gham, na koi dard,
Bas dosti ka hi saath de.`,
        author: 'Mohsin Naqvi',
        category: 'Friendship',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2026-04-18',
        comments: getRandomComments()
    },
    {
        id: '231',
        title: 'Phoolon Ki Waadi',
        content: `پھولوں کی وادی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انمول تحفہ،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2026-04-19',
        comments: getRandomComments()
    },
    {
        id: '232',
        title: 'Khudi Ka Safar',
        content: `Khudi ka safar hai anokha,
Apni manzil khud bana.
Ye duniya hai, ye imtehan hai,
Bas hausla rakh, aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-04-20',
        comments: getRandomComments()
    },
    {
        id: '233',
        title: 'The Last Leaf',
        content: `It was a morning of a new day, in a world that had been saved.`,
        author: 'O. Henry',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 640,
        rating: 4.8,
        liked: true,
        date: '2026-04-21',
        comments: getRandomComments()
    },
    {
        id: '234',
        title: 'Tanhai Ka Alam',
        content: `تنہائی کا عالم ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 470,
        rating: 4.6,
        liked: false,
        date: '2026-04-22',
        comments: getRandomComments()
    },
    {
        id: '235',
        title: 'Ishq Ki Dhun',
        content: `Ishq ki dhun mein kho jao,
Har gham ko bhool jao.
Ye dil hai ya koi deewana,
Jo bas tera naam leta rahe.`,
        author: 'Wasi Shah',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: true,
        date: '2026-04-23',
        comments: getRandomComments()
    },
    {
        id: '236',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 410,
        rating: 4.5,
        liked: false,
        date: '2026-04-24',
        comments: getRandomComments()
    },
    {
        id: '237',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-04-25',
        comments: getRandomComments()
    },
    {
        id: '238',
        title: 'Confucius on Learning',
        content: `By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-04-26',
        comments: getRandomComments()
    },
    {
        id: '239',
        title: 'Funny Life',
        content: `Life is short. Smile while you still have teeth.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 520,
        rating: 4.7,
        liked: true,
        date: '2026-04-27',
        comments: getRandomComments()
    },
    {
        id: '240',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Qateel Shifai',
        category: 'Islamic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.9,
        liked: true,
        date: '2026-04-28',
        comments: getRandomComments()
    },
    {
        id: '241',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-04-29',
        comments: getRandomComments()
    },
    {
        id: '242',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 5.0,
        liked: true,
        date: '2026-04-30',
        comments: getRandomComments()
    },
    {
        id: '243',
        title: 'The Empty Glass',
        content: `An empty glass, a silent prayer,
A heart longing for someone there.
In every void, a story waits,
Of love and loss, and open gates.`,
        author: 'Emily Dickinson',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: false,
        date: '2026-05-01',
        comments: getRandomComments()
    },
    {
        id: '244',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: true,
        date: '2026-05-02',
        comments: getRandomComments()
    },
    {
        id: '245',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2026-05-03',
        comments: getRandomComments()
    },
    {
        id: '246',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-05-04',
        comments: getRandomComments()
    },
    {
        id: '247',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 590,
        rating: 4.9,
        liked: true,
        date: '2026-05-05',
        comments: getRandomComments()
    },
    {
        id: '248',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-05-06',
        comments: getRandomComments()
    },
    {
        id: '249',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 550,
        rating: 4.8,
        liked: true,
        date: '2026-05-07',
        comments: getRandomComments()
    },
    {
        id: '250',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.8,
        liked: true,
        date: '2026-05-08',
        comments: getRandomComments()
    },
    {
        id: '251',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-05-09',
        comments: getRandomComments()
    },
    {
        id: '252',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 5.0,
        liked: true,
        date: '2026-05-10',
        comments: getRandomComments()
    },
    {
        id: '253',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-05-11',
        comments: getRandomComments()
    },
    {
        id: '254',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.8,
        liked: false,
        date: '2026-05-12',
        comments: getRandomComments()
    },
    {
        id: '255',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2026-05-13',
        comments: getRandomComments()
    },
    {
        id: '256',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: true,
        date: '2026-05-14',
        comments: getRandomComments()
    },
    {
        id: '257',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-05-15',
        comments: getRandomComments()
    },
    {
        id: '258',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2026-05-16',
        comments: getRandomComments()
    },
    {
        id: '259',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2026-05-17',
        comments: getRandomComments()
    },
    {
        id: '260',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: false,
        date: '2026-05-18',
        comments: getRandomComments()
    },
    {
        id: '261',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.9,
        liked: true,
        date: '2026-05-19',
        comments: getRandomComments()
    },
    {
        id: '262',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 5.0,
        liked: true,
        date: '2026-05-20',
        comments: getRandomComments()
    },
    {
        id: '263',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-05-21',
        comments: getRandomComments()
    },
    {
        id: '264',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.7,
        liked: false,
        date: '2026-05-22',
        comments: getRandomComments()
    },
    {
        id: '265',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-05-23',
        comments: getRandomComments()
    },
    {
        id: '266',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: true,
        date: '2026-05-24',
        comments: getRandomComments()
    },
    {
        id: '267',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-05-25',
        comments: getRandomComments()
    },
    {
        id: '268',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-05-26',
        comments: getRandomComments()
    },
    {
        id: '269',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 570,
        rating: 4.8,
        liked: false,
        date: '2026-05-27',
        comments: getRandomComments()
    },
    {
        id: '270',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.8,
        liked: true,
        date: '2026-05-28',
        comments: getRandomComments()
    },
    {
        id: '271',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-05-29',
        comments: getRandomComments()
    },
    {
        id: '272',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 5.0,
        liked: true,
        date: '2026-05-30',
        comments: getRandomComments()
    },
    {
        id: '273',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-05-31',
        comments: getRandomComments()
    },
    {
        id: '274',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.7,
        liked: false,
        date: '2026-06-01',
        comments: getRandomComments()
    },
    {
        id: '275',
        title: 'Waqt Ki Chaal',
        content: `Waqt ki chaal hai kuch aisi,
Jo har shakhs ko badal de.
Na koi apna, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.8,
        liked: false,
        date: '2026-06-02',
        comments: getRandomComments()
    },
    {
        id: '276',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 420,
        rating: 4.5,
        liked: false,
        date: '2026-06-03',
        comments: getRandomComments()
    },
    {
        id: '277',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2026-06-04',
        comments: getRandomComments()
    },
    {
        id: '278',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2026-06-05',
        comments: getRandomComments()
    },
    {
        id: '279',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 580,
        rating: 4.8,
        liked: false,
        date: '2026-06-06',
        comments: getRandomComments()
    },
    {
        id: '280',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.9,
        liked: true,
        date: '2026-06-07',
        comments: getRandomComments()
    },
    {
        id: '281',
        title: 'Subah-e-Bahar',
        content: `صبحِ بہار ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-06-08',
        comments: getRandomComments()
    },
    {
        id: '282',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 5.0,
        liked: true,
        date: '2026-06-09',
        comments: getRandomComments()
    },
    {
        id: '283',
        title: 'The Light of Hope',
        content: `Even in darkness, light can be found.`,
        author: 'Victor Hugo',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-06-10',
        comments: getRandomComments()
    },
    {
        id: '284',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2026-06-11',
        comments: getRandomComments()
    },
    {
        id: '285',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.8,
        liked: false,
        date: '2026-06-12',
        comments: getRandomComments()
    },
    {
        id: '286',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 430,
        rating: 4.6,
        liked: true,
        date: '2026-06-13',
        comments: getRandomComments()
    },
    {
        id: '287',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-06-14',
        comments: getRandomComments()
    },
    {
        id: '288',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-06-15',
        comments: getRandomComments()
    },
    {
        id: '289',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 590,
        rating: 4.8,
        liked: true,
        date: '2026-06-16',
        comments: getRandomComments()
    },
    {
        id: '290',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.7,
        liked: false,
        date: '2026-06-17',
        comments: getRandomComments()
    },
    {
        id: '291',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-06-18',
        comments: getRandomComments()
    },
    {
        id: '292',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 740,
        rating: 5.0,
        liked: true,
        date: '2026-06-19',
        comments: getRandomComments()
    },
    {
        id: '293',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 700,
        rating: 4.9,
        liked: false,
        date: '2026-06-20',
        comments: getRandomComments()
    },
    {
        id: '294',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.7,
        liked: false,
        date: '2026-06-21',
        comments: getRandomComments()
    },
    {
        id: '295',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: false,
        date: '2026-06-22',
        comments: getRandomComments()
    },
    {
        id: '296',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 440,
        rating: 4.6,
        liked: true,
        date: '2026-06-23',
        comments: getRandomComments()
    },
    {
        id: '297',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-06-24',
        comments: getRandomComments()
    },
    {
        id: '298',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2026-06-25',
        comments: getRandomComments()
    },
    {
        id: '299',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-06-26',
        comments: getRandomComments()
    },
    {
        id: '300',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.8,
        liked: false,
        date: '2026-06-27',
        comments: getRandomComments()
    },
    {
        id: '301',
        title: 'The Silent Listener',
        content: `In quiet moments, when thoughts take flight,
A silent listener, bathed in moonlit night.
The world sleeps softly, secrets gently kept,
While dreams unfold, and promises are swept.`,
        author: 'Emily Dickinson',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-06-28',
        comments: getRandomComments()
    },
    {
        id: '302',
        title: 'Sham-e-Yaad',
        content: `شامِ یاد میں دل پھر تڑپ اٹھا،
جب ہر ذرہ میں تیرا عکس دیکھا۔
خاموشی بولتی ہے، تنہائی گاتی ہے،
یہ ہجر کا موسم، کب ختم ہو گا؟`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.7,
        liked: false,
        date: '2026-06-29',
        comments: getRandomComments()
    },
    {
        id: '303',
        title: 'Zindagi Ka Raaz-e-Nihan',
        content: `Zindagi ka raaz-e-nihan kuch aisa hai,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2026-06-30',
        comments: getRandomComments()
    },
    {
        id: '304',
        title: 'Jazba-e-Junoon',
        content: `جذبہِ جنوں میں یوں مگن ہیں،
کہ راہوں کی تھکان بھول گئے ہیں۔
عزمِ عالی ہے جب اپنا ساتھی،
پھر کیسے بھلا پیچھے ہٹیں گے؟`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 5.0,
        liked: true,
        date: '2026-07-01',
        comments: getRandomComments()
    },
    {
        id: '305',
        title: 'The Purpose of Life',
        content: `The purpose of our lives is to be happy.`,
        author: 'Dalai Lama XIV',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-07-02',
        comments: getRandomComments()
    },
    {
        id: '306',
        title: 'Dua-e-Shukr',
        content: `Ya Rabb, tera shukr hai har pal,
Har nemat pe tera shukr.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Anonymous',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-07-03',
        comments: getRandomComments()
    },
    {
        id: '307',
        title: 'Ishq Ka Darya',
        content: `عشق کا دریا ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2026-07-04',
        comments: getRandomComments()
    },
    {
        id: '308',
        title: 'Mahi De Khawab',
        content: `Mahi de khawab ne pagal kita,
Din raat mainu rulaya.
Akh vich athru, dil vich dard,
Meri zindri mukdi jandi ae.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 450,
        rating: 4.7,
        liked: false,
        date: '2026-07-05',
        comments: getRandomComments()
    },
    {
        id: '309',
        title: 'Bulleh Shah Di Nazar',
        content: `Bulleh Shah di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-07-06',
        comments: getRandomComments()
    },
    {
        id: '310',
        title: 'The Dash',
        content: `For when your eulogy is being read,
With your life's actions to rehash,
Would you be proud of the things they said,
To describe your dash?`,
        author: 'Linda Ellis',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-07-07',
        comments: getRandomComments()
    },
    {
        id: '311',
        title: 'Khali Haath',
        content: `Khali haath aaye the, khali haath jayenge,
Duniya mein kya laye the, kya le jayenge.
Ye zindagi hai, ye fanah hai,
Bas apni manzil ko pa le tu.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: false,
        date: '2026-07-08',
        comments: getRandomComments()
    },
    {
        id: '312',
        title: 'Jashn-e-Azadi',
        content: `جشنِ آزادی ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
قربانی دی ہے لاکھوں نے،
تب جا کر یہ دن آیا۔`,
        author: 'Ahmed Faraz',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-07-09',
        comments: getRandomComments()
    },
    {
        id: '313',
        title: 'The Sun Still Rises',
        content: `The sun also rises, and the sun goes down, and hastens to his place where he arose.`,
        author: 'King Solomon (Ecclesiastes)',
        category: 'Deep',
        language: 'English',
        lines: 'Larger',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-07-10',
        comments: getRandomComments()
    },
    {
        id: '314',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.7,
        liked: false,
        date: '2026-07-11',
        comments: getRandomComments()
    },
    {
        id: '315',
        title: 'Zindagi Ka Raaz-e-Hayat',
        content: `Zindagi ka raaz-e-hayat kuch aisa hai,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-07-12',
        comments: getRandomComments()
    },
    {
        id: '316',
        title: 'Pyar Ka Rishta',
        content: `Pyar ka rishta hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 510,
        rating: 4.7,
        liked: true,
        date: '2026-07-13',
        comments: getRandomComments()
    },
    {
        id: '317',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 570,
        rating: 4.9,
        liked: true,
        date: '2026-07-14',
        comments: getRandomComments()
    },
    {
        id: '318',
        title: 'Rumi on Love\'s Language',
        content: `Love is the bridge between you and everything.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2026-07-15',
        comments: getRandomComments()
    },
    {
        id: '319',
        title: 'Oscar Wilde on Beauty',
        content: `Beauty is a form of Genius -- is higher, indeed, than Genius, as it needs no explanation.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 590,
        rating: 4.8,
        liked: true,
        date: '2026-07-16',
        comments: getRandomComments()
    },
    {
        id: '320',
        title: 'Dua-e-Rehmat',
        content: `Ya Rab, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-07-17',
        comments: getRandomComments()
    },
    {
        id: '321',
        title: 'Badal Aur Barish',
        content: `بادل اور بارش ہیں کچھ ایسے،
جو دل کو بھی تر کر دیں۔
ہر قطر ہے ایک کہانی،
یہ موسم ہے یا کوئی جادو۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-07-18',
        comments: getRandomComments()
    },
    {
        id: '322',
        title: 'Azm Ki Bulandi',
        content: `Azm ki bulandi hai kuch aisi,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 5.0,
        liked: true,
        date: '2026-07-19',
        comments: getRandomComments()
    },
    {
        id: '323',
        title: 'The Secret of Happiness',
        content: `The secret of happiness is not in doing what one likes, but in liking what one does.`,
        author: 'James M. Barrie',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2026-07-20',
        comments: getRandomComments()
    },
    {
        id: '324',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.7,
        liked: false,
        date: '2026-07-21',
        comments: getRandomComments()
    },
    {
        id: '325',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.8,
        liked: false,
        date: '2026-07-22',
        comments: getRandomComments()
    },
    {
        id: '326',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 460,
        rating: 4.7,
        liked: true,
        date: '2026-07-23',
        comments: getRandomComments()
    },
    {
        id: '327',
        title: 'Waris Shah De Bol',
        content: `Waris Shah de bol ne sache,
Ishq da raaz dasde ne.
Har dil vich hai Rab da noor,
Te ishq di mehek aandi ae.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-07-24',
        comments: getRandomComments()
    },
    {
        id: '328',
        title: 'Confucius on Learning',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2026-07-25',
        comments: getRandomComments()
    },
    {
        id: '329',
        title: 'Funny Life Lesson',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 600,
        rating: 4.8,
        liked: false,
        date: '2026-07-26',
        comments: getRandomComments()
    },
    {
        id: '330',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.8,
        liked: true,
        date: '2026-07-27',
        comments: getRandomComments()
    },
    {
        id: '331',
        title: 'Jheel Ka Kinara',
        content: `جھیل کا کنارہ ہے کچھ ایسا،
جہاں دل کو سکون ملے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-07-28',
        comments: getRandomComments()
    },
    {
        id: '332',
        title: 'Shaheen Ka Khwab',
        content: `Shaheen ka khwab hai uncha,
Wo udta hai hadd se aage.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 5.0,
        liked: true,
        date: '2026-07-29',
        comments: getRandomComments()
    },
    {
        id: '333',
        title: 'The Empty Road',
        content: `A path untrodden, winding far,
Beneath the gaze of a distant star.
Silence whispers secrets to the night,
As shadows dance in soft moonlight.`,
        author: 'Robert Frost',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2026-07-30',
        comments: getRandomComments()
    },
    {
        id: '334',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.7,
        liked: false,
        date: '2026-07-31',
        comments: getRandomComments()
    },
    {
        id: '335',
        title: 'Waqt Ki Chaal',
        content: `Waqt ki chaal hai kuch aisi,
Jo har shakhs ko badal de.
Na koi apna, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.8,
        liked: false,
        date: '2026-08-01',
        comments: getRandomComments()
    },
    {
        id: '336',
        title: 'Tera Sath',
        content: `Tera saath chahiye, har manzil pe,
Teri yaadein hain dil mein, har pal mein.
Ye zindagi hai ya koi kahani,
Bas tere naam pe hi qurban.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-08-02',
        comments: getRandomComments()
    },
    {
        id: '337',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-08-03',
        comments: getRandomComments()
    },
    {
        id: '338',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-08-04',
        comments: getRandomComments()
    },
    {
        id: '339',
        title: 'Funny Observations',
        content: `I'm not clumsy, I'm just in a constant battle with the floor.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2026-08-05',
        comments: getRandomComments()
    },
    {
        id: '340',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.8,
        liked: false,
        date: '2026-08-06',
        comments: getRandomComments()
    },
    {
        id: '341',
        title: 'Subah-e-Watan',
        content: `صبحِ وطن ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی خوشبو،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-08-07',
        comments: getRandomComments()
    },
    {
        id: '342',
        title: 'Iqbal Ka Paigham',
        content: `Iqbal ka paigham hai yehi,
Apni khudi ko pehchan.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh, aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 780,
        rating: 5.0,
        liked: true,
        date: '2026-08-08',
        comments: getRandomComments()
    },
    {
        id: '343',
        title: 'The Poet\'s Eye',
        content: `The poet's eye, in a fine frenzy rolling,
Doth glance from heaven to earth, from earth to heaven;
And as imagination bodies forth
The forms of things unknown, the poet's pen
Turns them to shapes and gives to airy nothing
A local habitation and a name.`,
        author: 'William Shakespeare',
        category: 'Quotes',
        language: 'English',
        lines: 'Larger',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-08-09',
        comments: getRandomComments()
    },
    {
        id: '344',
        title: 'Dil Ki Sada',
        content: `دل کی صدا ہے کچھ ایسی،
جو خاموش بھی ہو تو سنائی دے۔
یہ عشق ہے، یہ احساس ہے،
جو ہر سانس میں بستا ہے۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2026-08-10',
        comments: getRandomComments()
    },
    {
        id: '345',
        title: 'Khali Dil',
        content: `Khali dil hai mera, har so gham,
Koi nahin hai yaar-e-humdam.
Ankhon mein hai aansuon ka sailab,
Ye zindagi hai ya koi sarab.`,
        author: 'Jaun Elia',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.7,
        liked: false,
        date: '2026-08-11',
        comments: getRandomComments()
    },
    {
        id: '346',
        title: 'Dosti Ka Sagar',
        content: `Dosti ka sagar hai kuch aisa,
Jo kabhi na sookhe.
Har mauj mein hai ek kahani,
Ye yaari hai apni, amar rahe.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 490,
        rating: 4.7,
        liked: true,
        date: '2026-08-12',
        comments: getRandomComments()
    },
    {
        id: '347',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-08-13',
        comments: getRandomComments()
    },
    {
        id: '348',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-08-14',
        comments: getRandomComments()
    },
    {
        id: '349',
        title: 'Short and Sweet',
        content: `Dream big. Work hard. Stay humble.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-08-15',
        comments: getRandomComments()
    },
    {
        id: '350',
        title: 'Zindagi Ki Kahani',
        content: `Zindagi ki kahani hai kuch aisi,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.7,
        liked: false,
        date: '2026-08-16',
        comments: getRandomComments()
    },
    {
        id: '351',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2026-08-17',
        comments: getRandomComments()
    },
    {
        id: '352',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 5.0,
        liked: true,
        date: '2026-08-18',
        comments: getRandomComments()
    },
    {
        id: '353',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2026-08-19',
        comments: getRandomComments()
    },
    {
        id: '354',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.7,
        liked: false,
        date: '2026-08-20',
        comments: getRandomComments()
    },
    {
        id: '355',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: true,
        date: '2026-08-21',
        comments: getRandomComments()
    },
    {
        id: '356',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 520,
        rating: 4.7,
        liked: true,
        date: '2026-08-22',
        comments: getRandomComments()
    },
    {
        id: '357',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-08-23',
        comments: getRandomComments()
    },
    {
        id: '358',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2026-08-24',
        comments: getRandomComments()
    },
    {
        id: '359',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 630,
        rating: 4.8,
        liked: false,
        date: '2026-08-25',
        comments: getRandomComments()
    },
    {
        id: '360',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.7,
        liked: false,
        date: '2026-08-26',
        comments: getRandomComments()
    },
    {
        id: '361',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2026-08-27',
        comments: getRandomComments()
    },
    {
        id: '362',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 5.0,
        liked: true,
        date: '2026-08-28',
        comments: getRandomComments()
    },
    {
        id: '363',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-08-29',
        comments: getRandomComments()
    },
    {
        id: '364',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.7,
        liked: false,
        date: '2026-08-30',
        comments: getRandomComments()
    },
    {
        id: '365',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: true,
        date: '2026-08-31',
        comments: getRandomComments()
    },
    {
        id: '366',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 470,
        rating: 4.6,
        liked: false,
        date: '2026-09-01',
        comments: getRandomComments()
    },
    {
        id: '367',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 580,
        rating: 4.9,
        liked: true,
        date: '2026-09-02',
        comments: getRandomComments()
    },
    {
        id: '368',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2026-09-03',
        comments: getRandomComments()
    },
    {
        id: '369',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 640,
        rating: 4.8,
        liked: true,
        date: '2026-09-04',
        comments: getRandomComments()
    },
    {
        id: '370',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-09-05',
        comments: getRandomComments()
    },
    {
        id: '371',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-09-06',
        comments: getRandomComments()
    },
    {
        id: '372',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 810,
        rating: 5.0,
        liked: true,
        date: '2026-09-07',
        comments: getRandomComments()
    },
    {
        id: '373',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: false,
        date: '2026-09-08',
        comments: getRandomComments()
    },
    {
        id: '374',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2026-09-09',
        comments: getRandomComments()
    },
    {
        id: '375',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: true,
        date: '2026-09-10',
        comments: getRandomComments()
    },
    {
        id: '376',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 480,
        rating: 4.7,
        liked: true,
        date: '2026-09-11',
        comments: getRandomComments()
    },
    {
        id: '377',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-09-12',
        comments: getRandomComments()
    },
    {
        id: '378',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2026-09-13',
        comments: getRandomComments()
    },
    {
        id: '379',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2026-09-14',
        comments: getRandomComments()
    },
    {
        id: '380',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2026-09-15',
        comments: getRandomComments()
    },
    {
        id: '381',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-09-16',
        comments: getRandomComments()
    },
    {
        id: '382',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 820,
        rating: 5.0,
        liked: true,
        date: '2026-09-17',
        comments: getRandomComments()
    },
    {
        id: '383',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-09-18',
        comments: getRandomComments()
    },
    {
        id: '384',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 560,
        rating: 4.8,
        liked: false,
        date: '2026-09-19',
        comments: getRandomComments()
    },
    {
        id: '385',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-09-20',
        comments: getRandomComments()
    },
    {
        id: '386',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 500,
        rating: 4.7,
        liked: true,
        date: '2026-09-21',
        comments: getRandomComments()
    },
    {
        id: '387',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-09-22',
        comments: getRandomComments()
    },
    {
        id: '388',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2026-09-23',
        comments: getRandomComments()
    },
    {
        id: '389',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-09-24',
        comments: getRandomComments()
    },
    {
        id: '390',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.7,
        liked: false,
        date: '2026-09-25',
        comments: getRandomComments()
    },
    {
        id: '391',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-09-26',
        comments: getRandomComments()
    },
    {
        id: '392',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 830,
        rating: 5.0,
        liked: true,
        date: '2026-09-27',
        comments: getRandomComments()
    },
    {
        id: '393',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2026-09-28',
        comments: getRandomComments()
    },
    {
        id: '394',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.7,
        liked: false,
        date: '2026-09-29',
        comments: getRandomComments()
    },
    {
        id: '395',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: true,
        date: '2026-09-30',
        comments: getRandomComments()
    },
    {
        id: '396',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 530,
        rating: 4.7,
        liked: true,
        date: '2026-10-01',
        comments: getRandomComments()
    },
    {
        id: '397',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2026-10-02',
        comments: getRandomComments()
    },
    {
        id: '398',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2026-10-03',
        comments: getRandomComments()
    },
    {
        id: '399',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 670,
        rating: 4.8,
        liked: false,
        date: '2026-10-04',
        comments: getRandomComments()
    },
    {
        id: '400',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2026-10-05',
        comments: getRandomComments()
    },
    {
        id: '401',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-10-06',
        comments: getRandomComments()
    },
    {
        id: '402',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 840,
        rating: 5.0,
        liked: true,
        date: '2026-10-07',
        comments: getRandomComments()
    },
    {
        id: '403',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-10-08',
        comments: getRandomComments()
    },
    {
        id: '404',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.7,
        liked: false,
        date: '2026-10-09',
        comments: getRandomComments()
    },
    {
        id: '405',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: false,
        date: '2026-10-10',
        comments: getRandomComments()
    },
    {
        id: '406',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 450,
        rating: 4.6,
        liked: false,
        date: '2026-10-11',
        comments: getRandomComments()
    },
    {
        id: '407',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-10-12',
        comments: getRandomComments()
    },
    {
        id: '408',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2026-10-13',
        comments: getRandomComments()
    },
    {
        id: '409',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 690,
        rating: 4.8,
        liked: false,
        date: '2026-10-14',
        comments: getRandomComments()
    },
    {
        id: '410',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.9,
        liked: true,
        date: '2026-10-15',
        comments: getRandomComments()
    },
    {
        id: '411',
        title: 'Subah-e-Bahar',
        content: `صبحِ بہار ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-10-16',
        comments: getRandomComments()
    },
    {
        id: '412',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 850,
        rating: 5.0,
        liked: true,
        date: '2026-10-17',
        comments: getRandomComments()
    },
    {
        id: '413',
        title: 'The Light of Hope',
        content: `Even in darkness, light can be found.`,
        author: 'Victor Hugo',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2026-10-18',
        comments: getRandomComments()
    },
    {
        id: '414',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-10-19',
        comments: getRandomComments()
    },
    {
        id: '415',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: false,
        date: '2026-10-20',
        comments: getRandomComments()
    },
    {
        id: '416',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 470,
        rating: 4.7,
        liked: true,
        date: '2026-10-21',
        comments: getRandomComments()
    },
    {
        id: '417',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-10-22',
        comments: getRandomComments()
    },
    {
        id: '418',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2026-10-23',
        comments: getRandomComments()
    },
    {
        id: '419',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 700,
        rating: 4.8,
        liked: true,
        date: '2026-10-24',
        comments: getRandomComments()
    },
    {
        id: '420',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.7,
        liked: false,
        date: '2026-10-25',
        comments: getRandomComments()
    },
    {
        id: '421',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-10-26',
        comments: getRandomComments()
    },
    {
        id: '422',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 860,
        rating: 5.0,
        liked: true,
        date: '2026-10-27',
        comments: getRandomComments()
    },
    {
        id: '423',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 710,
        rating: 4.9,
        liked: false,
        date: '2026-10-28',
        comments: getRandomComments()
    },
    {
        id: '424',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.7,
        liked: false,
        date: '2026-10-29',
        comments: getRandomComments()
    },
    {
        id: '425',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: false,
        date: '2026-10-30',
        comments: getRandomComments()
    },
    {
        id: '426',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 460,
        rating: 4.6,
        liked: true,
        date: '2026-10-31',
        comments: getRandomComments()
    },
    {
        id: '427',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 660,
        rating: 4.9,
        liked: true,
        date: '2026-11-01',
        comments: getRandomComments()
    },
    {
        id: '428',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2026-11-02',
        comments: getRandomComments()
    },
    {
        id: '429',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-11-03',
        comments: getRandomComments()
    },
    {
        id: '430',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.8,
        liked: false,
        date: '2026-11-04',
        comments: getRandomComments()
    },
    {
        id: '431',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2026-11-05',
        comments: getRandomComments()
    },
    {
        id: '432',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 870,
        rating: 5.0,
        liked: true,
        date: '2026-11-06',
        comments: getRandomComments()
    },
    {
        id: '433',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2026-11-07',
        comments: getRandomComments()
    },
    {
        id: '434',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: false,
        date: '2026-11-08',
        comments: getRandomComments()
    },
    {
        id: '435',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: true,
        date: '2026-11-09',
        comments: getRandomComments()
    },
    {
        id: '436',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 510,
        rating: 4.7,
        liked: true,
        date: '2026-11-10',
        comments: getRandomComments()
    },
    {
        id: '437',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 680,
        rating: 4.9,
        liked: true,
        date: '2026-11-11',
        comments: getRandomComments()
    },
    {
        id: '438',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2026-11-12',
        comments: getRandomComments()
    },
    {
        id: '439',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 710,
        rating: 4.8,
        liked: true,
        date: '2026-11-13',
        comments: getRandomComments()
    },
    {
        id: '440',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2026-11-14',
        comments: getRandomComments()
    },
    {
        id: '441',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2026-11-15',
        comments: getRandomComments()
    },
    {
        id: '442',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 880,
        rating: 5.0,
        liked: true,
        date: '2026-11-16',
        comments: getRandomComments()
    },
    {
        id: '443',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-11-17',
        comments: getRandomComments()
    },
    {
        id: '444',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.8,
        liked: true,
        date: '2026-11-18',
        comments: getRandomComments()
    },
    {
        id: '445',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: true,
        date: '2026-11-19',
        comments: getRandomComments()
    },
    {
        id: '446',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 540,
        rating: 4.7,
        liked: true,
        date: '2026-11-20',
        comments: getRandomComments()
    },
    {
        id: '447',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 690,
        rating: 4.9,
        liked: true,
        date: '2026-11-21',
        comments: getRandomComments()
    },
    {
        id: '448',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2026-11-22',
        comments: getRandomComments()
    },
    {
        id: '449',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2026-11-23',
        comments: getRandomComments()
    },
    {
        id: '450',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: false,
        date: '2026-11-24',
        comments: getRandomComments()
    },
    {
        id: '451',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-11-25',
        comments: getRandomComments()
    },
    {
        id: '452',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 890,
        rating: 5.0,
        liked: true,
        date: '2026-11-26',
        comments: getRandomComments()
    },
    {
        id: '453',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-11-27',
        comments: getRandomComments()
    },
    {
        id: '454',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.7,
        liked: false,
        date: '2026-11-28',
        comments: getRandomComments()
    },
    {
        id: '455',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: true,
        date: '2026-11-29',
        comments: getRandomComments()
    },
    {
        id: '456',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 550,
        rating: 4.7,
        liked: true,
        date: '2026-11-30',
        comments: getRandomComments()
    },
    {
        id: '457',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-12-01',
        comments: getRandomComments()
    },
    {
        id: '458',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2026-12-02',
        comments: getRandomComments()
    },
    {
        id: '459',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 700,
        rating: 4.8,
        liked: false,
        date: '2026-12-03',
        comments: getRandomComments()
    },
    {
        id: '460',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.7,
        liked: false,
        date: '2026-12-04',
        comments: getRandomComments()
    },
    {
        id: '461',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2026-12-05',
        comments: getRandomComments()
    },
    {
        id: '462',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 5.0,
        liked: true,
        date: '2026-12-06',
        comments: getRandomComments()
    },
    {
        id: '463',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2026-12-07',
        comments: getRandomComments()
    },
    {
        id: '464',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.7,
        liked: false,
        date: '2026-12-08',
        comments: getRandomComments()
    },
    {
        id: '465',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: true,
        date: '2026-12-09',
        comments: getRandomComments()
    },
    {
        id: '466',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 480,
        rating: 4.6,
        liked: false,
        date: '2026-12-10',
        comments: getRandomComments()
    },
    {
        id: '467',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 600,
        rating: 4.9,
        liked: true,
        date: '2026-12-11',
        comments: getRandomComments()
    },
    {
        id: '468',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2026-12-12',
        comments: getRandomComments()
    },
    {
        id: '469',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 720,
        rating: 4.8,
        liked: true,
        date: '2026-12-13',
        comments: getRandomComments()
    },
    {
        id: '470',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.9,
        liked: true,
        date: '2026-12-14',
        comments: getRandomComments()
    },
    {
        id: '471',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2026-12-15',
        comments: getRandomComments()
    },
    {
        id: '472',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 910,
        rating: 5.0,
        liked: true,
        date: '2026-12-16',
        comments: getRandomComments()
    },
    {
        id: '473',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: false,
        date: '2026-12-17',
        comments: getRandomComments()
    },
    {
        id: '474',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.8,
        liked: true,
        date: '2026-12-18',
        comments: getRandomComments()
    },
    {
        id: '475',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 4.8,
        liked: true,
        date: '2026-12-19',
        comments: getRandomComments()
    },
    {
        id: '476',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 560,
        rating: 4.7,
        liked: true,
        date: '2026-12-20',
        comments: getRandomComments()
    },
    {
        id: '477',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2026-12-21',
        comments: getRandomComments()
    },
    {
        id: '478',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2026-12-22',
        comments: getRandomComments()
    },
    {
        id: '479',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2026-12-23',
        comments: getRandomComments()
    },
    {
        id: '480',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2026-12-24',
        comments: getRandomComments()
    },
    {
        id: '481',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2026-12-25',
        comments: getRandomComments()
    },
    {
        id: '482',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 920,
        rating: 5.0,
        liked: true,
        date: '2026-12-26',
        comments: getRandomComments()
    },
    {
        id: '483',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2026-12-27',
        comments: getRandomComments()
    },
    {
        id: '484',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.8,
        liked: false,
        date: '2026-12-28',
        comments: getRandomComments()
    },
    {
        id: '485',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: true,
        date: '2026-12-29',
        comments: getRandomComments()
    },
    {
        id: '486',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 570,
        rating: 4.7,
        liked: true,
        date: '2026-12-30',
        comments: getRandomComments()
    },
    {
        id: '487',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2026-12-31',
        comments: getRandomComments()
    },
    {
        id: '488',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-01-01',
        comments: getRandomComments()
    },
    {
        id: '489',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2027-01-02',
        comments: getRandomComments()
    },
    {
        id: '490',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: false,
        date: '2027-01-03',
        comments: getRandomComments()
    },
    {
        id: '491',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-01-04',
        comments: getRandomComments()
    },
    {
        id: '492',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 930,
        rating: 5.0,
        liked: true,
        date: '2027-01-05',
        comments: getRandomComments()
    },
    {
        id: '493',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-01-06',
        comments: getRandomComments()
    },
    {
        id: '494',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: false,
        date: '2027-01-07',
        comments: getRandomComments()
    },
    {
        id: '495',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2027-01-08',
        comments: getRandomComments()
    },
    {
        id: '496',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2027-01-09',
        comments: getRandomComments()
    },
    {
        id: '497',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2027-01-10',
        comments: getRandomComments()
    },
    {
        id: '498',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-01-11',
        comments: getRandomComments()
    },
    {
        id: '499',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 750,
        rating: 4.8,
        liked: false,
        date: '2027-01-12',
        comments: getRandomComments()
    },
    {
        id: '500',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2027-01-13',
        comments: getRandomComments()
    },
    {
        id: '501',
        title: 'The Whispering Pines',
        content: `Through ancient pines, the wind does softly sigh,
A symphony of nature, reaching for the sky.
Each needle whispers tales of bygone days,
Lost in the forest's timeless, leafy maze.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2027-01-14',
        comments: getRandomComments()
    },
    {
        id: '502',
        title: 'Sham-e-Tanhai Ka Gham',
        content: `شامِ تنہائی کا غم ہے کچھ ایسا،
جو دل کو ہر پل تڑپائے۔
رو رو کے گزری ہے ہر رات،
نہ کوئی چین، نہ کوئی آرام۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.7,
        liked: false,
        date: '2027-01-15',
        comments: getRandomComments()
    },
    {
        id: '503',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: true,
        date: '2027-01-16',
        comments: getRandomComments()
    },
    {
        id: '504',
        title: 'Jazba-e-Azadi',
        content: `جذبہِ آزادی ہے دل میں،
ہر ظلم کے خلاف کھڑا ہوں۔
یہ قوم ہے، یہ امتحان ہے،
بس حوصلہ رکھ اور آگے بڑھ۔`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 940,
        rating: 5.0,
        liked: true,
        date: '2027-01-17',
        comments: getRandomComments()
    },
    {
        id: '505',
        title: 'The Power of Words',
        content: `Words are seeds,
And they sprout thoughts,
That shape our deeds,
And forge our lots.`,
        author: 'Ralph Waldo Emerson',
        category: 'Quotes',
        language: 'English',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-01-18',
        comments: getRandomComments()
    },
    {
        id: '506',
        title: 'Dua-e-Hajat',
        content: `Ya Rabb, meri haajat qubool farma,
Har mushkil ko hal farma.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.9,
        liked: true,
        date: '2027-01-19',
        comments: getRandomComments()
    },
    {
        id: '507',
        title: 'Ishq Ki Dunya',
        content: `عشق کی دنیا ہے کچھ ایسی،
جہاں ہر شے ہے محبوب۔
یہ دل ہے یا کوئی دیوانہ،
جو ہر پل تیری یاد میں ڈوبا۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.8,
        liked: true,
        date: '2027-01-20',
        comments: getRandomComments()
    },
    {
        id: '508',
        title: 'Mahi De Pyaar Da Dard',
        content: `Mahi de pyaar da dard hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 490,
        rating: 4.6,
        liked: false,
        date: '2027-01-21',
        comments: getRandomComments()
    },
    {
        id: '509',
        title: 'Bulleh Shah Ki Sohni',
        content: `Bulleh Shah ki sohni hai,
Jithe Rab da noor wasda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2027-01-22',
        comments: getRandomComments()
    },
    {
        id: '510',
        title: 'The Greatness of Simplicity',
        content: `Simplicity is the ultimate sophistication.`,
        author: 'Leonardo da Vinci',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-01-23',
        comments: getRandomComments()
    },
    {
        id: '511',
        title: 'Khali Dil',
        content: `Khali dil hai mera, har so gham,
Koi nahin hai yaar-e-humdam.
Ankhon mein hai aansuon ka sailab,
Ye zindagi hai ya koi sarab.`,
        author: 'Jaun Elia',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: false,
        date: '2027-01-24',
        comments: getRandomComments()
    },
    {
        id: '512',
        title: 'Jashn-e-Eid',
        content: `جشنِ عید ہے ہر سو،
خوشیوں کا سماں ہے۔
رب کی ہے یہ عنایت،
ہر دل میں ہے مسکان۔`,
        author: 'Qateel Shifai',
        category: 'Eid',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.9,
        liked: true,
        date: '2027-01-25',
        comments: getRandomComments()
    },
    {
        id: '513',
        title: 'The Power of One',
        content: `One person can make a difference, and everyone should try.`,
        author: 'John F. Kennedy',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-01-26',
        comments: getRandomComments()
    },
    {
        id: '514',
        title: 'Safar-e-Zindagi',
        content: `سفرِ زندگی ہے کچھ ایسا،
جو ہر پل بدلتا ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ کہانی بس چلتی ہی رہتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: false,
        date: '2027-01-27',
        comments: getRandomComments()
    },
    {
        id: '515',
        title: 'Ishq Ka Zehar',
        content: `Ishq ka zehar hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saans mein hai tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Wasi Shah',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 580,
        rating: 4.7,
        liked: false,
        date: '2027-01-28',
        comments: getRandomComments()
    },
    {
        id: '516',
        title: 'Dosti Ka Sagar',
        content: `Dosti ka sagar hai kuch aisa,
Jo kabhi na sookhe.
Har mauj mein hai ek kahani,
Ye yaari hai apni, amar rahe.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 510,
        rating: 4.7,
        liked: true,
        date: '2027-01-29',
        comments: getRandomComments()
    },
    {
        id: '517',
        title: 'Amrita Pritam Di Soch',
        content: `Zindagi di asal khubsurati,
Eh hai ke tu kitna jeenda.
Naal gham te khushiyan de,
Har pal nu mehsoos kar.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 640,
        rating: 4.9,
        liked: true,
        date: '2027-01-30',
        comments: getRandomComments()
    },
    {
        id: '518',
        title: 'Rumi on Inner Light',
        content: `The lamps are different, but the Light is the same.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-01-31',
        comments: getRandomComments()
    },
    {
        id: '519',
        title: 'Funny Wisdom',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 710,
        rating: 4.8,
        liked: false,
        date: '2027-02-01',
        comments: getRandomComments()
    },
    {
        id: '520',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: true,
        date: '2027-02-02',
        comments: getRandomComments()
    },
    {
        id: '521',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2027-02-03',
        comments: getRandomComments()
    },
    {
        id: '522',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 950,
        rating: 5.0,
        liked: true,
        date: '2027-02-04',
        comments: getRandomComments()
    },
    {
        id: '523',
        title: 'The Best Way Out',
        content: `The best way out is always through.`,
        author: 'Robert Frost',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-02-05',
        comments: getRandomComments()
    },
    {
        id: '524',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 620,
        rating: 4.7,
        liked: false,
        date: '2027-02-06',
        comments: getRandomComments()
    },
    {
        id: '525',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 4.8,
        liked: false,
        date: '2027-02-07',
        comments: getRandomComments()
    },
    {
        id: '526',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 500,
        rating: 4.6,
        liked: false,
        date: '2027-02-08',
        comments: getRandomComments()
    },
    {
        id: '527',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2027-02-09',
        comments: getRandomComments()
    },
    {
        id: '528',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-02-10',
        comments: getRandomComments()
    },
    {
        id: '529',
        title: 'Maya Angelou on Courage',
        content: `Courage is the most important of all the virtues, because without courage, you can't practice any other virtue consistently.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-02-11',
        comments: getRandomComments()
    },
    {
        id: '530',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.9,
        liked: true,
        date: '2027-02-12',
        comments: getRandomComments()
    },
    {
        id: '531',
        title: 'Gulshan-e-Chaman',
        content: `گلشنِ چمن ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2027-02-13',
        comments: getRandomComments()
    },
    {
        id: '532',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 960,
        rating: 5.0,
        liked: true,
        date: '2027-02-14',
        comments: getRandomComments()
    },
    {
        id: '533',
        title: 'The Poet\'s Lament',
        content: `Oh, what a tangled web we weave,
When first we practice to deceive!`,
        author: 'Walter Scott',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-02-15',
        comments: getRandomComments()
    },
    {
        id: '534',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: true,
        date: '2027-02-16',
        comments: getRandomComments()
    },
    {
        id: '535',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.8,
        liked: false,
        date: '2027-02-17',
        comments: getRandomComments()
    },
    {
        id: '536',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 520,
        rating: 4.7,
        liked: true,
        date: '2027-02-18',
        comments: getRandomComments()
    },
    {
        id: '537',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2027-02-19',
        comments: getRandomComments()
    },
    {
        id: '538',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-02-20',
        comments: getRandomComments()
    },
    {
        id: '539',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 720,
        rating: 4.8,
        liked: true,
        date: '2027-02-21',
        comments: getRandomComments()
    },
    {
        id: '540',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.7,
        liked: false,
        date: '2027-02-22',
        comments: getRandomComments()
    },
    {
        id: '541',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2027-02-23',
        comments: getRandomComments()
    },
    {
        id: '542',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 970,
        rating: 5.0,
        liked: true,
        date: '2027-02-24',
        comments: getRandomComments()
    },
    {
        id: '543',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-02-25',
        comments: getRandomComments()
    },
    {
        id: '544',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.7,
        liked: false,
        date: '2027-02-26',
        comments: getRandomComments()
    },
    {
        id: '545',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: true,
        date: '2027-02-27',
        comments: getRandomComments()
    },
    {
        id: '546',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 570,
        rating: 4.8,
        liked: true,
        date: '2027-02-28',
        comments: getRandomComments()
    },
    {
        id: '547',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-03-01',
        comments: getRandomComments()
    },
    {
        id: '548',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-03-02',
        comments: getRandomComments()
    },
    {
        id: '549',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 740,
        rating: 4.8,
        liked: false,
        date: '2027-03-03',
        comments: getRandomComments()
    },
    {
        id: '550',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.9,
        liked: true,
        date: '2027-03-04',
        comments: getRandomComments()
    },
    {
        id: '551',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-03-05',
        comments: getRandomComments()
    },
    {
        id: '552',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 980,
        rating: 5.0,
        liked: true,
        date: '2027-03-06',
        comments: getRandomComments()
    },
    {
        id: '553',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-03-07',
        comments: getRandomComments()
    },
    {
        id: '554',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: false,
        date: '2027-03-08',
        comments: getRandomComments()
    },
    {
        id: '555',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2027-03-09',
        comments: getRandomComments()
    },
    {
        id: '556',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 580,
        rating: 4.8,
        liked: true,
        date: '2027-03-10',
        comments: getRandomComments()
    },
    {
        id: '557',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 740,
        rating: 4.9,
        liked: true,
        date: '2027-03-11',
        comments: getRandomComments()
    },
    {
        id: '558',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 890,
        rating: 4.9,
        liked: true,
        date: '2027-03-12',
        comments: getRandomComments()
    },
    {
        id: '559',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 750,
        rating: 4.8,
        liked: true,
        date: '2027-03-13',
        comments: getRandomComments()
    },
    {
        id: '560',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2027-03-14',
        comments: getRandomComments()
    },
    {
        id: '561',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-03-15',
        comments: getRandomComments()
    },
    {
        id: '562',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 990,
        rating: 5.0,
        liked: true,
        date: '2027-03-16',
        comments: getRandomComments()
    },
    {
        id: '563',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-03-17',
        comments: getRandomComments()
    },
    {
        id: '564',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 4.8,
        liked: true,
        date: '2027-03-18',
        comments: getRandomComments()
    },
    {
        id: '565',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2027-03-19',
        comments: getRandomComments()
    },
    {
        id: '566',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 590,
        rating: 4.8,
        liked: true,
        date: '2027-03-20',
        comments: getRandomComments()
    },
    {
        id: '567',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-03-21',
        comments: getRandomComments()
    },
    {
        id: '568',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 890,
        rating: 4.9,
        liked: true,
        date: '2027-03-22',
        comments: getRandomComments()
    },
    {
        id: '569',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-03-23',
        comments: getRandomComments()
    },
    {
        id: '570',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: false,
        date: '2027-03-24',
        comments: getRandomComments()
    },
    {
        id: '571',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-03-25',
        comments: getRandomComments()
    },
    {
        id: '572',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1000,
        rating: 5.0,
        liked: true,
        date: '2027-03-26',
        comments: getRandomComments()
    },
    {
        id: '573',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-03-27',
        comments: getRandomComments()
    },
    {
        id: '574',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.7,
        liked: false,
        date: '2027-03-28',
        comments: getRandomComments()
    },
    {
        id: '575',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-03-29',
        comments: getRandomComments()
    },
    {
        id: '576',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2027-03-30',
        comments: getRandomComments()
    },
    {
        id: '577',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-03-31',
        comments: getRandomComments()
    },
    {
        id: '578',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-04-01',
        comments: getRandomComments()
    },
    {
        id: '579',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 750,
        rating: 4.8,
        liked: false,
        date: '2027-04-02',
        comments: getRandomComments()
    },
    {
        id: '580',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 610,
        rating: 4.7,
        liked: false,
        date: '2027-04-03',
        comments: getRandomComments()
    },
    {
        id: '581',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-04-04',
        comments: getRandomComments()
    },
    {
        id: '582',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1010,
        rating: 5.0,
        liked: true,
        date: '2027-04-05',
        comments: getRandomComments()
    },
    {
        id: '583',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-04-06',
        comments: getRandomComments()
    },
    {
        id: '584',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.7,
        liked: false,
        date: '2027-04-07',
        comments: getRandomComments()
    },
    {
        id: '585',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.8,
        liked: true,
        date: '2027-04-08',
        comments: getRandomComments()
    },
    {
        id: '586',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 510,
        rating: 4.6,
        liked: false,
        date: '2027-04-09',
        comments: getRandomComments()
    },
    {
        id: '587',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2027-04-10',
        comments: getRandomComments()
    },
    {
        id: '588',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 890,
        rating: 4.9,
        liked: true,
        date: '2027-04-11',
        comments: getRandomComments()
    },
    {
        id: '589',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 760,
        rating: 4.8,
        liked: true,
        date: '2027-04-12',
        comments: getRandomComments()
    },
    {
        id: '590',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2027-04-13',
        comments: getRandomComments()
    },
    {
        id: '591',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-04-14',
        comments: getRandomComments()
    },
    {
        id: '592',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1020,
        rating: 5.0,
        liked: true,
        date: '2027-04-15',
        comments: getRandomComments()
    },
    {
        id: '593',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: false,
        date: '2027-04-16',
        comments: getRandomComments()
    },
    {
        id: '594',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: true,
        date: '2027-04-17',
        comments: getRandomComments()
    },
    {
        id: '595',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-04-18',
        comments: getRandomComments()
    },
    {
        id: '596',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 600,
        rating: 4.8,
        liked: true,
        date: '2027-04-19',
        comments: getRandomComments()
    },
    {
        id: '597',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-04-20',
        comments: getRandomComments()
    },
    {
        id: '598',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-04-21',
        comments: getRandomComments()
    },
    {
        id: '599',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-04-22',
        comments: getRandomComments()
    },
    {
        id: '600',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: true,
        date: '2027-04-23',
        comments: getRandomComments()
    },
    {
        id: '601',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-04-24',
        comments: getRandomComments()
    },
    {
        id: '602',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1030,
        rating: 5.0,
        liked: true,
        date: '2027-04-25',
        comments: getRandomComments()
    },
    {
        id: '603',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-04-26',
        comments: getRandomComments()
    },
    {
        id: '604',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 690,
        rating: 4.8,
        liked: false,
        date: '2027-04-27',
        comments: getRandomComments()
    },
    {
        id: '605',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2027-04-28',
        comments: getRandomComments()
    },
    {
        id: '606',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 610,
        rating: 4.8,
        liked: true,
        date: '2027-04-29',
        comments: getRandomComments()
    },
    {
        id: '607',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-04-30',
        comments: getRandomComments()
    },
    {
        id: '608',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-05-01',
        comments: getRandomComments()
    },
    {
        id: '609',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-05-02',
        comments: getRandomComments()
    },
    {
        id: '610',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: false,
        date: '2027-05-03',
        comments: getRandomComments()
    },
    {
        id: '611',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-05-04',
        comments: getRandomComments()
    },
    {
        id: '612',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1040,
        rating: 5.0,
        liked: true,
        date: '2027-05-05',
        comments: getRandomComments()
    },
    {
        id: '613',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-05-06',
        comments: getRandomComments()
    },
    {
        id: '614',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: false,
        date: '2027-05-07',
        comments: getRandomComments()
    },
    {
        id: '615',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-05-08',
        comments: getRandomComments()
    },
    {
        id: '616',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 630,
        rating: 4.8,
        liked: true,
        date: '2027-05-09',
        comments: getRandomComments()
    },
    {
        id: '617',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-05-10',
        comments: getRandomComments()
    },
    {
        id: '618',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 920,
        rating: 4.9,
        liked: true,
        date: '2027-05-11',
        comments: getRandomComments()
    },
    {
        id: '619',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 780,
        rating: 4.8,
        liked: false,
        date: '2027-05-12',
        comments: getRandomComments()
    },
    {
        id: '620',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.9,
        liked: true,
        date: '2027-05-13',
        comments: getRandomComments()
    },
    {
        id: '621',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-05-14',
        comments: getRandomComments()
    },
    {
        id: '622',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1050,
        rating: 5.0,
        liked: true,
        date: '2027-05-15',
        comments: getRandomComments()
    },
    {
        id: '623',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-05-16',
        comments: getRandomComments()
    },
    {
        id: '624',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.8,
        liked: false,
        date: '2027-05-17',
        comments: getRandomComments()
    },
    {
        id: '625',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: false,
        date: '2027-05-18',
        comments: getRandomComments()
    },
    {
        id: '626',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 520,
        rating: 4.7,
        liked: false,
        date: '2027-05-19',
        comments: getRandomComments()
    },
    {
        id: '627',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-05-20',
        comments: getRandomComments()
    },
    {
        id: '628',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 930,
        rating: 4.9,
        liked: true,
        date: '2027-05-21',
        comments: getRandomComments()
    },
    {
        id: '629',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 790,
        rating: 4.8,
        liked: false,
        date: '2027-05-22',
        comments: getRandomComments()
    },
    {
        id: '630',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2027-05-23',
        comments: getRandomComments()
    },
    {
        id: '631',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-05-24',
        comments: getRandomComments()
    },
    {
        id: '632',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1060,
        rating: 5.0,
        liked: true,
        date: '2027-05-25',
        comments: getRandomComments()
    },
    {
        id: '633',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 800,
        rating: 4.9,
        liked: false,
        date: '2027-05-26',
        comments: getRandomComments()
    },
    {
        id: '634',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.8,
        liked: false,
        date: '2027-05-27',
        comments: getRandomComments()
    },
    {
        id: '635',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: false,
        date: '2027-05-28',
        comments: getRandomComments()
    },
    {
        id: '636',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 530,
        rating: 4.7,
        liked: true,
        date: '2027-05-29',
        comments: getRandomComments()
    },
    {
        id: '637',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-05-30',
        comments: getRandomComments()
    },
    {
        id: '638',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 940,
        rating: 4.9,
        liked: true,
        date: '2027-05-31',
        comments: getRandomComments()
    },
    {
        id: '639',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-06-01',
        comments: getRandomComments()
    },
    {
        id: '640',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: false,
        date: '2027-06-02',
        comments: getRandomComments()
    },
    {
        id: '641',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-06-03',
        comments: getRandomComments()
    },
    {
        id: '642',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1070,
        rating: 5.0,
        liked: true,
        date: '2027-06-04',
        comments: getRandomComments()
    },
    {
        id: '643',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-06-05',
        comments: getRandomComments()
    },
    {
        id: '644',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 4.8,
        liked: false,
        date: '2027-06-06',
        comments: getRandomComments()
    },
    {
        id: '645',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-06-07',
        comments: getRandomComments()
    },
    {
        id: '646',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 620,
        rating: 4.8,
        liked: true,
        date: '2027-06-08',
        comments: getRandomComments()
    },
    {
        id: '647',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-06-09',
        comments: getRandomComments()
    },
    {
        id: '648',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 950,
        rating: 4.9,
        liked: true,
        date: '2027-06-10',
        comments: getRandomComments()
    },
    {
        id: '649',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 820,
        rating: 4.8,
        liked: true,
        date: '2027-06-11',
        comments: getRandomComments()
    },
    {
        id: '650',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 4.9,
        liked: true,
        date: '2027-06-12',
        comments: getRandomComments()
    },
    {
        id: '651',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 890,
        rating: 4.9,
        liked: true,
        date: '2027-06-13',
        comments: getRandomComments()
    },
    {
        id: '652',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1080,
        rating: 5.0,
        liked: true,
        date: '2027-06-14',
        comments: getRandomComments()
    },
    {
        id: '653',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-06-15',
        comments: getRandomComments()
    },
    {
        id: '654',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 740,
        rating: 4.8,
        liked: true,
        date: '2027-06-16',
        comments: getRandomComments()
    },
    {
        id: '655',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-06-17',
        comments: getRandomComments()
    },
    {
        id: '656',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 640,
        rating: 4.8,
        liked: true,
        date: '2027-06-18',
        comments: getRandomComments()
    },
    {
        id: '657',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-06-19',
        comments: getRandomComments()
    },
    {
        id: '658',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 960,
        rating: 4.9,
        liked: true,
        date: '2027-06-20',
        comments: getRandomComments()
    },
    {
        id: '659',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-06-21',
        comments: getRandomComments()
    },
    {
        id: '660',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 4.9,
        liked: false,
        date: '2027-06-22',
        comments: getRandomComments()
    },
    {
        id: '661',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-06-23',
        comments: getRandomComments()
    },
    {
        id: '662',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1090,
        rating: 5.0,
        liked: true,
        date: '2027-06-24',
        comments: getRandomComments()
    },
    {
        id: '663',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 920,
        rating: 4.9,
        liked: true,
        date: '2027-06-25',
        comments: getRandomComments()
    },
    {
        id: '664',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 750,
        rating: 4.8,
        liked: false,
        date: '2027-06-26',
        comments: getRandomComments()
    },
    {
        id: '665',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2027-06-27',
        comments: getRandomComments()
    },
    {
        id: '666',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 650,
        rating: 4.8,
        liked: true,
        date: '2027-06-28',
        comments: getRandomComments()
    },
    {
        id: '667',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-06-29',
        comments: getRandomComments()
    },
    {
        id: '668',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2027-06-30',
        comments: getRandomComments()
    },
    {
        id: '669',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 830,
        rating: 4.8,
        liked: false,
        date: '2027-07-01',
        comments: getRandomComments()
    },
    {
        id: '670',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 720,
        rating: 4.8,
        liked: false,
        date: '2027-07-02',
        comments: getRandomComments()
    },
    {
        id: '671',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-07-03',
        comments: getRandomComments()
    },
    {
        id: '672',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1100,
        rating: 5.0,
        liked: true,
        date: '2027-07-04',
        comments: getRandomComments()
    },
    {
        id: '673',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 930,
        rating: 4.9,
        liked: true,
        date: '2027-07-05',
        comments: getRandomComments()
    },
    {
        id: '674',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.8,
        liked: false,
        date: '2027-07-06',
        comments: getRandomComments()
    },
    {
        id: '675',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-07-07',
        comments: getRandomComments()
    },
    {
        id: '676',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 540,
        rating: 4.7,
        liked: false,
        date: '2027-07-08',
        comments: getRandomComments()
    },
    {
        id: '677',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-07-09',
        comments: getRandomComments()
    },
    {
        id: '678',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-07-10',
        comments: getRandomComments()
    },
    {
        id: '679',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 840,
        rating: 4.8,
        liked: true,
        date: '2027-07-11',
        comments: getRandomComments()
    },
    {
        id: '680',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 830,
        rating: 4.9,
        liked: true,
        date: '2027-07-12',
        comments: getRandomComments()
    },
    {
        id: '681',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 920,
        rating: 4.9,
        liked: true,
        date: '2027-07-13',
        comments: getRandomComments()
    },
    {
        id: '682',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1110,
        rating: 5.0,
        liked: true,
        date: '2027-07-14',
        comments: getRandomComments()
    },
    {
        id: '683',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 940,
        rating: 4.9,
        liked: false,
        date: '2027-07-15',
        comments: getRandomComments()
    },
    {
        id: '684',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-07-16',
        comments: getRandomComments()
    },
    {
        id: '685',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-07-17',
        comments: getRandomComments()
    },
    {
        id: '686',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 660,
        rating: 4.8,
        liked: true,
        date: '2027-07-18',
        comments: getRandomComments()
    },
    {
        id: '687',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-07-19',
        comments: getRandomComments()
    },
    {
        id: '688',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-07-20',
        comments: getRandomComments()
    },
    {
        id: '689',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 950,
        rating: 4.9,
        liked: true,
        date: '2027-07-21',
        comments: getRandomComments()
    },
    {
        id: '690',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 840,
        rating: 4.9,
        liked: true,
        date: '2027-07-22',
        comments: getRandomComments()
    },
    {
        id: '691',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 930,
        rating: 4.9,
        liked: true,
        date: '2027-07-23',
        comments: getRandomComments()
    },
    {
        id: '692',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1120,
        rating: 5.0,
        liked: true,
        date: '2027-07-24',
        comments: getRandomComments()
    },
    {
        id: '693',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 950,
        rating: 4.9,
        liked: true,
        date: '2027-07-25',
        comments: getRandomComments()
    },
    {
        id: '694',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: false,
        date: '2027-07-26',
        comments: getRandomComments()
    },
    {
        id: '695',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisi,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-07-27',
        comments: getRandomComments()
    },
    {
        id: '696',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: true,
        date: '2027-07-28',
        comments: getRandomComments()
    },
    {
        id: '697',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-07-29',
        comments: getRandomComments()
    },
    {
        id: '698',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1000,
        rating: 4.9,
        liked: true,
        date: '2027-07-30',
        comments: getRandomComments()
    },
    {
        id: '699',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 960,
        rating: 4.9,
        liked: true,
        date: '2027-07-31',
        comments: getRandomComments()
    },
    {
        id: '700',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: false,
        date: '2027-08-01',
        comments: getRandomComments()
    },
    {
        id: '701',
        title: 'The Silent Forest',
        content: `In forests deep, where ancient secrets sleep,
A hushed serenity, promises to keep.
The rustling leaves, a gentle, whispered tune,
Beneath the gaze of the silent moon.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2027-08-02',
        comments: getRandomComments()
    },
    {
        id: '702',
        title: 'Tanhai Ka Naghma',
        content: `تنہائی کا نغمہ ہے، ہر سو سنائی دے،
دل میں بس ایک تیری ہی یاد رہے۔
یہ زندگی ہے یا کوئی سراب،
جہاں ہر پل تیرا ہی انتظار رہے۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 670,
        rating: 4.8,
        liked: false,
        date: '2027-08-03',
        comments: getRandomComments()
    },
    {
        id: '703',
        title: 'Zindagi Ka Raaz',
        content: `Zindagi ka raaz hai gehra,
Samajh aaye to sab kuch hai.
Kabhi khushi, kabhi gham ka mel,
Ye safar chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2027-08-04',
        comments: getRandomComments()
    },
    {
        id: '704',
        title: 'Jazba-e-Junoon',
        content: `جذبہِ جنوں میں یوں مگن ہیں،
کہ راہوں کی تھکان بھول گئے ہیں۔
عزمِ عالی ہے جب اپنا ساتھی،
پھر کیسے بھلا پیچھے ہٹیں گے؟`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1130,
        rating: 5.0,
        liked: true,
        date: '2027-08-05',
        comments: getRandomComments()
    },
    {
        id: '705',
        title: 'The Purpose of Life',
        content: `The purpose of our lives is to be happy.`,
        author: 'Dalai Lama XIV',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2027-08-06',
        comments: getRandomComments()
    },
    {
        id: '706',
        title: 'Dua-e-Shukr',
        content: `Ya Rabb, tera shukr hai har pal,
Har nemat pe tera shukr.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 850,
        rating: 4.9,
        liked: true,
        date: '2027-08-07',
        comments: getRandomComments()
    },
    {
        id: '707',
        title: 'Ishq Ka Darya',
        content: `عشق کا دریا ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 860,
        rating: 4.9,
        liked: true,
        date: '2027-08-08',
        comments: getRandomComments()
    },
    {
        id: '708',
        title: 'Mahi De Khawab',
        content: `Mahi de khawab ne pagal kita,
Din raat mainu rulaya.
Akh vich athru, dil vich dard,
Meri zindri mukdi jandi ae.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 680,
        rating: 4.8,
        liked: false,
        date: '2027-08-09',
        comments: getRandomComments()
    },
    {
        id: '709',
        title: 'Bulleh Shah Ki Sohni',
        content: `Bulleh Shah ki sohni hai,
Jithe Rab da noor wasda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-08-10',
        comments: getRandomComments()
    },
    {
        id: '710',
        title: 'The Greatness of Simplicity',
        content: `Simplicity is the ultimate sophistication.`,
        author: 'Leonardo da Vinci',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-08-11',
        comments: getRandomComments()
    },
    {
        id: '711',
        title: 'Khali Haath',
        content: `Khali haath aaye the, khali haath jayenge,
Duniya mein kya laye the, kya le jayenge.
Ye zindagi hai, ye fanah hai,
Bas apni manzil ko pa le tu.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 700,
        rating: 4.8,
        liked: false,
        date: '2027-08-12',
        comments: getRandomComments()
    },
    {
        id: '712',
        title: 'Jashn-e-Azadi',
        content: `جشنِ آزادی ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
قربانی دی ہے لاکھوں نے،
تب جا کر یہ دن آیا۔`,
        author: 'Ahmed Faraz',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-08-13',
        comments: getRandomComments()
    },
    {
        id: '713',
        title: 'The Power of One',
        content: `One person can make a difference, and everyone should try.`,
        author: 'John F. Kennedy',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-08-14',
        comments: getRandomComments()
    },
    {
        id: '714',
        title: 'Safar-e-Zindagi',
        content: `سفرِ زندگی ہے کچھ ایسا،
جو ہر پل بدلتا ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ کہانی بس چلتی ہی رہتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: false,
        date: '2027-08-15',
        comments: getRandomComments()
    },
    {
        id: '715',
        title: 'Ishq Ka Zehar',
        content: `Ishq ka zehar hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saans mein hai tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Wasi Shah',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 710,
        rating: 4.8,
        liked: false,
        date: '2027-08-16',
        comments: getRandomComments()
    },
    {
        id: '716',
        title: 'Dosti Ka Sagar',
        content: `Dosti ka sagar hai kuch aisa,
Jo kabhi na sookhe.
Har mauj mein hai ek kahani,
Ye yaari hai apni, amar rahe.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 720,
        rating: 4.9,
        liked: true,
        date: '2027-08-17',
        comments: getRandomComments()
    },
    {
        id: '717',
        title: 'Amrita Pritam Di Soch',
        content: `Zindagi di asal khubsurati,
Eh hai ke tu kitna jeenda.
Naal gham te khushiyan de,
Har pal nu mehsoos kar.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-08-18',
        comments: getRandomComments()
    },
    {
        id: '718',
        title: 'Rumi on Inner Light',
        content: `The lamps are different, but the Light is the same.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1000,
        rating: 4.9,
        liked: true,
        date: '2027-08-19',
        comments: getRandomComments()
    },
    {
        id: '719',
        title: 'Funny Wisdom',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 960,
        rating: 4.8,
        liked: false,
        date: '2027-08-20',
        comments: getRandomComments()
    },
    {
        id: '720',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-08-21',
        comments: getRandomComments()
    },
    {
        id: '721',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 920,
        rating: 4.9,
        liked: true,
        date: '2027-08-22',
        comments: getRandomComments()
    },
    {
        id: '722',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1140,
        rating: 5.0,
        liked: true,
        date: '2027-08-23',
        comments: getRandomComments()
    },
    {
        id: '723',
        title: 'The Best Way Out',
        content: `The best way out is always through.`,
        author: 'Robert Frost',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1010,
        rating: 4.9,
        liked: true,
        date: '2027-08-24',
        comments: getRandomComments()
    },
    {
        id: '724',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 730,
        rating: 4.8,
        liked: false,
        date: '2027-08-25',
        comments: getRandomComments()
    },
    {
        id: '725',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: false,
        date: '2027-08-26',
        comments: getRandomComments()
    },
    {
        id: '726',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 710,
        rating: 4.8,
        liked: false,
        date: '2027-08-27',
        comments: getRandomComments()
    },
    {
        id: '727',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-08-28',
        comments: getRandomComments()
    },
    {
        id: '728',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 1020,
        rating: 4.9,
        liked: true,
        date: '2027-08-29',
        comments: getRandomComments()
    },
    {
        id: '729',
        title: 'Maya Angelou on Courage',
        content: `Courage is the most important of all the virtues, because without courage, you can't practice any other virtue consistently.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 1030,
        rating: 4.9,
        liked: true,
        date: '2027-08-30',
        comments: getRandomComments()
    },
    {
        id: '730',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 920,
        rating: 4.9,
        liked: true,
        date: '2027-08-31',
        comments: getRandomComments()
    },
    {
        id: '731',
        title: 'Gulshan-e-Chaman',
        content: `گلشنِ چمن ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 930,
        rating: 4.9,
        liked: true,
        date: '2027-09-01',
        comments: getRandomComments()
    },
    {
        id: '732',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1150,
        rating: 5.0,
        liked: true,
        date: '2027-09-02',
        comments: getRandomComments()
    },
    {
        id: '733',
        title: 'The Poet\'s Lament',
        content: `Oh, what a tangled web we weave,
When first we practice to deceive!`,
        author: 'Walter Scott',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 1040,
        rating: 4.9,
        liked: true,
        date: '2027-09-03',
        comments: getRandomComments()
    },
    {
        id: '734',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 870,
        rating: 4.9,
        liked: true,
        date: '2027-09-04',
        comments: getRandomComments()
    },
    {
        id: '735',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 930,
        rating: 4.9,
        liked: false,
        date: '2027-09-05',
        comments: getRandomComments()
    },
    {
        id: '736',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 740,
        rating: 4.8,
        liked: true,
        date: '2027-09-06',
        comments: getRandomComments()
    },
    {
        id: '737',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 940,
        rating: 4.9,
        liked: true,
        date: '2027-09-07',
        comments: getRandomComments()
    },
    {
        id: '738',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1050,
        rating: 4.9,
        liked: true,
        date: '2027-09-08',
        comments: getRandomComments()
    },
    {
        id: '739',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 970,
        rating: 4.8,
        liked: true,
        date: '2027-09-09',
        comments: getRandomComments()
    },
    {
        id: '740',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 860,
        rating: 4.9,
        liked: false,
        date: '2027-09-10',
        comments: getRandomComments()
    },
    {
        id: '741',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 940,
        rating: 4.9,
        liked: true,
        date: '2027-09-11',
        comments: getRandomComments()
    },
    {
        id: '742',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1160,
        rating: 5.0,
        liked: true,
        date: '2027-09-12',
        comments: getRandomComments()
    },
    {
        id: '743',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 1050,
        rating: 4.9,
        liked: true,
        date: '2027-09-13',
        comments: getRandomComments()
    },
    {
        id: '744',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 780,
        rating: 4.8,
        liked: false,
        date: '2027-09-14',
        comments: getRandomComments()
    },
    {
        id: '745',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 950,
        rating: 4.9,
        liked: true,
        date: '2027-09-15',
        comments: getRandomComments()
    },
    {
        id: '746',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 760,
        rating: 4.9,
        liked: true,
        date: '2027-09-16',
        comments: getRandomComments()
    },
    {
        id: '747',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 960,
        rating: 4.9,
        liked: true,
        date: '2027-09-17',
        comments: getRandomComments()
    },
    {
        id: '748',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1060,
        rating: 4.9,
        liked: true,
        date: '2027-09-18',
        comments: getRandomComments()
    },
    {
        id: '749',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 980,
        rating: 4.8,
        liked: false,
        date: '2027-09-19',
        comments: getRandomComments()
    },
    {
        id: '750',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2027-09-20',
        comments: getRandomComments()
    },
    {
        id: '751',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 950,
        rating: 4.9,
        liked: true,
        date: '2027-09-21',
        comments: getRandomComments()
    },
    {
        id: '752',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1170,
        rating: 5.0,
        liked: true,
        date: '2027-09-22',
        comments: getRandomComments()
    },
    {
        id: '753',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 1070,
        rating: 4.9,
        liked: true,
        date: '2027-09-23',
        comments: getRandomComments()
    },
    {
        id: '754',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.8,
        liked: false,
        date: '2027-09-24',
        comments: getRandomComments()
    },
    {
        id: '755',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-09-25',
        comments: getRandomComments()
    },
    {
        id: '756',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-09-26',
        comments: getRandomComments()
    },
    {
        id: '757',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-09-27',
        comments: getRandomComments()
    },
    {
        id: '758',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 1080,
        rating: 4.9,
        liked: true,
        date: '2027-09-28',
        comments: getRandomComments()
    },
    {
        id: '759',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-09-29',
        comments: getRandomComments()
    },
    {
        id: '760',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-09-30',
        comments: getRandomComments()
    },
    {
        id: '761',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 960,
        rating: 4.9,
        liked: true,
        date: '2027-10-01',
        comments: getRandomComments()
    },
    {
        id: '762',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1180,
        rating: 5.0,
        liked: true,
        date: '2027-10-02',
        comments: getRandomComments()
    },
    {
        id: '763',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-10-03',
        comments: getRandomComments()
    },
    {
        id: '764',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 880,
        rating: 4.9,
        liked: true,
        date: '2027-10-04',
        comments: getRandomComments()
    },
    {
        id: '765',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2027-10-05',
        comments: getRandomComments()
    },
    {
        id: '766',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-10-06',
        comments: getRandomComments()
    },
    {
        id: '767',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-10-07',
        comments: getRandomComments()
    },
    {
        id: '768',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-10-08',
        comments: getRandomComments()
    },
    {
        id: '769',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 1100,
        rating: 4.9,
        liked: true,
        date: '2027-10-09',
        comments: getRandomComments()
    },
    {
        id: '770',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 990,
        rating: 4.9,
        liked: false,
        date: '2027-10-10',
        comments: getRandomComments()
    },
    {
        id: '771',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2027-10-11',
        comments: getRandomComments()
    },
    {
        id: '772',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1190,
        rating: 5.0,
        liked: true,
        date: '2027-10-12',
        comments: getRandomComments()
    },
    {
        id: '773',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1110,
        rating: 4.9,
        liked: true,
        date: '2027-10-13',
        comments: getRandomComments()
    },
    {
        id: '774',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 890,
        rating: 4.9,
        liked: false,
        date: '2027-10-14',
        comments: getRandomComments()
    },
    {
        id: '775',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1000,
        rating: 4.9,
        liked: true,
        date: '2027-10-15',
        comments: getRandomComments()
    },
    {
        id: '776',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-10-16',
        comments: getRandomComments()
    },
    {
        id: '777',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1010,
        rating: 4.9,
        liked: true,
        date: '2027-10-17',
        comments: getRandomComments()
    },
    {
        id: '778',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1120,
        rating: 4.9,
        liked: true,
        date: '2027-10-18',
        comments: getRandomComments()
    },
    {
        id: '779',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 1020,
        rating: 4.8,
        liked: false,
        date: '2027-10-19',
        comments: getRandomComments()
    },
    {
        id: '780',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 880,
        rating: 4.9,
        liked: false,
        date: '2027-10-20',
        comments: getRandomComments()
    },
    {
        id: '781',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 980,
        rating: 4.9,
        liked: true,
        date: '2027-10-21',
        comments: getRandomComments()
    },
    {
        id: '782',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1200,
        rating: 5.0,
        liked: true,
        date: '2027-10-22',
        comments: getRandomComments()
    },
    {
        id: '783',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 1130,
        rating: 4.9,
        liked: true,
        date: '2027-10-23',
        comments: getRandomComments()
    },
    {
        id: '784',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: false,
        date: '2027-10-24',
        comments: getRandomComments()
    },
    {
        id: '785',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1010,
        rating: 4.9,
        liked: true,
        date: '2027-10-25',
        comments: getRandomComments()
    },
    {
        id: '786',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 720,
        rating: 4.8,
        liked: false,
        date: '2027-10-26',
        comments: getRandomComments()
    },
    {
        id: '787',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1020,
        rating: 4.9,
        liked: true,
        date: '2027-10-27',
        comments: getRandomComments()
    },
    {
        id: '788',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1140,
        rating: 4.9,
        liked: true,
        date: '2027-10-28',
        comments: getRandomComments()
    },
    {
        id: '789',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-10-29',
        comments: getRandomComments()
    },
    {
        id: '790',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: true,
        date: '2027-10-30',
        comments: getRandomComments()
    },
    {
        id: '791',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 990,
        rating: 4.9,
        liked: true,
        date: '2027-10-31',
        comments: getRandomComments()
    },
    {
        id: '792',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1210,
        rating: 5.0,
        liked: true,
        date: '2027-11-01',
        comments: getRandomComments()
    },
    {
        id: '793',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 1150,
        rating: 4.9,
        liked: false,
        date: '2027-11-02',
        comments: getRandomComments()
    },
    {
        id: '794',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: true,
        date: '2027-11-03',
        comments: getRandomComments()
    },
    {
        id: '795',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1020,
        rating: 4.9,
        liked: true,
        date: '2027-11-04',
        comments: getRandomComments()
    },
    {
        id: '796',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 770,
        rating: 4.9,
        liked: true,
        date: '2027-11-05',
        comments: getRandomComments()
    },
    {
        id: '797',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1030,
        rating: 4.9,
        liked: true,
        date: '2027-11-06',
        comments: getRandomComments()
    },
    {
        id: '798',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 1160,
        rating: 4.9,
        liked: true,
        date: '2027-11-07',
        comments: getRandomComments()
    },
    {
        id: '799',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1170,
        rating: 4.9,
        liked: true,
        date: '2027-11-08',
        comments: getRandomComments()
    },
    {
        id: '800',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1040,
        rating: 4.9,
        liked: true,
        date: '2027-11-09',
        comments: getRandomComments()
    },
    {
        id: '801',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1000,
        rating: 4.9,
        liked: true,
        date: '2027-11-10',
        comments: getRandomComments()
    },
    {
        id: '802',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1220,
        rating: 5.0,
        liked: true,
        date: '2027-11-11',
        comments: getRandomComments()
    },
    {
        id: '803',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 1180,
        rating: 4.9,
        liked: true,
        date: '2027-11-12',
        comments: getRandomComments()
    },
    {
        id: '804',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 920,
        rating: 4.9,
        liked: false,
        date: '2027-11-13',
        comments: getRandomComments()
    },
    {
        id: '805',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1050,
        rating: 4.9,
        liked: true,
        date: '2027-11-14',
        comments: getRandomComments()
    },
    {
        id: '806',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 780,
        rating: 4.9,
        liked: true,
        date: '2027-11-15',
        comments: getRandomComments()
    },
    {
        id: '807',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1040,
        rating: 4.9,
        liked: true,
        date: '2027-11-16',
        comments: getRandomComments()
    },
    {
        id: '808',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1190,
        rating: 4.9,
        liked: true,
        date: '2027-11-17',
        comments: getRandomComments()
    },
    {
        id: '809',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1000,
        rating: 4.9,
        liked: true,
        date: '2027-11-18',
        comments: getRandomComments()
    },
    {
        id: '810',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 900,
        rating: 4.9,
        liked: false,
        date: '2027-11-19',
        comments: getRandomComments()
    },
    {
        id: '811',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1010,
        rating: 4.9,
        liked: true,
        date: '2027-11-20',
        comments: getRandomComments()
    },
    {
        id: '812',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1230,
        rating: 5.0,
        liked: true,
        date: '2027-11-21',
        comments: getRandomComments()
    },
    {
        id: '813',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 1190,
        rating: 4.9,
        liked: true,
        date: '2027-11-22',
        comments: getRandomComments()
    },
    {
        id: '814',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 930,
        rating: 4.9,
        liked: false,
        date: '2027-11-23',
        comments: getRandomComments()
    },
    {
        id: '815',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1060,
        rating: 4.9,
        liked: true,
        date: '2027-11-24',
        comments: getRandomComments()
    },
    {
        id: '816',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-11-25',
        comments: getRandomComments()
    },
    {
        id: '817',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1070,
        rating: 4.9,
        liked: true,
        date: '2027-11-26',
        comments: getRandomComments()
    },
    {
        id: '818',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1200,
        rating: 4.9,
        liked: true,
        date: '2027-11-27',
        comments: getRandomComments()
    },
    {
        id: '819',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 1010,
        rating: 4.8,
        liked: false,
        date: '2027-11-28',
        comments: getRandomComments()
    },
    {
        id: '820',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1080,
        rating: 4.9,
        liked: true,
        date: '2027-11-29',
        comments: getRandomComments()
    },
    {
        id: '821',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1020,
        rating: 4.9,
        liked: true,
        date: '2027-11-30',
        comments: getRandomComments()
    },
    {
        id: '822',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1240,
        rating: 5.0,
        liked: true,
        date: '2027-12-01',
        comments: getRandomComments()
    },
    {
        id: '823',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 1200,
        rating: 4.9,
        liked: true,
        date: '2027-12-02',
        comments: getRandomComments()
    },
    {
        id: '824',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 940,
        rating: 4.9,
        liked: false,
        date: '2027-12-03',
        comments: getRandomComments()
    },
    {
        id: '825',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1070,
        rating: 4.9,
        liked: false,
        date: '2027-12-04',
        comments: getRandomComments()
    },
    {
        id: '826',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 730,
        rating: 4.8,
        liked: false,
        date: '2027-12-05',
        comments: getRandomComments()
    },
    {
        id: '827',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1080,
        rating: 4.9,
        liked: true,
        date: '2027-12-06',
        comments: getRandomComments()
    },
    {
        id: '828',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1210,
        rating: 4.9,
        liked: true,
        date: '2027-12-07',
        comments: getRandomComments()
    },
    {
        id: '829',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 1020,
        rating: 4.8,
        liked: false,
        date: '2027-12-08',
        comments: getRandomComments()
    },
    {
        id: '830',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-12-09',
        comments: getRandomComments()
    },
    {
        id: '831',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1030,
        rating: 4.9,
        liked: true,
        date: '2027-12-10',
        comments: getRandomComments()
    },
    {
        id: '832',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1250,
        rating: 5.0,
        liked: true,
        date: '2027-12-11',
        comments: getRandomComments()
    },
    {
        id: '833',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 1220,
        rating: 4.9,
        liked: false,
        date: '2027-12-12',
        comments: getRandomComments()
    },
    {
        id: '834',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 950,
        rating: 4.9,
        liked: false,
        date: '2027-12-13',
        comments: getRandomComments()
    },
    {
        id: '835',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1080,
        rating: 4.9,
        liked: false,
        date: '2027-12-14',
        comments: getRandomComments()
    },
    {
        id: '836',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-12-15',
        comments: getRandomComments()
    },
    {
        id: '837',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-12-16',
        comments: getRandomComments()
    },
    {
        id: '838',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1220,
        rating: 4.9,
        liked: true,
        date: '2027-12-17',
        comments: getRandomComments()
    },
    {
        id: '839',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 1100,
        rating: 4.9,
        liked: true,
        date: '2027-12-18',
        comments: getRandomComments()
    },
    {
        id: '840',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 910,
        rating: 4.9,
        liked: false,
        date: '2027-12-19',
        comments: getRandomComments()
    },
    {
        id: '841',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1040,
        rating: 4.9,
        liked: true,
        date: '2027-12-20',
        comments: getRandomComments()
    },
    {
        id: '842',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1260,
        rating: 5.0,
        liked: true,
        date: '2027-12-21',
        comments: getRandomComments()
    },
    {
        id: '843',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 1230,
        rating: 4.9,
        liked: true,
        date: '2027-12-22',
        comments: getRandomComments()
    },
    {
        id: '844',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 960,
        rating: 4.9,
        liked: false,
        date: '2027-12-23',
        comments: getRandomComments()
    },
    {
        id: '845',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-12-24',
        comments: getRandomComments()
    },
    {
        id: '846',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 790,
        rating: 4.9,
        liked: true,
        date: '2027-12-25',
        comments: getRandomComments()
    },
    {
        id: '847',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1100,
        rating: 4.9,
        liked: true,
        date: '2027-12-26',
        comments: getRandomComments()
    },
    {
        id: '848',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 1240,
        rating: 4.9,
        liked: true,
        date: '2027-12-27',
        comments: getRandomComments()
    },
    {
        id: '849',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1020,
        rating: 4.9,
        liked: true,
        date: '2027-12-28',
        comments: getRandomComments()
    },
    {
        id: '850',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2027-12-29',
        comments: getRandomComments()
    },
    {
        id: '851',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1050,
        rating: 4.9,
        liked: true,
        date: '2027-12-30',
        comments: getRandomComments()
    },
    {
        id: '852',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1270,
        rating: 5.0,
        liked: true,
        date: '2027-12-31',
        comments: getRandomComments()
    },
    {
        id: '853',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 1250,
        rating: 4.9,
        liked: true,
        date: '2028-01-01',
        comments: getRandomComments()
    },
    {
        id: '854',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 970,
        rating: 4.9,
        liked: true,
        date: '2028-01-02',
        comments: getRandomComments()
    },
    {
        id: '855',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1100,
        rating: 4.9,
        liked: true,
        date: '2028-01-03',
        comments: getRandomComments()
    },
    {
        id: '856',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: true,
        date: '2028-01-04',
        comments: getRandomComments()
    },
    {
        id: '857',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1110,
        rating: 4.9,
        liked: true,
        date: '2028-01-05',
        comments: getRandomComments()
    },
    {
        id: '858',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1260,
        rating: 4.9,
        liked: true,
        date: '2028-01-06',
        comments: getRandomComments()
    },
    {
        id: '859',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 1270,
        rating: 4.9,
        liked: true,
        date: '2028-01-07',
        comments: getRandomComments()
    },
    {
        id: '860',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1120,
        rating: 4.9,
        liked: false,
        date: '2028-01-08',
        comments: getRandomComments()
    },
    {
        id: '861',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1060,
        rating: 4.9,
        liked: true,
        date: '2028-01-09',
        comments: getRandomComments()
    },
    {
        id: '862',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1280,
        rating: 5.0,
        liked: true,
        date: '2028-01-10',
        comments: getRandomComments()
    },
    {
        id: '863',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1290,
        rating: 4.9,
        liked: true,
        date: '2028-01-11',
        comments: getRandomComments()
    },
    {
        id: '864',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 980,
        rating: 4.9,
        liked: false,
        date: '2028-01-12',
        comments: getRandomComments()
    },
    {
        id: '865',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1130,
        rating: 4.9,
        liked: true,
        date: '2028-01-13',
        comments: getRandomComments()
    },
    {
        id: '866',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2028-01-14',
        comments: getRandomComments()
    },
    {
        id: '867',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1140,
        rating: 4.9,
        liked: true,
        date: '2028-01-15',
        comments: getRandomComments()
    },
    {
        id: '868',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1300,
        rating: 4.9,
        liked: true,
        date: '2028-01-16',
        comments: getRandomComments()
    },
    {
        id: '869',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 1110,
        rating: 4.8,
        liked: false,
        date: '2028-01-17',
        comments: getRandomComments()
    },
    {
        id: '870',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1120,
        rating: 4.9,
        liked: false,
        date: '2028-01-18',
        comments: getRandomComments()
    },
    {
        id: '871',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1070,
        rating: 4.9,
        liked: true,
        date: '2028-01-19',
        comments: getRandomComments()
    },
    {
        id: '872',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1310,
        rating: 5.0,
        liked: true,
        date: '2028-01-20',
        comments: getRandomComments()
    },
    {
        id: '873',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 1280,
        rating: 4.9,
        liked: true,
        date: '2028-01-21',
        comments: getRandomComments()
    },
    {
        id: '874',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 990,
        rating: 4.9,
        liked: false,
        date: '2028-01-22',
        comments: getRandomComments()
    },
    {
        id: '875',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1150,
        rating: 4.9,
        liked: true,
        date: '2028-01-23',
        comments: getRandomComments()
    },
    {
        id: '876',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 800,
        rating: 4.9,
        liked: false,
        date: '2028-01-24',
        comments: getRandomComments()
    },
    {
        id: '877',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1160,
        rating: 4.9,
        liked: true,
        date: '2028-01-25',
        comments: getRandomComments()
    },
    {
        id: '878',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1320,
        rating: 4.9,
        liked: true,
        date: '2028-01-26',
        comments: getRandomComments()
    },
    {
        id: '879',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1130,
        rating: 4.9,
        liked: true,
        date: '2028-01-27',
        comments: getRandomComments()
    },
    {
        id: '880',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1140,
        rating: 4.9,
        liked: true,
        date: '2028-01-28',
        comments: getRandomComments()
    },
    {
        id: '881',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1080,
        rating: 4.9,
        liked: true,
        date: '2028-01-29',
        comments: getRandomComments()
    },
    {
        id: '882',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1330,
        rating: 5.0,
        liked: true,
        date: '2028-01-30',
        comments: getRandomComments()
    },
    {
        id: '883',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 1300,
        rating: 4.9,
        liked: false,
        date: '2028-01-31',
        comments: getRandomComments()
    },
    {
        id: '884',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1150,
        rating: 4.9,
        liked: true,
        date: '2028-02-01',
        comments: getRandomComments()
    },
    {
        id: '885',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1160,
        rating: 4.9,
        liked: true,
        date: '2028-02-02',
        comments: getRandomComments()
    },
    {
        id: '886',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 810,
        rating: 4.9,
        liked: true,
        date: '2028-02-03',
        comments: getRandomComments()
    },
    {
        id: '887',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1170,
        rating: 4.9,
        liked: true,
        date: '2028-02-04',
        comments: getRandomComments()
    },
    {
        id: '888',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 1340,
        rating: 4.9,
        liked: true,
        date: '2028-02-05',
        comments: getRandomComments()
    },
    {
        id: '889',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1350,
        rating: 4.9,
        liked: true,
        date: '2028-02-06',
        comments: getRandomComments()
    },
    {
        id: '890',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1180,
        rating: 4.9,
        liked: true,
        date: '2028-02-07',
        comments: getRandomComments()
    },
    {
        id: '891',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1090,
        rating: 4.9,
        liked: true,
        date: '2028-02-08',
        comments: getRandomComments()
    },
    {
        id: '892',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1360,
        rating: 5.0,
        liked: true,
        date: '2028-02-09',
        comments: getRandomComments()
    },
    {
        id: '893',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 1370,
        rating: 4.9,
        liked: true,
        date: '2028-02-10',
        comments: getRandomComments()
    },
    {
        id: '894',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1190,
        rating: 4.9,
        liked: false,
        date: '2028-02-11',
        comments: getRandomComments()
    },
    {
        id: '895',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1200,
        rating: 4.9,
        liked: true,
        date: '2028-02-12',
        comments: getRandomComments()
    },
    {
        id: '896',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 820,
        rating: 4.9,
        liked: true,
        date: '2028-02-13',
        comments: getRandomComments()
    },
    {
        id: '897',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1210,
        rating: 4.9,
        liked: true,
        date: '2028-02-14',
        comments: getRandomComments()
    },
    {
        id: '898',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1380,
        rating: 4.9,
        liked: true,
        date: '2028-02-15',
        comments: getRandomComments()
    },
    {
        id: '899',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1220,
        rating: 4.9,
        liked: true,
        date: '2028-02-16',
        comments: getRandomComments()
    },
    {
        id: '900',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1230,
        rating: 4.9,
        liked: false,
        date: '2028-02-17',
        comments: getRandomComments()
    },
    {
        id: '901',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1240,
        rating: 4.9,
        liked: true,
        date: '2028-02-18',
        comments: getRandomComments()
    },
    {
        id: '902',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1390,
        rating: 5.0,
        liked: true,
        date: '2028-02-19',
        comments: getRandomComments()
    },
    {
        id: '903',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 1400,
        rating: 4.9,
        liked: true,
        date: '2028-02-20',
        comments: getRandomComments()
    },
    {
        id: '904',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1250,
        rating: 4.9,
        liked: false,
        date: '2028-02-21',
        comments: getRandomComments()
    },
    {
        id: '905',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1260,
        rating: 4.9,
        liked: true,
        date: '2028-02-22',
        comments: getRandomComments()
    },
    {
        id: '906',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1270,
        rating: 4.9,
        liked: true,
        date: '2028-02-23',
        comments: getRandomComments()
    },
    {
        id: '907',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1280,
        rating: 4.9,
        liked: true,
        date: '2028-02-24',
        comments: getRandomComments()
    },
    {
        id: '908',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 1410,
        rating: 4.9,
        liked: true,
        date: '2028-02-25',
        comments: getRandomComments()
    },
    {
        id: '909',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 1290,
        rating: 4.8,
        liked: false,
        date: '2028-02-26',
        comments: getRandomComments()
    },
    {
        id: '910',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1300,
        rating: 4.9,
        liked: true,
        date: '2028-02-27',
        comments: getRandomComments()
    },
    {
        id: '911',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1310,
        rating: 4.9,
        liked: true,
        date: '2028-02-28',
        comments: getRandomComments()
    },
    {
        id: '912',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1420,
        rating: 5.0,
        liked: true,
        date: '2028-02-29',
        comments: getRandomComments()
    },
    {
        id: '913',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 1330,
        rating: 4.9,
        liked: true,
        date: '2028-03-01',
        comments: getRandomComments()
    },
    {
        id: '914',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1260,
        rating: 4.9,
        liked: false,
        date: '2028-03-02',
        comments: getRandomComments()
    },
    {
        id: '915',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1270,
        rating: 4.9,
        liked: false,
        date: '2028-03-03',
        comments: getRandomComments()
    },
    {
        id: '916',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 1280,
        rating: 4.9,
        liked: false,
        date: '2028-03-04',
        comments: getRandomComments()
    },
    {
        id: '917',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1290,
        rating: 4.9,
        liked: true,
        date: '2028-03-05',
        comments: getRandomComments()
    },
    {
        id: '918',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1430,
        rating: 4.9,
        liked: true,
        date: '2028-03-06',
        comments: getRandomComments()
    },
    {
        id: '919',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 1300,
        rating: 4.8,
        liked: false,
        date: '2028-03-07',
        comments: getRandomComments()
    },
    {
        id: '920',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1310,
        rating: 4.9,
        liked: true,
        date: '2028-03-08',
        comments: getRandomComments()
    },
    {
        id: '921',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1320,
        rating: 4.9,
        liked: true,
        date: '2028-03-09',
        comments: getRandomComments()
    },
    {
        id: '922',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1440,
        rating: 5.0,
        liked: true,
        date: '2028-03-10',
        comments: getRandomComments()
    },
    {
        id: '923',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 1340,
        rating: 4.9,
        liked: false,
        date: '2028-03-11',
        comments: getRandomComments()
    },
    {
        id: '924',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1350,
        rating: 4.9,
        liked: false,
        date: '2028-03-12',
        comments: getRandomComments()
    },
    {
        id: '925',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1360,
        rating: 4.9,
        liked: false,
        date: '2028-03-13',
        comments: getRandomComments()
    },
    {
        id: '926',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 1370,
        rating: 4.9,
        liked: true,
        date: '2028-03-14',
        comments: getRandomComments()
    },
    {
        id: '927',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1380,
        rating: 4.9,
        liked: true,
        date: '2028-03-15',
        comments: getRandomComments()
    },
    {
        id: '928',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1450,
        rating: 4.9,
        liked: true,
        date: '2028-03-16',
        comments: getRandomComments()
    },
    {
        id: '929',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 1390,
        rating: 4.9,
        liked: true,
        date: '2028-03-17',
        comments: getRandomComments()
    },
    {
        id: '930',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1400,
        rating: 4.9,
        liked: false,
        date: '2028-03-18',
        comments: getRandomComments()
    },
    {
        id: '931',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1410,
        rating: 4.9,
        liked: true,
        date: '2028-03-19',
        comments: getRandomComments()
    },
    {
        id: '932',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1460,
        rating: 5.0,
        liked: true,
        date: '2028-03-20',
        comments: getRandomComments()
    },
    {
        id: '933',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 1470,
        rating: 4.9,
        liked: true,
        date: '2028-03-21',
        comments: getRandomComments()
    },
    {
        id: '934',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1480,
        rating: 4.9,
        liked: false,
        date: '2028-03-22',
        comments: getRandomComments()
    },
    {
        id: '935',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1490,
        rating: 4.9,
        liked: true,
        date: '2028-03-23',
        comments: getRandomComments()
    },
    {
        id: '936',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 1500,
        rating: 4.9,
        liked: true,
        date: '2028-03-24',
        comments: getRandomComments()
    },
    {
        id: '937',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1510,
        rating: 4.9,
        liked: true,
        date: '2028-03-25',
        comments: getRandomComments()
    },
    {
        id: '938',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 1520,
        rating: 4.9,
        liked: true,
        date: '2028-03-26',
        comments: getRandomComments()
    },
    {
        id: '939',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1530,
        rating: 4.9,
        liked: true,
        date: '2028-03-27',
        comments: getRandomComments()
    },
    {
        id: '940',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1540,
        rating: 4.9,
        liked: true,
        date: '2028-03-28',
        comments: getRandomComments()
    },
    {
        id: '941',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1550,
        rating: 4.9,
        liked: true,
        date: '2028-03-29',
        comments: getRandomComments()
    },
    {
        id: '942',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1560,
        rating: 5.0,
        liked: true,
        date: '2028-03-30',
        comments: getRandomComments()
    },
    {
        id: '943',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 1570,
        rating: 4.9,
        liked: true,
        date: '2028-03-31',
        comments: getRandomComments()
    },
    {
        id: '944',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1580,
        rating: 4.9,
        liked: true,
        date: '2028-04-01',
        comments: getRandomComments()
    },
    {
        id: '945',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1590,
        rating: 4.9,
        liked: true,
        date: '2028-04-02',
        comments: getRandomComments()
    },
    {
        id: '946',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1600,
        rating: 4.9,
        liked: true,
        date: '2028-04-03',
        comments: getRandomComments()
    },
    {
        id: '947',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1610,
        rating: 4.9,
        liked: true,
        date: '2028-04-04',
        comments: getRandomComments()
    },
    {
        id: '948',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1620,
        rating: 4.9,
        liked: true,
        date: '2028-04-05',
        comments: getRandomComments()
    },
    {
        id: '949',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 1630,
        rating: 4.9,
        liked: true,
        date: '2028-04-06',
        comments: getRandomComments()
    },
    {
        id: '950',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1640,
        rating: 4.9,
        liked: false,
        date: '2028-04-07',
        comments: getRandomComments()
    },
    {
        id: '951',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1650,
        rating: 4.9,
        liked: true,
        date: '2028-04-08',
        comments: getRandomComments()
    },
    {
        id: '952',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1660,
        rating: 5.0,
        liked: true,
        date: '2028-04-09',
        comments: getRandomComments()
    },
    {
        id: '953',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1670,
        rating: 4.9,
        liked: true,
        date: '2028-04-10',
        comments: getRandomComments()
    },
    {
        id: '954',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1680,
        rating: 4.9,
        liked: false,
        date: '2028-04-11',
        comments: getRandomComments()
    },
    {
        id: '955',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1690,
        rating: 4.9,
        liked: true,
        date: '2028-04-12',
        comments: getRandomComments()
    },
    {
        id: '956',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1700,
        rating: 4.9,
        liked: true,
        date: '2028-04-13',
        comments: getRandomComments()
    },
    {
        id: '957',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1710,
        rating: 4.9,
        liked: true,
        date: '2028-04-14',
        comments: getRandomComments()
    },
    {
        id: '958',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 1720,
        rating: 4.9,
        liked: true,
        date: '2028-04-15',
        comments: getRandomComments()
    },
    {
        id: '959',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 1730,
        rating: 4.8,
        liked: false,
        date: '2028-04-16',
        comments: getRandomComments()
    },
    {
        id: '960',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1740,
        rating: 4.9,
        liked: false,
        date: '2028-04-17',
        comments: getRandomComments()
    },
    {
        id: '961',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1750,
        rating: 4.9,
        liked: true,
        date: '2028-04-18',
        comments: getRandomComments()
    },
    {
        id: '962',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1760,
        rating: 5.0,
        liked: true,
        date: '2028-04-19',
        comments: getRandomComments()
    },
    {
        id: '963',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 1770,
        rating: 4.9,
        liked: true,
        date: '2028-04-20',
        comments: getRandomComments()
    },
    {
        id: '964',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1780,
        rating: 4.9,
        liked: false,
        date: '2028-04-21',
        comments: getRandomComments()
    },
    {
        id: '965',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1790,
        rating: 4.9,
        liked: true,
        date: '2028-04-22',
        comments: getRandomComments()
    },
    {
        id: '966',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 1800,
        rating: 4.9,
        liked: false,
        date: '2028-04-23',
        comments: getRandomComments()
    },
    {
        id: '967',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1810,
        rating: 4.9,
        liked: true,
        date: '2028-04-24',
        comments: getRandomComments()
    },
    {
        id: '968',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1820,
        rating: 4.9,
        liked: true,
        date: '2028-04-25',
        comments: getRandomComments()
    },
    {
        id: '969',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 1830,
        rating: 4.9,
        liked: true,
        date: '2028-04-26',
        comments: getRandomComments()
    },
    {
        id: '970',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1840,
        rating: 4.9,
        liked: true,
        date: '2028-04-27',
        comments: getRandomComments()
    },
    {
        id: '971',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1850,
        rating: 4.9,
        liked: true,
        date: '2028-04-28',
        comments: getRandomComments()
    },
    {
        id: '972',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1860,
        rating: 5.0,
        liked: true,
        date: '2028-04-29',
        comments: getRandomComments()
    },
    {
        id: '973',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 1870,
        rating: 4.9,
        liked: false,
        date: '2028-04-30',
        comments: getRandomComments()
    },
    {
        id: '974',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1880,
        rating: 4.9,
        liked: true,
        date: '2028-05-01',
        comments: getRandomComments()
    },
    {
        id: '975',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1890,
        rating: 4.9,
        liked: true,
        date: '2028-05-02',
        comments: getRandomComments()
    },
    {
        id: '976',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 1900,
        rating: 4.9,
        liked: true,
        date: '2028-05-03',
        comments: getRandomComments()
    },
    {
        id: '977',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 1910,
        rating: 4.9,
        liked: true,
        date: '2028-05-04',
        comments: getRandomComments()
    },
    {
        id: '978',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 1920,
        rating: 4.9,
        liked: true,
        date: '2028-05-05',
        comments: getRandomComments()
    },
    {
        id: '979',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 1930,
        rating: 4.9,
        liked: true,
        date: '2028-05-06',
        comments: getRandomComments()
    },
    {
        id: '980',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1940,
        rating: 4.9,
        liked: true,
        date: '2028-05-07',
        comments: getRandomComments()
    },
    {
        id: '981',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1950,
        rating: 4.9,
        liked: true,
        date: '2028-05-08',
        comments: getRandomComments()
    },
    {
        id: '982',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1960,
        rating: 5.0,
        liked: true,
        date: '2028-05-09',
        comments: getRandomComments()
    },
    {
        id: '983',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 1970,
        rating: 4.9,
        liked: true,
        date: '2028-05-10',
        comments: getRandomComments()
    },
    {
        id: '984',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 1980,
        rating: 4.9,
        liked: false,
        date: '2028-05-11',
        comments: getRandomComments()
    },
    {
        id: '985',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 1990,
        rating: 4.9,
        liked: true,
        date: '2028-05-12',
        comments: getRandomComments()
    },
    {
        id: '986',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2000,
        rating: 4.9,
        liked: true,
        date: '2028-05-13',
        comments: getRandomComments()
    },
    {
        id: '987',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2010,
        rating: 4.9,
        liked: true,
        date: '2028-05-14',
        comments: getRandomComments()
    },
    {
        id: '988',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 2020,
        rating: 4.9,
        liked: true,
        date: '2028-05-15',
        comments: getRandomComments()
    },
    {
        id: '989',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 2030,
        rating: 4.9,
        liked: true,
        date: '2028-05-16',
        comments: getRandomComments()
    },
    {
        id: '990',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2040,
        rating: 4.9,
        liked: false,
        date: '2028-05-17',
        comments: getRandomComments()
    },
    {
        id: '991',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2050,
        rating: 4.9,
        liked: true,
        date: '2028-05-18',
        comments: getRandomComments()
    },
    {
        id: '992',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2060,
        rating: 5.0,
        liked: true,
        date: '2028-05-19',
        comments: getRandomComments()
    },
    {
        id: '993',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 2070,
        rating: 4.9,
        liked: true,
        date: '2028-05-20',
        comments: getRandomComments()
    },
    {
        id: '994',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2080,
        rating: 4.9,
        liked: false,
        date: '2028-05-21',
        comments: getRandomComments()
    },
    {
        id: '995',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2090,
        rating: 4.9,
        liked: true,
        date: '2028-05-22',
        comments: getRandomComments()
    },
    {
        id: '996',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2100,
        rating: 4.9,
        liked: true,
        date: '2028-05-23',
        comments: getRandomComments()
    },
    {
        id: '997',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2110,
        rating: 4.9,
        liked: true,
        date: '2028-05-24',
        comments: getRandomComments()
    },
    {
        id: '998',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 2120,
        rating: 4.9,
        liked: true,
        date: '2028-05-25',
        comments: getRandomComments()
    },
    {
        id: '999',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 2130,
        rating: 4.9,
        liked: false,
        date: '2028-05-26',
        comments: getRandomComments()
    },
    {
        id: '1000',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2140,
        rating: 4.9,
        liked: true,
        date: '2028-05-27',
        comments: getRandomComments()
    },
    {
        id: '1001',
        title: 'The Autumn Whisper',
        content: `As autumn leaves in crimson hues descend,
A gentle whisper, carried by the wind.
The trees stand bare, in quiet, cold embrace,
Nature's cycle, time's eternal pace.`,
        author: 'Robert Frost',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 2150,
        rating: 4.9,
        liked: true,
        date: '2028-05-28',
        comments: getRandomComments()
    },
    {
        id: '1002',
        title: 'Sham-e-Yaad Ki Udaasi',
        content: `شامِ یاد کی اداسی ہے کچھ ایسی،
جو ہر دل کو اپنی طرف کھینچے
تنہا میں بیٹھا ہوں، آنکھوں میں نمی،
کیا کروں اس بے بس زندگی کا؟`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2160,
        rating: 4.8,
        liked: false,
        date: '2028-05-29',
        comments: getRandomComments()
    },
    {
        id: '1003',
        title: 'Zindagi Ka Gham',
        content: `Zindagi ka gham hai gehra,
Samajh aaye to sab kuch hai.
Kabhi khushi, kabhi gham ka mel,
Ye safar chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2170,
        rating: 4.9,
        liked: true,
        date: '2028-05-30',
        comments: getRandomComments()
    },
    {
        id: '1004',
        title: 'Jazba-e-Jihad',
        content: `جذبہِ جہاد ہے دل میں،
ہر ظلم کے خلاف کھڑا ہوں۔
یہ قوم ہے، یہ امتحان ہے،
بس حوصلہ رکھ اور آگے بڑھ۔`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2180,
        rating: 5.0,
        liked: true,
        date: '2028-05-31',
        comments: getRandomComments()
    },
    {
        id: '1005',
        title: 'The Only True Wisdom',
        content: `The only true wisdom is in knowing you know nothing.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2190,
        rating: 4.9,
        liked: true,
        date: '2028-06-01',
        comments: getRandomComments()
    },
    {
        id: '1006',
        title: 'Dua-e-Maghfirat',
        content: `Ya Rabb, maghfirat farma hamari,
Har gunah ko maaf kar de.
Hamari tobas hai, tu hi Qadir,
Apni rehmat se nawaz de.`,
        author: 'Anonymous',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2200,
        rating: 4.9,
        liked: true,
        date: '2028-06-02',
        comments: getRandomComments()
    },
    {
        id: '1007',
        title: 'Ishq Ki Mithaas',
        content: `عشق کی مٹھاس ہے کچھ ایسی،
جو ہر دل میں گھل جائے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2210,
        rating: 4.9,
        liked: true,
        date: '2028-06-03',
        comments: getRandomComments()
    },
    {
        id: '1008',
        title: 'Mahi Di Yaad',
        content: `Mahi di yaad sataundi ae,
Din raat mainu rulaundi ae.
Akh vich athru, dil vich dard,
Meri zindri mukdi jandi ae.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2220,
        rating: 4.8,
        liked: false,
        date: '2028-06-04',
        comments: getRandomComments()
    },
    {
        id: '1009',
        title: 'Bulleh Shah Ka Paigham',
        content: `Bulleh Shah ka paigham hai yehi,
Rab nu pehchan, khud nu pehchan.
Na koi Hindu, na koi Musalman,
Sab vich hai Rab da noor.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2230,
        rating: 4.9,
        liked: true,
        date: '2028-06-05',
        comments: getRandomComments()
    },
    {
        id: '1010',
        title: 'The Journey of Life',
        content: `Life is a journey, not a destination.`,
        author: 'Ralph Waldo Emerson',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2240,
        rating: 4.9,
        liked: true,
        date: '2028-06-06',
        comments: getRandomComments()
    },
    {
        id: '1011',
        title: 'Khali Dil Ki Sada',
        content: `Khali dil ki sada hai kuch aisi,
Jo labon tak aati nahin.
Ye dard hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Heartbroken',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2250,
        rating: 4.8,
        liked: false,
        date: '2028-06-07',
        comments: getRandomComments()
    },
    {
        id: '1012',
        title: 'Jashn-e-Pakistan',
        content: `جشنِ پاکستان ہے ہر سو،
خوشیوں کا سماں ہے۔
قربانی دی ہے لاکھوں نے،
تب جا کر یہ دن آیا۔`,
        author: 'Qateel Shifai',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2260,
        rating: 5.0,
        liked: true,
        date: '2028-06-08',
        comments: getRandomComments()
    },
    {
        id: '1013',
        title: 'The Strength Within',
        content: `You have power over your mind - not outside events. Realize this, and you will find strength.`,
        author: 'Marcus Aurelius',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 2270,
        rating: 4.9,
        liked: true,
        date: '2028-06-09',
        comments: getRandomComments()
    },
    {
        id: '1014',
        title: 'Safar-e-Ishq',
        content: `سفرِ عشق میں ہے ہر سو امتحان،
دل میں جل رہا ہے تیری یاد کا دیوان۔
ہر قدم پہ ہے نیا غم، نیا درد،
یہ زندگی ہے یا کوئی طوفان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2280,
        rating: 4.9,
        liked: true,
        date: '2028-06-10',
        comments: getRandomComments()
    },
    {
        id: '1015',
        title: 'Zindagi Ka Raaz-e-Hayat',
        content: `Zindagi ka raaz-e-hayat kuch aisa hai,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Wasi Shah',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2290,
        rating: 4.9,
        liked: true,
        date: '2028-06-11',
        comments: getRandomComments()
    },
    {
        id: '1016',
        title: 'Dosti Ka Bandhan',
        content: `Dosti ka bandhan hai kuch aisa,
Jo kabhi na toote.
Har mauj mein hai ek kahani,
Ye yaari hai apni, amar rahe.`,
        author: 'Anonymous',
        category: 'Friendship',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2300,
        rating: 4.9,
        liked: true,
        date: '2028-06-12',
        comments: getRandomComments()
    },
    {
        id: '1017',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi di asal khubsurati,
Eh hai ke tu kitna jeenda.
Naal gham te khushiyan de,
Har pal nu mehsoos kar.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2310,
        rating: 4.9,
        liked: true,
        date: '2028-06-13',
        comments: getRandomComments()
    },
    {
        id: '1018',
        title: 'Rumi on Love\'s Language',
        content: `Love is the bridge between you and everything.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 2320,
        rating: 4.9,
        liked: true,
        date: '2028-06-14',
        comments: getRandomComments()
    },
    {
        id: '1019',
        title: 'Funny Life Lesson',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 2330,
        rating: 4.8,
        liked: false,
        date: '2028-06-15',
        comments: getRandomComments()
    },
    {
        id: '1020',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2340,
        rating: 4.9,
        liked: true,
        date: '2028-06-16',
        comments: getRandomComments()
    },
    {
        id: '1021',
        title: 'Phoolon Ki Waadi',
        content: `پھولوں کی وادی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انمول تحفہ،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2350,
        rating: 4.9,
        liked: true,
        date: '2028-06-17',
        comments: getRandomComments()
    },
    {
        id: '1022',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2360,
        rating: 5.0,
        liked: true,
        date: '2028-06-18',
        comments: getRandomComments()
    },
    {
        id: '1023',
        title: 'The Best Way Out',
        content: `The best way out is always through.`,
        author: 'Robert Frost',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2370,
        rating: 4.9,
        liked: true,
        date: '2028-06-19',
        comments: getRandomComments()
    },
    {
        id: '1024',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2380,
        rating: 4.8,
        liked: false,
        date: '2028-06-20',
        comments: getRandomComments()
    },
    {
        id: '1025',
        title: 'Waqt Ki Chaal',
        content: `Waqt ki chaal hai kuch aisi,
Jo har shakhs ko badal de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2390,
        rating: 4.9,
        liked: false,
        date: '2028-06-21',
        comments: getRandomComments()
    },
    {
        id: '1026',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2400,
        rating: 4.8,
        liked: false,
        date: '2028-06-22',
        comments: getRandomComments()
    },
    {
        id: '1027',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2410,
        rating: 4.9,
        liked: true,
        date: '2028-06-23',
        comments: getRandomComments()
    },
    {
        id: '1028',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 2420,
        rating: 4.9,
        liked: true,
        date: '2028-06-24',
        comments: getRandomComments()
    },
    {
        id: '1029',
        title: 'Maya Angelou on Courage',
        content: `Courage is the most important of all the virtues, because without courage, you can't practice any other virtue consistently.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 2430,
        rating: 4.9,
        liked: true,
        date: '2028-06-25',
        comments: getRandomComments()
    },
    {
        id: '1030',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2440,
        rating: 4.9,
        liked: true,
        date: '2028-06-26',
        comments: getRandomComments()
    },
    {
        id: '1031',
        title: 'Gulshan-e-Chaman',
        content: `گلشنِ چمن ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2450,
        rating: 4.9,
        liked: true,
        date: '2028-06-27',
        comments: getRandomComments()
    },
    {
        id: '1032',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2460,
        rating: 5.0,
        liked: true,
        date: '2028-06-28',
        comments: getRandomComments()
    },
    {
        id: '1033',
        title: 'The Poet\'s Lament',
        content: `Oh, what a tangled web we weave,
When first we practice to deceive!`,
        author: 'Walter Scott',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 2470,
        rating: 4.9,
        liked: true,
        date: '2028-06-29',
        comments: getRandomComments()
    },
    {
        id: '1034',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2480,
        rating: 4.9,
        liked: true,
        date: '2028-06-30',
        comments: getRandomComments()
    },
    {
        id: '1035',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2490,
        rating: 4.9,
        liked: false,
        date: '2028-07-01',
        comments: getRandomComments()
    },
    {
        id: '1036',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2500,
        rating: 4.9,
        liked: true,
        date: '2028-07-02',
        comments: getRandomComments()
    },
    {
        id: '1037',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2510,
        rating: 4.9,
        liked: true,
        date: '2028-07-03',
        comments: getRandomComments()
    },
    {
        id: '1038',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2520,
        rating: 4.9,
        liked: true,
        date: '2028-07-04',
        comments: getRandomComments()
    },
    {
        id: '1039',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 2530,
        rating: 4.8,
        liked: true,
        date: '2028-07-05',
        comments: getRandomComments()
    },
    {
        id: '1040',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2540,
        rating: 4.8,
        liked: false,
        date: '2028-07-06',
        comments: getRandomComments()
    },
    {
        id: '1041',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2550,
        rating: 4.9,
        liked: true,
        date: '2028-07-07',
        comments: getRandomComments()
    },
    {
        id: '1042',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2560,
        rating: 5.0,
        liked: true,
        date: '2028-07-08',
        comments: getRandomComments()
    },
    {
        id: '1043',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 2570,
        rating: 4.9,
        liked: false,
        date: '2028-07-09',
        comments: getRandomComments()
    },
    {
        id: '1044',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2580,
        rating: 4.8,
        liked: false,
        date: '2028-07-10',
        comments: getRandomComments()
    },
    {
        id: '1045',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2590,
        rating: 4.9,
        liked: false,
        date: '2028-07-11',
        comments: getRandomComments()
    },
    {
        id: '1046',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2600,
        rating: 4.9,
        liked: true,
        date: '2028-07-12',
        comments: getRandomComments()
    },
    {
        id: '1047',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2610,
        rating: 4.9,
        liked: true,
        date: '2028-07-13',
        comments: getRandomComments()
    },
    {
        id: '1048',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 2620,
        rating: 4.9,
        liked: true,
        date: '2028-07-14',
        comments: getRandomComments()
    },
    {
        id: '1049',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 2630,
        rating: 4.9,
        liked: true,
        date: '2028-07-15',
        comments: getRandomComments()
    },
    {
        id: '1050',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2640,
        rating: 4.9,
        liked: false,
        date: '2028-07-16',
        comments: getRandomComments()
    },
    {
        id: '1051',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2650,
        rating: 4.9,
        liked: true,
        date: '2028-07-17',
        comments: getRandomComments()
    },
    {
        id: '1052',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2660,
        rating: 5.0,
        liked: true,
        date: '2028-07-18',
        comments: getRandomComments()
    },
    {
        id: '1053',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 2670,
        rating: 4.9,
        liked: true,
        date: '2028-07-19',
        comments: getRandomComments()
    },
    {
        id: '1054',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2680,
        rating: 4.9,
        liked: false,
        date: '2028-07-20',
        comments: getRandomComments()
    },
    {
        id: '1055',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2690,
        rating: 4.9,
        liked: true,
        date: '2028-07-21',
        comments: getRandomComments()
    },
    {
        id: '1056',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 2700,
        rating: 4.9,
        liked: true,
        date: '2028-07-22',
        comments: getRandomComments()
    },
    {
        id: '1057',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2710,
        rating: 4.9,
        liked: true,
        date: '2028-07-23',
        comments: getRandomComments()
    },
    {
        id: '1058',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 2720,
        rating: 4.9,
        liked: true,
        date: '2028-07-24',
        comments: getRandomComments()
    },
    {
        id: '1059',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 2730,
        rating: 4.9,
        liked: true,
        date: '2028-07-25',
        comments: getRandomComments()
    },
    {
        id: '1060',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2740,
        rating: 4.9,
        liked: true,
        date: '2028-07-26',
        comments: getRandomComments()
    },
    {
        id: '1061',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2750,
        rating: 4.9,
        liked: true,
        date: '2028-07-27',
        comments: getRandomComments()
    },
    {
        id: '1062',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2760,
        rating: 5.0,
        liked: true,
        date: '2028-07-28',
        comments: getRandomComments()
    },
    {
        id: '1063',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 2770,
        rating: 4.9,
        liked: true,
        date: '2028-07-29',
        comments: getRandomComments()
    },
    {
        id: '1064',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2780,
        rating: 4.9,
        liked: true,
        date: '2028-07-30',
        comments: getRandomComments()
    },
    {
        id: '1065',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2790,
        rating: 4.9,
        liked: true,
        date: '2028-07-31',
        comments: getRandomComments()
    },
    {
        id: '1066',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2800,
        rating: 4.9,
        liked: true,
        date: '2028-08-01',
        comments: getRandomComments()
    },
    {
        id: '1067',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2810,
        rating: 4.9,
        liked: true,
        date: '2028-08-02',
        comments: getRandomComments()
    },
    {
        id: '1068',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2820,
        rating: 4.9,
        liked: true,
        date: '2028-08-03',
        comments: getRandomComments()
    },
    {
        id: '1069',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 2830,
        rating: 4.9,
        liked: true,
        date: '2028-08-04',
        comments: getRandomComments()
    },
    {
        id: '1070',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2840,
        rating: 4.9,
        liked: false,
        date: '2028-08-05',
        comments: getRandomComments()
    },
    {
        id: '1071',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2850,
        rating: 4.9,
        liked: true,
        date: '2028-08-06',
        comments: getRandomComments()
    },
    {
        id: '1072',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2860,
        rating: 5.0,
        liked: true,
        date: '2028-08-07',
        comments: getRandomComments()
    },
    {
        id: '1073',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 2870,
        rating: 4.9,
        liked: true,
        date: '2028-08-08',
        comments: getRandomComments()
    },
    {
        id: '1074',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2880,
        rating: 4.9,
        liked: false,
        date: '2028-08-09',
        comments: getRandomComments()
    },
    {
        id: '1075',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2890,
        rating: 4.9,
        liked: true,
        date: '2028-08-10',
        comments: getRandomComments()
    },
    {
        id: '1076',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2900,
        rating: 4.9,
        liked: true,
        date: '2028-08-11',
        comments: getRandomComments()
    },
    {
        id: '1077',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 2910,
        rating: 4.9,
        liked: true,
        date: '2028-08-12',
        comments: getRandomComments()
    },
    {
        id: '1078',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 2920,
        rating: 4.9,
        liked: true,
        date: '2028-08-13',
        comments: getRandomComments()
    },
    {
        id: '1079',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 2930,
        rating: 4.8,
        liked: false,
        date: '2028-08-14',
        comments: getRandomComments()
    },
    {
        id: '1080',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2940,
        rating: 4.9,
        liked: false,
        date: '2028-08-15',
        comments: getRandomComments()
    },
    {
        id: '1081',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2950,
        rating: 4.9,
        liked: true,
        date: '2028-08-16',
        comments: getRandomComments()
    },
    {
        id: '1082',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2960,
        rating: 5.0,
        liked: true,
        date: '2028-08-17',
        comments: getRandomComments()
    },
    {
        id: '1083',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 2970,
        rating: 4.9,
        liked: true,
        date: '2028-08-18',
        comments: getRandomComments()
    },
    {
        id: '1084',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 2980,
        rating: 4.9,
        liked: false,
        date: '2028-08-19',
        comments: getRandomComments()
    },
    {
        id: '1085',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 2990,
        rating: 4.9,
        liked: true,
        date: '2028-08-20',
        comments: getRandomComments()
    },
    {
        id: '1086',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3000,
        rating: 4.9,
        liked: false,
        date: '2028-08-21',
        comments: getRandomComments()
    },
    {
        id: '1087',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3010,
        rating: 4.9,
        liked: true,
        date: '2028-08-22',
        comments: getRandomComments()
    },
    {
        id: '1088',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3020,
        rating: 4.9,
        liked: true,
        date: '2028-08-23',
        comments: getRandomComments()
    },
    {
        id: '1089',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 3030,
        rating: 4.9,
        liked: true,
        date: '2028-08-24',
        comments: getRandomComments()
    },
    {
        id: '1090',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3040,
        rating: 4.9,
        liked: true,
        date: '2028-08-25',
        comments: getRandomComments()
    },
    {
        id: '1091',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3050,
        rating: 4.9,
        liked: true,
        date: '2028-08-26',
        comments: getRandomComments()
    },
    {
        id: '1092',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3060,
        rating: 5.0,
        liked: true,
        date: '2028-08-27',
        comments: getRandomComments()
    },
    {
        id: '1093',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 3070,
        rating: 4.9,
        liked: false,
        date: '2028-08-28',
        comments: getRandomComments()
    },
    {
        id: '1094',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3080,
        rating: 4.9,
        liked: true,
        date: '2028-08-29',
        comments: getRandomComments()
    },
    {
        id: '1095',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3090,
        rating: 4.9,
        liked: true,
        date: '2028-08-30',
        comments: getRandomComments()
    },
    {
        id: '1096',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3100,
        rating: 4.9,
        liked: true,
        date: '2028-08-31',
        comments: getRandomComments()
    },
    {
        id: '1097',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3110,
        rating: 4.9,
        liked: true,
        date: '2028-09-01',
        comments: getRandomComments()
    },
    {
        id: '1098',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 3120,
        rating: 4.9,
        liked: true,
        date: '2028-09-02',
        comments: getRandomComments()
    },
    {
        id: '1099',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3130,
        rating: 4.9,
        liked: true,
        date: '2028-09-03',
        comments: getRandomComments()
    },
    {
        id: '1100',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3140,
        rating: 4.9,
        liked: true,
        date: '2028-09-04',
        comments: getRandomComments()
    },
    {
        id: '1101',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3150,
        rating: 4.9,
        liked: true,
        date: '2028-09-05',
        comments: getRandomComments()
    },
    {
        id: '1102',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3160,
        rating: 5.0,
        liked: true,
        date: '2028-09-06',
        comments: getRandomComments()
    },
    {
        id: '1103',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 3170,
        rating: 4.9,
        liked: true,
        date: '2028-09-07',
        comments: getRandomComments()
    },
    {
        id: '1104',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3180,
        rating: 4.9,
        liked: false,
        date: '2028-09-08',
        comments: getRandomComments()
    },
    {
        id: '1105',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3190,
        rating: 4.9,
        liked: true,
        date: '2028-09-09',
        comments: getRandomComments()
    },
    {
        id: '1106',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3200,
        rating: 4.9,
        liked: true,
        date: '2028-09-10',
        comments: getRandomComments()
    },
    {
        id: '1107',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3210,
        rating: 4.9,
        liked: true,
        date: '2028-09-11',
        comments: getRandomComments()
    },
    {
        id: '1108',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 3220,
        rating: 4.9,
        liked: true,
        date: '2028-09-12',
        comments: getRandomComments()
    },
    {
        id: '1109',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 3230,
        rating: 4.9,
        liked: true,
        date: '2028-09-13',
        comments: getRandomComments()
    },
    {
        id: '1110',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3240,
        rating: 4.9,
        liked: false,
        date: '2028-09-14',
        comments: getRandomComments()
    },
    {
        id: '1111',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3250,
        rating: 4.9,
        liked: true,
        date: '2028-09-15',
        comments: getRandomComments()
    },
    {
        id: '1112',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3260,
        rating: 5.0,
        liked: true,
        date: '2028-09-16',
        comments: getRandomComments()
    },
    {
        id: '1113',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 3270,
        rating: 4.9,
        liked: true,
        date: '2028-09-17',
        comments: getRandomComments()
    },
    {
        id: '1114',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3280,
        rating: 4.9,
        liked: false,
        date: '2028-09-18',
        comments: getRandomComments()
    },
    {
        id: '1115',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3290,
        rating: 4.9,
        liked: true,
        date: '2028-09-19',
        comments: getRandomComments()
    },
    {
        id: '1116',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3300,
        rating: 4.9,
        liked: true,
        date: '2028-09-20',
        comments: getRandomComments()
    },
    {
        id: '1117',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3310,
        rating: 4.9,
        liked: true,
        date: '2028-09-21',
        comments: getRandomComments()
    },
    {
        id: '1118',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 3320,
        rating: 4.9,
        liked: true,
        date: '2028-09-22',
        comments: getRandomComments()
    },
    {
        id: '1119',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 3330,
        rating: 4.8,
        liked: false,
        date: '2028-09-23',
        comments: getRandomComments()
    },
    {
        id: '1120',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3340,
        rating: 4.9,
        liked: true,
        date: '2028-09-24',
        comments: getRandomComments()
    },
    {
        id: '1121',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3350,
        rating: 4.9,
        liked: true,
        date: '2028-09-25',
        comments: getRandomComments()
    },
    {
        id: '1122',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3360,
        rating: 5.0,
        liked: true,
        date: '2028-09-26',
        comments: getRandomComments()
    },
    {
        id: '1123',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 3370,
        rating: 4.9,
        liked: true,
        date: '2028-09-27',
        comments: getRandomComments()
    },
    {
        id: '1124',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3380,
        rating: 4.9,
        liked: false,
        date: '2028-09-28',
        comments: getRandomComments()
    },
    {
        id: '1125',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3390,
        rating: 4.9,
        liked: false,
        date: '2028-09-29',
        comments: getRandomComments()
    },
    {
        id: '1126',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3400,
        rating: 4.9,
        liked: false,
        date: '2028-09-30',
        comments: getRandomComments()
    },
    {
        id: '1127',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3410,
        rating: 4.9,
        liked: true,
        date: '2028-10-01',
        comments: getRandomComments()
    },
    {
        id: '1128',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3420,
        rating: 4.9,
        liked: true,
        date: '2028-10-02',
        comments: getRandomComments()
    },
    {
        id: '1129',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 3430,
        rating: 4.8,
        liked: false,
        date: '2028-10-03',
        comments: getRandomComments()
    },
    {
        id: '1130',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3440,
        rating: 4.9,
        liked: true,
        date: '2028-10-04',
        comments: getRandomComments()
    },
    {
        id: '1131',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3450,
        rating: 4.9,
        liked: true,
        date: '2028-10-05',
        comments: getRandomComments()
    },
    {
        id: '1132',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3460,
        rating: 5.0,
        liked: true,
        date: '2028-10-06',
        comments: getRandomComments()
    },
    {
        id: '1133',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 3470,
        rating: 4.9,
        liked: false,
        date: '2028-10-07',
        comments: getRandomComments()
    },
    {
        id: '1134',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3480,
        rating: 4.9,
        liked: false,
        date: '2028-10-08',
        comments: getRandomComments()
    },
    {
        id: '1135',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3490,
        rating: 4.9,
        liked: false,
        date: '2028-10-09',
        comments: getRandomComments()
    },
    {
        id: '1136',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3500,
        rating: 4.9,
        liked: true,
        date: '2028-10-10',
        comments: getRandomComments()
    },
    {
        id: '1137',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3510,
        rating: 4.9,
        liked: true,
        date: '2028-10-11',
        comments: getRandomComments()
    },
    {
        id: '1138',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 3520,
        rating: 4.9,
        liked: true,
        date: '2028-10-12',
        comments: getRandomComments()
    },
    {
        id: '1139',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 3530,
        rating: 4.9,
        liked: true,
        date: '2028-10-13',
        comments: getRandomComments()
    },
    {
        id: '1140',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3540,
        rating: 4.9,
        liked: false,
        date: '2028-10-14',
        comments: getRandomComments()
    },
    {
        id: '1141',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3550,
        rating: 4.9,
        liked: true,
        date: '2028-10-15',
        comments: getRandomComments()
    },
    {
        id: '1142',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3560,
        rating: 5.0,
        liked: true,
        date: '2028-10-16',
        comments: getRandomComments()
    },
    {
        id: '1143',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 3570,
        rating: 4.9,
        liked: true,
        date: '2028-10-17',
        comments: getRandomComments()
    },
    {
        id: '1144',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3580,
        rating: 4.9,
        liked: false,
        date: '2028-10-18',
        comments: getRandomComments()
    },
    {
        id: '1145',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3590,
        rating: 4.9,
        liked: true,
        date: '2028-10-19',
        comments: getRandomComments()
    },
    {
        id: '1146',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3600,
        rating: 4.9,
        liked: true,
        date: '2028-10-20',
        comments: getRandomComments()
    },
    {
        id: '1147',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3610,
        rating: 4.9,
        liked: true,
        date: '2028-10-21',
        comments: getRandomComments()
    },
    {
        id: '1148',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 3620,
        rating: 4.9,
        liked: true,
        date: '2028-10-22',
        comments: getRandomComments()
    },
    {
        id: '1149',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 3630,
        rating: 4.9,
        liked: true,
        date: '2028-10-23',
        comments: getRandomComments()
    },
    {
        id: '1150',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3640,
        rating: 4.9,
        liked: true,
        date: '2028-10-24',
        comments: getRandomComments()
    },
    {
        id: '1151',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3650,
        rating: 4.9,
        liked: true,
        date: '2028-10-25',
        comments: getRandomComments()
    },
    {
        id: '1152',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3660,
        rating: 5.0,
        liked: true,
        date: '2028-10-26',
        comments: getRandomComments()
    },
    {
        id: '1153',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 3670,
        rating: 4.9,
        liked: true,
        date: '2028-10-27',
        comments: getRandomComments()
    },
    {
        id: '1154',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3680,
        rating: 4.9,
        liked: true,
        date: '2028-10-28',
        comments: getRandomComments()
    },
    {
        id: '1155',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3690,
        rating: 4.9,
        liked: true,
        date: '2028-10-29',
        comments: getRandomComments()
    },
    {
        id: '1156',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3700,
        rating: 4.9,
        liked: true,
        date: '2028-10-30',
        comments: getRandomComments()
    },
    {
        id: '1157',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3710,
        rating: 4.9,
        liked: true,
        date: '2028-10-31',
        comments: getRandomComments()
    },
    {
        id: '1158',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3720,
        rating: 4.9,
        liked: true,
        date: '2028-11-01',
        comments: getRandomComments()
    },
    {
        id: '1159',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 3730,
        rating: 4.9,
        liked: true,
        date: '2028-11-02',
        comments: getRandomComments()
    },
    {
        id: '1160',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3740,
        rating: 4.9,
        liked: false,
        date: '2028-11-03',
        comments: getRandomComments()
    },
    {
        id: '1161',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3750,
        rating: 4.9,
        liked: true,
        date: '2028-11-04',
        comments: getRandomComments()
    },
    {
        id: '1162',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3760,
        rating: 5.0,
        liked: true,
        date: '2028-11-05',
        comments: getRandomComments()
    },
    {
        id: '1163',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3770,
        rating: 4.9,
        liked: true,
        date: '2028-11-06',
        comments: getRandomComments()
    },
    {
        id: '1164',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3780,
        rating: 4.9,
        liked: false,
        date: '2028-11-07',
        comments: getRandomComments()
    },
    {
        id: '1165',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3790,
        rating: 4.9,
        liked: true,
        date: '2028-11-08',
        comments: getRandomComments()
    },
    {
        id: '1166',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3800,
        rating: 4.9,
        liked: true,
        date: '2028-11-09',
        comments: getRandomComments()
    },
    {
        id: '1167',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3810,
        rating: 4.9,
        liked: true,
        date: '2028-11-10',
        comments: getRandomComments()
    },
    {
        id: '1168',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 3820,
        rating: 4.9,
        liked: true,
        date: '2028-11-11',
        comments: getRandomComments()
    },
    {
        id: '1169',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 3830,
        rating: 4.8,
        liked: false,
        date: '2028-11-12',
        comments: getRandomComments()
    },
    {
        id: '1170',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3840,
        rating: 4.9,
        liked: false,
        date: '2028-11-13',
        comments: getRandomComments()
    },
    {
        id: '1171',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3850,
        rating: 4.9,
        liked: true,
        date: '2028-11-14',
        comments: getRandomComments()
    },
    {
        id: '1172',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3860,
        rating: 5.0,
        liked: true,
        date: '2028-11-15',
        comments: getRandomComments()
    },
    {
        id: '1173',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 3870,
        rating: 4.9,
        liked: true,
        date: '2028-11-16',
        comments: getRandomComments()
    },
    {
        id: '1174',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3880,
        rating: 4.9,
        liked: false,
        date: '2028-11-17',
        comments: getRandomComments()
    },
    {
        id: '1175',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3890,
        rating: 4.9,
        liked: true,
        date: '2028-11-18',
        comments: getRandomComments()
    },
    {
        id: '1176',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 3900,
        rating: 4.9,
        liked: false,
        date: '2028-11-19',
        comments: getRandomComments()
    },
    {
        id: '1177',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 3910,
        rating: 4.9,
        liked: true,
        date: '2028-11-20',
        comments: getRandomComments()
    },
    {
        id: '1178',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 3920,
        rating: 4.9,
        liked: true,
        date: '2028-11-21',
        comments: getRandomComments()
    },
    {
        id: '1179',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 3930,
        rating: 4.9,
        liked: true,
        date: '2028-11-22',
        comments: getRandomComments()
    },
    {
        id: '1180',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3940,
        rating: 4.9,
        liked: true,
        date: '2028-11-23',
        comments: getRandomComments()
    },
    {
        id: '1181',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3950,
        rating: 4.9,
        liked: true,
        date: '2028-11-24',
        comments: getRandomComments()
    },
    {
        id: '1182',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3960,
        rating: 5.0,
        liked: true,
        date: '2028-11-25',
        comments: getRandomComments()
    },
    {
        id: '1183',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 3970,
        rating: 4.9,
        liked: false,
        date: '2028-11-26',
        comments: getRandomComments()
    },
    {
        id: '1184',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 3980,
        rating: 4.9,
        liked: true,
        date: '2028-11-27',
        comments: getRandomComments()
    },
    {
        id: '1185',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 3990,
        rating: 4.9,
        liked: true,
        date: '2028-11-28',
        comments: getRandomComments()
    },
    {
        id: '1186',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4000,
        rating: 4.9,
        liked: true,
        date: '2028-11-29',
        comments: getRandomComments()
    },
    {
        id: '1187',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4010,
        rating: 4.9,
        liked: true,
        date: '2028-11-30',
        comments: getRandomComments()
    },
    {
        id: '1188',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 4020,
        rating: 4.9,
        liked: true,
        date: '2028-12-01',
        comments: getRandomComments()
    },
    {
        id: '1189',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4030,
        rating: 4.9,
        liked: true,
        date: '2028-12-02',
        comments: getRandomComments()
    },
    {
        id: '1190',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4040,
        rating: 4.9,
        liked: true,
        date: '2028-12-03',
        comments: getRandomComments()
    },
    {
        id: '1191',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4050,
        rating: 4.9,
        liked: true,
        date: '2028-12-04',
        comments: getRandomComments()
    },
    {
        id: '1192',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4060,
        rating: 5.0,
        liked: true,
        date: '2028-12-05',
        comments: getRandomComments()
    },
    {
        id: '1193',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 4070,
        rating: 4.9,
        liked: true,
        date: '2028-12-06',
        comments: getRandomComments()
    },
    {
        id: '1194',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4080,
        rating: 4.9,
        liked: false,
        date: '2028-12-07',
        comments: getRandomComments()
    },
    {
        id: '1195',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4090,
        rating: 4.9,
        liked: true,
        date: '2028-12-08',
        comments: getRandomComments()
    },
    {
        id: '1196',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4100,
        rating: 4.9,
        liked: true,
        date: '2028-12-09',
        comments: getRandomComments()
    },
    {
        id: '1197',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4110,
        rating: 4.9,
        liked: true,
        date: '2028-12-10',
        comments: getRandomComments()
    },
    {
        id: '1198',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 4120,
        rating: 4.9,
        liked: true,
        date: '2028-12-11',
        comments: getRandomComments()
    },
    {
        id: '1199',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 4130,
        rating: 4.9,
        liked: true,
        date: '2028-12-12',
        comments: getRandomComments()
    },
    {
        id: '1200',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4140,
        rating: 4.9,
        liked: false,
        date: '2028-12-13',
        comments: getRandomComments()
    },
    {
        id: '1201',
        title: 'The Silent Dawn',
        content: `A hush descends as morning light appears,
Washing away the shadows and the fears.
New beginnings, whispered on the breeze,
Nature's calm, bringing heart-felt ease.`,
        author: 'Emily Dickinson',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 4150,
        rating: 4.9,
        liked: true,
        date: '2028-12-14',
        comments: getRandomComments()
    },
    {
        id: '1202',
        title: 'Sham-e-Firaq',
        content: `شامِ فراق کا عالم ہے کچھ ایسا،
کہ ہر سُو بس تیری یاد ہے۔
آنسو ہیں آنکھوں میں، دل میں غم،
یہ کیسا ہجر ہے، نہ کوئی دوا نہ مرہم۔`,
        author: 'Mirza Ghalib',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4160,
        rating: 4.8,
        liked: false,
        date: '2028-12-15',
        comments: getRandomComments()
    },
    {
        id: '1203',
        title: 'Zindagi Ka Safar',
        content: `Zindagi ka safar hai anokha,
Har mod pe naya sabak milta hai.
Kabhi khushi, kabhi gham ki lehar,
Bas chalta ja, yehi hai zindagi ka safar.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4170,
        rating: 4.9,
        liked: true,
        date: '2028-12-16',
        comments: getRandomComments()
    },
    {
        id: '1204',
        title: 'Jazba-e-Watan',
        content: `جذبہِ وطن کی ہے پہچان اپنی،
ہر دل میں ہے یہی ایمان اپنی۔
قربان کریں گے جان وطن پر،
یہ ہے اپنا عہد، یہ ہے اپنی شان۔`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4180,
        rating: 5.0,
        liked: true,
        date: '2028-12-17',
        comments: getRandomComments()
    },
    {
        id: '1205',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4190,
        rating: 4.9,
        liked: true,
        date: '2028-12-18',
        comments: getRandomComments()
    },
    {
        id: '1206',
        title: 'Dua-e-Hidayat',
        content: `Ya Rabb, hidayat naseeb farma,
Gumrahi se hamain bachana.
Hamari dua hai, tu hi Raheem,
Apni rehmat se nawaz de.`,
        author: 'Anonymous',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4200,
        rating: 4.9,
        liked: true,
        date: '2028-12-19',
        comments: getRandomComments()
    },
    {
        id: '1207',
        title: 'Ishq Ka Zehar',
        content: `عشق کا زہر ہے کچھ ایسا،
جو روح کو بھی جلا دے۔
نہ کوئی سکون ہے، نہ کوئی آرام،
بس ہر پل ہے تیری یاد کا جام۔`,
        author: 'Parveen Shakir',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4210,
        rating: 4.9,
        liked: true,
        date: '2028-12-20',
        comments: getRandomComments()
    },
    {
        id: '1208',
        title: 'Mahi De Rooh Da Rishta',
        content: `Mahi de rooh da rishta hai gehra,
Jaan bhi jaye to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Heartbroken',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4220,
        rating: 4.8,
        liked: false,
        date: '2028-12-21',
        comments: getRandomComments()
    },
    {
        id: '1209',
        title: 'Bulleh Shah Te Zindagi',
        content: `Bulleh Shah kehnda ae,
Zindagi ik khel hai.
Rab di marzi hai,
Jo hove so hove.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4230,
        rating: 4.9,
        liked: true,
        date: '2028-12-22',
        comments: getRandomComments()
    },
    {
        id: '1210',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4240,
        rating: 4.9,
        liked: true,
        date: '2028-12-23',
        comments: getRandomComments()
    },
    {
        id: '1211',
        title: 'Khali Haath',
        content: `Khali haath aaye the, khali haath jayenge,
Duniya mein kya laye the, kya le jayenge.
Ye zindagi hai, ye fanah hai,
Bas apni manzil ko pa le tu.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4250,
        rating: 4.8,
        liked: false,
        date: '2028-12-24',
        comments: getRandomComments()
    },
    {
        id: '1212',
        title: 'Jashn-e-Eid',
        content: `جشنِ عید ہے ہر سو،
خوشیوں کا سماں ہے۔
رب کی ہے یہ عنایت،
ہر دل میں ہے مسکان۔`,
        author: 'Qateel Shifai',
        category: 'Eid',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4260,
        rating: 5.0,
        liked: true,
        date: '2028-12-25',
        comments: getRandomComments()
    },
    {
        id: '1213',
        title: 'The Strength Within',
        content: `You have power over your mind - not outside events. Realize this, and you will find strength.`,
        author: 'Marcus Aurelius',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 4270,
        rating: 4.9,
        liked: true,
        date: '2028-12-26',
        comments: getRandomComments()
    },
    {
        id: '1214',
        title: 'Safar-e-Ishq',
        content: `سفرِ عشق میں ہے ہر سو امتحان،
دل میں جل رہا ہے تیری یاد کا دیوان۔
ہر قدم پہ ہے نیا غم، نیا درد،
یہ زندگی ہے یا کوئی طوفان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4280,
        rating: 4.9,
        liked: true,
        date: '2028-12-27',
        comments: getRandomComments()
    },
    {
        id: '1215',
        title: 'Zindagi Ka Raaz-e-Hayat',
        content: `Zindagi ka raaz-e-hayat kuch aisa hai,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Wasi Shah',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4290,
        rating: 4.9,
        liked: true,
        date: '2028-12-28',
        comments: getRandomComments()
    },
    {
        id: '1216',
        title: 'Dosti Ka Bandhan',
        content: `Dosti ka bandhan hai kuch aisa,
Jo kabhi na toote.
Har mauj mein hai ek kahani,
Ye yaari hai apni, amar rahe.`,
        author: 'Anonymous',
        category: 'Friendship',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4300,
        rating: 4.9,
        liked: true,
        date: '2028-12-29',
        comments: getRandomComments()
    },
    {
        id: '1217',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi di asal khubsurati,
Eh hai ke tu kitna jeenda.
Naal gham te khushiyan de,
Har pal nu mehsoos kar.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4310,
        rating: 4.9,
        liked: true,
        date: '2028-12-30',
        comments: getRandomComments()
    },
    {
        id: '1218',
        title: 'Rumi on Love\'s Language',
        content: `Love is the bridge between you and everything.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 4320,
        rating: 4.9,
        liked: true,
        date: '2028-12-31',
        comments: getRandomComments()
    },
    {
        id: '1219',
        title: 'Funny Life Lesson',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 4330,
        rating: 4.8,
        liked: false,
        date: '2029-01-01',
        comments: getRandomComments()
    },
    {
        id: '1220',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4340,
        rating: 4.9,
        liked: true,
        date: '2029-01-02',
        comments: getRandomComments()
    },
    {
        id: '1221',
        title: 'Phoolon Ki Waadi',
        content: `پھولوں کی وادی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انمول تحفہ،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4350,
        rating: 4.9,
        liked: true,
        date: '2029-01-03',
        comments: getRandomComments()
    },
    {
        id: '1222',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4360,
        rating: 5.0,
        liked: true,
        date: '2029-01-04',
        comments: getRandomComments()
    },
    {
        id: '1223',
        title: 'The Best Way Out',
        content: `The best way out is always through.`,
        author: 'Robert Frost',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4370,
        rating: 4.9,
        liked: true,
        date: '2029-01-05',
        comments: getRandomComments()
    },
    {
        id: '1224',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4380,
        rating: 4.8,
        liked: false,
        date: '2029-01-06',
        comments: getRandomComments()
    },
    {
        id: '1225',
        title: 'Waqt Ki Chaal',
        content: `Waqt ki chaal hai kuch aisi,
Jo har shakhs ko badal de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4390,
        rating: 4.9,
        liked: false,
        date: '2029-01-07',
        comments: getRandomComments()
    },
    {
        id: '1226',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4400,
        rating: 4.8,
        liked: false,
        date: '2029-01-08',
        comments: getRandomComments()
    },
    {
        id: '1227',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4410,
        rating: 4.9,
        liked: true,
        date: '2029-01-09',
        comments: getRandomComments()
    },
    {
        id: '1228',
        title: 'Yunus Emre on Humanity',
        content: `Come, let us all be friends for once.
Let us make life easy on us.`,
        author: 'Yunus Emre',
        category: 'Peace',
        language: 'Turkish',
        lines: '2 Lines',
        likes: 4420,
        rating: 4.9,
        liked: true,
        date: '2029-01-10',
        comments: getRandomComments()
    },
    {
        id: '1229',
        title: 'Maya Angelou on Courage',
        content: `Courage is the most important of all the virtues, because without courage, you can't practice any other virtue consistently.`,
        author: 'Maya Angelou',
        category: 'Inspirational',
        language: 'English',
        lines: 'Larger',
        likes: 4430,
        rating: 4.9,
        liked: true,
        date: '2029-01-11',
        comments: getRandomComments()
    },
    {
        id: '1230',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4440,
        rating: 4.9,
        liked: true,
        date: '2029-01-12',
        comments: getRandomComments()
    },
    {
        id: '1231',
        title: 'Gulshan-e-Chaman',
        content: `گلشنِ چمن ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4450,
        rating: 4.9,
        liked: true,
        date: '2029-01-13',
        comments: getRandomComments()
    },
    {
        id: '1232',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4460,
        rating: 5.0,
        liked: true,
        date: '2029-01-14',
        comments: getRandomComments()
    },
    {
        id: '1233',
        title: 'The Poet\'s Lament',
        content: `Oh, what a tangled web we weave,
When first we practice to deceive!`,
        author: 'Walter Scott',
        category: 'Quotes',
        language: 'English',
        lines: '2 Lines',
        likes: 4470,
        rating: 4.9,
        liked: true,
        date: '2029-01-15',
        comments: getRandomComments()
    },
    {
        id: '1234',
        title: 'Dil Ki Piyas',
        content: `دل کی پیاس ہے کچھ ایسی،
جو بجھتی ہی نہیں۔
ہر پل ہے تیری یاد،
جو آنکھوں کو نم کرتی ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4480,
        rating: 4.9,
        liked: true,
        date: '2029-01-16',
        comments: getRandomComments()
    },
    {
        id: '1235',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4490,
        rating: 4.9,
        liked: false,
        date: '2029-01-17',
        comments: getRandomComments()
    },
    {
        id: '1236',
        title: 'Pyar Ka Izhaar',
        content: `Pyar ka izhaar hai kuch aisa,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Romantic',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4500,
        rating: 4.9,
        liked: true,
        date: '2029-01-18',
        comments: getRandomComments()
    },
    {
        id: '1237',
        title: 'Bulleh Shah Te Ishq',
        content: `Ishq di manzil hai aisi,
Jithe Rab da deedar hove.
Apni khudi nu pehchan Bulleya,
Rab tere andar hi wasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4510,
        rating: 4.9,
        liked: true,
        date: '2029-01-19',
        comments: getRandomComments()
    },
    {
        id: '1238',
        title: 'Mahatma Gandhi on Peace',
        content: `There is no way to peace, peace is the way.`,
        author: 'Mahatma Gandhi',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4520,
        rating: 4.9,
        liked: true,
        date: '2029-01-20',
        comments: getRandomComments()
    },
    {
        id: '1239',
        title: 'Funny Wisdom',
        content: `I’m on a seafood diet. I see food and I eat it.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: '1 Line',
        likes: 4530,
        rating: 4.8,
        liked: true,
        date: '2029-01-21',
        comments: getRandomComments()
    },
    {
        id: '1240',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4540,
        rating: 4.8,
        liked: false,
        date: '2029-01-22',
        comments: getRandomComments()
    },
    {
        id: '1241',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4550,
        rating: 4.9,
        liked: true,
        date: '2029-01-23',
        comments: getRandomComments()
    },
    {
        id: '1242',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4560,
        rating: 5.0,
        liked: true,
        date: '2029-01-24',
        comments: getRandomComments()
    },
    {
        id: '1243',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 4570,
        rating: 4.9,
        liked: false,
        date: '2029-01-25',
        comments: getRandomComments()
    },
    {
        id: '1244',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4580,
        rating: 4.8,
        liked: false,
        date: '2029-01-26',
        comments: getRandomComments()
    },
    {
        id: '1245',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4590,
        rating: 4.9,
        liked: false,
        date: '2029-01-27',
        comments: getRandomComments()
    },
    {
        id: '1246',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4600,
        rating: 4.9,
        liked: true,
        date: '2029-01-28',
        comments: getRandomComments()
    },
    {
        id: '1247',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4610,
        rating: 4.9,
        liked: true,
        date: '2029-01-29',
        comments: getRandomComments()
    },
    {
        id: '1248',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 4620,
        rating: 4.9,
        liked: true,
        date: '2029-01-30',
        comments: getRandomComments()
    },
    {
        id: '1249',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 4630,
        rating: 4.9,
        liked: true,
        date: '2029-01-31',
        comments: getRandomComments()
    },
    {
        id: '1250',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4640,
        rating: 4.9,
        liked: false,
        date: '2029-02-01',
        comments: getRandomComments()
    },
    {
        id: '1251',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4650,
        rating: 4.9,
        liked: true,
        date: '2029-02-02',
        comments: getRandomComments()
    },
    {
        id: '1252',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4660,
        rating: 5.0,
        liked: true,
        date: '2029-02-03',
        comments: getRandomComments()
    },
    {
        id: '1253',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 4670,
        rating: 4.9,
        liked: true,
        date: '2029-02-04',
        comments: getRandomComments()
    },
    {
        id: '1254',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4680,
        rating: 4.9,
        liked: false,
        date: '2029-02-05',
        comments: getRandomComments()
    },
    {
        id: '1255',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4690,
        rating: 4.9,
        liked: true,
        date: '2029-02-06',
        comments: getRandomComments()
    },
    {
        id: '1256',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 4700,
        rating: 4.9,
        liked: true,
        date: '2029-02-07',
        comments: getRandomComments()
    },
    {
        id: '1257',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4710,
        rating: 4.9,
        liked: true,
        date: '2029-02-08',
        comments: getRandomComments()
    },
    {
        id: '1258',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 4720,
        rating: 4.9,
        liked: true,
        date: '2029-02-09',
        comments: getRandomComments()
    },
    {
        id: '1259',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 4730,
        rating: 4.9,
        liked: true,
        date: '2029-02-10',
        comments: getRandomComments()
    },
    {
        id: '1260',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4740,
        rating: 4.9,
        liked: true,
        date: '2029-02-11',
        comments: getRandomComments()
    },
    {
        id: '1261',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4750,
        rating: 4.9,
        liked: true,
        date: '2029-02-12',
        comments: getRandomComments()
    },
    {
        id: '1262',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4760,
        rating: 5.0,
        liked: true,
        date: '2029-02-13',
        comments: getRandomComments()
    },
    {
        id: '1263',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 4770,
        rating: 4.9,
        liked: true,
        date: '2029-02-14',
        comments: getRandomComments()
    },
    {
        id: '1264',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4780,
        rating: 4.9,
        liked: true,
        date: '2029-02-15',
        comments: getRandomComments()
    },
    {
        id: '1265',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4790,
        rating: 4.9,
        liked: true,
        date: '2029-02-16',
        comments: getRandomComments()
    },
    {
        id: '1266',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4800,
        rating: 4.9,
        liked: true,
        date: '2029-02-17',
        comments: getRandomComments()
    },
    {
        id: '1267',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4810,
        rating: 4.9,
        liked: true,
        date: '2029-02-18',
        comments: getRandomComments()
    },
    {
        id: '1268',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4820,
        rating: 4.9,
        liked: true,
        date: '2029-02-19',
        comments: getRandomComments()
    },
    {
        id: '1269',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 4830,
        rating: 4.9,
        liked: true,
        date: '2029-02-20',
        comments: getRandomComments()
    },
    {
        id: '1270',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4840,
        rating: 4.9,
        liked: false,
        date: '2029-02-21',
        comments: getRandomComments()
    },
    {
        id: '1271',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4850,
        rating: 4.9,
        liked: true,
        date: '2029-02-22',
        comments: getRandomComments()
    },
    {
        id: '1272',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4860,
        rating: 5.0,
        liked: true,
        date: '2029-02-23',
        comments: getRandomComments()
    },
    {
        id: '1273',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 4870,
        rating: 4.9,
        liked: true,
        date: '2029-02-24',
        comments: getRandomComments()
    },
    {
        id: '1274',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4880,
        rating: 4.9,
        liked: false,
        date: '2029-02-25',
        comments: getRandomComments()
    },
    {
        id: '1275',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4890,
        rating: 4.9,
        liked: true,
        date: '2029-02-26',
        comments: getRandomComments()
    },
    {
        id: '1276',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4900,
        rating: 4.9,
        liked: true,
        date: '2029-02-27',
        comments: getRandomComments()
    },
    {
        id: '1277',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 4910,
        rating: 4.9,
        liked: true,
        date: '2029-02-28',
        comments: getRandomComments()
    },
    {
        id: '1278',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 4920,
        rating: 4.9,
        liked: true,
        date: '2029-03-01',
        comments: getRandomComments()
    },
    {
        id: '1279',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 4930,
        rating: 4.8,
        liked: false,
        date: '2029-03-02',
        comments: getRandomComments()
    },
    {
        id: '1280',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4940,
        rating: 4.9,
        liked: false,
        date: '2029-03-03',
        comments: getRandomComments()
    },
    {
        id: '1281',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4950,
        rating: 4.9,
        liked: true,
        date: '2029-03-04',
        comments: getRandomComments()
    },
    {
        id: '1282',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4960,
        rating: 5.0,
        liked: true,
        date: '2029-03-05',
        comments: getRandomComments()
    },
    {
        id: '1283',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 4970,
        rating: 4.9,
        liked: true,
        date: '2029-03-06',
        comments: getRandomComments()
    },
    {
        id: '1284',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 4980,
        rating: 4.9,
        liked: false,
        date: '2029-03-07',
        comments: getRandomComments()
    },
    {
        id: '1285',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 4990,
        rating: 4.9,
        liked: true,
        date: '2029-03-08',
        comments: getRandomComments()
    },
    {
        id: '1286',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5000,
        rating: 4.9,
        liked: false,
        date: '2029-03-09',
        comments: getRandomComments()
    },
    {
        id: '1287',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5010,
        rating: 4.9,
        liked: true,
        date: '2029-03-10',
        comments: getRandomComments()
    },
    {
        id: '1288',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5020,
        rating: 4.9,
        liked: true,
        date: '2029-03-11',
        comments: getRandomComments()
    },
    {
        id: '1289',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 5030,
        rating: 4.9,
        liked: true,
        date: '2029-03-12',
        comments: getRandomComments()
    },
    {
        id: '1290',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5040,
        rating: 4.9,
        liked: true,
        date: '2029-03-13',
        comments: getRandomComments()
    },
    {
        id: '1291',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5050,
        rating: 4.9,
        liked: true,
        date: '2029-03-14',
        comments: getRandomComments()
    },
    {
        id: '1292',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5060,
        rating: 5.0,
        liked: true,
        date: '2029-03-15',
        comments: getRandomComments()
    },
    {
        id: '1293',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 5070,
        rating: 4.9,
        liked: false,
        date: '2029-03-16',
        comments: getRandomComments()
    },
    {
        id: '1294',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5080,
        rating: 4.9,
        liked: true,
        date: '2029-03-17',
        comments: getRandomComments()
    },
    {
        id: '1295',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5090,
        rating: 4.9,
        liked: true,
        date: '2029-03-18',
        comments: getRandomComments()
    },
    {
        id: '1296',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5100,
        rating: 4.9,
        liked: true,
        date: '2029-03-19',
        comments: getRandomComments()
    },
    {
        id: '1297',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5110,
        rating: 4.9,
        liked: true,
        date: '2029-03-20',
        comments: getRandomComments()
    },
    {
        id: '1298',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 5120,
        rating: 4.9,
        liked: true,
        date: '2029-03-21',
        comments: getRandomComments()
    },
    {
        id: '1299',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5130,
        rating: 4.9,
        liked: true,
        date: '2029-03-22',
        comments: getRandomComments()
    },
    {
        id: '1300',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5140,
        rating: 4.9,
        liked: true,
        date: '2029-03-23',
        comments: getRandomComments()
    },
    {
        id: '1301',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5150,
        rating: 4.9,
        liked: true,
        date: '2029-03-24',
        comments: getRandomComments()
    },
    {
        id: '1302',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5160,
        rating: 5.0,
        liked: true,
        date: '2029-03-25',
        comments: getRandomComments()
    },
    {
        id: '1303',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 5170,
        rating: 4.9,
        liked: true,
        date: '2029-03-26',
        comments: getRandomComments()
    },
    {
        id: '1304',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5180,
        rating: 4.9,
        liked: false,
        date: '2029-03-27',
        comments: getRandomComments()
    },
    {
        id: '1305',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5190,
        rating: 4.9,
        liked: true,
        date: '2029-03-28',
        comments: getRandomComments()
    },
    {
        id: '1306',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5200,
        rating: 4.9,
        liked: true,
        date: '2029-03-29',
        comments: getRandomComments()
    },
    {
        id: '1307',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5210,
        rating: 4.9,
        liked: true,
        date: '2029-03-30',
        comments: getRandomComments()
    },
    {
        id: '1308',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 5220,
        rating: 4.9,
        liked: true,
        date: '2029-03-31',
        comments: getRandomComments()
    },
    {
        id: '1309',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 5230,
        rating: 4.9,
        liked: true,
        date: '2029-04-01',
        comments: getRandomComments()
    },
    {
        id: '1310',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5240,
        rating: 4.9,
        liked: false,
        date: '2029-04-02',
        comments: getRandomComments()
    },
    {
        id: '1311',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5250,
        rating: 4.9,
        liked: true,
        date: '2029-04-03',
        comments: getRandomComments()
    },
    {
        id: '1312',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5260,
        rating: 5.0,
        liked: true,
        date: '2029-04-04',
        comments: getRandomComments()
    },
    {
        id: '1313',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 5270,
        rating: 4.9,
        liked: true,
        date: '2029-04-05',
        comments: getRandomComments()
    },
    {
        id: '1314',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5280,
        rating: 4.9,
        liked: false,
        date: '2029-04-06',
        comments: getRandomComments()
    },
    {
        id: '1315',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5290,
        rating: 4.9,
        liked: true,
        date: '2029-04-07',
        comments: getRandomComments()
    },
    {
        id: '1316',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5300,
        rating: 4.9,
        liked: true,
        date: '2029-04-08',
        comments: getRandomComments()
    },
    {
        id: '1317',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5310,
        rating: 4.9,
        liked: true,
        date: '2029-04-09',
        comments: getRandomComments()
    },
    {
        id: '1318',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 5320,
        rating: 4.9,
        liked: true,
        date: '2029-04-10',
        comments: getRandomComments()
    },
    {
        id: '1319',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 5330,
        rating: 4.8,
        liked: false,
        date: '2029-04-11',
        comments: getRandomComments()
    },
    {
        id: '1320',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5340,
        rating: 4.9,
        liked: true,
        date: '2029-04-12',
        comments: getRandomComments()
    },
    {
        id: '1321',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5350,
        rating: 4.9,
        liked: true,
        date: '2029-04-13',
        comments: getRandomComments()
    },
    {
        id: '1322',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5360,
        rating: 5.0,
        liked: true,
        date: '2029-04-14',
        comments: getRandomComments()
    },
    {
        id: '1323',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 5370,
        rating: 4.9,
        liked: true,
        date: '2029-04-15',
        comments: getRandomComments()
    },
    {
        id: '1324',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5380,
        rating: 4.9,
        liked: false,
        date: '2029-04-16',
        comments: getRandomComments()
    },
    {
        id: '1325',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5390,
        rating: 4.9,
        liked: false,
        date: '2029-04-17',
        comments: getRandomComments()
    },
    {
        id: '1326',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5400,
        rating: 4.9,
        liked: false,
        date: '2029-04-18',
        comments: getRandomComments()
    },
    {
        id: '1327',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5410,
        rating: 4.9,
        liked: true,
        date: '2029-04-19',
        comments: getRandomComments()
    },
    {
        id: '1328',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5420,
        rating: 4.9,
        liked: true,
        date: '2029-04-20',
        comments: getRandomComments()
    },
    {
        id: '1329',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 5430,
        rating: 4.8,
        liked: false,
        date: '2029-04-21',
        comments: getRandomComments()
    },
    {
        id: '1330',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5440,
        rating: 4.9,
        liked: true,
        date: '2029-04-22',
        comments: getRandomComments()
    },
    {
        id: '1331',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5450,
        rating: 4.9,
        liked: true,
        date: '2029-04-23',
        comments: getRandomComments()
    },
    {
        id: '1332',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5460,
        rating: 5.0,
        liked: true,
        date: '2029-04-24',
        comments: getRandomComments()
    },
    {
        id: '1333',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 5470,
        rating: 4.9,
        liked: false,
        date: '2029-04-25',
        comments: getRandomComments()
    },
    {
        id: '1334',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5480,
        rating: 4.9,
        liked: false,
        date: '2029-04-26',
        comments: getRandomComments()
    },
    {
        id: '1335',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5490,
        rating: 4.9,
        liked: false,
        date: '2029-04-27',
        comments: getRandomComments()
    },
    {
        id: '1336',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5500,
        rating: 4.9,
        liked: true,
        date: '2029-04-28',
        comments: getRandomComments()
    },
    {
        id: '1337',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5510,
        rating: 4.9,
        liked: true,
        date: '2029-04-29',
        comments: getRandomComments()
    },
    {
        id: '1338',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 5520,
        rating: 4.9,
        liked: true,
        date: '2029-04-30',
        comments: getRandomComments()
    },
    {
        id: '1339',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 5530,
        rating: 4.9,
        liked: true,
        date: '2029-05-01',
        comments: getRandomComments()
    },
    {
        id: '1340',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5540,
        rating: 4.9,
        liked: false,
        date: '2029-05-02',
        comments: getRandomComments()
    },
    {
        id: '1341',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5550,
        rating: 4.9,
        liked: true,
        date: '2029-05-03',
        comments: getRandomComments()
    },
    {
        id: '1342',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5560,
        rating: 5.0,
        liked: true,
        date: '2029-05-04',
        comments: getRandomComments()
    },
    {
        id: '1343',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 5570,
        rating: 4.9,
        liked: true,
        date: '2029-05-05',
        comments: getRandomComments()
    },
    {
        id: '1344',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5580,
        rating: 4.9,
        liked: false,
        date: '2029-05-06',
        comments: getRandomComments()
    },
    {
        id: '1345',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5590,
        rating: 4.9,
        liked: true,
        date: '2029-05-07',
        comments: getRandomComments()
    },
    {
        id: '1346',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5600,
        rating: 4.9,
        liked: true,
        date: '2029-05-08',
        comments: getRandomComments()
    },
    {
        id: '1347',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5610,
        rating: 4.9,
        liked: true,
        date: '2029-05-09',
        comments: getRandomComments()
    },
    {
        id: '1348',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 5620,
        rating: 4.9,
        liked: true,
        date: '2029-05-10',
        comments: getRandomComments()
    },
    {
        id: '1349',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 5630,
        rating: 4.9,
        liked: true,
        date: '2029-05-11',
        comments: getRandomComments()
    },
    {
        id: '1350',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5640,
        rating: 4.9,
        liked: true,
        date: '2029-05-12',
        comments: getRandomComments()
    },
    {
        id: '1351',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5650,
        rating: 4.9,
        liked: true,
        date: '2029-05-13',
        comments: getRandomComments()
    },
    {
        id: '1352',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5660,
        rating: 5.0,
        liked: true,
        date: '2029-05-14',
        comments: getRandomComments()
    },
    {
        id: '1353',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 5670,
        rating: 4.9,
        liked: true,
        date: '2029-05-15',
        comments: getRandomComments()
    },
    {
        id: '1354',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5680,
        rating: 4.9,
        liked: true,
        date: '2029-05-16',
        comments: getRandomComments()
    },
    {
        id: '1355',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5690,
        rating: 4.9,
        liked: true,
        date: '2029-05-17',
        comments: getRandomComments()
    },
    {
        id: '1356',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5700,
        rating: 4.9,
        liked: true,
        date: '2029-05-18',
        comments: getRandomComments()
    },
    {
        id: '1357',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5710,
        rating: 4.9,
        liked: true,
        date: '2029-05-19',
        comments: getRandomComments()
    },
    {
        id: '1358',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5720,
        rating: 4.9,
        liked: true,
        date: '2029-05-20',
        comments: getRandomComments()
    },
    {
        id: '1359',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 5730,
        rating: 4.9,
        liked: true,
        date: '2029-05-21',
        comments: getRandomComments()
    },
    {
        id: '1360',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5740,
        rating: 4.9,
        liked: false,
        date: '2029-05-22',
        comments: getRandomComments()
    },
    {
        id: '1361',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5750,
        rating: 4.9,
        liked: true,
        date: '2029-05-23',
        comments: getRandomComments()
    },
    {
        id: '1362',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5760,
        rating: 5.0,
        liked: true,
        date: '2029-05-24',
        comments: getRandomComments()
    },
    {
        id: '1363',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5770,
        rating: 4.9,
        liked: true,
        date: '2029-05-25',
        comments: getRandomComments()
    },
    {
        id: '1364',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5780,
        rating: 4.9,
        liked: false,
        date: '2029-05-26',
        comments: getRandomComments()
    },
    {
        id: '1365',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5790,
        rating: 4.9,
        liked: true,
        date: '2029-05-27',
        comments: getRandomComments()
    },
    {
        id: '1366',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5800,
        rating: 4.9,
        liked: true,
        date: '2029-05-28',
        comments: getRandomComments()
    },
    {
        id: '1367',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5810,
        rating: 4.9,
        liked: true,
        date: '2029-05-29',
        comments: getRandomComments()
    },
    {
        id: '1368',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 5820,
        rating: 4.9,
        liked: true,
        date: '2029-05-30',
        comments: getRandomComments()
    },
    {
        id: '1369',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 5830,
        rating: 4.8,
        liked: false,
        date: '2029-05-31',
        comments: getRandomComments()
    },
    {
        id: '1370',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5840,
        rating: 4.9,
        liked: false,
        date: '2029-06-01',
        comments: getRandomComments()
    },
    {
        id: '1371',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5850,
        rating: 4.9,
        liked: true,
        date: '2029-06-02',
        comments: getRandomComments()
    },
    {
        id: '1372',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5860,
        rating: 5.0,
        liked: true,
        date: '2029-06-03',
        comments: getRandomComments()
    },
    {
        id: '1373',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 5870,
        rating: 4.9,
        liked: true,
        date: '2029-06-04',
        comments: getRandomComments()
    },
    {
        id: '1374',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5880,
        rating: 4.9,
        liked: false,
        date: '2029-06-05',
        comments: getRandomComments()
    },
    {
        id: '1375',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5890,
        rating: 4.9,
        liked: true,
        date: '2029-06-06',
        comments: getRandomComments()
    },
    {
        id: '1376',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 5900,
        rating: 4.9,
        liked: false,
        date: '2029-06-07',
        comments: getRandomComments()
    },
    {
        id: '1377',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 5910,
        rating: 4.9,
        liked: true,
        date: '2029-06-08',
        comments: getRandomComments()
    },
    {
        id: '1378',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 5920,
        rating: 4.9,
        liked: true,
        date: '2029-06-09',
        comments: getRandomComments()
    },
    {
        id: '1379',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 5930,
        rating: 4.9,
        liked: true,
        date: '2029-06-10',
        comments: getRandomComments()
    },
    {
        id: '1380',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5940,
        rating: 4.9,
        liked: true,
        date: '2029-06-11',
        comments: getRandomComments()
    },
    {
        id: '1381',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5950,
        rating: 4.9,
        liked: true,
        date: '2029-06-12',
        comments: getRandomComments()
    },
    {
        id: '1382',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5960,
        rating: 5.0,
        liked: true,
        date: '2029-06-13',
        comments: getRandomComments()
    },
    {
        id: '1383',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 5970,
        rating: 4.9,
        liked: false,
        date: '2029-06-14',
        comments: getRandomComments()
    },
    {
        id: '1384',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 5980,
        rating: 4.9,
        liked: true,
        date: '2029-06-15',
        comments: getRandomComments()
    },
    {
        id: '1385',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 5990,
        rating: 4.9,
        liked: true,
        date: '2029-06-16',
        comments: getRandomComments()
    },
    {
        id: '1386',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6000,
        rating: 4.9,
        liked: true,
        date: '2029-06-17',
        comments: getRandomComments()
    },
    {
        id: '1387',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6010,
        rating: 4.9,
        liked: true,
        date: '2029-06-18',
        comments: getRandomComments()
    },
    {
        id: '1388',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 6020,
        rating: 4.9,
        liked: true,
        date: '2029-06-19',
        comments: getRandomComments()
    },
    {
        id: '1389',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6030,
        rating: 4.9,
        liked: true,
        date: '2029-06-20',
        comments: getRandomComments()
    },
    {
        id: '1390',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6040,
        rating: 4.9,
        liked: true,
        date: '2029-06-21',
        comments: getRandomComments()
    },
    {
        id: '1391',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6050,
        rating: 4.9,
        liked: true,
        date: '2029-06-22',
        comments: getRandomComments()
    },
    {
        id: '1392',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6060,
        rating: 5.0,
        liked: true,
        date: '2029-06-23',
        comments: getRandomComments()
    },
    {
        id: '1393',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 6070,
        rating: 4.9,
        liked: true,
        date: '2029-06-24',
        comments: getRandomComments()
    },
    {
        id: '1394',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6080,
        rating: 4.9,
        liked: false,
        date: '2029-06-25',
        comments: getRandomComments()
    },
    {
        id: '1395',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6090,
        rating: 4.9,
        liked: true,
        date: '2029-06-26',
        comments: getRandomComments()
    },
    {
        id: '1396',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6100,
        rating: 4.9,
        liked: true,
        date: '2029-06-27',
        comments: getRandomComments()
    },
    {
        id: '1397',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6110,
        rating: 4.9,
        liked: true,
        date: '2029-06-28',
        comments: getRandomComments()
    },
    {
        id: '1398',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 6120,
        rating: 4.9,
        liked: true,
        date: '2029-06-29',
        comments: getRandomComments()
    },
    {
        id: '1399',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 6130,
        rating: 4.9,
        liked: true,
        date: '2029-06-30',
        comments: getRandomComments()
    },
    {
        id: '1400',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6140,
        rating: 4.9,
        liked: false,
        date: '2029-07-01',
        comments: getRandomComments()
    },
    {
        id: '1401',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6150,
        rating: 4.9,
        liked: true,
        date: '2029-07-02',
        comments: getRandomComments()
    },
    {
        id: '1402',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6160,
        rating: 5.0,
        liked: true,
        date: '2029-07-03',
        comments: getRandomComments()
    },
    {
        id: '1403',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 6170,
        rating: 4.9,
        liked: true,
        date: '2029-07-04',
        comments: getRandomComments()
    },
    {
        id: '1404',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6180,
        rating: 4.9,
        liked: false,
        date: '2029-07-05',
        comments: getRandomComments()
    },
    {
        id: '1405',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6190,
        rating: 4.9,
        liked: true,
        date: '2029-07-06',
        comments: getRandomComments()
    },
    {
        id: '1406',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6200,
        rating: 4.9,
        liked: true,
        date: '2029-07-07',
        comments: getRandomComments()
    },
    {
        id: '1407',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6210,
        rating: 4.9,
        liked: true,
        date: '2029-07-08',
        comments: getRandomComments()
    },
    {
        id: '1408',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 6220,
        rating: 4.9,
        liked: true,
        date: '2029-07-09',
        comments: getRandomComments()
    },
    {
        id: '1409',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 6230,
        rating: 4.8,
        liked: false,
        date: '2029-07-10',
        comments: getRandomComments()
    },
    {
        id: '1410',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6240,
        rating: 4.9,
        liked: true,
        date: '2029-07-11',
        comments: getRandomComments()
    },
    {
        id: '1411',
        title: 'Badal Ki Garaj',
        content: `بادل کی گرج ہے ہر سو،
برسات کا موسم ہے آیا۔
ہر بوند میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6250,
        rating: 4.9,
        liked: true,
        date: '2029-07-12',
        comments: getRandomComments()
    },
    {
        id: '1412',
        title: 'Azm-e-Ali',
        content: `Azm-e-Ali hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye junoon hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6260,
        rating: 5.0,
        liked: true,
        date: '2029-07-13',
        comments: getRandomComments()
    },
    {
        id: '1413',
        title: 'The Sun Still Shines',
        content: `Into each life some rain must fall, but sunshine comes again.`,
        author: 'Henry Wadsworth Longfellow',
        category: 'Inspirational',
        language: 'English',
        lines: '1 Line',
        likes: 6270,
        rating: 4.9,
        liked: true,
        date: '2029-07-14',
        comments: getRandomComments()
    },
    {
        id: '1414',
        title: 'Gham-e-Firaq',
        content: `غمِ فراق ہے کچھ ایسا،
جو ہر سانس میں گھلتا ہے۔
نہ کوئی دوا ہے، نہ کوئی چارہ،
بس اکیلا میں ہی تڑپتا رہتا ہوں۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6280,
        rating: 4.9,
        liked: false,
        date: '2029-07-15',
        comments: getRandomComments()
    },
    {
        id: '1415',
        title: 'Zindagi Ka Khel',
        content: `Zindagi ka khel hai kuch aisa,
Kabhi hansati hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6290,
        rating: 4.9,
        liked: false,
        date: '2029-07-16',
        comments: getRandomComments()
    },
    {
        id: '1416',
        title: 'Dil Ka Rog',
        content: `Dil ka rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6300,
        rating: 4.9,
        liked: false,
        date: '2029-07-17',
        comments: getRandomComments()
    },
    {
        id: '1417',
        title: 'Sufi Rang',
        content: `Sufi rang hai kuch aisa,
Jo har dil ko rangeen kar de.
Rab ka ishq hai har so,
Yehi hai zindagi ka maksad.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6310,
        rating: 4.9,
        liked: true,
        date: '2029-07-18',
        comments: getRandomComments()
    },
    {
        id: '1418',
        title: 'Hellen Keller on Vision',
        content: `The only thing worse than being blind is having sight but no vision.`,
        author: 'Helen Keller',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6320,
        rating: 4.9,
        liked: true,
        date: '2029-07-19',
        comments: getRandomComments()
    },
    {
        id: '1419',
        title: 'Funny Truth',
        content: `I love sleep. My life has a tendency to fall apart when I'm awake, you know?`,
        author: 'Ernest Hemingway',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 6330,
        rating: 4.8,
        liked: false,
        date: '2029-07-20',
        comments: getRandomComments()
    },
    {
        id: '1420',
        title: 'Dua-e-Khair',
        content: `Ya Rabb, hamari dua qubool farma,
Har mushkil ko aasan farma.
Hamein seedhi raah dikha,
Aur apni rehmat se nawaz.`,
        author: 'Mohsin Naqvi',
        category: 'Dua',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6340,
        rating: 4.9,
        liked: true,
        date: '2029-07-21',
        comments: getRandomComments()
    },
    {
        id: '1421',
        title: 'Khushboo-e-Gul',
        content: `خوشبوِ گل ہے ہر سو،
موسمِ بہار ہے آیا۔
ہر پتی میں ہے ایک کہانی،
یہ قدرت کا ہے انعام۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6350,
        rating: 4.9,
        liked: true,
        date: '2029-07-22',
        comments: getRandomComments()
    },
    {
        id: '1422',
        title: 'Jazba-e-Watan',
        content: `Jazba-e-Watan hai dil mein,
Har zulm ke khilaf khara hoon.
Ye qaum hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6360,
        rating: 5.0,
        liked: true,
        date: '2029-07-23',
        comments: getRandomComments()
    },
    {
        id: '1423',
        title: 'The Sound of Silence',
        content: `Hello darkness, my old friend,
I've come to talk with you again.`,
        author: 'Simon & Garfunkel',
        category: 'Sad',
        language: 'English',
        lines: '2 Lines',
        likes: 6370,
        rating: 4.9,
        liked: false,
        date: '2029-07-24',
        comments: getRandomComments()
    },
    {
        id: '1424',
        title: 'Gham Ki Dastan',
        content: `غم کی داستاں ہے کچھ ایسی،
جو زبان پر آ نہ سکی۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکی۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6380,
        rating: 4.9,
        liked: false,
        date: '2029-07-25',
        comments: getRandomComments()
    },
    {
        id: '1425',
        title: 'Waqt Ka Dhoka',
        content: `Waqt ka dhoka kuch aisa hai,
Jo har shakhs ko dikha de.
Na koi apna hai, na koi begana,
Bas sab matlab ke yaar hain.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6390,
        rating: 4.9,
        liked: false,
        date: '2029-07-26',
        comments: getRandomComments()
    },
    {
        id: '1426',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Love',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6400,
        rating: 4.9,
        liked: true,
        date: '2029-07-27',
        comments: getRandomComments()
    },
    {
        id: '1427',
        title: 'Waris Shah Di Shairi',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6410,
        rating: 4.9,
        liked: true,
        date: '2029-07-28',
        comments: getRandomComments()
    },
    {
        id: '1428',
        title: 'Rumi on Love and Pain',
        content: `The wound is the place where the light enters you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 6420,
        rating: 4.9,
        liked: true,
        date: '2029-07-29',
        comments: getRandomComments()
    },
    {
        id: '1429',
        title: 'Attitude for Success',
        content: `Your attitude, not your aptitude, will determine your altitude.`,
        author: 'Zig Ziglar',
        category: 'Attitude',
        language: 'English',
        lines: '1 Line',
        likes: 6430,
        rating: 4.9,
        liked: true,
        date: '2029-07-30',
        comments: getRandomComments()
    },
    {
        id: '1430',
        title: 'Musafir',
        content: `Musafir hoon main, ik anjaan raahi,
Manzil ka pata nahin, bas chalte rehna hai.
Ye zindagi hai ya koi khuwaab,
Jahan har pal hai ik nayi kahani.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6440,
        rating: 4.9,
        liked: false,
        date: '2029-07-31',
        comments: getRandomComments()
    },
    {
        id: '1431',
        title: 'Sarsabz Wadiyan',
        content: `سرسبز وادیاں ہیں ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6450,
        rating: 4.9,
        liked: true,
        date: '2029-08-01',
        comments: getRandomComments()
    },
    {
        id: '1432',
        title: 'Qoum Ka Pasbaan',
        content: `Qoum ka pasbaan hai tu,
Apni zimmedari pehchan.
Ye Pakistan hai, ye imtehan hai,
Bas hosla rakh aur aage badh.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6460,
        rating: 5.0,
        liked: true,
        date: '2029-08-02',
        comments: getRandomComments()
    },
    {
        id: '1433',
        title: 'The Tiger',
        content: `Tiger Tiger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?`,
        author: 'William Blake',
        category: 'Nature',
        language: 'English',
        lines: '4 Lines',
        likes: 6470,
        rating: 4.9,
        liked: true,
        date: '2029-08-03',
        comments: getRandomComments()
    },
    {
        id: '1434',
        title: 'Zindagi Ki Kahani',
        content: `زندگی کی کہانی ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6480,
        rating: 4.9,
        liked: false,
        date: '2029-08-04',
        comments: getRandomComments()
    },
    {
        id: '1435',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6490,
        rating: 4.9,
        liked: true,
        date: '2029-08-05',
        comments: getRandomComments()
    },
    {
        id: '1436',
        title: 'Dil Ka Sakoon',
        content: `Dil ka sakoon hai tu,
Har pal hai teri yaad.
Tera saath chahiye,
Yehi hai meri faryad.`,
        author: 'Mansoor Malangi',
        category: 'Peace',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6500,
        rating: 4.9,
        liked: true,
        date: '2029-08-06',
        comments: getRandomComments()
    },
    {
        id: '1437',
        title: 'Amrita Pritam Da Pyaar',
        content: `Pyaar da dard hai wakhra,
Mahi bina jeena aukha.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera sahara.`,
        author: 'Amrita Pritam',
        category: 'Love',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6510,
        rating: 4.9,
        liked: true,
        date: '2029-08-07',
        comments: getRandomComments()
    },
    {
        id: '1438',
        title: 'Khalil Gibran on Love',
        content: `Love possesses not nor would it be possessed;
For love is sufficient unto love.`,
        author: 'Khalil Gibran',
        category: 'Quotes',
        language: 'Arabic',
        lines: 'Larger',
        likes: 6520,
        rating: 4.9,
        liked: true,
        date: '2029-08-08',
        comments: getRandomComments()
    },
    {
        id: '1439',
        title: 'Short & Sweet',
        content: `Less is more.`,
        author: 'Ludwig Mies van der Rohe',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 6530,
        rating: 4.9,
        liked: true,
        date: '2029-08-09',
        comments: getRandomComments()
    },
    {
        id: '1440',
        title: 'Haseen Lamhe',
        content: `Haseen lamhe hain kuch aise,
Jo dil mein bas jayein.
Ye zindagi hai ya koi khuwaab,
Jahan har pal tere saath ho.`,
        author: 'Mohsin Naqvi',
        category: 'Romantic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6540,
        rating: 4.9,
        liked: true,
        date: '2029-08-10',
        comments: getRandomComments()
    },
    {
        id: '1441',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6550,
        rating: 4.9,
        liked: true,
        date: '2029-08-11',
        comments: getRandomComments()
    },
    {
        id: '1442',
        title: 'Azm-e-Jawan',
        content: `Azm-e-jawan hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6560,
        rating: 5.0,
        liked: true,
        date: '2029-08-12',
        comments: getRandomComments()
    },
    {
        id: '1443',
        title: 'The Poet\'s Heart',
        content: `The heart of the poet is a garden,
Where words blossom, thoughts unfurl.
Each line a petal, a vibrant hue,
Reflecting beauty, fresh and new.`,
        author: 'Lord Byron',
        category: 'Deep',
        language: 'English',
        lines: '4 Lines',
        likes: 6570,
        rating: 4.9,
        liked: true,
        date: '2029-08-13',
        comments: getRandomComments()
    },
    {
        id: '1444',
        title: 'Ishq Ki Raahain',
        content: `عشق کی راہیں ہیں کچھ ایسی،
جہاں ہر موڑ پہ ہے امتحان۔
یہ دل ہے یا کوئی ویرانہ،
جہاں بس تیری ہی یاد کا سامان۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6580,
        rating: 4.9,
        liked: true,
        date: '2029-08-14',
        comments: getRandomComments()
    },
    {
        id: '1445',
        title: 'Khamoshi Mein Shor',
        content: `Khamoshi mein shor hai kuch aisa,
Jo kaanon ko goonj deta hai.
Ye dard hai ya koi junoon,
Jo andar hi andar basta hai.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6590,
        rating: 4.9,
        liked: true,
        date: '2029-08-15',
        comments: getRandomComments()
    },
    {
        id: '1446',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6600,
        rating: 4.9,
        liked: true,
        date: '2029-08-16',
        comments: getRandomComments()
    },
    {
        id: '1447',
        title: 'Bulleh Shah Te Rab',
        content: `Rab de naal ishq kama,
Apni rooh nu pak bana.
Bulleh Shah kehnda ae,
Asli Rab dil vich vasda ae.`,
        author: 'Bulleh Shah',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6610,
        rating: 4.9,
        liked: true,
        date: '2029-08-17',
        comments: getRandomComments()
    },
    {
        id: '1448',
        title: 'Confucius on Knowledge',
        content: `Real knowledge is to know the extent of one's ignorance.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6620,
        rating: 4.9,
        liked: true,
        date: '2029-08-18',
        comments: getRandomComments()
    },
    {
        id: '1449',
        title: 'The Road Ahead',
        content: `The road ahead is long and winding,
But with every step, a new beginning.
Fear not the darkness, embrace the light,
Your journey's calling, with all your might.`,
        author: 'Helen Keller',
        category: 'Inspirational',
        language: 'English',
        lines: '4 Lines',
        likes: 6630,
        rating: 4.9,
        liked: true,
        date: '2029-08-19',
        comments: getRandomComments()
    },
    {
        id: '1450',
        title: 'Zindagi Ka Sangam',
        content: `Zindagi ka sangam hai kuch aisa,
Kabhi khushi, kabhi gham.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6640,
        rating: 4.9,
        liked: false,
        date: '2029-08-20',
        comments: getRandomComments()
    },
    {
        id: '1451',
        title: 'Jheel Ka Paani',
        content: `جھیل کا پانی ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6650,
        rating: 4.9,
        liked: true,
        date: '2029-08-21',
        comments: getRandomComments()
    },
    {
        id: '1452',
        title: 'Azm-o-Junoon',
        content: `Azm-o-junoon hai kuch aisa,
Jo har mushkil ko aasan kar de.
Ye jazba hai, ye hausla hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6660,
        rating: 5.0,
        liked: true,
        date: '2029-08-22',
        comments: getRandomComments()
    },
    {
        id: '1453',
        title: 'The Unexamined Life',
        content: `The unexamined life is not worth living.`,
        author: 'Socrates',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6670,
        rating: 4.9,
        liked: true,
        date: '2029-08-23',
        comments: getRandomComments()
    },
    {
        id: '1454',
        title: 'Gham-e-Zindgi',
        content: `غمِ زندگی ہے ہر سو،
نہ کوئی چین ہے، نہ کوئی سکون۔
یہ دل ہے یا کوئی ویرانہ،
جہاں ہر پل ہے بس جنون۔`,
        author: 'Faiz Ahmed Faiz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6680,
        rating: 4.9,
        liked: false,
        date: '2029-08-24',
        comments: getRandomComments()
    },
    {
        id: '1455',
        title: 'Ishq Ki Raahain',
        content: `Ishq ki raahain hain kuch aisi,
Jahan har mod pe hai imtehan.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6690,
        rating: 4.9,
        liked: true,
        date: '2029-08-25',
        comments: getRandomComments()
    },
    {
        id: '1456',
        title: 'Pyar Ka Bandhan',
        content: `Pyar ka bandhan hai kuch aisa,
Jo kabhi na toote.
Tera mera saath hai sadiyon ka,
Ye rishta hai amar, amar rahe.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6700,
        rating: 4.9,
        liked: true,
        date: '2029-08-26',
        comments: getRandomComments()
    },
    {
        id: '1457',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6710,
        rating: 4.9,
        liked: true,
        date: '2029-08-27',
        comments: getRandomComments()
    },
    {
        id: '1458',
        title: 'Rumi on Inner Wisdom',
        content: `What you seek is seeking you.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: '1 Line',
        likes: 6720,
        rating: 4.9,
        liked: true,
        date: '2029-08-28',
        comments: getRandomComments()
    },
    {
        id: '1459',
        title: 'Funny Attitude',
        content: `I'm not rude, I'm honest. When I stop talking to you, then you can worry.`,
        author: 'Anonymous',
        category: 'Attitude',
        language: 'English',
        lines: 'Larger',
        likes: 6730,
        rating: 4.8,
        liked: false,
        date: '2029-08-29',
        comments: getRandomComments()
    },
    {
        id: '1460',
        title: 'Dil Ki Faryad',
        content: `Dil ki faryad hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Mohsin Naqvi',
        category: 'Sad',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6740,
        rating: 4.9,
        liked: false,
        date: '2029-08-30',
        comments: getRandomComments()
    },
    {
        id: '1461',
        title: 'Subah-e-Baharan',
        content: `صبحِ بہاراں ہے ہر سو،
خوشیوں کا ہے یہ سماں۔
ہر پتی میں ہے اک کہانی،
یہ موسم ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6750,
        rating: 4.9,
        liked: true,
        date: '2029-08-31',
        comments: getRandomComments()
    },
    {
        id: '1462',
        title: 'Qaumi Jazba',
        content: `Qaumi jazba hai dil mein,
Manzil ko pana hai.
Har mushkil ko paar kar,
Apna naam roshan karna hai.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6760,
        rating: 5.0,
        liked: true,
        date: '2029-09-01',
        comments: getRandomComments()
    },
    {
        id: '1463',
        title: 'The Power of Perseverance',
        content: `It's not whether you get knocked down, it's whether you get up.`,
        author: 'Vince Lombardi',
        category: 'Motivational',
        language: 'English',
        lines: '1 Line',
        likes: 6770,
        rating: 4.9,
        liked: true,
        date: '2029-09-02',
        comments: getRandomComments()
    },
    {
        id: '1464',
        title: 'Gham-e-Tanhai',
        content: `غمِ تنہائی ہے کچھ ایسا،
جو دل کو ہر پل رلائے۔
ہر آنسو میں ہے اک کہانی،
جو دل سے باہر آ نہ سکے۔`,
        author: 'Ahmed Faraz',
        category: 'Heartbroken',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6780,
        rating: 4.9,
        liked: false,
        date: '2029-09-03',
        comments: getRandomComments()
    },
    {
        id: '1465',
        title: 'Zindagi Ka Imtehan',
        content: `Zindagi ka imtehan hai,
Har lamha ik naya sawal.
Jawab mil jaye to kamyabi hai,
Warna sirf gham o malal.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6790,
        rating: 4.9,
        liked: true,
        date: '2029-09-04',
        comments: getRandomComments()
    },
    {
        id: '1466',
        title: 'Pyar Da Rog',
        content: `Pyar da rog hai kuch aisa,
Jo jaan le to chhodta nahin.
Har saah de naal tera naam,
Tere bina hun jeevan nahin.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Sad',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6800,
        rating: 4.9,
        liked: false,
        date: '2029-09-05',
        comments: getRandomComments()
    },
    {
        id: '1467',
        title: 'Amrita Pritam Da Sach',
        content: `Zindagi da sach hai ajeeb,
Har pal hai ik naya mod.
Gham te khushiyan da mel,
Eh hi to hai isda khel.`,
        author: 'Amrita Pritam',
        category: 'Life',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6810,
        rating: 4.9,
        liked: true,
        date: '2029-09-06',
        comments: getRandomComments()
    },
    {
        id: '1468',
        title: 'Confucius on Humility',
        content: `Humility is the solid foundation of all virtues.`,
        author: 'Confucius',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6820,
        rating: 4.9,
        liked: true,
        date: '2029-09-07',
        comments: getRandomComments()
    },
    {
        id: '1469',
        title: 'Short & Humorous',
        content: `I'm not short, I'm fun-sized.`,
        author: 'Anonymous',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 6830,
        rating: 4.9,
        liked: true,
        date: '2029-09-08',
        comments: getRandomComments()
    },
    {
        id: '1470',
        title: 'Khuda Ki Rehmat',
        content: `Khuda ki rehmat hai har so,
Har mushkil ka hal hai tu.
Meri dua hai, mera yaqeen hai,
Tu hi hai mera mushkil kusha.`,
        author: 'Mohsin Naqvi',
        category: 'Islamic',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6840,
        rating: 4.9,
        liked: true,
        date: '2029-09-09',
        comments: getRandomComments()
    },
    {
        id: '1471',
        title: 'Subah Ka Manzar',
        content: `صبح کا منظر ہے کچھ ایسا،
جو دل کو سکون دے جائے۔
ہر ذرہ میں ہے اس کی نشانی،
یہ دھرتی ہے یا جنت۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6850,
        rating: 4.9,
        liked: true,
        date: '2029-09-10',
        comments: getRandomComments()
    },
    {
        id: '1472',
        title: 'Iqbal Ka Khwab',
        content: `Iqbal ka khwab hai kuch aisa,
Apni qaum ko roshan kar de.
Ye azm hai, ye jazba hai,
Apni manzil khud bana le tu.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6860,
        rating: 5.0,
        liked: true,
        date: '2029-09-11',
        comments: getRandomComments()
    },
    {
        id: '1473',
        title: 'The Empty Nest',
        content: `A quiet house, a vacant chair,
Echoes of laughter linger there.
Children grown, on wings they fly,
Leaving memories beneath a boundless sky.`,
        author: 'Robert Frost',
        category: 'Sad',
        language: 'English',
        lines: '4 Lines',
        likes: 6870,
        rating: 4.9,
        liked: false,
        date: '2029-09-12',
        comments: getRandomComments()
    },
    {
        id: '1474',
        title: 'Mohabbat Ka Safar',
        content: `محبت کا سفر ہے کچھ ایسا،
جو ہر دل میں بستا ہے۔
یہ عشق ہے یا کوئی جنوں،
جو روح کو تڑپائے۔`,
        author: 'Ahmed Faraz',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6880,
        rating: 4.9,
        liked: true,
        date: '2029-09-13',
        comments: getRandomComments()
    },
    {
        id: '1475',
        title: 'Zindagi Ki Haqeeqat',
        content: `Zindagi ki haqeeqat hai kuch aisi,
Jo samajh aaye to sab kuch hai.
Ye safar hai, ye imtehan hai,
Har lamha ek naya sabaq hai.`,
        author: 'Jaun Elia',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6890,
        rating: 4.9,
        liked: true,
        date: '2029-09-14',
        comments: getRandomComments()
    },
    {
        id: '1476',
        title: 'Mahi Di Jaan',
        content: `Mahi di jaan hai meri,
Har saah de naal tera naam.
Na chhodanga tera saath,
Yehi hai mera wada.`,
        author: 'Attaullah Khan Esakhelvi',
        category: 'Couple',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 6900,
        rating: 4.9,
        liked: true,
        date: '2029-09-15',
        comments: getRandomComments()
    },
    {
        id: '1477',
        title: 'Sultan Bahu Di Nazar',
        content: `Sultan Bahu di nazar hai aisi,
Har shai vich Rab disda ae.
Tu apni aankh nu khol,
Asli Rab othe wasda ae.`,
        author: 'Sultan Bahu',
        category: 'Islamic',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 6910,
        rating: 4.9,
        liked: true,
        date: '2029-09-16',
        comments: getRandomComments()
    },
    {
        id: '1478',
        title: 'Buddha on Suffering',
        content: `Pain is inevitable. Suffering is optional.`,
        author: 'Buddha',
        category: 'Quotes',
        language: 'Pali',
        lines: '1 Line',
        likes: 6920,
        rating: 4.9,
        liked: true,
        date: '2029-09-17',
        comments: getRandomComments()
    },
    {
        id: '1479',
        title: 'Oscar Wilde on Self-Love',
        content: `To love oneself is the beginning of a lifelong romance.`,
        author: 'Oscar Wilde',
        category: 'Quotes',
        language: 'English',
        lines: '1 Line',
        likes: 6930,
        rating: 4.9,
        liked: true,
        date: '2029-09-18',
        comments: getRandomComments()
    },
    {
        id: '1480',
        title: 'Khushiyon Ka Sama',
        content: `Khushiyon ka sama hai har so,
Har dil mein hai muskan.
Ye zindagi hai, ye jashn hai,
Bas hanste raho, aur jeete raho.`,
        author: 'Mohsin Naqvi',
        category: 'Motivational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6940,
        rating: 4.9,
        liked: true,
        date: '2029-09-19',
        comments: getRandomComments()
    },
    {
        id: '1481',
        title: 'Raat Ki Rani',
        content: `رات کی رانی ہے ہر سو،
خوشبو سے مہکا ہے چمن۔
یہ قدرت کا ہے انعام،
جو ہر دل کو دیتا ہے سکون۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6950,
        rating: 4.9,
        liked: true,
        date: '2029-09-20',
        comments: getRandomComments()
    },
    {
        id: '1482',
        title: 'Pakistan Ki Shan',
        content: `Pakistan ki shan hai kuch aisi,
Har dil mein hai iska pyar.
Qurban hai is pe meri jaan,
Ye hai mera Pakistan.`,
        author: 'Allama Iqbal',
        category: 'Patriotic',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6960,
        rating: 5.0,
        liked: true,
        date: '2029-09-21',
        comments: getRandomComments()
    },
    {
        id: '1483',
        title: 'The Sun Rises',
        content: `The sun also rises.`,
        author: 'Ernest Hemingway',
        category: 'Life',
        language: 'English',
        lines: '1 Line',
        likes: 6970,
        rating: 4.9,
        liked: true,
        date: '2029-09-22',
        comments: getRandomComments()
    },
    {
        id: '1484',
        title: 'Zindagi Ki Dhun',
        content: `زندگی کی دھن ہے کچھ ایسی،
جو ہر پل بدلتی ہے۔
کبھی ہنسی ہے، کبھی آنسو،
یہ سفر بس چلتا ہی رہتا ہے۔`,
        author: 'Ahmed Faraz',
        category: 'Life',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 6980,
        rating: 4.9,
        liked: false,
        date: '2029-09-23',
        comments: getRandomComments()
    },
    {
        id: '1485',
        title: 'Ishq Ki Aag',
        content: `Ishq ki aag hai kuch aisa,
Jo jala de to raakh bhi na bache.
Ye dil hai ya koi deewana,
Jo tere naam pe hi qurban hai.`,
        author: 'Jaun Elia',
        category: 'Love',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 6990,
        rating: 4.9,
        liked: true,
        date: '2029-09-24',
        comments: getRandomComments()
    },
    {
        id: '1486',
        title: 'Yaar Di Sohni',
        content: `Yaar di sohni surat hai aisi,
Jo dil nu chain deve.
Har saah de naal tera naam,
Tu hi meri zindagi, tu hi mera chain.`,
        author: 'Shakir Shujabadi',
        category: 'Friendship',
        language: 'Saraiki',
        lines: '4 Lines',
        likes: 7000,
        rating: 4.9,
        liked: true,
        date: '2029-09-25',
        comments: getRandomComments()
    },
    {
        id: '1487',
        title: 'Waris Shah Di Kitaab',
        content: `Waris Shah shairi kare,
Dil di baat sunave.
Ishq ne zakhmi kitta,
Har dil vich dukh dikhave.`,
        author: 'Waris Shah',
        category: 'Deep',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 7010,
        rating: 4.9,
        liked: true,
        date: '2029-09-26',
        comments: getRandomComments()
    },
    {
        id: '1488',
        title: 'Hafez on the Path',
        content: `Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.`,
        author: 'Hafez',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 7020,
        rating: 4.9,
        liked: true,
        date: '2029-09-27',
        comments: getRandomComments()
    },
    {
        id: '1489',
        title: 'Short and Punchy',
        content: `Be the change you wish to see in the world.`,
        author: 'Mahatma Gandhi',
        category: 'Short',
        language: 'English',
        lines: '1 Line',
        likes: 7030,
        rating: 4.9,
        liked: true,
        date: '2029-09-28',
        comments: getRandomComments()
    },
    {
        id: '1490',
        title: 'Zindagi Ka Afsana',
        content: `Zindagi ka afsana hai kuch aisa,
Kabhi hansti hai, kabhi rulati hai.
Ye safar hai, ye imtehan hai,
Bas chalta hi rehta hai.`,
        author: 'Mohsin Naqvi',
        category: 'Life',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 7040,
        rating: 4.9,
        liked: false,
        date: '2029-09-29',
        comments: getRandomComments()
    },
    {
        id: '1491',
        title: 'Jheel Ki Rawani',
        content: `جھیل کی روانی ہے کچھ ایسی،
جو دل کو سکون دے جائے۔
یہ قدرت کا نظارہ ہے،
جو ہر روح کو تازگی دے۔`,
        author: 'Parveen Shakir',
        category: 'Nature',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 7050,
        rating: 4.9,
        liked: true,
        date: '2029-09-30',
        comments: getRandomComments()
    },
    {
        id: '1492',
        title: 'Shaheen Ki Parwaaz',
        content: `Shaheen ki parwaaz hai aisi,
Jo aasman ko chhu le.
Ye azm hai, ye hausla hai,
Apni manzil khud bana le.`,
        author: 'Allama Iqbal',
        category: 'Inspirational',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 7060,
        rating: 5.0,
        liked: true,
        date: '2029-10-01',
        comments: getRandomComments()
    },
    {
        id: '1493',
        title: 'The Road Not Taken',
        content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
        author: 'Robert Frost',
        category: 'Life',
        language: 'English',
        lines: 'Larger',
        likes: 7070,
        rating: 4.9,
        liked: true,
        date: '2029-10-02',
        comments: getRandomComments()
    },
    {
        id: '1494',
        title: 'Toota Dil',
        content: `ٹوٹا دل ہے میرا، ہر سو غم،
کوئی نہیں ہے یارِ ہمدم۔
آنکھوں میں ہے آنسوؤں کا سیلاب،
یہ زندگی ہے یا کوئی سراب۔`,
        author: 'Ahmed Faraz',
        category: 'Sad',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 7080,
        rating: 4.9,
        liked: false,
        date: '2029-10-03',
        comments: getRandomComments()
    },
    {
        id: '1495',
        title: 'Dil Ki Baat',
        content: `Dil ki baat hai kuch aisi,
Jo labon tak aati nahin.
Ye ishq hai ya koi saza,
Jo khatam hoti nahin.`,
        author: 'Jaun Elia',
        category: 'Deep',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 7090,
        rating: 4.9,
        liked: true,
        date: '2029-10-04',
        comments: getRandomComments()
    },
    {
        id: '1496',
        title: 'Pyar Tera Mera',
        content: `Pyar tera mera, hai sadiyon ka,
Rab ne banaya hai jodi hamari.
Na chhodenge ik duje ka saath,
Yehi hai apni amar kahani.`,
        author: 'Anonymous',
        category: 'Couple',
        language: 'Roman Urdu',
        lines: '4 Lines',
        likes: 7100,
        rating: 4.9,
        liked: true,
        date: '2029-10-05',
        comments: getRandomComments()
    },
    {
        id: '1497',
        title: 'Bulleh Shah Ki Hikmat',
        content: `Masjid dha de, mandir dha de,
Dha de jo kuj dainda ae.
Par kise da dil na dhawin,
Rabb dilaan vich rehnda ae.`,
        author: 'Bulleh Shah',
        category: 'Peace',
        language: 'Punjabi',
        lines: '4 Lines',
        likes: 7110,
        rating: 4.9,
        liked: true,
        date: '2029-10-06',
        comments: getRandomComments()
    },
    {
        id: '1498',
        title: 'Rumi on Purpose',
        content: `When you do things from your soul, you feel a river moving in you, a joy.`,
        author: 'Rumi',
        category: 'Quotes',
        language: 'Farsi',
        lines: 'Larger',
        likes: 7120,
        rating: 4.9,
        liked: true,
        date: '2029-10-07',
        comments: getRandomComments()
    },
    {
        id: '1499',
        title: 'Sarcasm',
        content: `I'm not saying I'm lazy, but I wear a Fitbit just to track how many steps I take from the couch to the fridge.`,
        author: 'Anonymous',
        category: 'Funny',
        language: 'English',
        lines: 'Larger',
        likes: 7130,
        rating: 4.8,
        liked: false,
        date: '2029-10-08',
        comments: getRandomComments()
    },
    {
        id: '1500',
        title: 'Dil Ki Awaz',
        content: `Dil ki awaz hai kuch aisi,
Jo har dil ko sunati hai.
Ye ishq hai ya koi nasha,
Jo har pal tere naam pe hai.`,
        author: 'Mohsin Naqvi',
        category: 'Love',
        language: 'Urdu',
        lines: '4 Lines',
        likes: 7140,
        rating: 4.9,
        liked: true,
        date: '2029-10-09',
        comments: getRandomComments()
    },
];
// Filter out duplicate IDs and map comments
// Assuming 'poetryData' is available globally or imported from another file.
const uniquePoetryData = Array.from(new Map(poetryData.map(p => [p.id, p])).values()).map(p => ({ ...p, comments: getRandomComments() }));

// Dynamically extract all unique categories, languages, and line counts from the data
const allCategories = [...new Set(uniquePoetryData.map(p => p.category))].sort();
const allLanguages = [...new Set(uniquePoetryData.map(p => p.language))].sort();
const allLineCounts = [...new Set(uniquePoetryData.map(p => p.lines))].sort();

// Define sorting options
const sortOptions = {
    'date-desc': 'Newest First',
    'date-asc': 'Oldest First',
    'likes-desc': 'Most Liked',
    'likes-asc': 'Least Liked',
    'rating-desc': 'Highest Rated',
    'rating-asc': 'Lowest Rated'
};

// --- Global State ---
let currentMode = 'guest'; // 'guest', 'user', or 'admin'
let currentTheme = 'light'; // 'light', 'dark', or 'sepia'
let selectedCategory = 'All'; // Current category filter
let selectedLanguage = 'All'; // New: Current language filter
let selectedSort = 'date-desc'; // Current sort option
let currentFilteredPosts = []; // Posts after filtering and sorting
let currentPostIndex = -1; // Index of the poem in modal
let currentPage = 0; // Current page number for pagination
const postsPerPage = 10; // Posts per page
let totalPages = 0; // Total pages

// --- New Font State ---
// Fonts for poetry content
const poetryFonts = [
    'Playfair Display',
    'Inter',
    'Noto Nastaliq Urdu',
    'Roboto Mono'
];
let currentPoetryFontIndex = 0; // Index for poetryFonts array

// --- Event Listeners on Load ---
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadTheme();
    setMode('guest');
    renderCategories();
    renderLanguages(); // New: Render languages menu
    renderSortOptions();
    applyPoetryFont();
    renderPoetryPosts();
    updateSelectedOptionsDisplay();
});

// Sets up all event listeners
const setupEventListeners = () => {
    const modeSelector = document.getElementById('mode-selector');
    if (modeSelector) {
        modeSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.mode-btn');
            if (btn) {
                setMode(btn.id.replace('mode-', ''));
            }
        });
    }

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-desktop').addEventListener('click', toggleTheme);

    const changePoetryFontBtn = document.getElementById('change-poetry-font-btn');
    if (changePoetryFontBtn) {
        changePoetryFontBtn.addEventListener('click', cyclePoetryFont);
    }

    const categoriesBtn = document.getElementById('categories-btn');
    const categoriesMenu = document.getElementById('categories-menu');
    if (categoriesBtn) {
        categoriesBtn.addEventListener('click', () => {
            categoriesMenu.classList.toggle('active');
            // Close other dropdowns
            document.getElementById('language-menu').classList.remove('active'); // New: Close language menu
            document.getElementById('sort-menu').classList.remove('active');
        });
    }

    // New: Event listener for languages button
    const languagesBtn = document.getElementById('languages-btn');
    const languagesMenu = document.getElementById('languages-menu');
    if (languagesBtn) {
        languagesBtn.addEventListener('click', () => {
            languagesMenu.classList.toggle('active');
            // Close other dropdowns
            document.getElementById('categories-menu').classList.remove('active');
            document.getElementById('sort-menu').classList.remove('active');
        });
    }

    const sortBtn = document.getElementById('sort-btn');
    const sortMenu = document.getElementById('sort-menu');
    if (sortBtn) {
        sortBtn.addEventListener('click', () => {
            sortMenu.classList.toggle('active');
            // Close other dropdowns
            document.getElementById('categories-menu').classList.remove('active');
            document.getElementById('language-menu').classList.remove('active'); // New: Close language menu
        });
    }

    document.getElementById('search-input').addEventListener('input', handleSearch);

    const categoryList = document.getElementById('category-list');
    if (categoryList) {
        categoryList.addEventListener('click', handleCategoryClick);
    }

    // New: Event listener for language list
    const languageList = document.getElementById('language-list');
    if (languageList) {
        languageList.addEventListener('click', handleLanguageClick);
    }

    const sortList = document.getElementById('sort-list');
    if (sortList) {
        sortList.addEventListener('click', handleSortClick);
    }
    
    document.getElementById('poetry-container').addEventListener('click', (e) => {
        const card = e.target.closest('.card-container');
        if (card) {
            const postIndex = parseInt(card.dataset.index, 10);
            if (e.target.closest('.like-btn')) {
                handleLikeClick(e, currentFilteredPosts[postIndex]);
            } else if (e.target.closest('.copy-btn')) {
                handleCopyClick(currentFilteredPosts[postIndex].content);
            } else if (e.target.closest('.comment-btn')) {
                openPoetryModal(postIndex);
            } else if (e.target.closest('.admin-edit-btn')) {
                showMessageBox('Admin Action', 'Edit button clicked.', 'info');
            } else if (e.target.closest('.admin-delete-btn')) {
                showMessageBox('Admin Action', 'Delete button clicked.', 'error');
            } else {
                openPoetryModal(postIndex);
            }
        }
    });

    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('next-btn').addEventListener('click', showNextPoem);
    document.getElementById('prev-btn').addEventListener('click', showPreviousPoem);
    
    document.getElementById('next-page-btn').addEventListener('click', showNextPage);
    document.getElementById('prev-page-btn').addEventListener('click', showPreviousPage);

    // Page jump input event listener
    const pageJumpInput = document.getElementById('page-jump-input');
    if (pageJumpInput) {
        pageJumpInput.addEventListener('change', (e) => {
            let page = parseInt(e.target.value, 10) - 1;
            if (!isNaN(page) && page >= 0 && page < totalPages) {
                currentPage = page;
                renderPoetryPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                e.target.value = currentPage + 1;
                showMessageBox('Invalid Page', `Please enter a page number between 1 and ${totalPages}.`, 'error');
            }
        });
    }

    const generatorInput = document.getElementById('generator-input');
    if (generatorInput) {
        generatorInput.addEventListener('input', generateStylishText);
    }
};

// --- UI Rendering Functions ---

// Renders categories and line count filters
const renderCategories = () => {
    const list = document.getElementById('category-list');
    list.innerHTML = '';

    list.className = 'grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-2';

    const categoryCounts = {};
    uniquePoetryData.forEach(post => {
        categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    categoryCounts['All'] = uniquePoetryData.length;

    const combinedCategories = ['All', ...allCategories].sort(); // Use the dynamically extracted categories

    combinedCategories.forEach(cat => {
        const div = document.createElement('div');
        const count = categoryCounts[cat] || 0;
        div.innerHTML = `<button class="dropdown-btn-item w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium ${selectedCategory === cat ? 'active' : ''}" data-category="${cat}">${cat} (${count})</button>`;
        list.appendChild(div);
    });
};

// New: Renders languages menu
const renderLanguages = () => {
    const list = document.getElementById('language-list');
    if (!list) return; // Ensure the element exists
    list.innerHTML = '';



    const languageCounts = {};
    uniquePoetryData.forEach(post => {
        languageCounts[post.language] = (languageCounts[post.language] || 0) + 1;
    });
    languageCounts['All'] = uniquePoetryData.length;

    const combinedLanguages = ['All', ...allLanguages].sort(); // Use the dynamically extracted languages

    combinedLanguages.forEach(lang => {
        const div = document.createElement('div');
        const count = languageCounts[lang] || 0;
        div.innerHTML = `<button class="dropdown-btn-item w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium ${selectedLanguage === lang ? 'active' : ''}" data-language="${lang}">${lang} (${count})</button>`;
        list.appendChild(div);
    });
};


// Renders sort options menu
const renderSortOptions = () => {
    const list = document.getElementById('sort-list');
    list.innerHTML = '';
    
    for (const [key, value] of Object.entries(sortOptions)) {
        const li = document.createElement('li');
        li.innerHTML = `<button class="dropdown-btn-item w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium ${selectedSort === key ? 'active' : ''}" data-sort="${key}">${value}</button>`;
        list.appendChild(li);
    }
};

// Renders poetry posts based on current filters and pagination
const renderPoetryPosts = () => {
    const container = document.getElementById('poetry-container');
    container.innerHTML = '';
    
    let filteredPoetry = [...uniquePoetryData];
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    if (searchTerm) {
        filteredPoetry = filteredPoetry.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm)
        );
    }

    if (selectedCategory !== 'All') {
        filteredPoetry = filteredPoetry.filter(post => post.category === selectedCategory || post.lines === selectedCategory);
    }

    // New: Filter by selected language
    if (selectedLanguage !== 'All') {
        filteredPoetry = filteredPoetry.filter(post => post.language === selectedLanguage);
    }
    
    filteredPoetry.sort((a, b) => {
        switch (selectedSort) {
            case 'date-desc': return new Date(b.date) - new Date(a.date);
            case 'date-asc': return new Date(a.date) - new Date(b.date);
            case 'likes-desc': return b.likes - a.likes;
            case 'likes-asc': return a.likes - b.likes;
            case 'rating-desc': return b.rating - a.rating;
            case 'rating-asc': return a.rating - b.rating;
            default: return 0;
        }
    });

    currentFilteredPosts = filteredPoetry;
    totalPages = Math.ceil(currentFilteredPosts.length / postsPerPage);
    
    const start = currentPage * postsPerPage;
    const end = start + postsPerPage;
    const postsToRender = currentFilteredPosts.slice(start, end);

    if (postsToRender.length === 0) {
        container.innerHTML = `<div class="col-span-full p-8 text-center text-text-color bg-card rounded-3xl shadow-lg animate-fade-in">No poetry found matching your criteria.</div>`;
    } else {
        postsToRender.forEach((post, index) => {
            const postElement = createPoetryCard(post, start + index);
            container.appendChild(postElement);
        });
    }
    updatePaginationButtons();
};

// Creates and returns a DOM element for a single poetry card.
const createPoetryCard = (post, index) => {
    // Updated isUrduRTL to include more languages
    const isUrduRTL = ['Urdu', 'Saraiki', 'Punjabi', 'Pashto', 'Sindhi', 'Arabic', 'Farsi', 'Roman Urdu'].includes(post.language);
    const card = document.createElement('div');
    const categoryClass = `card-bg-${post.category.toLowerCase().replace(/[\s\(\)]+/g, '-')}`; 
    
    card.className = `p-6 md:p-8 rounded-3xl shadow-xl transition-all duration-300 card-container relative overflow-hidden animate-fade-in group cursor-pointer poetry-container`;
    card.dataset.index = index;

    let adminActions = '';
    if (currentMode === 'admin') {
        adminActions = `
            <div class="flex space-x-2">
                <button class="admin-edit-btn p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 card-icon text-primary">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-delete-btn p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 card-icon text-red-500">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
    
    let userActions = '';
    if (currentMode === 'user' || currentMode === 'admin') {
        userActions = `
            <div class="flex space-x-2">
                <button class="like-btn p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 card-icon text-red-500 ${post.liked ? 'liked' : ''}">
                    <i class="${post.liked ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="comment-btn p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 card-icon text-secondary-text">
                    <i class="fas fa-comment-dots"></i>
                </button>
                <button class="copy-btn p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 card-icon text-secondary-text">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="absolute inset-0 z-0 ${categoryClass} rounded-3xl transition-all duration-500"></div>
        <div class="absolute inset-0 z-10 bg-card rounded-3xl opacity-90 group-hover:opacity-80 transition-opacity"></div>
        
        <div class="relative z-20 flex flex-col">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs px-3 py-1 rounded-full font-medium shadow-md bg-secondary text-secondary-text">${post.category}</span>
                <div class="flex items-center space-x-2">
                    ${userActions}
                    ${adminActions}
                </div>
            </div>
            
            <div class="flex-grow">
                <h3 class="text-3xl font-bold font-poetry mt-4 mb-2">${post.title}</h3>
                <p class="text-sm text-secondary-text font-medium mb-4">by ${post.author}</p>
                <p class="text-lg whitespace-pre-line leading-relaxed text-text-color ${isUrduRTL ? 'font-urdu text-right' : 'font-poetry text-left'} mb-6">${post.content}</p>
            </div>
            
            <div class="flex justify-end items-center text-sm mt-auto text-yellow-400">
                <div class="flex items-center space-x-1">
                    ${Array(5).fill(0).map((_, i) => `<i class="${i < Math.round(post.rating) ? 'fas' : 'far'} fa-star"></i>`).join('')}
                </div>
                <span class="text-secondary-text ml-2">(${post.rating.toFixed(1)})</span>
            </div>
        </div>
    `;
    return card;
};

// Creates and returns the HTML string for a single comment.
const createCommentElement = (comment) => {
    const isPending = comment.status === 'pending';
    const date = new Date(comment.date);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    return `
        <div class="bg-secondary p-4 rounded-xl shadow transition-all duration-300 ${isPending ? 'bg-pending-comment-bg' : ''}" data-status="${isPending ? 'pending' : 'approved'}">
            <div class="flex items-start space-x-3 mb-1">
                <div class="flex-shrink-0">
                    <i class="fas fa-user-circle text-blue-400 text-3xl"></i>
                </div>
                <div class="flex-grow">
                    <p class="font-bold ${isPending ? 'text-pending-comment-text' : 'text-text-color'}">${comment.author}</p>
                    <p class="text-xs ${isPending ? 'text-pending-comment-text' : 'text-secondary-text'} mt-1">${comment.text}</p>
                </div>
                <p class="text-xs ${isPending ? 'text-pending-comment-text' : 'text-secondary-text'}">${formattedDate}</p>
            </div>
            ${isPending ? `<p class="text-xs italic text-pending-comment-text mt-2 animate-pulse">Pending Moderation...</p>` : ''}
        </div>
    `;
};

// Opens the poetry modal and populates it
const openPoetryModal = (index) => {
    currentPostIndex = index;
    const post = currentFilteredPosts[currentPostIndex];
    const isUrduRTL = ['Urdu', 'Saraiki', 'Punjabi', 'Pashto', 'Sindhi', 'Arabic', 'Farsi', 'Roman Urdu'].includes(post.language);
    
    const modalContentArea = document.getElementById('modal-content-area');
    let userActions = '';

    if (currentMode === 'user' || currentMode === 'admin') {
        userActions = `
            <div class="flex justify-center items-center space-x-6 mt-8 mb-8">
                <button class="like-btn flex items-center space-x-2 text-red-500 transform transition-all duration-300 ${post.liked ? 'liked' : ''}" data-id="${post.id}">
                    <i class="${post.liked ? 'fas' : 'far'} fa-heart fa-2x"></i>
                    <span class="like-count text-xl font-semibold">${post.likes}</span>
                </button>
                <button class="copy-btn p-3 rounded-full hover:bg-secondary transition-colors duration-300 card-icon">
                    <i class="fas fa-copy text-2xl"></i>
                </button>
                <button class="share-btn p-3 rounded-full hover:bg-secondary transition-colors duration-300 card-icon">
                    <i class="fas fa-share-alt text-2xl"></i>
                </button>
            </div>

            <div class="mt-8 pt-6 border-t border-card-border text-left">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xl font-bold font-poetry text-text-color">User Rating</h4>
                    <div class="flex items-center space-x-1 text-yellow-400">
                        ${Array(5).fill(0).map((_, i) => `<i class="${i < Math.round(post.rating) ? 'fas' : 'far'} fa-star"></i>`).join('')}
                        <span class="text-sm text-secondary-text ml-2">(${post.rating.toFixed(1)})</span>
                    </div>
                </div>

                <h4 class="text-xl font-bold font-poetry mb-4 text-text-color">Comments</h4>
                <div id="comments-list" class="space-y-4">
                    ${post.comments.map(createCommentElement).join('')}
                </div>
                
                <form id="comment-form" class="mt-6">
                    <label for="new-comment" class="block text-sm font-medium text-text-color mb-2">Add a comment</label>
                    <textarea id="new-comment" class="w-full h-24 p-4 border rounded-xl text-text-color bg-secondary resize-none focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Write your comment here..."></textarea>
                    <button type="submit" class="mt-4 px-6 py-2 bg-primary text-white rounded-xl shadow-lg hover:bg-opacity-80 transition-colors duration-300">Submit</button>
                </form>
            </div>
        `;
    }

    modalContentArea.innerHTML = `
        <h3 class="text-4xl md:text-5xl font-bold font-poetry mt-4 mb-4 text-text-color">${post.title}</h3>
        <p class="text-lg text-secondary-text font-medium mb-8">by ${post.author}</p>
        <p class="text-xl md:text-2xl whitespace-pre-line leading-relaxed text-text-color ${isUrduRTL ? 'font-urdu text-right' : 'font-poetry text-left'} mb-8">${post.content}</p>
        ${userActions}
    `;

    if (currentMode === 'user' || currentMode === 'admin') {
        const modalLikeBtn = document.querySelector('#poetry-modal .like-btn');
        if(modalLikeBtn) modalLikeBtn.addEventListener('click', (e) => handleLikeClick(e, post));
        const modalCopyBtn = document.querySelector('#poetry-modal .copy-btn');
        if(modalCopyBtn) modalCopyBtn.addEventListener('click', () => handleCopyClick(post.content));
        const modalShareBtn = document.querySelector('#poetry-modal .share-btn');
        if(modalShareBtn) modalShareBtn.addEventListener('click', () => handleShareClick(post.id));
        
        const commentForm = document.getElementById('comment-form');
        const newCommentTextArea = document.getElementById('new-comment');
        const commentSubmitButton = commentForm ? commentForm.querySelector('button[type="submit"]') : null;

        if (commentSubmitButton) {
            commentSubmitButton.style.backgroundColor = 'var(--primary-color)'; // Use CSS variable
            commentSubmitButton.style.color = 'var(--button-text-on-primary)'; // Use CSS variable
        }

        if (commentForm) {
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const commentText = newCommentTextArea.value;
                if (commentText.trim()) {
                    const newComment = {
                        author: 'You',
                        text: commentText,
                        date: new Date().toISOString().split('T')[0],
                        status: 'pending'
                    };

                    const commentsList = document.getElementById('comments-list');
                    const newCommentElement = document.createElement('div');
                    newCommentElement.innerHTML = createCommentElement(newComment);
                    commentsList.prepend(newCommentElement.firstElementChild);

                    newCommentTextArea.value = '';
                    newCommentTextArea.disabled = true;
                    if (commentSubmitButton) {
                        commentSubmitButton.disabled = true;
                    }
                    
                    showMessageBox('Comment Submitted', 'Your comment is pending moderation.', 'info');

                    setTimeout(() => {
                        if (newCommentElement.firstElementChild) {
                            newCommentElement.firstElementChild.classList.add('fade-out');
                            setTimeout(() => {
                                newCommentElement.remove();
                                newCommentTextArea.disabled = false;
                                if (commentSubmitButton) {
                                    commentSubmitButton.disabled = false;
                                }
                            }, 500);
                        }
                    }, 20000);
                }
            });
        }
    }
    document.getElementById('poetry-modal').classList.remove('hidden');
    updateModalNavButtons();
};

const closeModal = () => {
    document.getElementById('poetry-modal').classList.add('hidden');
};

const showNextPoem = () => {
    currentPostIndex = (currentPostIndex + 1) % currentFilteredPosts.length;
    openPoetryModal(currentPostIndex);
};

const showPreviousPoem = () => {
    currentPostIndex = (currentPostIndex - 1 + currentFilteredPosts.length) % currentFilteredPosts.length;
    openPoetryModal(currentPostIndex);
};

const updateModalNavButtons = () => {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (currentFilteredPosts.length <= 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
};

// --- Pagination Functions ---

const showNextPage = () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        renderPoetryPosts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const showPreviousPage = () => {
    if (currentPage > 0) {
        currentPage--;
        renderPoetryPosts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// Updates state and text of pagination buttons and page jump input
const updatePaginationButtons = () => {
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageInfo = document.getElementById('page-info');
    const pageJumpInput = document.getElementById('page-jump-input');

    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = currentPage >= totalPages - 1;
    pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;
    
    if (pageJumpInput) {
        pageJumpInput.value = currentPage + 1;
        pageJumpInput.max = totalPages > 0 ? totalPages : 1; // Ensure max is at least 1
    }
    
    // Hide pagination controls if there's only one page
    if (totalPages <= 1) {
        document.getElementById('pagination-controls').classList.add('hidden');
    } else {
        document.getElementById('pagination-controls').classList.remove('hidden');
    }
};

// --- Interaction Functions ---

// Sets application mode and updates UI
const setMode = (mode) => {
    currentMode = mode;
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`mode-${mode}`);
    activeBtn.classList.add('active');

    currentPage = 0;
    renderPoetryPosts();
};

// Cycles through themes
const toggleTheme = () => {
    const themes = ['light', 'dark', 'sepia'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    document.body.classList.remove(...themes);
    document.body.classList.add(newTheme);
    currentTheme = newTheme;

    const updateIcon = (btnId) => {
        const icon = document.querySelector(`#${btnId} i`);
        if (!icon) return;
        icon.className = '';
        if (newTheme === 'dark') {
            icon.classList.add('fas', 'fa-moon');
        } else if (newTheme === 'sepia') {
            icon.classList.add('fas', 'fa-book-open');
        } else {
            icon.classList.add('fas', 'fa-sun');
        }
    };
    updateIcon('theme-toggle');
    updateIcon('theme-toggle-desktop');
};

// Loads initial theme
const loadTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
        document.body.classList.add('dark');
    } else {
        currentTheme = 'light';
        document.body.classList.add('light');
    }
    toggleTheme(); // Initial call to set correct icon
    toggleTheme(); // Second call to cycle to next theme if preferred is not light
    toggleTheme(); // Third call to cycle to next theme if preferred is not light or dark
};

// Handles search input
const handleSearch = () => {
    currentPage = 0;
    renderPoetryPosts();
};

// Handles category filter clicks
const handleCategoryClick = (e) => {
    const button = e.target.closest('.dropdown-btn-item');
    if (button) {
        selectedCategory = button.dataset.category;
        currentPage = 0;
        renderCategories();
        renderPoetryPosts();
        document.getElementById('categories-menu').classList.remove('active');
        updateSelectedOptionsDisplay();
    }
};

// New: Handles language filter clicks
const handleLanguageClick = (e) => {
    const button = e.target.closest('.dropdown-btn-item');
    if (button) {
        selectedLanguage = button.dataset.language;
        currentPage = 0;
        renderLanguages();
        renderPoetryPosts();
        document.getElementById('languages-menu').classList.remove('active');
        updateSelectedOptionsDisplay();
    }
};

// Handles sort option clicks
const handleSortClick = (e) => {
    const button = e.target.closest('.dropdown-btn-item');
    if (button) {
        selectedSort = button.dataset.sort;
        currentPage = 0;
        renderSortOptions();
        renderPoetryPosts();
        document.getElementById('sort-menu').classList.remove('active');
        updateSelectedOptionsDisplay();
    }
};

// Updates displayed text for selected options
const updateSelectedOptionsDisplay = () => {
    const categoryTextSpan = document.getElementById('selected-category-text');
    const languageTextSpan = document.getElementById('selected-language-text'); // New span for language
    const sortTextSpan = document.getElementById('selected-sort-text');

    if (categoryTextSpan) {
        categoryTextSpan.textContent = selectedCategory;
    }
    
    // New: Update language display
    if (languageTextSpan) {
        languageTextSpan.textContent = selectedLanguage;
    }
    
    if (sortTextSpan) {
        sortTextSpan.textContent = sortOptions[selectedSort];
    }
};

// Handles liking/unliking a poetry post
const handleLikeClick = (e, post) => {
    const button = e.currentTarget;
    
    e.stopPropagation();

    const isLiked = !post.liked;
    post.liked = isLiked;

    const likeCount = post.likes;
    const newCount = isLiked ? likeCount + 1 : Math.max(0, likeCount - 1);
    post.likes = newCount;
    
    const icon = button.querySelector('i');
    if (icon) {
        icon.classList.toggle('fas', isLiked);
        icon.classList.toggle('far', !isLiked);
    }
    button.classList.toggle('liked', isLiked);
    
    const modalLikeCountSpan = document.querySelector('#poetry-modal .like-count');
    if (modalLikeCountSpan) modalLikeCountSpan.textContent = newCount;
    
    renderPoetryPosts();

    button.classList.add('heart-beat-animation');
    setTimeout(() => {
        button.classList.remove('heart-beat-animation');
    }, 500);
};

// Copies text to clipboard
const handleCopyClick = (text) => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    
    showMessageBox('Copied!', 'Poetry copied to clipboard.', 'success');
};

// Handles sharing of a poetry post
const handleShareClick = (postId) => {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'UfaqTech Poetry',
            text: 'Check out this amazing poem!',
            url: `${url}#${postId}`,
        }).catch(console.error);
    } else {
        showMessageBox('Share', `You can share this post with this URL: \n${url}#${postId}`, 'info');
    }
};

// Displays a custom message box (toast notification)
const showMessageBox = (title, message, type) => {
    const container = document.body;
    const box = document.createElement('div');
    let bgColor, iconClass;
    
    switch(type) {
        case 'success':
            bgColor = 'bg-green-500';
            iconClass = 'fas fa-check-circle';
            break;
        case 'error':
            bgColor = 'bg-red-500';
            iconClass = 'fas fa-times-circle';
            break;
        case 'info':
            bgColor = 'bg-blue-500';
            iconClass = 'fas fa-info-circle';
            break;
    }

    box.className = `fixed bottom-4 right-4 p-4 rounded-xl shadow-lg text-white max-w-sm z-50 animate-fade-in ${bgColor}`;
    box.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="${iconClass} text-2xl"></i>
            <div class="flex-grow">
                <h4 class="font-bold">${title}</h4>
                <p class="text-sm mt-1">${message}</p>
            </div>
            <button class="close-msg-box text-white opacity-70 hover:opacity-100 transition-opacity">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    container.appendChild(box);

    box.querySelector('.close-msg-box').addEventListener('click', () => {
        box.remove();
    });

    setTimeout(() => {
        if(box) box.remove();
    }, 5000);
};

// --- New Font Functionality ---

// Applies the currently selected poetry font
const applyPoetryFont = () => {
    const selectedFont = poetryFonts[currentPoetryFontIndex];
    document.documentElement.style.setProperty('--current-poetry-display-font', `'${selectedFont}', serif`);
    renderPoetryPosts();
    if (!document.getElementById('poetry-modal').classList.contains('hidden')) {
        openPoetryModal(currentPostIndex);
    }
};

// Cycles through available poetry fonts
const cyclePoetryFont = () => {
    currentPoetryFontIndex = (currentPoetryFontIndex + 1) % poetryFonts.length;
    applyPoetryFont();
};

// --- Stylish Font Generator Functionality ---

// Defines font transformations grouped by template categories for better UI
const fontTemplates = {
    'Gaming & Username Styles': [
        'Bold Sans-serif', 'Italic Sans-serif', 'Bold Italic Sans-serif',
        'Squared', 'Squared (Dark)', 'Bubble', 'Heavy Bubble', 'Small Caps', 'Full Width'
    ],
    'Social Media Bios & Posts': [
        'Script', 'Bold Script', 'Italic Script', 'Bold Italic Script',
        'Circled', 'Circled (Dark)', 'Parenthesized', 'Strikethrough', 'Underline', 'Double Underline',
        'Wavy', 'Double Wavy', 'Tiny Text', 'Stars', 'Crossed Out'
    ],
    'Formal & Aesthetic': [
        'Bold Serif', 'Italic Serif', 'Bold Italic Serif',
        'Fraktur', 'Bold Fraktur', 'Double-Struck', 'Monospace',
        'Dots Above', 'Dots Below', 'Mirrored', 'Upside Down' // Mirrored/Upside Down can be fun for aesthetic
    ]
};

// Maps characters to their Unicode equivalents for various font styles
const fontMaps = {
    // Math Styles (commonly used for 'fancy' text)
    'Bold Sans-serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D5D4 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D5DE - 0x61); return char; } },
    'Italic Sans-serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D5F8 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D612 - 0x61); return char; } },
    'Bold Italic Sans-serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D630 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D64A - 0x61); return char; } },

    'Bold Serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D400 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D41A - 0x61); return char; } },
    'Italic Serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D434 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D43E - 0x61); return char; } },
    'Bold Italic Serif': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D468 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D472 - 0x61); return char; } },

    'Script': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) { if (code === 0x48) return 'ℋ'; if (code === 0x4C) return 'ℒ'; return String.fromCodePoint(code + 0x1D49C - 0x41); } if (code >= 0x61 && code <= 0x7A) { if (code === 0x65) return 'ℯ'; if (code === 0x67) return 'ℊ'; if (code === 0x6F) return 'ℴ'; return String.fromCodePoint(code + 0x1D4B6 - 0x61); } return char; } },
    'Bold Script': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D4D0 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D4EA - 0x61); return char; } },
    'Italic Script': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D49C - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D4B6 - 0x61); return char; } },

    'Fraktur': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) { if (code === 0x43) return 'ℭ'; if (code === 0x48) return 'ℌ'; if (code === 0x5A) return 'ℨ'; return String.fromCodePoint(code + 0x1D504 - 0x41); } if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D51E - 0x61); return char; } },
    'Bold Fraktur': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D56C - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D586 - 0x61); return char; } },
    'Double-Struck': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) { if (code === 0x43) return 'ℂ'; if (code === 0x48) return 'ℍ'; if (code === 0x4E) return 'ℕ'; if (code === 0x50) return 'ℙ'; if (code === 0x51) return 'ℚ'; if (code === 0x52) return 'ℝ'; if (code === 0x5A) return 'ℤ'; return String.fromCodePoint(code + 0x1D538 - 0x41); } if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D552 - 0x61); return char; } },
    'Monospace': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1D670 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1D67A - 0x61); return char; } },

    // Enclosed Styles
    'Circled': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x24B6 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x24B6 + 26 - 0x61); if (code >= 0x30 && code <= 0x39) return String.fromCodePoint(code + 0x2460 - 0x30); return char; } },
    'Circled (Dark)': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1F150 - 0x41); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x1F150 + 26 - 0x61); return char; } },
    'Squared': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1F130 - 0x41); return char; } },
    'Squared (Dark)': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(code + 0x1F170 - 0x41); return char; } },
    'Parenthesized': { map: (char) => { const code = char.charCodeAt(0); if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(code + 0x249C - 0x61); return char; } },
    'Bubble': { map: (char) => { const mapping = { 'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ', ' ': ' ' }; return mapping[char.toLowerCase()] || char; } },
    'Heavy Bubble': { map: (char) => { const mapping = { 'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩', ' ': ' ' }; return mapping[char.toLowerCase()] || char; } },

    // Line-through/Underline Styles
    'Strikethrough': { map: (char) => char + '\u0336' }, // Combining long stroke overlay
    'Underline': { map: (char) => char + '\u0332' }, // Combining low line overlay
    'Double Underline': { map: (char) => char + '\u0333' }, // Combining double low line overlay
    'Wavy': { map: (char) => char + '\u0330' }, // Combining tilde below
    'Double Wavy': { map: (char) => char + '\u0360' }, // Combining double tilde
    'Dots Above': { map: (char) => char + '\u0307' }, // Combining dot above
    'Dots Below': { map: (char) => char + '\u0323' }, // Combining dot below

    // Transformations
    'Upside Down': { map: (char) => { const mapping = { 'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'ʃ', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'Ɑ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': 'Ո', 'V': 'Ʌ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '.': '˙', ',': '\'', '!': '¡', '?': '¿', "'": ',', '"': '„', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '&': '⅋', '_': '‾' }; return mapping[char] || char; } },
    'Mirrored': { map: (char) => { const mapping = { 'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'ꞁ', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'ƹ', 'A': 'A', 'B': 'B', 'C': 'Ɔ', 'D': 'D', 'E': 'Ǝ', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z', '0': '0', '1': '1', '2': 'ᙾ', '3': 'Ɛ', '4': '4', '5': 'Ƨ', '6': '6', '7': '7', '8': '8', '9': '9', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<' }; return mapping[char] || char; } },
    'Small Caps': { map: (char) => { const mapping = { 'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ', 'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ' }; return mapping[char] || char; } },
    'Full Width': { map: (char) => { if (char === ' ') return '   '; return char.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 0xFEE0)).join(''); } },
    'Superscript': { map: (char) => { const mapping = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '=': 'ᴰ', '(': '⁽', ')': '⁾', 'i': 'ⁱ', 'n': 'ⁿ' }; return mapping[char] || char; } },
    'Subscript': { map: (char) => { const mapping = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', 'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ', 'ə': 'ₔ', 'h': 'ₕ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'p': 'ₚ', 's': 'ₛ', 't': 'ₜ', 'v': 'ᵥ' }; return mapping[char] || char; } },
    'Tiny Text': { map: (char) => { const mapping = { 'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ᶦ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ', 'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᑫ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ' }; return mapping[char] || char; } },
    'Wide Spaced': { map: (char) => { return char.split('').map(c => c === ' ' ? '   ' : String.fromCharCode(c.charCodeAt(0) + 0xFEE0)).join(''); } }, // full-width characters + wide spaces
    'Black Circles': { map: (char) => { const mapping = { 'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '�', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩', ' ': ' ' }; return mapping[char.toLowerCase()] || char; } },
    'White Circles': { map: (char) => { const mapping = { 'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ', 'f': 'Ⓕ', 'g': 'Ⓖ', 'h': 'Ⓗ', 'i': 'Ⓘ', 'j': 'Ⓙ', 'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ', 'o': 'Ⓞ', 'p': 'Ⓟ', 'q': 'Ⓠ', 'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ', 'u': 'Ⓤ', 'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ', 'z': 'Ⓩ', ' ': ' ' }; return mapping[char.toUpperCase()] || char; } },
    'Stars': { map: (char) => { const mapping = { 'a': '✰', 'b': '★', 'c': '☆', 'd': '✮', 'e': '✯', 'f': '✰', 'g': '★', 'h': '☆', 'i': '✮', 'j': '✯', 'k': '✰', 'l': '★', 'm': '☆', 'n': '✮', 'o': '✯', 'p': '✰', 'q': '★', 'r': '☆', 's': '✮', 't': '✯', 'u': '✰', 'v': '★', 'w': '☆', 'x': '✮', 'y': '✯', 'z': '✰', ' ': ' ' }; return mapping[char.toLowerCase()] || char; } },
    'Crossed Out': { map: (char) => char + '\u0338' }, // Combining short stroke overlay
};


const generateStylishText = () => {
    const inputText = document.getElementById('generator-input').value;
    const outputDiv = document.getElementById('generated-fonts-output');
    outputDiv.innerHTML = ''; // Clear previous output

    if (inputText.trim() === '') {
        outputDiv.innerHTML = '<p class="text-sm text-secondary-text">Generated text will appear here.</p>';
        return;
    }

    // Iterate through font template categories to create sections
    for (const categoryName in fontTemplates) {
        // Create collapsible section for each template category
        const detailsElement = document.createElement('details');
        detailsElement.className = 'bg-secondary rounded-xl shadow-md mb-4 overflow-hidden';
        if (categoryName === 'Gaming & Username Styles') { // Open first category by default
            detailsElement.open = true;
        }

        const summaryElement = document.createElement('summary');
        summaryElement.className = 'p-4 cursor-pointer text-text-color font-bold text-lg flex justify-between items-center hover:bg-opacity-90 transition-colors';
        summaryElement.innerHTML = `<span>${categoryName}</span><i class="fas fa-chevron-down text-sm transition-transform duration-300"></i>`;
        
        // Rotate icon on open/close
        detailsElement.addEventListener('toggle', () => {
            const icon = summaryElement.querySelector('i');
            if (detailsElement.open) {
                icon.classList.add('rotate-180');
            } else {
                icon.classList.remove('rotate-180');
            }
        });

        detailsElement.appendChild(summaryElement);

        const categoryContentDiv = document.createElement('div');
        categoryContentDiv.className = 'p-4 pt-0 space-y-2'; // Padding and spacing for generated fonts

        // Iterate through styles within each category
        fontTemplates[categoryName].forEach(styleName => {
            const style = fontMaps[styleName];
            if (!style) return; // Skip if font mapping is not found

            let transformedText = '';
            // Apply transformation to each character in the input text
            for (let i = 0; i < inputText.length; i++) {
                transformedText += style.map(inputText[i]);
            }

            // Create a wrapper div for each style to hold the text and copy button neatly
            const styleWrapper = document.createElement('div');
            styleWrapper.className = 'flex items-center justify-between p-3 rounded-lg bg-card shadow-sm border border-card-border';

            const p = document.createElement('p');
            p.className = 'text-base text-text-color flex-grow break-all pr-2 font-mono'; // Added font-mono for some monospace-like display if not explicitly transformed
            p.innerHTML = `<span class="font-bold text-primary text-sm block md:inline-block md:mr-2">${styleName}:</span>${transformedText}`;
            
            // Add a copy button for each generated style
            const copyButton = document.createElement('button');
            copyButton.className = 'flex-shrink-0 ml-2 p-2 rounded-full bg-secondary hover:bg-opacity-80 transition-colors duration-300 text-secondary-text pop-animation';
            copyButton.innerHTML = '<i class="fas fa-copy text-sm"></i>';
            copyButton.title = 'Copy';
            copyButton.addEventListener('click', () => {
                handleCopyClick(transformedText);
                // Add pop animation on click
                copyButton.classList.add('pop-animation');
                setTimeout(() => {
                    copyButton.classList.remove('pop-animation');
                }, 300);
            });

            styleWrapper.appendChild(p);
            styleWrapper.appendChild(copyButton);
            categoryContentDiv.appendChild(styleWrapper);
        });
        detailsElement.appendChild(categoryContentDiv);
        outputDiv.appendChild(detailsElement);
    }
};