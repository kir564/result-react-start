import PropTypes from 'prop-types';

export const Win = ({isEnd, children}) => {
    return (
        isEnd && <h2>{children}</h2>
    )
}

Win.propTypes = {
    isEnd: PropTypes.bool,
    children: PropTypes.string
}