import React from "react";
import { IItem } from "../models";

interface ItemProps {
    items: IItem[]
}

export function Items({ items }: ItemProps) {

    return (
        <ul>
            {items.map(item => <li key={item.id}>{item.term} : {item.translate}</li>)}
        </ul>
    )
}
