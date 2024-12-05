import React from 'react'
function Awards
() {
    return ( 
        <div className='container p-5 mb-10'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='../media/images/largestBroker.svg' alt="largetBroker"></img>
                </div>
                <div className='col-6 p-5'>
                    <h1>largest stock broker in India</h1>
                    <p>2+ million zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className='row mb-5 mt-5'>
                        <div className='col-6 '><ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                        </ul >
                        </div>
                        <div className='col-6 '>
                        <ul>
                        <li><p>Stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt. Securities </p></li>
                        
                    </ul>
                        </div>
                        <img src='../media/images/pressLogos.png' alt="PressLogo style={{width:90% }}"></img>
                    </div>
                    
                </div>
            </div>

        </div>
     );
}

export default Awards;