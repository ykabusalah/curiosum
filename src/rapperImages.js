const rapperImages = {
    "Common": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Common_-_Ilosaarirock_2008.jpg",
    "Lil Baby": "https://www.iheartradio.ca/image/policy:1.13039497:1595416784/baby.jpg?f=default&$p$f=8f96334",
    "Nav": "https://www.rollingstone.com/wp-content/uploads/2018/06/nav-starboy-portrait-opener-for-the-weeknd-3c82f753-e2a3-413a-9f4c-998fb3ee9839.jpg",
    "Tory Lanez": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revolt.tv%2F2019%2F8%2F4%2F20839274%2Ftory-lanez-charges-75-000-for-a-feature&psig=AOvVaw2r3jWSb7TGxKeCCV699ZNs&ust=1597678403854000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi7qoCGoOsCFQAAAAAdAAAAABAD",
    "Vince Staples": "https://www.rapbasement.com/wp-content/uploads/2015/12/vince-staples-meredith-truax.jpg",
    "Nipsey Hussle": "https://wehco.media.clients.ellingtoncms.com/img/photos/2019/04/01/resized_250499-4a-nipsey-hussle-0402_19-26163_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
    "Nas": "https://www.rap-up.com/app/uploads/2020/08/nas-glasses.jpg",
    "Gunna": "https://www.interviewmagazine.com/wp-content/uploads/2019/02/IMG_3098-2.jpg",
    "Jaden Smith": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rollingstone.com%2Fmusic%2Fmusic-news%2Fjaden-smith-back-on-my-shit-migos-and-bon-iver-729160%2F&psig=AOvVaw0sESFK5Wt4WU5leiuxuRju&ust=1597678611322000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj-ieOGoOsCFQAAAAAdAAAAABAD",

    "Young Thug": "https://storage.googleapis.com/afs-prod/media/media:efcf89e21f1145a3bb730c87c1ba81b7/800.jpeg",
    "Playboi Carti": "https://audiblwav.com/wp-content/uploads/2019/03/playboi-carti.jpg",
    "Logic": "https://www.nme.com/wp-content/uploads/2020/07/Logic-Press-Shot.jpg",
    "Travis Scott": "https://snworksceo.imgix.net/dtc/adb4e6d4-b9d2-431a-9f19-8e20c9ee8e37.sized-1000x1000.jpg?w=1000",
    "Tupac": "https://cdn.britannica.com/02/162002-050-02512608/Tupac-Shakur-1993.jpg",
    "J Cole":
        "https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg",
    "Earl Sweatshirt": "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:684152?height=506&width=900&format=jpg&quality=.7",
    "Frank Ocean": "https://thatgrapejuice.net/wp-content/uploads/2014/02/frank-ocean-that-grape-juice-she-is-diva-that-grape-juice-tv.jpg",

    "Chance the Rapper": "https://m.media-amazon.com/images/M/MV5BMjI4MzgxNjExMl5BMl5BanBnXkFtZTgwMjI0MjUxNDM@._V1_.jpg",
    "Tyler the Creator": "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200127063956-tyler-the-creator-grammy.jpg",
    "Trippie Redd": "https://www.rollingstone.com/wp-content/uploads/2019/12/trippie-redd-charts-2.jpg",
    "MF Doom": "https://ukhiphopblogcouk.files.wordpress.com/2019/02/img_20190202_234413.jpg?w=570",
    "Amine": "https://static01.nyt.com/images/2017/07/30/arts/30AMINE1/30AMINE1-superJumbo.jpg",
    "Mac Miller": "https://s.france24.com/media/display/033d32aa-f9ae-11e8-b8c6-005056a964fe/w:1280/p:16x9/mac_miller-.webp",
    "Asap Rocky": "https://c.ndtvimg.com/2019-07/jnkiuvl8_asaprocky650_625x300_05_July_19.jpg",

    "Lil Dicky": "https://www.heyalma.com/wp-content/uploads/2020/03/lil-dicky.jpg",
    "Lil Pump": "https://townsquare.media/site/812/files/2019/07/lil-pump-miami-mansion.jpg?w=980&q=75",
    "Pop Smoke": "https://cdn.cnn.com/cnnnext/dam/assets/200219160653-03-pop-smoke-vertical-exlarge-169.jpg",
    "Quavo": "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/04/3.-IMG_6165-1024x683.jpg",
    "2 Chainz": "https://images.rapgenius.com/bgpk695h69vj2plfsy05p092e.990x990x1.jpg",
    "Lil Xan": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F21%2Flil-xan.jpg&q=85",

    "Kodak Black": "https://i.guim.co.uk/img/media/64fbea02f96bf191d477a71131ae6d7f716cd07b/0_22_3000_1800/master/3000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fb12c077b9c10f835405cd3cb71335eb",
    "Big L": "https://www.villagevoice.com/wp-content/uploads/2010/11/5640805.0.jpg",
    "Meg the Stallion": "https://static.billboard.com/files/media/megan-thee-stallion-press-photo-2018-cr-DHinez-billboard-1548-768x433.jpg",
    "Nicki Minaj": "https://thesource.com/wp-content/uploads/2018/04/Nicki-Minaj.jpg",
    "Lil Uzi Vert": "https://www.rap-trends.com/wp-content/uploads/2017/03/lil-uzi-vert.jpg",

    "DaBaby": "https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg",
    "Kanye West": "https://assets.capitalxtra.com/2017/21/kanye-west-ralph-lauren---front-row---mercedes-benz-fashion-week-fall-2015-1495461234-hero-wide-v4-1.jpg",
    "Future": "https://img.srgcdn.com/e//bWlPcXpLdFV6RVVsMW1vUlo5blMucG5n.jpg",
    "Drake": "https://i.pinimg.com/originals/b7/b2/67/b7b26734f61ed6e46c7bdee7a72179af.jpg",

    "Biggie": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0ODUwMTMwODA4MjE4NzE5/rapper-notorious-big-aka-biggie-smalls-aka-chris-wallace-rolls-a-cigar-outside-his-mothers-house-in-brooklyn-photo-by-clarence-davis_ny-daily-news-archive-via-getty-images.jpg",
    "50 Cent": "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/02/50_cent.jpg",
    "Lil Wayne": "https://www.rap-up.com/app/uploads/2020/01/lil-wayne-atl.jpg",

    "Kendrick Lamar": "",
    "Ab-Soul": ""
};

export default rapperImages;
