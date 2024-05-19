import * as React from 'react';


export default function AboutPage() {


    return(
        <body style={{padding: '1% 1% 1% 1%'}}>
            <h2>What is 한Cool?</h2>
            <div style={{textIndent: '0.5%'}}>
                Hancool is a personal application developed by Liam Einspahr for the purpose
                of aiding in studying Korean
            </div>

            <h2>How Does 한Cool work?</h2>
            <div style={{textIndent: '0.5%'}}>
                Hancool has two purposes

                <br/>
                <br/>

                <div style={{textIndent: '0.75%'}}>
                    1. To serve as an organized database of words, particles, verb conjugations, etc.
                </div>

                <div style={{textIndent: '0.75%'}}>
                    2. To aid in regular studying and review of learned words
                </div>

                <br />
                <br />

                <div>
                    The partical implementation is that after a word is reviewed,
                    the corresponding word is "locked" until a specific date is reached.
                    Once this specific date is reached, the row will "unlock" and this will
                    serve as a notice telling me that I need to review the relevant word again.
                </div>
            </div>

        </body>
    );
}