import React from 'react';

const FilterList = props=> {
    const renderOptionList = () => {
        return props.FilterList.map((filter, key) => <option key = {key}
        value={filter}>{filter}</option>)
    }
    return (
        <div>
            <select onChange={props.ratingChange}>
            <option value = "">Semua

            </option>
            {renderOptionList()}
            </select>
        </div>
    )
}

export default FilterList;