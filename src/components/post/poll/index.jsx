import PropTypes from 'prop-types';

export default function Poll({ poll }) {
    return (
      <div className="mt-3 grid">
        {poll &&
          poll.answers.map((answer) => (
            <button key={answer.id}>
              {answer.text}
            </button>
          ))}
      </div>
    );
  }

Poll.propTypes = {
    poll: PropTypes.shape({
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }).isRequired,
  };