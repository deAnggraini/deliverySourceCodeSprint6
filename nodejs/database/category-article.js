const categories = [
    {
        id: 100,
        title: 'Produk Untuk Nasabah',
        level: 1,
        desc: 'Daftar operasional cabang yang dikategorikan berdasarkan tugasnya.',
        sort: 0,
        parent: 0,
        icon: '/menus/MicrosoftTeams-image (5).png',
        image: '/structure/MicrosoftTeams-image (5).png',
        uri: '/struktur/list/100',
        edit: true,
        listParent: [],
        hasArticle: true,
        menus: [
            {
                id: 110,
                title: 'Produk Dana',
                level: 2,
                sort: 0,
                parent: 100,
                menus: [],
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                image: '/articles/deposito.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/110',
                hasArticle: true,
            },
            {
                id: 120,
                title: 'Produk Investasi & Asuransi',
                level: 2,
                sort: 1,
                parent: 100,
                menus: [
                    {
                        id: 125,
                        title: 'Obligasi Negara',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 120,
                        menus: [],
                        image: '/articles/duitt.jpeg',
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }],
                        uri: '/struktur/list/125',
                    },
                    {
                        id: 126,
                        title: 'Sertifikat Berharga BI',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 120,
                        menus: [],
                        image: '/articles/welma.png',
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }],
                        uri: '/struktur/list/126',
                    }
                ],
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                image: '/articles/duitt.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/120',
                hasArticle: true,
            },
            {
                id: 130,
                title: 'Produk Digital',
                level: 2,
                sort: 2,
                parent: 100,
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                menus: [],
                image: '/articles/giro.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/130',
                hasArticle: true,
            },
            {
                id: 140,
                title: 'Produk Kerja sama',
                level: 2,
                sort: 3,
                parent: 100,
                menus: [
                    {
                        id: 141,
                        title: 'Kerja Sama Copart',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 140,
                        menus: [],
                        image: '/articles/simpanan-pelajar.jpeg',
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 140, title: 'Produk Kerja sama' }],
                        uri: '/struktur/list/141',
                        hasArticle: true,
                    },
                    {
                        id: 142,
                        title: 'Kerja Sama Merchant',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 140,
                        menus: [],
                        image: '/articles/tahapan.jpeg',
                        uri: '/struktur/list/142',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 140, title: 'Produk Kerja sama' }],
                    },
                    {
                        id: 143,
                        title: 'Kerja sama Institusi',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 140,
                        menus: [],
                        image: '/articles/deposito.jpeg',
                        uri: '/struktur/list/143',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 140, title: 'Produk Kerja sama' }],
                    },
                    {
                        id: 144,
                        title: 'Kerja sama perusahaan anak',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 140,
                        menus: [],
                        image: '/articles/tapres.jpeg',
                        uri: '/struktur/list/144',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 140, title: 'Produk Kerja sama' }],
                    },
                    {
                        id: 145,
                        title: 'Kerja sama perusahaan khusus',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 140,
                        menus: [],
                        image: '/articles/time-loan.jpeg',
                        uri: '/struktur/list/145',
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 140, title: 'Produk Kerja sama' }],
                    },
                ],
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                image: '/articles/kredit-lokal-sme.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/140',
                hasArticle: true,
            },
            {
                id: 150,
                title: 'Produk Layanan Perbankan',
                level: 2,
                sort: 4,
                parent: 100,
                menus: [
                    {
                        id: 151,
                        title: 'Perbankan Internasional',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 150,
                        menus: [],
                        image: '/articles/time-loan.jpeg',
                        uri: '/struktur/list/150',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 150, title: 'Produk Layanan Perbankan' }],
                    },
                    {
                        id: 152,
                        title: 'Treasuri',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 150,
                        menus: [],
                        image: '/articles/tapres.jpeg',
                        uri: '/struktur/list/152',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 150, title: 'Produk Layanan Perbankan' }],
                    },
                    {
                        id: 153,
                        title: 'Perbankan Domesik',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 150,
                        menus: [],
                        image: '/articles/duitt.jpeg',
                        uri: '/struktur/list/153',
                        hasArticle: true,
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 120, title: 'Produk Investasi & Asuransi' }, { id: 150, title: 'Produk Layanan Perbankan' }],
                    },
                ],
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                image: '/articles/simpanan-pelajar.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/150',
                hasArticle: true,
            },
            {
                id: 160,
                title: 'Produk Kartu Kredit',
                level: 2,
                sort: 5,
                parent: 100,
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                menus: [],
                image: '/articles/tahapan.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/160',
                hasArticle: true,
            },
            {
                id: 170,
                title: 'Produk Kredit Konsumtif',
                level: 2,
                sort: 6,
                parent: 100,
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                menus: [],
                image: '/articles/tapres.jpeg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                uri: '/struktur/list/170',
                hasArticle: true,
            },
            {
                id: 180,
                title: 'Produk Kredit Produktif',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 7,
                parent: 100,
                menus: [
                    {
                        id: 181,
                        title: 'SME',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 180,
                        uri: '/struktur/list/181',
                        image: '/articles/tahapan-xpresi.jpeg',
                        menus: [],
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 180, title: 'Produk Kredit Produktif' }],
                    },
                    {
                        id: 182,
                        title: 'Komersial',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 180,
                        uri: '/struktur/list/182',
                        image: '/articles/tahapan-xpresi.jpeg',
                        menus: [],
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 180, title: 'Produk Kredit Produktif' }],
                    },
                    {
                        id: 183,
                        title: 'Korporasi',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        parent: 180,
                        uri: '/struktur/list/183',
                        image: '/articles/tahapan-xpresi.jpeg',
                        menus: [],
                        listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }, { id: 180, title: 'Produk Kredit Produktif' }],
                    },
                ],
                image: '/articles/tahapan-xpresi.jpeg',
                listParent: [{ id: 100, title: 'Produk Untuk Nasabah' }],
                uri: '/struktur/list/180',
                hasArticle: true,
            },
        ],
    },
    {
        id: 200,
        title: 'Aktivitas Cabang',
        level: 1,
        desc: 'Produk BCA yang digunakan langsung oleh nasabah seperti tabungan e-banking dll.',
        sort: 1,
        parent: 0,
        hasArticle: true,
        menus: [
            {
                id: 210,
                title: 'Pengetahuan Perbankan',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 0,
                parent: 200,
                listParent: [{ id: 200, title: 'Aktivitas Cabang' }],
                uri: '/struktur/list/210',
                image: 'articles/duitt.jpeg',
                hasArticle: true,
            },
            {
                id: 220,
                title: 'Layanan Khusus di Cabang',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 1,
                parent: 200,
                listParent: [{ id: 200, title: 'Aktivitas Cabang' }],
                uri: '/struktur/list/220',
                image: 'articles/duitt.jpeg',
                hasArticle: true,
            },
            {
                id: 230,
                title: 'Pelaku cabang',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 2,
                parent: 200,
                listParent: [{ id: 200, title: 'Aktivitas Cabang' }],
                image: 'articles/duitt.jpeg',
                uri: '/struktur/list/230',
                hasArticle: true,
                menus: [
                    {
                        id: 231,
                        title: 'CS',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        sort: 1,
                        parent: 230,
                        hasArticle: true,
                        menus: [
                            {
                                id: 239,
                                title: 'Pembukaan rekening',
                                level: 4,
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                                sort: 1,
                                parent: 231,
                                listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }, { id: 231, title: 'CS' }],
                                image: 'articles/duitt.jpeg',
                                uri: '/struktur/list/239',
                                hasArticle: false,
                            },
                            {
                                id: 238,
                                title: 'Perubahan Data',
                                level: 4,
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                                sort: 1,
                                parent: 231,
                                listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }, { id: 231, title: 'CS' }],
                                image: 'articles/duitt.jpeg',
                                uri: '/struktur/list/238',
                                hasArticle: true,
                            },
                        ],
                        listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }],
                        image: 'articles/duitt.jpeg',
                        uri: '/struktur/list/231',
                        hasArticle: true,
                    },
                    {
                        id: 232,
                        title: 'Teller',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        sort: 1,
                        parent: 230,
                        listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }],
                        image: 'articles/duitt.jpeg',
                        uri: '/struktur/list/232',
                        hasArticle: true,
                    },
                    {
                        id: 233,
                        title: 'AO SME',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        sort: 1,
                        parent: 230,
                        listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }],
                        image: 'articles/duitt.jpeg',
                        uri: '/struktur/list/233',
                        hasArticle: false,
                    },
                    {
                        id: 234,
                        title: 'AO Komersial',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        sort: 1,
                        parent: 230,
                        listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }],
                        image: 'articles/duitt.jpeg',
                        uri: '/struktur/list/234',
                        hasArticle: false,
                    },
                    {
                        id: 235,
                        title: 'RO',
                        level: 3,
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                        sort: 1,
                        parent: 230,
                        listParent: [{ id: 200, title: 'Aktivitas Cabang' }, { id: 230, title: 'Pelaku cabang' }],
                        image: 'articles/duitt.jpeg',
                        uri: '/struktur/list/235',
                        hasArticle: false,
                    },
                ]
            },
            {
                id: 240,
                title: 'Aktivitas Harian di Cabang',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 3,
                parent: 200,
                listParent: [{ id: 200, title: 'Aktivitas Cabang' }],
                image: 'articles/duitt.jpeg',
                uri: '/struktur/list/240',
            },
            {
                id: 250,
                title: 'Pengelolaan nasabah',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 4,
                parent: 200,
                listParent: [{ id: 200, title: 'Aktivitas Cabang' }],
                image: 'articles/duitt.jpeg',
                uri: '/struktur/list/250',
            },
        ],
        icon: '/menus/bank.svg',
        image: '/structure/200.svg',
        uri: '/struktur/list/200',
        edit: true,
        listParent: [],
    },
    {
        id: 1,
        title: 'Aplikasi / Mesin',
        level: 1,
        desc: 'Daftar operasional cabang yang dikategorikan berdasarkan tugasnya.',
        sort: 2,
        parent: 0,
        menus: [
            {
                id: 2,
                title: 'Pendukung Transaksi Umum',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 0,
                parent: 1,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                image: 'articles/duitt.jpeg',
                uri: '/struktur/list/2',
            },
            {
                id: 3,
                title: 'Pendukung Transaksi Internasional',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 1,
                parent: 1,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                uri: '/struktur/list/3',
                image: 'articles/duitt.jpeg'
            },
            {
                id: 330,
                title: 'Pendukung Transaksi Kredit',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                parent: 1,
                sort: 2,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                uri: '/struktur/list/330',
                image: 'articles/duitt.jpeg'
            },
            {
                id: 340,
                title: 'Internal BCA',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                parent: 1,
                sort: 3,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                uri: '/struktur/list/340',
                image: 'articles/duitt.jpeg'
            },
            {
                id: 350,
                title: 'Regulator',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 4,
                parent: 1,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                uri: '/struktur/list/350',
                image: 'articles/duitt.jpeg'
            },
            {
                id: 360,
                title: 'Pendukung Operasional ',
                level: 2,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore.',
                sort: 5,
                parent: 1,
                menus: [],
                listParent: [{ id: 1, title: 'Aplikasi / Mesin' }],
                uri: '/struktur/list/360',
                image: 'articles/duitt.jpeg'
            },
        ],
        icon: '/menus/card_machine.svg',
        image: '/structure/300.svg',
        uri: '/struktur/list/1',
        edit: true,
        listParent: [],
    }
];

module.exports = categories;
