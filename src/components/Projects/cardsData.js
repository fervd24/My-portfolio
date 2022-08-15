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
        ]
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
        ]
    },
    {
        id: 3,
        title: "Phonebook",
        desc: "A phonebook app with a client and server side created in Reactjs, nodejs-Express and MongoDB that manage the user sign up - sign in as well as the CRUD of the contacts.",
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
        ]
    }
];

export default cardsData;