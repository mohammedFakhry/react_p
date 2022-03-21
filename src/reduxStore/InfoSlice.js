import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    about: {
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        phone: "+249 123 456 7899",
        address: "Sudan, Atbara",
        webSite: "www.JohnDoe.com",
    },

    works: [
        {
            "id": 1,
            "icon_src": "las la-toolbox",
            "title": "PROJECTS",
            "count": "+500"
        },
        {
            "id": 2,
            "icon_src": "las la-stopwatch",
            "title": "HOURS",
            "count": "+60"
        },
        {
            "id": 3,
            "icon_src": "lar la-building",
            "title": "OFFICS",
            "count": "+200"
        },
        {
            "id": 4,
            "icon_src": "las la-users",
            "title": "CLIENTS",
            "count": "+300"
        }
    ],

    Service: [
        {
            image: "/imges/UxUi Design.png",
            title: "Ux/Ui Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
        {
            image: "/imges/Responsive.png",
            title: "Responsive",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
        {
            image: "/imges/Development Web.png",
            title: "Development Web",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
        {
            image: "/imges/Advansed Option.png",
            title: "Advansed Option",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
        {
            image: "/imges/Unique Design.png",
            title: "Unique Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
        {
            image: "/imges/Mobile Apps.png",
            title: "Mobile Apps",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi obcaecati odit enim non eaque! Praesentium iste minus officia ullam adipisci.."
        },
    ],

    Profile_skills: [
        {
            skillsName: "HTML",
            skillsDegree : "90"
        },
        {
            skillsName: "CSS",
            skillsDegree: "80"
        },
        {
            skillsName: "Java Script",
            skillsDegree: "70"
        },
        {
            skillsName: "Bootstrap",
            skillsDegree: "85"
        },
        {
            skillsName: "PHP",
            skillsDegree: "55"
        },
        {
            skillsName: "Wordpress",
            skillsDegree: "60"
        }
    ],

    SocialMedia: [
        {
            icon: "la-facebook fa-fw",
            title: "facebook",
        },
        {
            icon: "la-pinterest fa-fw",
            title: "pinterest",
        },
        {
            icon: "la-whatsapp fa-fw",
            title: "whatsapp",
        },
        {
            icon: "la-twitter fa-fw",
            title: "twitter",
        },
        {
            icon: "la-instagram fa-fw",
            title: "instagram",
        },
        {
            icon: "la-linkedin fa-fw",
            title: "linkedin",
        },
    ],

    portfolio: [
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-css3-alt", "lab la-font-awesome", "lab la-react", "lab la-node-js"],
            image: "/imges/portfolio1.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-css3-alt", "lab la-wordpress"],
            image: "/imges/portfolio2.jpg"
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-css3-alt", "lab la-bootstrap", "lab la-react"],
            image: "/imges/portfolio8.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-css3-alt", "lab la-font-awesome", "lab la-vuejs", "lab la-node-js"],
            image: "/imges/portfolio4.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-sass", "lab la-font-awesome", "lab la-angular"],
            image: "/imges/portfolio5.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-css3-alt", "lab la-vuejs"],
            image: "/imges/portfolio4.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-sass", "lab la-bootstrap", "lab la-angular", "lab la-node-js"],
            image: "/imges/portfolio2.jpg",
        },
        {
            tools: ["lab la-html5", "lab la-bootstrap", "lab la-css3-alt", "lab la-bootstrap", "lab la-font-awesome", "lab la-react"],
            image: "/imges/portfolio8.jpg",
        }
    ]
}

export const InfoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = InfoSlice.actions
// export const {  } = InfoSlice.actions

export default InfoSlice.reducer