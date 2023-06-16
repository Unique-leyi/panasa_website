
export const NAV_LINKS = [
    {
        path: '/',
        display: 'Home'
    },

    {
        path: '#',
        display: 'About',
        submenu: true,
        children: [
            {
                path: '/about',
                display: 'About',  
            },


            {
                path: '/associations',
                display: 'Associations',   
            },


            {
                path: '/team',
                display: 'Team',   
            },

            {
                path: '/sponsorsandpartners',
                display: 'Sponsors and Partners',   
            },
        ]
    },

    {
        path: '/ratings',
        display: 'Ratings'
    },

    {
        path: '#news',
        display: 'News',
        submenu: true,
        children: [
            {
                path: '/news',
                display: 'News',  
            },


            {
                path: '/tournaments/',
                display: "President's Cup",   
            },


            {
                path: '/tournaments/aysc',
                display: 'African Youth Scrabble Cup',   
            }


        ]
    },
    
    {
        path: '/resources',
        display: 'Resources'
    },

    {
        path: '/gallery',
        display: 'Gallery'
    },

    {
        path: '/contact',
        display: 'Contact Us'
    }
];