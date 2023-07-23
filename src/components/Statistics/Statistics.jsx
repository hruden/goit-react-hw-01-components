import { Label, StatList, Title, Wraper } from "./Statistics.styled"
import PropTypes from 'prop-types';


export const Statistics = ({title, stats}) =>{
    return(
        <Wraper>
            {title ? <Title>{title}</Title> : <></>}

            <StatList>
                {stats.length > 0 ? stats.map(({id, label, percentage}) => {
                    return (
                        <Label key={id}>
                            <span>{label}</span>
                            <span>{percentage}%</span>
                        </Label>    
                    )
                }) : <p>No Matches found</p>
                }
            </StatList>
        </Wraper>
    
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};
