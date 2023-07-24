import { Column } from "./TransactionHistory.styled"
import PropTypes from 'prop-types';

export const Transactions = ({id, type, amount, currency}) => {
    return(
        <Column>
        <tr id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    </Column>
    )
}

Transactions.propTypes={
    id: PropTypes.string.isRequired,
    amount: PropTypes.string,
    type: PropTypes.string,
    currency: PropTypes.string,
}