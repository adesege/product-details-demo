import { IProducts } from '../store/product/interfaces';

export default [
  {
    id: 1,
    name: 'CAPRI TRIPLE WHITE',
    sizes: [7, 8, 9, 10, 11, 12, 13],
    type: 'Men',
    description: `Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks  fresh or curiously banged up: your choice. 

    Snag yourself a pair before you go out of style.`,
    pricing: { amount: 268, currencyCode: 'USD' },
    images: [
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_1200x.progressive.png.jpg?v=1593118532',
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-2_1200x.progressive.png.jpg?v=1593118532',
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-3_1200x.progressive.png.jpg?v=1593118532',
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-4_1200x.progressive.png.jpg?v=1593118532',
    ],
  },
] as IProducts;
