export interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  image:string;
  url:string;
  likes: number;
}


export const products = [
  {
    id: 1,
    category: 'cosmetics',
    name: 'Avene XeraCalm A крем 200 мл',
    price: 9030,
    description: 'Липидовосполняющий крем XERACALM A.D питает очень сухую кожу младенцев, детей и взрослых.  Снижает ощущение зуда, свойственного сухой атопичной коже, снимает покраснение и раздражение, вызванное гиперреактивносью кожи, а также стимулирует естественный иммунитет кожи.',
    rating: 10,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hce/h54/51877636210718/avene-xeracalm-ad-krem-200-ml-101889257-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-xeracalm-a-krem-200-ml-101889257/?c=750000000",
    likes: 0,
  },
  {
    id: 2,
    category: 'cosmetics',
    name: 'Avene Cleanance гель 400 мл',
    price: 8229,
    description: 'Гель очищающий Avene Cleanance soapless gel cleanser обеспечивает эффективное глубокое очищение жирной и проблемной кожи, склонной к акне. Хорошо переносится чувствительной кожей, поскольку не содержит мыла. Мягкое очищение не нарушает гидролипидную мантию, снимает воспаление, устраняет бактерии, подготавливает кожу к дальнейшему уходу. При регулярном применении Avene Cleanance soapless gel cleanser уменьшается количество вырабатываемого кожей себума, она становится гладкой и упругой.',
    rating: 9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h79/31530546233374/avene-cleanance-ocisausij-400-ml-21900518-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-gel-400-ml-21900518/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 3,
    category: 'cosmetics',
    name: 'Avene бальзам Cold Cream 4 мл',
    price: 2534,
    description: 'Питающая помада-бальзам для губ Avene Cold Cream Nourishing Lip Balm, благодаря кольд-крему, растительным маслам, сквалану, пчелиному воску, термальной воде Avene, витамину E эффективно борется с шелушением и повреждениями тонкой, чувствительной кожи губ. Этот устойчивый бальзам восстанавливает кожу, ускоряет ее регенерацию, придает мягкость и гладкость, оберегает от агрессивного влияния внешних воздействий. Легкий перламутровый оттенок помады делает губы более объемными и привлекательными.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h20/31484117123102/avene-cold-cream-bal-zam-dlya-gub-4-ml-100349672-1.jpg",
    url:"https://kaspi.kz/shop/p/avene-bal-zam-cold-cream-4-ml-100349672/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 4,
    category: 'cosmetics',
    name: 'Avene Cleanance hydra крем 40 мл',
    price: 7381,
    description: 'Успокаивающий крем для пересушенной проблемной кожи компенсирует подсушивающее и раздражающее действие препаратов для лечения акне, увлажняет и успокаивает кожу, склонную к появлению акне, учитывая ее природную чувствительность.',
    rating:7,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h61/31811316776990/avene-cleanance-hydra-40-ml-17601691-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-hydra-krem-40-ml-17601691/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 5,
    category: 'cosmetics',
    name: 'Avene бальзам Xeracalm A.D для лица 200 мл',
    price: 8892,
    description: 'Бальзам моментально устраняет чувство стянутости и зуд. Он смягчает кожу и восстанавливает ее естественный гидролипидный баланс. Исчезают красные пятна, прекращается раздражение и шелушение, кожа выглядит здоровой.Активные компоненты: термальная вода Avène – снимает воспаление, увлажняет, успокаивает и смягчает кожу; I-modulia – запатентованный комплекс от Pierre Fabre Laboratories уменьшает склонность кожи к аллергическим реакциям; масло примулы вечерней – ускоряет процессы регенерации клеток, увлажняет, смягчает и питает кожу, имеет противоаллергенные и противовоспалительные свойства; глицерин – оказывает увлажняющее действие, восстанавливает эластичность кожи.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h6d/47593288630302/avene-xeracalm-a-d-lipidovospolnausij-dla-suhoj-kozi-200-ml-100154911-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-bal-zam-xeracalm-a-d-dlja-litsa-200-ml-100154911/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 6,
    category: 'cosmetics',
    name: 'Avene Cicalfate+ крем 40 мл',
    price: 4549,
    description: 'Благодаря ингредиентам с интенсивным антисептическим, антибактериальным и восстанавливающим действием, средство Avene Cicalfate Repair cream эффективно оздоравливает кожу. Сорбенты подсушивают мокнущие зоны кожного покрова, уникальное вещество сукральфат образует прочную защитную пленку, ускоряет заживление ран. Сразу после применения крема, восстанавливающего кожу, исчезает дискомфорт от стянутости и жжения, успокаивается зуд, уходит покраснение.',
    rating:10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/hac/33711295332382/avene-cicalfate-zazivlausij-antibakterialnyj-40-ml-101395172-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cicalfate-krem-40-ml-101395172/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 7,
    category: 'cosmetics',
    name: 'Avene Thermal Spring Water термальная вода 50 мл',
    price: 1774,
    description: 'Спрей с термальной водой Avène обеспечивает естественное облегчение и успокоение для чувствительной кожи. Ежедневный успокаивающий уход. Ваш помощник в уходе за кожей. Термальная вода Avène, сохраняемая в чистом виде от источника до кожи, успокаивает и улучшает состояние всех типов кожи, даже самой чувствительной. Добываемая непосредственно на месте источника Термальная вода Avène сохраняет свои успокаивающие, противовоспалительные и смягчающие свойства. Ежедневный уход за чувствительной кожей, уход за кожей при дерматологических заболеваниях и после косметических процедур.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/hd0/50968563286046/avene-termalnaa-voda-50-ml-21900411-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-thermal-spring-water-termal-naja-voda-50-ml-21900411/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 8,
    category: 'cosmetics',
    name: 'Avene Cleanance гель 200 мл',
    price: 5334,
    description: 'Гель Avene Cleanance обеспечивает эффективное глубокое очищение жирной и проблемной кожи, склонной к акне. Хорошо переносится чувствительной кожей, поскольку не содержит мыла. Мягкое очищение не нарушает гидролипидную мантию, снимает воспаление, устраняет бактерии, подготавливает кожу к дальнейшему уходу. При регулярном применении Avene Cleanance уменьшается количество вырабатываемого кожей себума, она становится гладкой и упругой.',
    rating:6,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h5b/47273285976094/avene-cleanance-gel-200-ml-21900332-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-gel-200-ml-21900332/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 9,
    category: 'cosmetics',
    name: 'Avene Mousse Nettoyante пенка 150 мл',
    price: 6899,
    description: 'Глютаминовая кислота в составе пенки нормализует работу сальных желез и устраняет жирный блеск, а в комплексе с молочной и лимонной кислотами сужает поры.',
    rating:10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hbc/48683904106526/avene-mousse-nettoyante-150-ml-101188956-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-mousse-nettoyante-penka-150-ml-101188956/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 10,
    category: 'cosmetics',
    name: 'Avene SPF 50+ Новая Формула крем 50 мл',
    price: 8730,
    description: 'Инновационный Крем SPF 50+ для сухой, чувствительной кожи лица! В новую фотозащитную систему входит запатентованный фильтр TriAsorB, который обеспечивает защиту ультраширокого спектра действия от видимых UVA, UVB лучей, а также невидимого синего света/',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hcc/50535139639326/spf-50-krem-dla-suhoj-kozi-50-ml-novaa-formula-104744500-1.jpg",
    url:"https://kaspi.kz/shop/p/avene-spf-50-novaja-formula-krem-50-ml-104744500/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 11,
    category: 'laptops',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 479920,
    description: 'Маленький чип. Грандиозный прорыв Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей. 8‑ядерный процессор. Дольше работает. Меньше ест По скорости вычислений чип M1 превосходит все другие процессоры Apple. Такая производительность позволяет выполнять на MacBook Air самые ресурсоёмкие задачи, например редактировать фото и видео на профессиональном уровне или играть в игры со сложной графикой. Но 8‑ядерный процессор в чипе M1 не просто работает до 3.5 раза быстрее по сравнению c предыдущим поколением процессоров — он рационально распределяет задачи между ядрами производительности и ядрами эффективности. Ядра эффективности легко справляются с повседневными действиями, расходуя при этом в десять раз меньше энергии. Дисплей Retina. Нереально. Реалистичные цвета',
    rating: 10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 12,
    category: 'laptops',
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h11/66993674125342/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    url:"https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 13,
    category: 'laptops',
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239990,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
    url:"https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 14,
    category: 'laptops',
    name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
    price: 379980,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h5d/66626494365726/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg",
    url:"https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 15,
    category: 'laptops',
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 369990,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/ha0/62100002635806/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    url:"https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 16,
    category: 'coffee machines',
    name: 'Кофемашина Fakir BABILA серебристый, черный',
    price: 140800,
    description: 'Кофемашина Fakir BABILA превратит процесс приготовления кофе в настоящее удовольствие. Так, не выходя из дома, вы сможете насладиться вкусом любимого капучино или латте – а все благодаря предусмотренному капучинатору, мгновенно превращающему молоко в густую пышную пенку. Кофемашина Fakir BABILA впечатлит увеличенной до 1350 Вт мощностью и возросшим до 15 бар давлением. Таким образом, ей потребуется не более нескольких минут, чтобы приготовить для вас и домочадцев несколько порций ароматного крепкого напитка. Значительному облегчению выбора необходимых параметров способствует понятная панель управления.',
    rating:10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/hf9/51837476372510/fakir-babila-espresso-kofemasina-15-bar-103587230-1.jpg",
    url:"https://kaspi.kz/shop/p/kofemashina-fakir-babila-serebristyi-chernyi-103587230/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 17,
    category: 'coffee machines',
    name: 'Кофемашина Delonghi Magnifica S Smart ECAM 250.33.TB серый',
    price: 264880,
    description: 'Кофемашина DeLonghi ECAM 250.33 TB Magnifica S имеет встроенную кофемолку, что является неоспоримым плюсом, ведь вы сможете самостоятельно выбрать понравившийся сорт кофе, а также, помол, для приготовления любимых напитков. В соответствующий контейнер вы сможете за один раз поместить до 250 граммов кофе. Давление в 15 бар позволяет взять максимум насыщенности вкуса и аромата с кофейных зерен. Контейнер для воды объёмом в 1.8 л, позволяет сделать вдоволь порций напитков для вас и ваших близких. Данный прибор имеет также немаловажную функцию, как приготовления одновременно двух порций эспрессо.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/he9/32624182525982/delonghi-magnifica-s-smart-ecam-250-33-tb-cernyj-100246352-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/kofemashina-delonghi-magnifica-s-smart-ecam-250-33-tb-seryi-100246352/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 18,
    category: 'coffee machines',
    name: 'Кофемашина Hipresso CM1001 черный',
    price: 329990,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb5/62079615860766/kofemashina-hipresso-cm1001-chernyi-106248969-1.jpg",
    url:"https://kaspi.kz/shop/p/kofemashina-hipresso-cm1001-chernyi-106248969/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 19,
    category: 'coffee machines',
    name: 'Кофемашина Delonghi ETAM 29.660 SB Autentica серебристый',
    price: 385300,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/hd4/31513265373214/delonghi-etam-29-660-sb-autentica-silver-black-4400227-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/kofemashina-delonghi-etam-29-660-sb-autentica-serebristyi-4400227/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 20,
    category: 'coffee machines',
    name: 'Кофемашина Delonghi ECAM 23.460.W белый',
    price: 339990,
    description: '',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h79/51348242497566/ecam-23-460-w-105194530-1.jpg",
    url:"https://kaspi.kz/shop/p/kofemashina-delonghi-ecam-23-460-w-belyi-105194530/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 21,
    category: 'electronic books',
    name: 'Электронная книга POCKET BOOK PB617-P-CIS черный',
    price: 64426,
    description: 'Благодаря технологии электронных чернил, экран PocketBook 617 абсолютно безопасен для зрения и максимально похож на обычную печатную страницу. Сколько бы вы ни читали, глаза не будут уставать, а книга будет приносить настоящее удовольствие. Кроме того, на экране ридера вы можете регулировать размер шрифта, увеличивая его до комфортного для вас размера. Выбирайте теплый или холодный тон экрана с подсветкой SMARTlight В отличие от обычной подсветки, которая позволяет читать при любом освещении, функция SMARTlight также регулирует цветовую температуру экрана. Со SMARTlight вы можете придавать странице теплый или холодный тон, а также сохранять шаблоны таких настроек для быстрого переключения в будущем. Покупайте книги прямо в ридере с Wi-Fi Подключившись к Wi-Fi вы можете быстро и удобно пополнять электронную библиотеку новыми книгами, прямо в вашем PocketBook 617. Помимо доступа к фирменному книжному магазину и другим книжным платформам, благодаря интернету гораздо удобнее устанавливать все обновления ПО. Фирменные облачные сервисы для синхронизации С помощью сервиса PocketBook Cloud и мобильного приложения PocketBook Reader, вся ваша библиотека не только будет храниться в одном месте, но и мгновенно синхронизироваться между PocketBook 617 и смартфоном или планшетом. Ну а сервисы Send-to-PocketBook и Dropbox PocketBook позволяют перемещать книги на ридер всего в несколько кликов.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/hc1/51482116554782/pocket-book-pb617-p-cis-cernyj-105268772-1.jpg",
    url:"https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 22,
    category: 'electronic books',
    name: 'Электронная книга Amazon Kindle 10 черный',
    price: 59990,
    description: 'Тонкий и легкий Kindle 10-го поколения с подсветкой в корпусе черного цвета. Сенсорный экран не бликует даже на ярком солнце. 8 Гб встроенной памяти и возросшее быстродействие позволяют загружать книги через Wi-Fi и хранить на устройстве большую библиотеку. Bluetooth для прослушивания аудиокниг через гарнитуру.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h7f/33861602803742/amazon-kindle-10-cernyj-101391295-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/amazon-kindle-10-chernyi-101391295/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 23,
    category: 'electronic books',
    name: 'Электронная книга Ritmix RBK-677FL черный',
    price: 44995,
    description: 'Ritmix RBK-677FL станет идеальной находкой для тех, кто предпочитает активный образ жизни. Благодаря малому весу и размеру ридер не займет много места, что позволяет брать его с собой куда угодно. Модель имеет самый современный экран E-ink Carta, который визуально не отличаются от обычной бумаги, не бликует на солнце и потребляет очень мало энергии. Практичное расположение функциональных клавиш позволяет полноценно управлять устройством даже одной рукой. 4 Гб встроенной памяти + разъём для карты памяти до 32 Гб — это целая библиотека, которая всегда под рукой!',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h2d/31869069262878/ritmix-rbk-677fl-cernyj-100613289-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/ritmix-rbk-677fl-chernyi-100613289/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 24,
    category: 'electronic books',
    name: 'Электронная книга Amazon Kindle Paperwhite 2021 черный',
    price: 99000,
    description: 'Электронная книга Amazon Kindle Paperwhite 2021. По сравнению с предыдущим поколением экран увеличился до 6.8 дюйма и при этом с разрешением 300 PPI. Белоснежный экран не бликует, и выглядит как настоящая бумажная страница даже на ярком солнце. Встроенная подсветка, которую обеспечивают 17 светодиодов, теперь имеет и регулировку цветовой температуры от холодного белого до теплых желтых или янтарных тонов. PaperWhite 2021 выполнен в современном дизайне, рамки вокруг экрана стали тоньше, толщина ридера всего 8.1 мм. Корпус устройства защищен от влаги по стандарту IPX8 - электронную книгу можно брать с собой на пляж или читать в ванной без опасений повредить брызгами воды. Благодаря современному процессору, производительность выросла примерно на 20% по сравнению с предыдущей моделью. Объем встроенной памяти составляет 8 Гб. Имеются модуль Wi-Fi для беспроводной передачи книг, Bluetooth для прослушивания аудиокниг и интерфейс USB Type-C для быстрой зарядки. Батарея стала мощнее и обеспечивает долгосрочную автономную работу.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h23/47093254520862/amazon-kindle-paper-2021-chernyi-102838488-1.jpg",
    url:"https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item",
    likes: 0,
  },
  {
    id: 25,
    category: 'electronic books',
    name: 'Электронная книга Amazon Kindle 10 белый',
    price: 56800,
    description: 'В электронной книги Amazon Kindle 10 есть встроенная подсветка экрана. Дисплей без бликов нового поколения теперь максимально приближен к настоящей бумаге. Появилась возможность сопрягать ридер с Bluetooth-наушниками или динамиками для прослушивания книг. При подключении Bluetooth-наушников, Kindle может озвучить для вас все экранные действия. Он читает содержимое экрана, включая книги. Также снова появилась функция Text-to-Speech, преобразование текста в речь. Она позволяет воспроизводить текст голосом, но, справедливости ради, стоит заметить, что это работает только для книг на английском языке. Тексты на кириллице по-прежнему не воспроизводятся. Но эта функция очень поможет изучающим английский язык, так как вы сможете переключаться от чтения книги к её голосовому воспроизведению.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/hb8/33677774684190/amazon-kindle-10-belyj-101508034-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/amazon-kindle-10-belyi-101508034/?c=750000000#!/item",
    likes: 0,
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
