import React from "react";
import '../helpers/Preloader.css'

function Preloader () {
    return(
        // <div className="preloader">
        //     <div className="preloader-wrapper big active">
        //         <div className="spinner-layer spinner-blue-only">
        //         <div className="circle-clipper left">
        //             <div className="circle"></div>
        //         </div><div className="gap-patch">
        //             <div className="circle"></div>
        //         </div><div className="circle-clipper right">
        //             <div className="circle"></div>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <div className="preloadersecond">
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                <div className="wheel"></div>
                <div className="hamster">
                    <div className="hamster__body">
                        <div className="hamster__head">
                            <div className="hamster__ear"></div>
                            <div className="hamster__eye"></div>
                            <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                    </div>
                </div>
                <div className="spoke"></div>
            </div>
        </div>
    )
}

export default Preloader;