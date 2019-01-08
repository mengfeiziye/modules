module.exports = {
  'header': {
    'list': [
      {
        'title': '工业整机',
        'icon': true,
        'children': {
          'isHv': 0,
          'list': [
            {
              'name': 'ZT-3V',
              'imgUrl': 'static/img/3v.png',
              'href': '/nzt3v'
            },
            {
              'name': 'ZT-30V',
              'imgUrl': 'static/img/30v.png',
              'href': '/zt30v'
            }
          ]
        }
      },
      {
        'title': '航电系统',
        'icon': true,
        'children': {
          'isHv': 0,
          'list': [
            {
              'name': '北极星系列自驾仪',
              'imgUrl': 'static/img/Polaris.png',
              'href': '/polaris'
            },
            {
              'name': '数图一体数据链',
              'imgUrl': 'static/img/ZT3014.png',
              'href': '/et30'
            },
            {
              'name': '智能视觉导航模块',
              'imgUrl': 'static/img/ZTV10.png',
              'href': '/ztv10'
            },
            {
              'name': '吊舱',
              'imgUrl': 'static/img/P2030.png',
              'href': '/p2030'
            },
            {
              'name': '云台',
              'imgUrl': 'static/img/yuntai_logo.png',
              'href': '/yuntai'
            }
          ]
        }
      },
      {
        'title': '解决方案',
        'icon': false,
        'children': {
          'isHv': 0,
          'list': [
            {
              'name': '安防',
              'href': '/safePro'
            },
            {
              'name': '测绘',
              'href': '/survey'
            },
            {
              'name': '巡检',
              'href': '/poll'
            },
            {
              'name': '物流',
              'href': '/logistics'
            }
          ]
        }
      },
      {
        'title': '编队飞行',
        'router': 1,
        'href': '/formation'
      },
      {
        'title': 'DOBBY',
        'router': 1,
        'href': '/dobby'
      },
      {
        'title': '售后服务',
        'icon': false,
        'children': {
          'isHv': 0,
          'list': [
            {
              'name': 'DOBBY售后',
              'href': '/dobbyAfterSale'
            },
            {
              'name': '行业售后',
              'href': '/industryAfterSale'
            }
          ]
        }
      },
      {
        'title': '零度社区',
        'href': 'http://bbs.zerotech.com/portal.php'
      }
    ]
  },
  'footer': [
    {
      'title': '服务与支持',
      'children': [
        {
          'name': '常见问题',
          'href': '/commonProblem'
        },
        {
          'name': '售后服务',
          'href': '/afterSale'
        }
      ]
    },
    {
      'title': '新闻中心',
      'children': [
        {
          'name': '媒体报道',
          'href': '/mediaReport'
        },
        {
          'name': '公司动态',
          'href': '/companyDynamic'
        }
      ]
    }
  ]
};
