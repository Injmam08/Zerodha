import React from 'react'
function Pricing() {
    return (  
        <div className='container p-3 ml-4'>
            <div className='row'>
                <div className='col-6 p-2 '>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and<br></br> price transparency in India. Flat fees and no hidden charges.

</p>
<a href=''>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2 p-2 border'>
                    <img src='../media/images/pricing-eq.svg' alt='0 pricing'></img>
                    <p>Free account
                    opening</p>
                </div>
                <div className='col-2 p-2 border'>
                <img src='../media/images/pricingEquity.svg' alt='0 pricing'></img>
                <p>Free equity delivery
                and direct mutual funds</p>
                </div>
                <div className='col-2 p-2 border'>
                <img src='../media/images/other-trades.svg' alt='0 pricing'></img>
                <p>Intraday and
                F&O</p>
                </div>
            </div>

        </div>
    );
}

export default Pricing;