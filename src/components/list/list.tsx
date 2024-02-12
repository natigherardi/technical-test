import { DataView } from "primereact/dataview";
import ListItem from "../list-item/list-item";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const List: React.FC<{ products: any[] }> = ({ products }) => {
    return (
        <div className="card xl:flex xl:justify-content-center">
            <DataView value={products} itemTemplate={ListItem} />
        </div>
    );
};

export default List;
