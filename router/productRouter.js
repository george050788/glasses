import express from 'express'

let router = express.Router()

const productList = [{
  productid: 'BaGfXvWeMuV9ww8HHXD8',
  brand: 'Salt Maalat',
  name: 'Very Nice',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['brown', 'red'],
  price: 678,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C73AC65E-D11D-4341-ADCD-1C914473436E.png?alt=media&token=6b94d213-f4e3-400e-88d8-81b3a337f768',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C73AC65E-D11D-4341-ADCD-1C914473436E.png?alt=media&token=6b94d213-f4e3-400e-88d8-81b3a337f768',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2CA1CE30-B614-4363-8C56-FFFE779E9024.png?alt=media&token=b4b9da33-95fb-42f9-acfc-ad48a8b5ccd5',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}, {
  productid: '9l3lRIhqTvUwC166slWl',
  brand: 'Burnikk',
  name: 'Very Nice',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['red', 'yellow'],
  price: 240,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2CA1CE30-B614-4363-8C56-FFFE779E9024.png?alt=media&token=b4b9da33-95fb-42f9-acfc-ad48a8b5ccd5',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2CA1CE30-B614-4363-8C56-FFFE779E9024.png?alt=media&token=b4b9da33-95fb-42f9-acfc-ad48a8b5ccd5',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}, {
  productid: 'CC2ubD7f3yl4A5ob0ET3',
  brand: 'Salt Maalat',
  name: 'Sipon Malapot',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['brown', 'blue'],
  price: 260,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/556DB005-5FBC-40DC-815A-8C4BF0A3E3F3.png?alt=media&token=57141c94-85a4-48b9-8549-3aca6d5374f6',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/556DB005-5FBC-40DC-815A-8C4BF0A3E3F3.png?alt=media&token=57141c94-85a4-48b9-8549-3aca6d5374f6',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/23C4EF18-BAD6-4878-8496-7F7428E9B7B3.png?alt=media&token=dbf56cc8-7e5a-4ec2-b7de-2e1305393380',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}, {
  productid: 'VAgljyBwhWiZxMrxl7qW',
  brand: 'Black Kibal',
  name: 'Pitaklan',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['yellow', 'green'],
  price: 174,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C995FC40-762F-481A-8DE8-B4774E215EBF.png?alt=media&token=47adb526-26fe-4c87-bfbc-f6ede8c4d7bf',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C995FC40-762F-481A-8DE8-B4774E215EBF.png?alt=media&token=47adb526-26fe-4c87-bfbc-f6ede8c4d7bf',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}, {
  productid: 'plL5XwHiJ9S8TzRvEkDu',
  brand: 'Black Kibal',
  name: 'Pitaklan',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['yellow'],
  price: 174,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C995FC40-762F-481A-8DE8-B4774E215EBF.png?alt=media&token=47adb526-26fe-4c87-bfbc-f6ede8c4d7bf',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
    }
  ],
  isFeatured: 'false',
  isRecommended: 'false',
}, {
  productid: 'wTQgHI5CcJvhAGZvqfM2',
  brand: 'Sexbomb',
  name: 'Quake Overload',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['blue', 'yellow'],
  price: 80,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/23C4EF18-BAD6-4878-8496-7F7428E9B7B3.png?alt=media&token=dbf56cc8-7e5a-4ec2-b7de-2e1305393380',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/23C4EF18-BAD6-4878-8496-7F7428E9B7B3.png?alt=media&token=dbf56cc8-7e5a-4ec2-b7de-2e1305393380',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}, {
  productid: 'ye96P6TXD1zfdP6G8QzS',
  brand: 'Sexbomb',
  name: 'Tiktilaok Manok',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
  size: ['24', '36', '48'],
  colors: ['blue'],
  price: 78,
  quantity: 1,
  img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/128A8250-274A-4232-89B3-9B52BA91D5A0.png?alt=media&token=3012fb53-d5c6-4c22-a6e9-ce8f595a8d47',
  avalibleImgs: [
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/23C4EF18-BAD6-4878-8496-7F7428E9B7B3.png?alt=media&token=dbf56cc8-7e5a-4ec2-b7de-2e1305393380',
    }, {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2C06A8D9-3114-4754-9C0F-EFCAE0DD968F.png?alt=media&token=3834ac45-62ba-41d5-a20f-b4de9b2fd1c7',
    }
  ],
  isFeatured: 'true',
  isRecommended: 'true',
}]


router.get('/products', (req, res) => {
  res.send({
    code: 200,
    msg: 'sucessful',
    data: productList,
  })
})


// module.exports = router
export default router