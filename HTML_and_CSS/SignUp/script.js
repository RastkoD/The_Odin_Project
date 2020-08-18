const footer = document.querySelector('.main-footer');
const copyright = document.createElement('div');
const date = new Date;

copyright.innerHTML =
    `<div>
    <p>
        © ${date.getFullYear()} Intuit, Inc. All rights reserved. Intuit, QuickBooks, QB,
        TurboTax, ProConnect and Mint are registered trademarks of
        Intuit Inc.  
        <br>
        Terms and conditions, features, support, pricing,
        and service options subject to change without notice.
    </p>
    <div>`


footer.append(copyright)
