import React, {useEffect, useState} from "react";
import {KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined} from "@material-ui/icons";
import {Banner} from "../Banner/Banner";
import {bannerItems} from "../../utils/data";




import "./Slider.css";


export const Slider = () => {
    const [bannerIndex, setBannerIndex] = useState(0);

    const switchBanner = (className: string) => {
        if (className === 'slider-arrowLeft') {
            setBannerIndex(bannerIndex > 0 ? bannerIndex - 1 : bannerItems.length - 1);
        } else {
            setBannerIndex(bannerIndex < bannerItems.length - 1 ? bannerIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const bannerTimer = setInterval(() => {
            setBannerIndex(bannerIndex >= bannerItems.length - 1 ? 0 : bannerIndex + 1);
        }, 5000);

        return () => clearInterval(bannerTimer);
    }, [bannerIndex]);


    return (
        <div className="slider-container">
            <div className="slider-arrowLeft" onClick={() => switchBanner('slider-arrowLeft')}>
                <KeyboardArrowLeftOutlined/>
            </div>
            <div className="slider-bannerWrapper" style={{transform: `translateX(${bannerIndex * -100}vw)`}}>
                {bannerItems.map(obj => (
                    <Banner
                        item={obj}
                        key={obj.id}
                    />
                ))}
            </div>
            <div className="slider-arrowRight" onClick={() => switchBanner('slider-arrowRight')}>
                <KeyboardArrowRightOutlined/>
            </div>
        </div>
    )

}