import { Transactions } from "./Transaction";
import { Transaction, ColumnName} from "./TransactionHistory.styled"
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
                    <Transactions key={id} amount={amount} type={type} id={id} currency={currency}/>
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