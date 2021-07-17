import React from 'react';
import Test1 from './../assets/test1.mp4';
import Form from './Form';
import Sale from './../assets/sale.png'

export default function Landing(){

    return(
        <div>
            <video
                autoPlay
                muted
                loop
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate( -50%, -50%)",
                    zIndex: "-13",
                    filter: "brightness(60%)"
             }}>
                <source src={Test1} type="video/mp4"/>
            </video>
            <div className="l-info">
                <img src={Sale} style={{marginTop: 50}} />
                <div className="l-text" style={{height: 400, width: 650, justifyContent: 'center', padding: 40}}>
                    <h1 className="l-title" style={{fontWeight: 'bolder', fontSize: 50}}>ATÉ 50% OFF NA BLACK FRIDAY</h1>
                    <h4 className="l-body">Nessa Black Friday temos descontos de até 50% em pedidos acima de 10 caixas de Post-its variados</h4>
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}