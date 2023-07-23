import styled from 'styled-components';
import { getRandomColor } from './getRandomColor.js';

export const Wraper = styled.section`
    display: block;
    width: 330px;
    margin: 60px auto;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Title = styled.h2`
    padding: 20px 0;
    margin: 0;
`
export const StatList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    background-color: black;
    /* color: white; */
    justify-content: space-between;
`
export const Label = styled.li`
    width: 100%;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    background-color: ${({key}) => (getRandomColor())};
    & :first-child{
        font-size: small;
    }
    & :last-child{
        font-size: large;
        font-weight: 500;
    }
`