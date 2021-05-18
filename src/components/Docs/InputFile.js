import React, {useState} from "react";
import { Button, TextField} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import "./index.css"
import {uploadExcelFile} from '../../redux/actions/DocumentsActions/document';
import {useDispatch} from "react-redux";


export default function InputFile() {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null);
    const onSubmit =() => {
        dispatch(uploadExcelFile(file))
    }

    const inputFileHandle = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <div className="input-component-container">
            <TextField
                className="input-button"
                type="file"
                onChange={inputFileHandle}
            />
            <Button
                variant="contained"
                color="default"
                className="contained-button-file"
                startIcon={<CloudUploadIcon />}
                onClick={onSubmit}
            >
                Загрузить
            </Button>
        </div>
    )
}