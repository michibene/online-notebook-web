import { defaultNoteColors } from "data/noteColors";
import { useEffect } from "react";
import { useRef } from "react";
import { Dispatch, useState } from "react";

type ColorPickerProps = {
    id: string;
    selectedColor: string;
    setColor: Dispatch<React.SetStateAction<string>>;
};

export default function ColorPicker({ id, selectedColor, setColor }: ColorPickerProps) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pickerRef = useRef<HTMLDivElement>(null);

    function handleShowColorPicker() {
        setIsPickerOpen(!isPickerOpen);
    }

    function handleColorChange(color: string) {
        setColor(color);
        setIsPickerOpen(false);
    }

    useEffect(() => {
        function closePickerOnOutsideClick(event: MouseEvent) {
            if (event.target !== buttonRef.current && event.target !== pickerRef.current) {
                setIsPickerOpen(false);
            }
        }

        document.body.addEventListener("click", closePickerOnOutsideClick);

        return () => {
            document.body.removeEventListener("click", closePickerOnOutsideClick);
        };
    }, []);

    return (
        <div className="relative">
            <button
                id={id}
                ref={buttonRef}
                type="button"
                onClick={() => handleShowColorPicker()}
                className="h-8 w-8 selected rounded-full"
                style={{ background: selectedColor, color: selectedColor }}
            />

            {isPickerOpen && (
                <div
                    ref={pickerRef}
                    className="mt-1 px-3 pt-3 pb-[0.35rem] absolute z-50 -right-[0.85rem] rounded-lg bg-white shadow-xl border-[1.5px] border-mainBlack border-opacity-40"
                >
                    <ul className="flex gap-3 items-center">
                        {defaultNoteColors.map((color, i) => (
                            <li key={i}>
                                <button
                                    type="button"
                                    key={color}
                                    className={`h-8 w-8 rounded-full ${
                                        color === selectedColor ? "selected" : "border-white border-2 ring-white ring-4"
                                    }`}
                                    style={{ background: color, color: color }}
                                    aria-label={color}
                                    onClick={() => handleColorChange(color)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
