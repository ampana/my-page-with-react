import { faDice,faTv,faUtensils } from "@fortawesome/free-solid-svg-icons";

export default [
    {
        id:1,
        icon: faDice,
        interest: "Board games",
        moreDetails: "I love hanging with my friends and playing board games.",
        nameOfList: "My games",
        className: "bg-light box",
        classNameForDropdown: "btn btn-dark",
        entries: [
            {
                title: "Rise to Nobility",
                website: "https://goblingames.com.mk/product/rise-to-nobility-%d0%bc%d0%b0%d0%ba%d0%b5%d0%b4%d0%be%d0%bd%d1%81%d0%ba%d0%b0-%d0%b8%d0%b3%d1%80%d0%b0/",
            },
            {
                title: "Magic: The Gathering",
                website: "https://magic.wizards.com/en/mtgarena",
            },
            {
                title: "Bloodborne",
                website: "https://www.youtube.com/watch?v=iz2AoHZuZJU"
            }  
        ]
    },
    {
        id:2,
        icon: faTv,
        interest: "Netflix", 
        moreDetails: "Just as many others my age, I enjoy watching Netflix.",
        nameOfList: "My shows",
        className: "bg-dark box",
        classNameForDropdown: "btn btn-light",
        entries: [
            {
                title: "The Witcher",
                website: "https://www.netflix.com/mk/title/80189685",
            },
            {
                title: "Dark",
                website: "https://www.netflix.com/mk/title/80100172",
            },
            {
                title: "Friends",
                website: "https://www.netflix.com/mk/title/70153404"
            }
        ]
    },
    {
        id:3,
        icon: faUtensils,
        interest: "Cooking", 
        moreDetails: "I love spending my spare time in the kitchen cooking.",
        nameOfList: "My recepies",
        className: "bg-light box",
        classNameForDropdown: "btn btn-dark",
        entries: [
            {
                title: "Parisian cake",
                website: "https://www.youtube.com/watch?v=UwNcxVpC4uI",
            },
            {
                title: "American pancakes",
                website: "https://www.youtube.com/watch?v=wiWB46xiIwU",
            },
            {
                title: "Chicken in  white sauce",
                website: "https://moirecepti.mk/post/%D0%BF%D0%B8%D0%BB%D0%B5%D1%88%D0%BA%D0%B8-%D0%B1%D0%B5%D0%BB-%D1%81%D0%BE%D1%81"
            }
        ]
    }
    ]
