import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className={'pa2'} >
            <input
                className={'pa3 ba b--blue bg-lightest-blue'}
                type={'seatch'}
                placeholder={'search persons by name'}
                onChange={searchChange}
            />
        </div>

    )
}

export default SearchBox