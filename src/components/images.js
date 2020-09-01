const transformToUrl = url => 'https://drive.google.com/uc?id=' + url.split("/")[5];

const images = {
    DrewUpperHalfFromEngagementShoot: 'https://drive.google.com/uc?id=1ff0sOmv2hTqsOluyOnPrTXrByni-KuD5',
    BBellyOutside: 'https://drive.google.com/uc?id=1U3eAPI-iNtGXFMFrIVf_lE8gJH624drP',
    BInRiverPregnant: transformToUrl('https://drive.google.com/file/d/1C8lgupATZeA8fuEhEIiUWekFG5lcMUk0/view?usp=sharing'),
    JimWithLucySleep: transformToUrl('https://drive.google.com/file/d/1uq0JrKQh_YddApPfPYZ0kq9E-awGc6F9/view?usp=sharing'),
    InZanzibarAgainstTheWall: transformToUrl("https://drive.google.com/file/d/13cUJWeOsY_894WhqzOc02rBkWKanFeH0/view?usp=sharing"),
    CannonBeachAndPreggo: transformToUrl('https://drive.google.com/file/d/1n8a1mokNTWjl6WMErYKOKuBB16ARfU2p/view?usp=sharing'),
    WeddingWalkingOnRocks: transformToUrl('https://drive.google.com/file/d/1c8UELH2cwH4eDTqm9TcAPMWxmX2X3cx2/view?usp=sharing')
};

export default images;