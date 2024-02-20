import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import { selectOptions } from "../data/data";

const PostFilter = ({filter, setFilter}) => {

    const selectsOptions = selectOptions;

    return (
        <>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Sort'}
                options={selectsOptions}
            />
        </>
    )
}

export default PostFilter;