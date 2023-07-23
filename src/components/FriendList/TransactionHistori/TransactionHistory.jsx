import { Column, ColumnName, Transaction } from "./TransactionHistory.styled"
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return(
        <>
            <Transaction>
                <ColumnName>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </ColumnName>
                {items.map(({id, amount, type, currency}) => {
                return (
                <Column>
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                </Column>
                )
            })
            }
            </Transaction>
        </>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}