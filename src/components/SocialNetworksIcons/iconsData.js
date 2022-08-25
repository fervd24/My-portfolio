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
        ref: "https://drive.google.com/file/d/1sd1jN49Td6RKV9wE8Et3kZ6n7MYXbmXC/view?usp=sharing",
        title: "Resume (CV)"
    },
];

export default iconsData;