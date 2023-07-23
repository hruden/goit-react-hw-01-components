import styled from 'styled-components';

export const Container = styled.div`
    margin: 60px auto;
    display: block;
    width: 300px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
export const Description = styled.div`
    margin: 0;
    padding-top: 50px;
    padding-bottom: 40px;
`
export const Avatar = styled.img`
    border-radius: 50%;
    background-color: beige;
`
export const Name = styled.p`
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 0;
`
export const Tag = styled.p`
    color: #a0a0a0;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 0;
`
export const Stats = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    background-color: hsl(0, 0%, 95%);
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid hsl(0, 0%, 80%);
    & :last-child {
        border: none;
    }
`
export const Label = styled.li`
    padding: 15px 20px;
    width: 100%;
    border-right: 1px solid hsl(0, 0%, 80%);
    display: flex;
    flex-direction: column;
    & :last-child {
        font-weight: 700;
    }
    & :first-child{
        font-weight: 200;
        color: #a0a0a0;
    }
`