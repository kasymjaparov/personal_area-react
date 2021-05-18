import React from "react";
import "./index.css"
import excelFiles from "./excelfiles";
import {useSelector} from "react-redux";


export default function TableDoc() {
    const docsData = useSelector((state) => state.docs.getTable)
    return (
        <div>
            <table className="table-docs">
                <thead>
                {excelFiles.map((data, index) => (
                    <tr key={index}>
                        {data.map((row, qr) => (
                            <th key={qr} className="table-th">{row}</th>
                        ))}
                    </tr>))}
                </thead>
                <tbody>
                { (docsData || []).map((data) => (
                    <tr key={data.id}>
                        <td className="table-tr">{data.tnved}</td>
                        <td className="table-tr">{data.full_product_name}</td>
                        <td className="table-tr">{data.trademark}</td>
                        <td className="table-tr">Zenden</td>
                        <td className="table-tr">Adidas china</td>
                        <td className="table-tr">{data.product_type}</td>
                        <td className="table-tr">{data.color}</td>
                        <td className="table-tr">{data.target_gender}</td>
                        <td className="table-tr">39</td>
                        <td className="table-tr">50</td>
                        <td className="table-tr">{data.composition}</td>
                        <td className="table-tr">{data.standard_no}</td>
                        <td className="table-tr">{data.status}</td>
                        <td className="table-tr">da</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
