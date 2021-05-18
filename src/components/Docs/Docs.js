import React from "react";
import "./index.css"
import { useSelector } from 'react-redux'
import InputFile from "./InputFile";
import MyDocuments from "./MyDocuments";
import ListDocs from "./ListDocs";

export default function Docs() {
    const docsList = useSelector((state) => state.docs.getDocsList)
    const templateExcelFile = useSelector((state) => state.docs.getTemplateExcel)
    return (
        <div className="table-container">
            <InputFile/>
            <ListDocs docsList={templateExcelFile}/>
            <MyDocuments docsList={docsList}/>
        </div>
    )
}