import { 
    faGithub,
    faLinkedin
 } from "@fortawesome/free-brands-svg-icons";

 import { faFileInvoice} from "@fortawesome/free-solid-svg-icons"
const iconsData = [
    {
        id: 1,
        name: faGithub,
        className: "ghContainer",
        ref: "https://github.com/fervd24",
        title: "Github"
    },  
    {
        id: 2,
        name: faLinkedin,
        className: "liContainer",
        ref: "https://www.linkedin.com/in/fernando-villalobos-davila-516a09123/",
        title: "Linked In"
    },
    {
        id: 3,
        name: faFileInvoice,
        className: "cvContainer",
        ref: "https://google.com/",
        title: "Resume (CV)"
    },
];

export default iconsData;