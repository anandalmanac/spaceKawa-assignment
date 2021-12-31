import React from 'react'
import styled from 'styled-components'

function ProfileCard({data}) {
    return (
        <Container>
            <div className="left">
                <img src={data?.picture.large} alt="" />

            </div>
            <div className="right">
                <h1>{`${data?.name.title}. ${data?.name.first} ${data?.name.last}` }</h1>
                <p>{`${data?.location.street.number}, ${data?.location.street.name}, ${data?.location.city}, ${data?.location.state}, ${data?.location.country}, ${data?.location.postcode}`}
                </p>
                <p>{`${data?.location.timezone.offset} -${data?.location.timezone.description}`}</p>
        <span>{data?.gender}</span>
            </div>
        </Container>
    )
}

export default ProfileCard


const Container=styled.div`
margin-top: 100px;
width: 60%;
display: flex;
background-color: white;
padding: 30px;
border-radius: 16px;
box-shadow:0px 0px 30px #0000001A ;
box-sizing: border-box;

img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
}
.left{
    margin-right: 30px;
    display: flex;
    align-items: center;
}
.right{
    h1{
        color: #E16259;
        font-size: 64px;
        font-weight: bold;
        text-decoration: underline;
    }
    p{
        margin-top: 12px;
        font-size: 20px;
    }
    span{
        margin-top: 12px;
        color: #a8a8a8;
    }
}


@media screen and (max-width:800px){
    width: 90%;
    img{
        height: 60px;
        width: 60px;
    }
    .left{
        margin-right: 16px;
    }
    .right{
        h1{
            font-size: 20px;
        }
        p{
            font-size: 12px;
        }
        span{
            font-size: 10px;
        }
    }
}

`