import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header.tsx";
import List from "./components/list/list.tsx";
import SearchForm, {
    FiltersReceived,
} from "./components/search-form/search-form.tsx";

const myProds = [
    {
        name: "demo",
        price: 10,
        categories: ["food", "clothes"],
    },
    { name: "demo2", price: 20, categories: ["toiletries", "free-shipping"] },
    { name: "demo3", price: 30, categories: ["clothes", "free-shipping"] },
    { name: "demo4", price: 40, categories: ["toiletries", "food"] },
    { name: "demo5", price: 50, categories: ["clothes", "toiletries"] },
    { name: "demo6", price: 60, categories: ["food", "free-shipping"] },
    { name: "demo7", price: 70, categories: ["toiletries", "free-shipping"] },
    { name: "demo8", price: 80, categories: ["clothes", "free-shipping"] },
    { name: "demo9", price: 90, categories: ["toiletries", "food"] },
    { name: "demo10", price: 100, categories: ["clothes", "toiletries"] },
];

function App() {
    //TODO: Debes eliminar la deshabilitación de regla de eslint, el any y asignarle a products el tipo correcto
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [products] = useState<any[]>(myProds);

    useEffect(() => {
        //Aquí debes hacer la petición a la API
    }, []);

    const filterReceived = (newFilters: FiltersReceived) => {
        console.log(newFilters);
    };

    return (
        <>
            <Header />
            <SearchForm onFilter={filterReceived} />
            <List products={products} />
        </>
    );
}

export default App;
