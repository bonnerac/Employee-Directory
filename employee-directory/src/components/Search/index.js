import React from 'react';
import './style.css';

function Search() {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
            </div>
            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    );
}

export default Search;