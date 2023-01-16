import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/blogReducer";

const BlogContext = createContext();


const initialState = {
    blog: [
        {
            id:12341,
            date: "12/12/12",
            title: "SOUNDPEATS Introduces New H1 True Wireless Earbuds in the United States",
            category:"News",
            caption: "Caption: SOUNDPEATS' new Air3 earbuds feature a 14.2 mm dynamic driver for premium sound quality that lasts up to 17.5 hours.",
            price: "Priced at $49.99, SOUNDPEATS Air3 offers superior sound quality at a reasonable price",
            textSpane: [
                "LOS ANGELES, CA - September 15, 2021 - SOUNDPEATS, a global headphone producer and an Amazon bestseller in the headphone category, announced today that it launched its Air3 earbuds on Amazon in the United States. The earbuds are now available for purchase for $49.99.",
                "SOUNDPEATS' Air3 comes in black and features a lightweight, ergonomic design that sits comfortably in your ear. The Air3 utilizes a 14.2 mm bio-cellulose driver and True Wireless Stereo (TWS) that provides premium sound quality and the flexibility to listen to music through both earbuds or individually. Each earbud is also equipped with two mics using Qualcomm® cVc™ noise cancelling technology that enables the earbud to focus on the listener's voice and block out surrounding sound. The earbuds are engineered with advanced Bluetooth technology and a long battery life, lasting up to five hours of playback per charge.",
                "“The Air3 is SOUNDPEATS' most compact and transportable product to date. These earbuds fuse a comfortable, lightweight design with cutting-edge audio features to provide a high quality, but affordable listening experience,” said Sylvia Wong, CEO of SOUNDPEATS. “SOUNDPEATS is excited to expand our product offerings to our dedicated customers by launching the Air3 in the United States.”",
                "Additional Air3 features include an IPX5 rating for water resistance, in-ear detection, and touch control capabilities. Listeners can control almost everything directly from the earbuds - play, pause, advancing tracks, volume control, and accessing smart assistants.",
                "Air3 comes with a charging case that holds up to two and a half charges, allowing the earbuds to be recharged and used for 17.5 hours. To ensure proper earbud fit, three sizes of interchangeable ear tips are included. Full technical specifications can be found below.",
                "SOUNDPEATS' Air3 earbuds are now available at https://amzn.to/3BuOkeC.",
            ],
            listItem: [
                "Technical Specifications",
                "Total Playtime: 17.5 hours (5 hours/charge, case holds 2.5 charges)",
                "Charging Case Dimension: 49.5x22.5x47.5 mm",
                "Gross Weight: 95g",
                "Supported Bluetooth Profiles: HSP, HFP, A2DP, AVRCP",
                "Supported Bluetooth Codecs: SBC, APTX, APTX-adaptive",
                "Battery Capacity: (30mAh*2) +220mAh",
                "Charging Port: Type C",
                "Noise Cancellation: CVC 8.0 Dual Mic ",
                "Control Type: Touch",
                "Earbud Charge Time: 1.5 hours",
                "Charging Case Charge Time: 1.5 hours",
                "Charging Case: USB-C Charging",
                "Water Resistant: earbuds: IPX5",
                "Bluetooth Version: 5.2",
                "Total Standby Time: 54H",
                "Frequency Response: 20-20KHz",
            ],
            about: "Started in 2010, SOUNDPEATS was founded by a group of music lovers and urban sports enthusiasts who were seeking a better way to enjoy music while living a healthy, active lifestyle. They found themselves unsatisfied with traditional wireless headphones, which were not conducive for sports and lacked sound quality. Out of the love for music and driven by the dream to start their own brand, they set out boldly to break new ground and develop headphones that help you Hear Your Imagination. In 2013, SOUNDPEATS went global with business expansion in the United States, UK, Germany, France, and Italy, shortly followed in 2015 in Japan, where it has been honored as a national bestseller and top best-product on Amazon. Since launching in Japan, SOUNDPEATS has expanded sales to over 20 different countries and more than 10 million music enthusiasts currently enjoy their products. With their comfortable fit and flawless sound quality, SOUNDPEATS earbuds are highly regarded around the globe.",
            contact: [
                "Ellen Lee",
                "ellenlee@soundpeatsaudio.com",
                "PR Specialist, SOUNDPEATS",
            ],
            image:"https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/3_400x.jpg?v=1630296836",
        },
        {
            id:12342,
            date: "12/12/12",
            title: "SOUNDPEATS Introduces New H1 True Wireless Earbuds in the United States",
            category:"Affiliate",
            caption: "Caption: SOUNDPEATS' new Air3 earbuds feature a 14.2 mm dynamic driver for premium sound quality that lasts up to 17.5 hours.",
            price: "Priced at $49.99, SOUNDPEATS Air3 offers superior sound quality at a reasonable price",
            textSpane: [
                "LOS ANGELES, CA - September 15, 2021 - SOUNDPEATS, a global headphone producer and an Amazon bestseller in the headphone category, announced today that it launched its Air3 earbuds on Amazon in the United States. The earbuds are now available for purchase for $49.99.",
                "SOUNDPEATS' Air3 comes in black and features a lightweight, ergonomic design that sits comfortably in your ear. The Air3 utilizes a 14.2 mm bio-cellulose driver and True Wireless Stereo (TWS) that provides premium sound quality and the flexibility to listen to music through both earbuds or individually. Each earbud is also equipped with two mics using Qualcomm® cVc™ noise cancelling technology that enables the earbud to focus on the listener's voice and block out surrounding sound. The earbuds are engineered with advanced Bluetooth technology and a long battery life, lasting up to five hours of playback per charge.",
                "“The Air3 is SOUNDPEATS' most compact and transportable product to date. These earbuds fuse a comfortable, lightweight design with cutting-edge audio features to provide a high quality, but affordable listening experience,” said Sylvia Wong, CEO of SOUNDPEATS. “SOUNDPEATS is excited to expand our product offerings to our dedicated customers by launching the Air3 in the United States.”",
                "Additional Air3 features include an IPX5 rating for water resistance, in-ear detection, and touch control capabilities. Listeners can control almost everything directly from the earbuds - play, pause, advancing tracks, volume control, and accessing smart assistants.",
                "Air3 comes with a charging case that holds up to two and a half charges, allowing the earbuds to be recharged and used for 17.5 hours. To ensure proper earbud fit, three sizes of interchangeable ear tips are included. Full technical specifications can be found below.",
                "SOUNDPEATS' Air3 earbuds are now available at https://amzn.to/3BuOkeC.",
            ],
            listItem: [
                "Technical Specifications",
                "Total Playtime: 17.5 hours (5 hours/charge, case holds 2.5 charges)",
                "Charging Case Dimension: 49.5x22.5x47.5 mm",
                "Gross Weight: 95g",
                "Supported Bluetooth Profiles: HSP, HFP, A2DP, AVRCP",
                "Supported Bluetooth Codecs: SBC, APTX, APTX-adaptive",
                "Battery Capacity: (30mAh*2) +220mAh",
                "Charging Port: Type C",
                "Noise Cancellation: CVC 8.0 Dual Mic ",
                "Control Type: Touch",
                "Earbud Charge Time: 1.5 hours",
                "Charging Case Charge Time: 1.5 hours",
                "Charging Case: USB-C Charging",
                "Water Resistant: earbuds: IPX5",
                "Bluetooth Version: 5.2",
                "Total Standby Time: 54H",
                "Frequency Response: 20-20KHz",
            ],
            about: "Started in 2010, SOUNDPEATS was founded by a group of music lovers and urban sports enthusiasts who were seeking a better way to enjoy music while living a healthy, active lifestyle. They found themselves unsatisfied with traditional wireless headphones, which were not conducive for sports and lacked sound quality. Out of the love for music and driven by the dream to start their own brand, they set out boldly to break new ground and develop headphones that help you Hear Your Imagination. In 2013, SOUNDPEATS went global with business expansion in the United States, UK, Germany, France, and Italy, shortly followed in 2015 in Japan, where it has been honored as a national bestseller and top best-product on Amazon. Since launching in Japan, SOUNDPEATS has expanded sales to over 20 different countries and more than 10 million music enthusiasts currently enjoy their products. With their comfortable fit and flawless sound quality, SOUNDPEATS earbuds are highly regarded around the globe.",
            contact: [
                "Ellen Lee",
                "ellenlee@soundpeatsaudio.com",
                "PR Specialist, SOUNDPEATS",
            ],
            image:"https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_16_400x.jpg?v=1654156012",
        },
        {
            id:12343,
            date: "12/12/12",
            title: "Review | SOUNDPEATS Air3 Deluxe",
            category:"Advertise",
            caption: "Caption: SOUNDPEATS' new Air3 earbuds feature a 14.2 mm dynamic driver for premium sound quality that lasts up to 17.5 hours.",
            price: "Priced at $49.99, SOUNDPEATS Air3 offers superior sound quality at a reasonable price",
            textSpane: [
                "LOS ANGELES, CA - September 15, 2021 - SOUNDPEATS, a global headphone producer and an Amazon bestseller in the headphone category, announced today that it launched its Air3 earbuds on Amazon in the United States. The earbuds are now available for purchase for $49.99.",
                "SOUNDPEATS' Air3 comes in black and features a lightweight, ergonomic design that sits comfortably in your ear. The Air3 utilizes a 14.2 mm bio-cellulose driver and True Wireless Stereo (TWS) that provides premium sound quality and the flexibility to listen to music through both earbuds or individually. Each earbud is also equipped with two mics using Qualcomm® cVc™ noise cancelling technology that enables the earbud to focus on the listener's voice and block out surrounding sound. The earbuds are engineered with advanced Bluetooth technology and a long battery life, lasting up to five hours of playback per charge.",
                "“The Air3 is SOUNDPEATS' most compact and transportable product to date. These earbuds fuse a comfortable, lightweight design with cutting-edge audio features to provide a high quality, but affordable listening experience,” said Sylvia Wong, CEO of SOUNDPEATS. “SOUNDPEATS is excited to expand our product offerings to our dedicated customers by launching the Air3 in the United States.”",
                "Additional Air3 features include an IPX5 rating for water resistance, in-ear detection, and touch control capabilities. Listeners can control almost everything directly from the earbuds - play, pause, advancing tracks, volume control, and accessing smart assistants.",
                "Air3 comes with a charging case that holds up to two and a half charges, allowing the earbuds to be recharged and used for 17.5 hours. To ensure proper earbud fit, three sizes of interchangeable ear tips are included. Full technical specifications can be found below.",
                "SOUNDPEATS' Air3 earbuds are now available at https://amzn.to/3BuOkeC.",
            ],
            listItem: [
                "Technical Specifications",
                "Total Playtime: 17.5 hours (5 hours/charge, case holds 2.5 charges)",
                "Charging Case Dimension: 49.5x22.5x47.5 mm",
                "Gross Weight: 95g",
                "Supported Bluetooth Profiles: HSP, HFP, A2DP, AVRCP",
                "Supported Bluetooth Codecs: SBC, APTX, APTX-adaptive",
                "Battery Capacity: (30mAh*2) +220mAh",
                "Charging Port: Type C",
                "Noise Cancellation: CVC 8.0 Dual Mic ",
                "Control Type: Touch",
                "Earbud Charge Time: 1.5 hours",
                "Charging Case Charge Time: 1.5 hours",
                "Charging Case: USB-C Charging",
                "Water Resistant: earbuds: IPX5",
                "Bluetooth Version: 5.2",
                "Total Standby Time: 54H",
                "Frequency Response: 20-20KHz",
            ],
            about: "Started in 2010, SOUNDPEATS was founded by a group of music lovers and urban sports enthusiasts who were seeking a better way to enjoy music while living a healthy, active lifestyle. They found themselves unsatisfied with traditional wireless headphones, which were not conducive for sports and lacked sound quality. Out of the love for music and driven by the dream to start their own brand, they set out boldly to break new ground and develop headphones that help you Hear Your Imagination. In 2013, SOUNDPEATS went global with business expansion in the United States, UK, Germany, France, and Italy, shortly followed in 2015 in Japan, where it has been honored as a national bestseller and top best-product on Amazon. Since launching in Japan, SOUNDPEATS has expanded sales to over 20 different countries and more than 10 million music enthusiasts currently enjoy their products. With their comfortable fit and flawless sound quality, SOUNDPEATS earbuds are highly regarded around the globe.",
            contact: [
                "Ellen Lee",
                "ellenlee@soundpeatsaudio.com",
                "PR Specialist, SOUNDPEATS",
            ],
            image:"https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/mini_pro_b6a881b9-4235-450d-ac8e-2acbdda12e2d_400x.jpg?v=1662006074",

        },

    ],
};

const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);



    const filterBlog = (blog)=>{
        dispatch({ type: "ANC", payload: {blog} });
    }
    useEffect(() => {
        // eslint-disable-next-line
    }, [state.cart]);

    return (
        <BlogContext.Provider
            value={{
                ...state,
                filterBlog,
            }}>
            {children}
        </BlogContext.Provider>
    );
};

const useBlogContext = () => {
    return useContext(BlogContext);
};

export { BlogProvider, useBlogContext };