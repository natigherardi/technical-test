import { InputText } from "primereact/inputtext";
import { Slider, SliderChangeEvent } from "primereact/slider";
import React, { useState } from "react";
import "./price-range.css";

const PriceRangePicker = () => {
    const [value, setValue] = useState<number>(50);
    return (
        <div className="card flex justify-content-center">
            <div className="w-14rem">
                <InputText
                    type="number"
                    min={0}
                    value={value.toString()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setValue(Number(e.target.value))
                    }
                    className="w-full"
                />
                <Slider
                    step={0.5}
                    range={false}
                    value={value}
                    onChange={(e: SliderChangeEvent) => {
                        if (typeof e.value !== "number") {
                            throw new Error(
                                "Slider should not be a range slider"
                            );
                        }
                        setValue(e.value);
                    }}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default PriceRangePicker;
