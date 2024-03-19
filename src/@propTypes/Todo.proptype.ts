import PropTypes from 'prop-types'

export const TodoPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}).isRequired
