const clubs = {
    6358: {
        id: 6358,
        name: "San Luis",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/6358.png"
    },
    6578: {
        id: 6578,
        name: "Cruz Azul",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/6578.png"
    },
    7849: {
        id: 7849,
        name: "Rayados",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/7849.png"
    },
    6618: {
        id: 6618,
        name: "Toluca",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/6618.png"
    },
    1841: {
        id: 1841,
        name: "León",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/1841.png"
    },
    7848: {
        id: 7848,
        name: "Pachuca",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/7848.png"
    },
    6576: {
        id: 6576,
        name: "CF America",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/6576.png"
    },
    8561: {
        id: 8561,
        name: "Tigres",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/8561.png"
    },
    162418: {
        id: 162418,
        name: "Tijuana",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/162418.png"
    },
    7857: {
        id: 7857,
        name: "Santos Laguna",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/7857.png"
    },
    1170234: {
        id: 1170234,
        name: "Mazatlan FC",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/1170234.png"
    },
    1842: {
        id: 1842,
        name: "Necaxa",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/1842.png"
    },
    1946: {
        id: 1946,
        name: "Pumas",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/1946.png"
    },
    649424: {
        id: 649424,
        name: "FC Juarez",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/649424.png"
    },
    6577: {
        id: 6577,
        name: "Atlas",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/6577.png"
    },
    7807: {
        id: 7807,
        name: "Chivas",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/7807.png"
    },
    7847: {
        id: 7847,
        name: "Puebla",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/7847.png"
    },
    1943: {
        id: 1943,
        name: "Queretaro FC",
        logo: "https://images.fotmob.com/image_resources/logo/teamlogo/1943.png"
    }
};

const nationalities = {
    8204: {
        id: 8204,
        name: "Italia",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/8204.png"
    },
    5790: {
        id: 5790,
        name: "Gales",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/5790.png"
    },
    5796: {
        id: 5796,
        name: "Uruguay",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/5796.png"
    },
    6710: {
        id: 6710,
        name: "México",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/6710.png"
    },
    6713: {
        id: 6713,
        name: "USA",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/6713.png"
    },
    8258: {
        id: 8258,
        name: "Colombia",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/8258.png"
    },
    6706: {
        id: 6706,
        name: "Argentina",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/6706.png"
    },
    8361: {
        id: 8361,
        name: "Portugal",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/8361.png"
    },
    10255: {
        id: 10255,
        name: "Egipto",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/10255.png"
    },
    6723: {
        id: 6723,
        name: "Francia",
        flag: "https://images.fotmob.com/image_resources/logo/teamlogo/6723.png"
    }
};

const players = {
    203739: {
        id: 203739,
        name: "J. Pedro",
        fullName: "Pedro",
        position: "Delantero",
        goals: 7,
        assists: 3,
        age: 31,
        marketValue: "3.5 MDE",
        rating: "8.9",
        clubId: 6358,
        nationalityId: 8204,
        photo: "https://images.fotmob.com/image_resources/playerimages/203739.png"
    },
    357080: {
        id: 357080,
        name: "Ocampos",
        fullName: "Lucas Ocampos",
        position: "Mediocampista ofensivo",
        goals: 5,
        assists: 2,
        age: 29,
        marketValue: "7 MDE",
        rating: "9.1",
        clubId: 7849,
        nationalityId: 6706,
        photo: "https://images.fotmob.com/image_resources/playerimages/357080.png"
    },
    215428: {
        id: 215428,
        name: "Sepúlveda",
        fullName: "Ángel Sepúlveda",
        position: "Delantero",
        goals: 6,
        assists: 1,
        age: 32,
        marketValue: "2.2 MDE",
        rating: "8.4",
        clubId: 6578,
        nationalityId: 6710,
        photo: "https://images.fotmob.com/image_resources/playerimages/215428.png"
    }
};

function getPlayerFullData(playerId) {
    const player = players[playerId];
    if (!player) {
        return null;
    }

    const club = clubs[player.clubId];
    const nationality = nationalities[player.nationalityId];

    return {
        ...player,
        club: club ? { id: club.id, name: club.name, logo: club.logo } : null,
        nationality: nationality ? { id: nationality.id, name: nationality.name, flag: nationality.flag } : null
    };
}


