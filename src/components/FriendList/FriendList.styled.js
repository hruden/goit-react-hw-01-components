import styled from 'styled-components';

export const List = styled.ul`
    display: block;
    width: 300px;
    margin: 60px auto;
    text-align: center;
    padding: 0;
`
export const Item = styled.li`
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 10px;
    padding: 5px 10px;
    align-items: center;
    gap: 10px;
    & :last-child{
        font-size: x-large;
        font-weight: 700;
        margin: auto;
    }
`
export const Online = styled.span`
    width: 15px;
    height: 15px;
    margin: 1px;
    background: ${({inrealtime}) => (inrealtime?"green":"red")};
    border-radius: 50%;
    display: inline-block;
`