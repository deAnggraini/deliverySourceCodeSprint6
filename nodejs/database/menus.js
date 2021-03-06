const menus_top = [
    {
        id: 10001,
        title: 'Home PAKAR',
        level: 1,
        desc: '',
        sort: 1,
        parent: 0,
        menus: [],
        icon: '/menus/home.svg',
        image: '',
        uri: '/homepage',
        edit: false,
    },
    {
        id: 10002,
        title: 'Kembali ke myBCAportal',
        level: 1,
        desc: '',
        sort: 2,
        parent: 0,
        menus: [],
        icon: '/menus/send_to_back.svg',
        image: '',
        uri: 'http://klikbca.co.id',
        edit: false,
    },
    {
        id: 10003,
        title: 'Biaya dan Wewenang',
        level: 1,
        desc: '',
        sort: 3,
        parent: 0,
        menus: [
            {
                id: 10013,
                title: 'Biaya dan Wewenang 1',
                level: 2,
                desc: '',
                sort: 1,
                parent: 10003,
                menus: [],
                icon: '/menus/content.svg',
                image: '',
                uri: '/pakar-info',
                edit: false,
            },
            {
                id: 10023,
                title: 'Biaya dan Wewenang 2',
                level: 2,
                desc: '',
                sort: 2,
                parent: 10003,
                menus: [],
                icon: '/menus/content.svg',
                image: '',
                uri: '/pakar-info',
                edit: false,
            }
        ],
        icon: '/menus/content.svg',
        image: '',
        uri: '/pakar-info',
        edit: false,
    },
    {
        id: 10004,
        title: 'PAKAR Info',
        level: 1,
        desc: '',
        sort: 4,
        parent: 0,
        menus: [],
        icon: '/menus/info.svg',
        image: '',
        uri: '/pakar-info',
        edit: false,
    },
    {
        id: 10005,
        title: 'Contents',
        level: 1,
        desc: '',
        sort: 5,
        parent: 0,
        menus: [],
        icon: '/menus/content.svg',
        image: '',
        uri: '/user/contents',
        edit: false,
    },
    {
        id: 10006,
        title: 'My Pages',
        level: 1,
        desc: '',
        sort: 6,
        parent: 0,
        menus: [],
        icon: '/menus/mypage.svg',
        image: '',
        uri: '/user/mypages',
        edit: false,
    }
];

const menus_bottom = [
    {
        id: 11001,
        title: 'PAKAR PDF',
        level: 1,
        desc: '',
        sort: 100,
        parent: 0,
        menus: [],
        icon: '/menus/pdf.svg',
        image: '',
        uri: '/pakar-pdf',
        edit: false,
    },
    {
        id: 11002,
        title: 'FAQ',
        level: 1,
        desc: '',
        sort: 100,
        parent: 0,
        menus: [
            {
                id: 11003,
                title: 'FAQ Operasional',
                level: 2,
                desc: '',
                sort: 100,
                parent: 0,
                menus: [],
                icon: '/menus/faq.svg',
                image: '',
                uri: 'http://mybcaportal/sites/op/Lists/FAQ_Operasional/AllItems.aspx',
                edit: false,
            },
            {
                id: 11004,
                title: 'FAQ Kredit',
                level: 2,
                desc: '',
                sort: 100,
                parent: 0,
                menus: [],
                icon: '/menus/faq.svg',
                image: '',
                uri: 'http://mybcaportal/sites/op/Lists/FAQ_Kredit/AllItems.aspx',
                edit: false,
            },
        ],
        icon: '/menus/faq.svg',
        image: '',
        uri: '/faq',
        edit: false,
    },
]

module.exports.menus_bottom = menus_bottom;
module.exports.menus_top = menus_top;