import React from "react";
import { useState, useEffect } from "react";
import './../../styles.css';
// const Tabs = () => {
//     const texts = ['30-DAY SATISFACTION GUARANTEE',
//         'Free delivery on orders over $40.00',
//         '50.000+ HAPPY CUSTOMERS',
//         '100% Money Back Guarantee'];
//     const icons = [1, 2, 3, 4];
//     const [text, setText] = useState(texts[0])
//     let [index, setIndex] = useState(0);
//     const containerRow = document.getElementById("#container_row");
// console.log(containerRow.classList)
//     const onClick = (direction) => {
//         if (direction === 'left') {
//             if (index - 1 < 0) {
//                 return;
//             }
//             containerRow.classList.add("fade-out");
//             setIndex(--index);
//             setText(texts[index]);

//         }
//         else {
//             if (index + 1 > 3) {
//                 return;
//             }
//             containerRow.classList.add("fade-out");
//             setIndex(++index);
//             setText(texts[index]);
//         }


//         containerRow.classList.remove("fade-out");






//     };


//     return (
//         <>
//             <div className="header-container">
//                 <div className="tabs">
//                     <div onClick={() => { onClick("left") }}>
//                         <figure>
//                             <img src={process.env.PUBLIC_URL + '/assets/images/chevron_left.svg'} alt="chevron_left" />
//                         </figure>
//                     </div>
//                     <div id="container_row" className="container_row">
//                         <figure>
//                             <img src={process.env.PUBLIC_URL + `assets/images/fluent_checkmark-starburst-20-regular.svg`} alt="" />
//                         </figure>
//                         <span  >
//                             {text}
//                         </span>
//                     </div>
//                     <div onClick={() => { onClick("rigth") }}>
//                         <figure>
//                             <img src={process.env.PUBLIC_URL + '/assets/images/chevron_rigth.svg'} alt="rigth" />
//                         </figure>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }
const Tabs = () => {
    const texts = [
        "30-DAY SATISFACTION GUARANTEE",
        "FREE DELIVERY ON ORDERS OVER $40.00",
        "50,000+ HAPPY CUSTOMERS",
        "100% MONEY BACK GUARANTEE"
    ];
    const iconsTab = [
        "checkmark.svg",
        "truck.svg",
        "hearth.svg",
        "fluent-arrow.svg"
    ]
    const [text, setText] = useState(texts[0]);
    let [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {

        if (isAnimating) {
            const containerRow = document.querySelector(".container_row");
            containerRow.classList.add("fade_out");
            setTimeout(() => {
                setText(texts[index]);
                containerRow.classList.remove("fade_out");
                setIsAnimating(false);
            }, 200);
        }
    }, [index, isAnimating]);

    const onClick = (direction) => {
        if (direction === "left") {
            if (index - 1 < 0) {
                return;
            }
            setIndex(--index);
        } else {
            if (index + 1 > 3) {
                return;
            }
            setIndex(++index);
        }

        setIsAnimating(true);
    };

    return (
        <div className="header_container">
            <div className="tabs">


                <div id="chevron-left" onClick={() => onClick("left")}>
                    <figure>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/images/chevron_left.svg"}
                            alt="chevron_left"
                        />
                    </figure>
                </div>
                <div className={`container_row ${isAnimating ? "fade_out" : ""}`}>
                    <div id="tab-text-mov">
                        <figure>
                            <img id="checkmark_icon"
                                src={process.env.PUBLIC_URL + `assets/images/${iconsTab[index]}`}
                                alt="checkmark_icon"
                            />
                        </figure>
                        <span className="tab-text">{text}</span>
                    </div>
                    <div id="tab-text-desk" className="tab-text-desk">
                        <div className="tab-text-desk-div">
                            <figure>
                                <img id="checkmark_icon"
                                    src={process.env.PUBLIC_URL + `assets/images/${iconsTab[0]}`}
                                    alt={ `${iconsTab[0]}`}
                                />
                            </figure>
                            <span className="tab-text">
                               {texts[0]}
                            </span>
                        </div>

                        <div className="tab-text-desk-div">
                            <figure>
                                <img id="checkmark_icon"
                                    src={process.env.PUBLIC_URL + `assets/images/${iconsTab[1]}`}
                                    alt={ `${iconsTab[1]}`}
                                />
                            </figure>
                            <span className="tab-text">
                            {texts[1]}
                            </span>
                        </div>

                        <div className="tab-text-desk-div">
                            <figure>
                                <img id="checkmark_icon"
                                    src={process.env.PUBLIC_URL + `assets/images/${iconsTab[2]}`}
                                    alt={ `${iconsTab[2]}`}
                                />
                            </figure>

                            <span className="tab-text">

                            {texts[2]}
                            </span>
                        </div>

                        <div className="tab-text-desk-div">
                            <figure>
                                <img id="checkmark_icon"
                                    src={process.env.PUBLIC_URL + `assets/images/${iconsTab[3]}`}
                                    alt={ `${iconsTab[3]}`}
                                />
                            </figure>
                            <span className="tab-text">
                            {texts[3]}
                            </span>
                        </div>
                    </div>
                </div>
                <div id="chevron-right" onClick={() => onClick("right")}>
                    <figure>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/images/chevron_right.svg"}
                            alt="right"
                        />
                    </figure>
                </div>

            </div>
            <div className="sub_header">
                <figure>
                    <img className="icon-pop-t2" src={process.env.PUBLIC_URL + `/assets/images/clarifion.svg`} alt="clarifion_Logo.png" />

                </figure>
                <div>
                    <figure>
                        <img className="icon-pop-t3" src={process.env.PUBLIC_URL + `/assets/images/Frame 1484578055.svg`} alt="Frame 1484578055.svg" />
                    </figure>
                    <figure>
                        <img className="icon-pop-t4" src={process.env.PUBLIC_URL + `/assets/images/norton-antivirus-logo 1.svg`} alt="norton-antivirus-logo 1.svg" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Tabs;