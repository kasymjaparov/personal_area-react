import React from "react";
import {CardMedia, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./index.css"
import ExcelIcon from "../../redux/uils/icons/iconfinder_excel_272697.png";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getExcelFileTable} from "../../redux/actions/DocumentsActions/document";

export default function MyDocuments(docsList) {
    const dispatch = useDispatch()
    const docs = docsList.docsList;

    const handleGetExcelFile =(id) => {
        dispatch(getExcelFileTable(id))
    }

    return (
        <div className="container">
            <Typography variant="h5" component="h6">Мои документы</Typography>
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
            >
                {(docs || []).map((excel) => (
                    <div key={excel.id} className="card-file">
                        <div className="card-header">{excel.id}</div>
                        <CardMedia
                            className="icon-card"
                            type="file"
                            image={ExcelIcon}
                        />
                        <NavLink to={`/docs/my_doc/${excel.id}`}>
                            <h5
                                className="card-footer"
                                onClick= {() => handleGetExcelFile(excel.id)}
                            >Открыть
                            </h5>
                        </NavLink>
                    </div>
                ))}
            </Grid>
        </div>
    )
}