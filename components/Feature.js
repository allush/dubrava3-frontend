import React from 'react';

const Feature = ({heading, children, order}) => {
    return <>
        <div className="row feature">
            <div className={`col-md-7 ${order ? 'order-md-2' : ''}`}>
                <h2 className="feature-heading">{heading}</h2>
                <div className="lead">{children}</div>
            </div>
            <div className={`col-md-5 ${order ? 'order-md-1' : ''}`}>
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                     height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                     focusable="false"
                     role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#eee"/>
                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                </svg>
            </div>
        </div>
        <hr className="feature-divider"/>
        <style jsx>{`
            .feature-divider {
              margin: 5rem 0;
            }
            
            .feature-heading {
              font-weight: 300;
              line-height: 1;
              letter-spacing: -.05rem;
            }
            @media (min-width: 62em) {
              .feature-heading {
                margin-top: 7rem;
              }
            }
            @media (min-width: 40em) {
              .feature-heading {
                font-size: 50px;
              }
            }
        `}</style>
    </>
};

export default Feature;
