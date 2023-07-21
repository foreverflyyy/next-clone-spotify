import React, {useEffect, useState} from 'react';
import useDebounce from "@/hooks/useDebounce";

interface SearchFieldProps {
    onChange: (value: string) => void;
}

const SearchField = ({onChange}: SearchFieldProps) => {

    const [query, setQuery] = useState("");
    const debounced = useDebounce(query);

    useEffect(() => {
        onChange(debounced);
    }, [debounced]);

    return (
        <div className={""}>
            <input
                type={"text"}
                placeholder={"Enter for search"}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className={"rounded-md p-3 border-gray-600 border-2"}
            />
        </div>
    );
};

export default SearchField;