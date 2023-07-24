import styled from 'styled-components';

export const Transaction = styled.table`
    width: 500px;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-collapse: collapse;
`
export const ColumnName = styled.thead`
    height: 30px;
    background-color: #1E90FF;
    color: white;
    font-weight: 300;
    font-size: small;
    text-transform: uppercase;
    & th{
        border-right: 1px solid white;
    }
    & :last-child {
        border-right: none;
    }
`
export const Column = styled.thead`
    height: 30px;
    color: grey;
    font-weight: 300;
    font-size: small;
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
    & td{
        border-right: 1px solid #DCDCDC;
    }
    & :last-child {
        border-right: none;
    }

`