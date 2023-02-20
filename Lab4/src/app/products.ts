export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image:string;
  url:string;
}

export const products = [
  {
    id: 1,
    name: 'Avene XeraCalm A крем 200 мл',
    price: 9030,
    description: 'Липидовосполняющий крем XERACALM A.D питает очень сухую кожу младенцев, детей и взрослых.  Снижает ощущение зуда, свойственного сухой атопичной коже, снимает покраснение и раздражение, вызванное гиперреактивносью кожи, а также стимулирует естественный иммунитет кожи.',
    rating: 10,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hce/h54/51877636210718/avene-xeracalm-ad-krem-200-ml-101889257-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-xeracalm-a-krem-200-ml-101889257/?c=750000000",
  },
  {
    id: 2,
    name: 'Avene Cleanance гель 400 мл',
    price: 8229,
    description: 'Гель очищающий Avene Cleanance soapless gel cleanser обеспечивает эффективное глубокое очищение жирной и проблемной кожи, склонной к акне. Хорошо переносится чувствительной кожей, поскольку не содержит мыла. Мягкое очищение не нарушает гидролипидную мантию, снимает воспаление, устраняет бактерии, подготавливает кожу к дальнейшему уходу. При регулярном применении Avene Cleanance soapless gel cleanser уменьшается количество вырабатываемого кожей себума, она становится гладкой и упругой.',
    rating: 9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h79/31530546233374/avene-cleanance-ocisausij-400-ml-21900518-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-gel-400-ml-21900518/?c=750000000#!/item",
  },
  {
    id: 3,
    name: 'Avene бальзам Cold Cream 4 мл',
    price: 2534,
    description: 'Питающая помада-бальзам для губ Avene Cold Cream Nourishing Lip Balm, благодаря кольд-крему, растительным маслам, сквалану, пчелиному воску, термальной воде Avene, витамину E эффективно борется с шелушением и повреждениями тонкой, чувствительной кожи губ. Этот устойчивый бальзам восстанавливает кожу, ускоряет ее регенерацию, придает мягкость и гладкость, оберегает от агрессивного влияния внешних воздействий. Легкий перламутровый оттенок помады делает губы более объемными и привлекательными.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h20/31484117123102/avene-cold-cream-bal-zam-dlya-gub-4-ml-100349672-1.jpg",
    url:"https://kaspi.kz/shop/p/avene-bal-zam-cold-cream-4-ml-100349672/?c=750000000#!/item",
  },
  {
    id: 4,
    name: 'Avene Cleanance hydra крем 40 мл',
    price: 7381,
    description: 'Успокаивающий крем для пересушенной проблемной кожи компенсирует подсушивающее и раздражающее действие препаратов для лечения акне, увлажняет и успокаивает кожу, склонную к появлению акне, учитывая ее природную чувствительность.',
    rating:7,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h61/31811316776990/avene-cleanance-hydra-40-ml-17601691-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-hydra-krem-40-ml-17601691/?c=750000000#!/item",
  },
  {
    id: 5,
    name: 'Avene бальзам Xeracalm A.D для лица 200 мл',
    price: 8892,
    description: 'Бальзам моментально устраняет чувство стянутости и зуд. Он смягчает кожу и восстанавливает ее естественный гидролипидный баланс. Исчезают красные пятна, прекращается раздражение и шелушение, кожа выглядит здоровой.Активные компоненты: термальная вода Avène – снимает воспаление, увлажняет, успокаивает и смягчает кожу; I-modulia – запатентованный комплекс от Pierre Fabre Laboratories уменьшает склонность кожи к аллергическим реакциям; масло примулы вечерней – ускоряет процессы регенерации клеток, увлажняет, смягчает и питает кожу, имеет противоаллергенные и противовоспалительные свойства; глицерин – оказывает увлажняющее действие, восстанавливает эластичность кожи.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h6d/47593288630302/avene-xeracalm-a-d-lipidovospolnausij-dla-suhoj-kozi-200-ml-100154911-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-bal-zam-xeracalm-a-d-dlja-litsa-200-ml-100154911/?c=750000000#!/item",
  },
  {
    id: 6,
    name: 'Avene Cicalfate+ крем 40 мл',
    price: 4549,
    description: 'Благодаря ингредиентам с интенсивным антисептическим, антибактериальным и восстанавливающим действием, средство Avene Cicalfate Repair cream эффективно оздоравливает кожу. Сорбенты подсушивают мокнущие зоны кожного покрова, уникальное вещество сукральфат образует прочную защитную пленку, ускоряет заживление ран. Сразу после применения крема, восстанавливающего кожу, исчезает дискомфорт от стянутости и жжения, успокаивается зуд, уходит покраснение.',
    rating:10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/hac/33711295332382/avene-cicalfate-zazivlausij-antibakterialnyj-40-ml-101395172-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cicalfate-krem-40-ml-101395172/?c=750000000#!/item",
  },
  {
    id: 7,
    name: 'Avene Thermal Spring Water термальная вода 50 мл',
    price: 1774,
    description: 'Спрей с термальной водой Avène обеспечивает естественное облегчение и успокоение для чувствительной кожи. Ежедневный успокаивающий уход. Ваш помощник в уходе за кожей. Термальная вода Avène, сохраняемая в чистом виде от источника до кожи, успокаивает и улучшает состояние всех типов кожи, даже самой чувствительной. Добываемая непосредственно на месте источника Термальная вода Avène сохраняет свои успокаивающие, противовоспалительные и смягчающие свойства. Ежедневный уход за чувствительной кожей, уход за кожей при дерматологических заболеваниях и после косметических процедур.',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/hd0/50968563286046/avene-termalnaa-voda-50-ml-21900411-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-thermal-spring-water-termal-naja-voda-50-ml-21900411/?c=750000000#!/item",
  },
  {
    id: 8,
    name: 'Avene Cleanance гель 200 мл',
    price: 5334,
    description: 'Гель Avene Cleanance обеспечивает эффективное глубокое очищение жирной и проблемной кожи, склонной к акне. Хорошо переносится чувствительной кожей, поскольку не содержит мыла. Мягкое очищение не нарушает гидролипидную мантию, снимает воспаление, устраняет бактерии, подготавливает кожу к дальнейшему уходу. При регулярном применении Avene Cleanance уменьшается количество вырабатываемого кожей себума, она становится гладкой и упругой.',
    rating:6,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h5b/47273285976094/avene-cleanance-gel-200-ml-21900332-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-cleanance-gel-200-ml-21900332/?c=750000000#!/item",
  },
  {
    id: 9,
    name: 'Avene Mousse Nettoyante пенка 150 мл',
    price: 6899,
    description: 'Глютаминовая кислота в составе пенки нормализует работу сальных желез и устраняет жирный блеск, а в комплексе с молочной и лимонной кислотами сужает поры.',
    rating:10,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hbc/48683904106526/avene-mousse-nettoyante-150-ml-101188956-1-Container.jpg",
    url:"https://kaspi.kz/shop/p/avene-mousse-nettoyante-penka-150-ml-101188956/?c=750000000#!/item",
  },
  {
    id: 10,
    name: 'Avene SPF 50+ Новая Формула крем 50 мл',
    price: 8730,
    description: 'Инновационный Крем SPF 50+ для сухой, чувствительной кожи лица! В новую фотозащитную систему входит запатентованный фильтр TriAsorB, который обеспечивает защиту ультраширокого спектра действия от видимых UVA, UVB лучей, а также невидимого синего света/',
    rating:9,
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hcc/50535139639326/spf-50-krem-dla-suhoj-kozi-50-ml-novaa-formula-104744500-1.jpg",
    url:"https://kaspi.kz/shop/p/avene-spf-50-novaja-formula-krem-50-ml-104744500/?c=750000000#!/item",
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
