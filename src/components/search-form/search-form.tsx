import { Button } from "primereact/button";
import CategoriesMultiselect from "../multiselect/multiselect";
import PriceRangePicker from "../price-range/price-range";
import "./search-form.css";

export type FiltersReceived = { maxPrice: number; categories: string[] };
type SearchFormProps = {
    onFilter: (newValue: FiltersReceived) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onFilter }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filterData = new FormData(e.currentTarget);
        //remove this
        onFilter({ categories: [], maxPrice: 0 });
        console.log(filterData.values());
        //onFilter({maxPrice: e.value. })
    };

    return (
        <div className="form-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <CategoriesMultiselect />
                <PriceRangePicker />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default SearchForm;
