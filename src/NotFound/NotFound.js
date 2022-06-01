import React, { memo } from 'react';
import './NotFound.css';




const NotFound = memo(() => {
    
    return (
        <div>
               {/* Error Page  */}
            <div class="error">
                <div class="container-floud">
                    <div class="col-xs-12 ground-color text-center">
                        <div class="container-error-404">
                            <div class="clip"><div class="shadow"><span class="digit thirdDigit">4</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit secondDigit">0</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit firstDigit">4</span></div></div>
                            <div class="msg">OH!<span class="triangle"></span></div>
                        </div>
                        <h2 class="h1">Sorry! Page not found
                        </h2>
                        <h4>Something went wrong</h4>
                    </div>
                </div>
            </div>
         {/* Error Page  */}
        </div>
    );
});

export default NotFound;