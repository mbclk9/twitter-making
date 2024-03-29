import PropTypes from 'prop-types';

export default function Content({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};
