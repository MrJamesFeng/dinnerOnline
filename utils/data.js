var goods = [
  {
    id: 1,
    name: '果盘3',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1014,
    price: 120
  },
  {
    id: 2,
    name: '龙舌兰',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1029,
    price: 100
  },
  {
    id: 3,
    name: '方便面',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1030,
    price: 5
  },
  {
    id: 4,
    name: '粉丝',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1059,
    price: 5
  },
  {
    id: 5,
    name: '果盘1',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1029,
    price: 130
  },
  {
    id: 6,
    name: '果盘2',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 1064,
    price: 150
  },
  {
    id: 7,
    name: '锐澳',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 814,
    price: 200
  },
  {
    id: 8,
    name: '尊尼获加',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 124,
    price: 220
  },
  {
    id: 9,
    name: '芝士华',
    pic: 'http://img1.gtimg.com/health/pics/hv1/138/79/2068/134491983.jpg',
    sold: 102,
    price: 300
  }
]
var goodsList = [
  {
    goodItems: [1,2,3,4,5],
    id: 'hot',
    classifyName: '热销'
  },
  {
    goodItems:[1,3],
    id: 'new',
    classifyName: '小吃'
  },
  {
    goodItems:[1,6,5],
    id: 'vegetable',
    classifyName: '果盘',
    test:[5,4,3,2]
    
  },
  {
    goodItems:[1,7,8],
    id: 'mushroom',
    classifyName: '鸡尾酒'
  },
  {
    goodItems:[3,4],
    id: 'food',
    classifyName: '主食'
  }
]

module.exports = {
  goods,
  goodsList,
}