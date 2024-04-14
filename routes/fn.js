foo = 'https://www.gravatar.com/avatar/1a3c77049e188b4334bf7d589d438b9f?s=64&d=identicon&r=PG'

exports.s_data = {

local_areas:[
    {loc:'Simpson Bay',desc:' This popular area is home to many beautiful beachfront villas, perfect for those who want to spend their days swimming, sunbathing, and watersports. Simpson Bay also has a variety of restaurants, shops, and nightlife options.'},
    {loc:'Maho Beach:',desc:'World-famous for planes landing and taking off right over the beach, Maho Beach is another great spot for a villa vacation. There are a variety of villas to choose from, all with stunning views of the ocean and the planes'},
    {loc:'Cupecoy',desc:'Cupecoy is a more secluded area, perfect for those who want a relaxing and peaceful vacation. There are a number of luxury villas here, many with private pools and stunning views.'},
    {loc:'Terres Basses',desc:'Terres Basses is another great option for a luxurious villa vacation. This area is known for its beautiful beaches and golf courses. There are a number of high-end villas here, perfect for those who want the best of the best.'},
    {loc:'Oyster Pond',desc:'Oyster Pond is a quiet and charming area, located on the islands eastern tip. There are a number of waterfront villas here, perfect for those who want to enjoy the peace and quiet of the island. Oyster Pond is also home to a marina, making it a great spot for boaters'},

],




    pages: [
        {
            id: 'home',
            t_nav: ["", "", ""],
            cat: 'main',
            url: '/',
            pg_title: 'St Maarten Massage Best Deals,Affordable Rates and Services',
            site_title: 'St Maarten Massage @ Home Mobile Massage Available 24 Hours ',
            pg_description: `Transform your body, mind and vacation with St Maarten Massage Mobile Service. 
            Known for the best hands for massages in st maarten-SXM`,
            imgArr: [

                { src: '/images/couple_ban_web_1.webp', alt: 'couple holding hands on massage table for couple massage therapy', title: 'st maarten massage service couple massage' },
                { src: '/images/massage_1.webp', alt: 'massage in st maarten by simpson bay villas veranda', title: 'sxm massage simpson bay' },
                { src: '/images/treatment@blue-mall_sm.webp', alt: 'sxm massage table @ blue mall with ocean background ', title: 'blue mall massage sxm onsite treatment' },
                { src: '/images/villa-massage-sxm-1.webp', alt: 'two massage tables in Cay hill for Airbnb massage therapy SXM', title: 'airbnb massage st martin' },
                { src: '/images/villa_1.webp', alt: 'two massage tables in Cay hill for Airbnb massage therapy SXM', title: 'airbnb massage st martin' },
                { src: '/images/villa_2.webp', alt: 'Book your St. Maarten villa massage and unwind by the pool today!', title: 'airbnb massage st martin' },
                { src: '/images/couple_2.webp', alt: 'professional massage service in stint maarten', title: 'airbnb massage st martin' },

            ]
        },
        {
            id: 'about',
            t_nav: ["home", "", "about-us"],
            cat: 'main',
            url: '/about-us',
            pg_title: 'About Getting A Massage on Sint Maarten - About Us',
            site_title: 'About Getting A Massage on Sint Maarten - About Us',
            pg_description: '@SXMMassage, We bring the spa experience directly to you, offering a variety of therapeutic massages to ease tension, soothe muscles, and melt away stress',
            imgArr: [

                { src: '/images/villa_1.webp', alt: 'St. Maarten villa massage with a breathtaking pool view', title: 'Couples massage in a St. Maarten pool villa oasis' },
                { src: '/images/villa_2.webp', alt: 'Relaxing massage treatments in a St. Maarten poolside villa', title: 'treatments in a St. Maarten poolside' },
                { src: foo, alt: '', title: '' },

            ]
        },

        {
            id: 'services',
            t_nav: ["home", "", "services"],
            cat: 'main',
            url: '/menu-options',
            pg_title: 'menuPage',
            site_title: 'Massage Service - Treatment Menu ',
            pg_description: `Whether you seek deep tissue relief, Swedish relaxation, or a rejuvenating couples treatment, 
            find your perfect massage option at amazing prices.  Indulge in paradise and leave feeling refreshed!`,
            imgArr: [

                { src: foo, alt: '', title: '' },
                { src: foo, alt: '', title: '' },
                { src: foo, alt: '', title: '' },

            ]
        },
        {
            id: 'booking',
            t_nav: ["home", "menu", "booking"],
            cat: 'main',
            url: '/bookNow',
            pg_title: 'bookingPage',
            site_title: 'some_site_title',
            pg_description: `Unleash relaxation in St. Maarten!  Book your massage online & choose from deep tissue, Swedish.. 
             Melt away stress, soothe sore muscles & find zen in paradise`,
            imgArr: [

                { src: foo, alt: '', title: '' },
                { src: foo, alt: '', title: '' },
                { src: foo, alt: '', title: '' },

            ]
        }




    ],
    cats: [
        {
            id: 'couples',
            t_nav: ["home", "menu", "couples"],
            url: '/for-couples',
            pg_title: 'In-Room Couples Massage Service in Sint Maarten',
            site_title: 'In-Room Couple Massage Service in Sint Maarten',
            pg_description: `Rejuvenate your romance in St. Maarten with a blissful couples massage! Escape and
             reconnect with side-by-side massages tailored for pure relaxation.`,
            imgArr: [

                { src: '/images/couple_ban_web_1.webp', alt: '', title: '' },
                { src: foo, alt: '', title: '' },
                { src: foo, alt: '', title: '' },

            ]
        },

        {
            id: 'groups',
            t_nav: ["home", "menu", "groups"],
            url: '/group-package-deals',
            pg_title: 'St Maarten Massage Specials-Group Package Deals-Mobile Spa',
            site_title: 'SXM Massage - Group Package Deals-Mobile Spa',
            pg_description: `Unwind together in SXM with a relaxing group massage for only $89! Perfect for friends, families, or bachelorette parties. 
            Book your group massage today!`,
            imgArr: [

                { src: '/images/@Villa-Mes-Amis.webp', alt: 'multiple therapist and clients at  villa in terres basse', title: 'sxm-massage@ mes amis villa' },
                { src: '/images/group2.webp', alt: 'two massage tables with white linen at villa for mobile massage ', title: 'professional at home massage therapy ' },
                { src: '/images/group3.webp', alt: 'group of girls getting group massage at villa ', title: 'professional at home massage therapy ' },
                { src: '/images/group4.webp', alt: 'two massage tables with white linen at villa for mobile massage ', title: 'professional at home massage therapy ' },


            ]
        }

    ],

}