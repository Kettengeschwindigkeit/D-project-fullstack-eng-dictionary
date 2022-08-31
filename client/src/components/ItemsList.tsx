import React from "react";
import { IItem } from "../models";

interface ItemProps {
    data: IItem[]
}

export function ItemsList({ data }: ItemProps) {
    return (
        <div>
            <ul>
                {data.map(item => <li key={item.id}>{item.term} : {item.translate}</li>)}
            </ul>
        </div>
    )
}
