import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <Text>ITEM ID 1</Text>
                
            </Wrap>
            <Wrap>
                <Text>ITEM ID 2</Text>
                
            </Wrap>
            <Wrap>
                <Text>ITEM ID 3</Text>
                
            </Wrap>
            <Wrap>
                <Text>ITEM ID 4</Text>
                
            </Wrap>
            <Wrap>
                <Text>ITEM ID 5</Text>
            </Wrap>
            <Wrap>
                <Text>ITEM ID 6</Text>
            </Wrap>
            <Wrap>
                <Text>ITEM ID 7</Text>
            </Wrap>
            <Wrap>
                <Text>ITEM ID 8</Text>
            </Wrap>
            <Wrap>
                <Text>ITEM ID 9</Text>
            </Wrap>
            <Wrap>
                <Text>ITEM ID 10</Text>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img {
        width: 100%;
        //height: 100%;
        object-fit: cover;
    }

    
    &:hover {
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
const Text = styled.div`
    color: white;
    padding: 10px 15px 26px;
    margin-top: 10px;
`
