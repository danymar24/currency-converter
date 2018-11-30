import React from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({currency, rate, coCurrency, date}) => (
    <Text style={styles.smallText}>1 {currency} = {rate} {coCurrency} as of {moment(date).format('MMMM D, YYYY')}</Text>
);

LastConverted.propTypes = {
    currency: PropTypes.string,
    rate: PropTypes.number,
    coCurrency: PropTypes.string,
    date: PropTypes.object
}

export default LastConverted;