import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <div className="left">
                <h2>YourChallenge</h2>
                
            </div>
            <div className="right">
                <a href="" className='active'>Product</a>
                <a href="">Download</a>
                <a href="">Pricing</a>
            </div>
            
            
        </Container>
    )
}

export default Header


const Container=styled.div`
position: fixed;
box-sizing: border-box;
width: 100%;
padding:10px 10%;
display: flex;
align-items: center;
justify-content: space-between;

.right{
    a{
        margin-left: 20px;
        color: black;
        text-decoration: none;
    }
}

@media screen and (max-width:800px){
    h2{
        font-size: 16px;
    }
    .right{
        a{
            font-size: 10px;
            margin-left: 10px;
        }
    }
}


`