/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { classNames } from "primereact/utils";
export interface Product {
    name: string;
    price: number;
    categories: string[];
}

// interface ListItemProps {
//     item: Item;
// }

const ListItem = (product: Product) => {
    return (
        <div className="col-12" key={product.name}>
            <div
                className={classNames(
                    "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
                    { "border-top-1 surface-border": true }
                )}
            >
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">
                            {product.name}
                        </div>
                        <Rating
                            value={Math.floor(Math.random() * 5) + 1}
                            readOnly
                            cancel={false}
                        />
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-tag"></i>
                                <span className="font-semibold">
                                    {product.categories.join(", ")}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold">
                            ${product.price}
                        </span>
                        <Button
                            icon="pi pi-shopping-cart"
                            className="p-button-rounded"
                            disabled={false}
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
