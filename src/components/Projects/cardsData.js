import {
    faHtml5,
    faCss3,
    faJs,
} from "@fortawesome/free-brands-svg-icons"

const cardsData = [
    {
        id: 1,
        title: "Portfolio",
        desc: "Portfolio created with react JS. Implementing toggle button between light and dark theme.",
        imgs: [
            {
                iconName: faJs,
                className: "projIconJs"
            },
            {
                iconName: faHtml5,
                className: "projIconHtml"
            },
            {
                iconName: faCss3,
                className: "projIconCss"
            }
        ],
        link: "https://github.com/fervd24/My-portfolio"
    },
    {
        id: 2,
        title: "Mexico demography search engine.",
        desc: "A data searcher that can show demograpghy data with states and cities filter.",
        imgs: [
            {
                iconName: faJs,
                className: "projIconJs"
            },
            {
                iconName: faHtml5,
                className: "projIconHtml"
            },
            {
                iconName: faCss3,
                className: "projIconCss"
            }
        ],
        link: "https://github.com/fervd24/Mexico-Demography-Searchengine"
    },
    {
        id: 3,
        title: "Phonebook app",
        desc: "A phonebook app with a frontend created in Reactjs and a REST API created in NodeJS-Express that manage the log in and sign up of the users, MongoDB is used to store users data.",
        imgs: [
            {
                iconName: faJs,
                className: "projIconJs"
            },
            {
                iconName: faHtml5,
                className: "projIconHtml"
            },
            {
                iconName: faCss3,
                className: "projIconCss"
            }
        ],
        link: "https://github.com/fervd24/Phonebook-app"
    }
];

export default cardsData;