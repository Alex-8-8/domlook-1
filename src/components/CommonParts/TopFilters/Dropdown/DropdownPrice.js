import React, { useState } from "react";
import { connect } from 'react-redux';
import {
    sortLowPriceCreator,
    sortHightPriceCreator,

} from '../../../../redux/actionCreators';


const DropdownPriceSort = ({
    sortLowPrice,
    sortHightPrice,
}) => {
    const price_options = [
        { id: 1, value: 'low-price', label: 'от дешевых к дорогим' },
        { id: 2, value: 'hight-price', label: 'от дорогих к дешевым' }
    ];
    const [selectedOption, setSelectedOption] = useState(price_options[0].value);

    if (selectedOption === 'low-price') {
        sortLowPrice();
    } else if (selectedOption === 'hight-price') {
        sortHightPrice();
    }

    return (
        <select name="top-filter-price" id="top-filter-price"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}>
            {price_options.map(o => (
                <option value={o.value} key={o.id}>{o.label}</option>
            ))}
        </select>
    );
};



const mapDispatchToProps = dispatch => ({
    sortHightPrice: () => dispatch(sortHightPriceCreator()),
    sortLowPrice: () => dispatch(sortLowPriceCreator()),

    // setSelectedOption: () => dispatch(setSelectedOptionCreator()),
});

const Enhanced = connect(null, mapDispatchToProps)(DropdownPriceSort);

export { Enhanced as DropdownPriceSort };