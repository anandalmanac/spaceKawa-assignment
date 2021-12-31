import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'

function Home() {

const [data,setData]=useState()
const [selected,setSelected]=useState()

    //fetching data
useEffect(() => {
    fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
    .then(response => response.json())
    .then(data => {
        setData(data)
        setSelected(data.results[0])
        document.querySelector('.profile-data-grid div').classList.add('active')
    
    
    })
    
    

    
}, []);



const handleClick=(item,index)=>{
    setSelected(item)
    document.querySelectorAll('.profile-data-grid div').forEach(item=>{
        item.classList.remove('active')
    })
    document.querySelectorAll('.profile-data-grid div')[index].classList.add('active')
}

    return (
        <Container>
            <ProfileCard data={selected} />
            <div className="profile-data-grid">
                 {data?.results.map((item,index)=>(
                <div onClick={()=>handleClick(item,index)}>
                    <p>{item.gender} . NL</p>
                    <h3>{`${item.name.title}. ${item.name.first} ${item.name.last}` }</h3>
                    <p>{item.email}</p>
                </div>

                 ))} 
                
               

            </div>
            
        </Container>
    )
}

export default Home


const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.profile-data-grid{
    margin-top: 100px;
    width: 80%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    .active{
        background-color: #A259FF;
        *{
            color: white !important;
        }
    }
    div{
        box-shadow:0px 0px 10px #00000011;
        background-color: white;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
        h3{
            font-size: 22px;
            font-weight: 700;
        }
        p{
            color: #00000099;
            font-size: 14px;
            &:nth-child(3){
                color: #E16259;
            }
        }
        
    }
    @media screen and (max-width:1100px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width:700px){
        padding: 10px;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        div{
            h3{
                font-size: 16px;
            }
            p{
                font-size: 10px;
            }
        }
    }

}

`