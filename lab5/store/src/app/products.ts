
export class Product {
  id: number | undefined;
  name: string | undefined;
  price: number;
  description: string | undefined;
  image: string[] ;
  rating: number | undefined;
  src: string | undefined

  constructor() {
    this.image = [''];
    this.price = 0;
  }
}


  
  export const products = [
    {
      id : 0,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h2a/67021630144542/rakhat-shokoladnaya-plitka-molochnyi-100-g-100221859-1.jpg',
      'https://cdn.shopify.com/s/files/1/0295/0388/1353/products/14hq_720x.webp?v=1650968475',
      'https://m.media-amazon.com/images/I/61nzwRVxCJL.jpg'
      ],
      name: 'Kazakhstan chocolate',
      description: 'chocolate milk 100 g',
      rating: 4.8,
      src: "https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000#!/item"
    },
    {
      id : 1,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/hd9/32515890741278/ulker-albeni-sokoladnyj-batoncik-molocnyj-pecene-40-g-100222662-1.jpg',
      'https://ir.ozone.ru/s3/multimedia-6/c1000/6465083934.jpg',
      'https://ir.ozone.ru/s3/multimedia-z/c1000/6251568107.jpg'
      ],
      name: 'Albeni',
      description: 'milk chocolate bar, cookies 40 g',
      rating: 3.8,
      src: "https://kaspi.kz/shop/p/ulker-albeni-shokoladnyi-batonchik-molochnyi-pechen-e-40-g-100222662/?c=750000000"
    },
    {
      id : 2,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h9d/50337844887582/oreo-kakao-i-vanilnyj-krem-228-g-100971349-1-Container.jpg',
      'https://d11qgm9a5k858y.cloudfront.net/ytat3g9r7qdrhmbmcvu9uevomye4'
      ],
      name: 'Oreo',
      description: 'Oreo cookies with cocoa and cream filling 228 g',
      rating: 4.7,
      src: "https://kaspi.kz/shop/p/oreo-pechen-e-s-kakao-i-kremovoi-nachinkoi-228-g-100971349/?c=750000000"
    },
    {
      id : 3,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/h88/62025154920478/belvita-utrennee-multi-zlakovoe-225-g-101000656-1-Container.jpg',
      'https://ir.ozone.ru/s3/multimedia-a/c1000/6353981926.jpg',
      'https://ir.ozone.ru/s3/multimedia-m/c1000/6063450634.jpg'
      ],
      name: 'BelVita',
      description: 'Morning oatmeal cookies without additives 225 g',
      rating: 5,
      src: "https://kaspi.kz/shop/p/belvita-utrennee-pechen-e-med-funduk-225-g-100970687/?c=750000000"
    },
    {
      id : 4,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h36/51302194970654/slastena-kukuruznye-palocki-200-g-100814351-1-Container.jpg',
      'https://icf.listex.info/300x200/9a1a3d8d-5562-af5e-5af5-6cdf18fed0a2.jpg',
      'https://icf.listex.info/300x200/d612afb3-c835-7eeb-35f9-d7182e4945f5.jpg'
      ],
      name: 'Slastena',
      description: 'Sweet corn sticks 200 g',
      rating: 4.9,
      src:"https://kaspi.kz/shop/p/slastena-kukuruznye-palochki-200-g-100814351/?c=750000000"
    },
    {
      id : 5,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h00/46752118833182/nutella-orehovaa-s-dobavleniem-kakao-180-gr-100227056-1-Container.jpg',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPQ1r-e8Qx2dQ9t3nEwoil9Nc-j8qkeiiVvNxrc4BhH8LF6s86U9HkHdx7LGoz7jYZwtJz2pL3',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaYczKtEuZNvy4NRaz5mvp_X4zRgG71ieB6WDv88L0gtj6gy7qTAfbCQe8jBzM_YXOyYZrPW8'
      ],
      name: 'Nutella',
      description: 'NUTELLA hazelnut paste, cocoa 180 g',
      rating: 5,
      src:"https://kaspi.kz/shop/p/nutella-pasta-lesnoi-oreh-kakao-180-g-100227056/?c=750000000"
    },
    {
      id : 6,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/h52/68744958050334/yashkino-vafel-nye-ruletiki-so-sgushchenkoi-160-g-100236474-1.jpg',
      'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/d2/a5/89790e5433603fb7d0037axdd108.jpg',
      'https://cdn.100sp.ru/pictures/083083385'
      ],
      name: 'Yashkino Waffle rolls ',
      description: 'Yashkino Waffle rolls with condensed milk 160 g',
      rating: 4.6,
      src:"https://kaspi.kz/shop/p/jashkino-vafel-nye-ruletiki-so-sguschenkoi-160-g-100236474/?c=750000000"
    },
    {
      id : 7,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/ha1/46216838283294/sokolad-belyj-poristyj-alpen-gold-aerated-poristyj-80g-102442873-1.jpg',
      'https://ir.ozone.ru/s3/multimedia-6/c1000/6383258202.jpg',
      'https://ir.ozone.ru/s3/multimedia-r/c1000/6383258295.jpg'
      ],
      name: 'Alpen Gold',
      description: 'chocolate bar white 80 g',
      rating: 5,
      src: "https://kaspi.kz/shop/p/alpen-gold-shokoladnaja-plitka-belyi-80-g-102442873/?c=750000000"
    },
    {
      id : 8,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h29/67249860411422/kinder-shokoladnaya-plitka-molochnyi-molochnaya-50-g-100221897-1.jpg',
      'https://ir.ozone.ru/s3/multimedia-b/c1000/6372432071.jpg',
      'https://ir.ozone.ru/s3/multimedia-1/c1000/6064013041.jpg'
      ],
      name: 'Kinder',
      description: 'KINDER milk chocolate bar, milk 50 g',
      rating: 4.9,
      src:"https://kaspi.kz/shop/p/kinder-shokoladnaja-plitka-molochnyi-molochnaja-50-g-100221897/?c=750000000"
    },
    {
      id : 9,
      price: 1,
      image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/hc3/50337229340702/ulker-biskrem-cocoa-180-g-100970648-1-Container.jpg',
      'https://ir.ozone.ru/s3/multimedia-i/c1000/6325252710.jpg',
      'https://ir.ozone.ru/s3/multimedia-s/c1000/6463556728.jpg'
      ],
      name: 'Ulker Biskrem',
      description: 'Ulker Biskrem Sosoa cookies with cocoa cream filling 180 g',
      rating: 4.3,
      src:"https://kaspi.kz/shop/p/ulker-biskrem-sosoa-pechen-e-s-kakao-kremovoi-nachinkoi-180-g-100970648/?c=750000000"
    },
  ];
  


  
