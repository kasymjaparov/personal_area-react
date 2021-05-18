import React from "react";
import { Container, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./index.css"
import * as yup from "yup";
import { Formik } from 'formik';


export default function AddTable() {
    const validationSchema = yup.object().shape({
        tnved: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        full_product_name: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        trademark: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        product_type: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        color: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        target_gender: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        composition: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        standard_no: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв'),
        status: yup.string().required('Обязательное поле').min(2, 'Минимально 2 букв')
    })

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    tnved: '',
                    full_product_name: '',
                    trademark: '',
                    product_type: '',
                    color: '',
                    target_gender: '',
                    composition: '',
                    standard_no: '',
                    status: ''
                }
                }
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Container maxWidth="md">
                        <h1 className="add-table-button-container">Добавить документ</h1>
                        <Grid container direction='row' justify='space-around'>
                            <div className="add-table-one">
                                <Box>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Код ТНВЭД"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Полное наименование товара"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Товарный знак"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Модель / артикул производителя"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Вид товара"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Цвет"
                                    />
                                </Box>
                            </div>
                            <div className="add-table-two">
                                <Box>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Целевой пол"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Размер одежды"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Состав"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Номер Регламента/стандарта"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Статус карточки товара в Каталоге"
                                    />
                                </Box>
                                <Box pt={2}>
                                    <TextField
                                        className="add-table-text-input"
                                        id="outlined-required"
                                        // variant="outlined"
                                        // label=""
                                        type="text"
                                        helperText="Результат обработки данных в Каталоге"
                                    />
                                </Box>
                            </div>
                        </Grid>
                        <div className="add-table-button-container">
                            <button
                                className="add-table-submit-button"
                                // variant="contained"
                                color="primary"
                            >
                                Добавить
                            </button>
                        </div>
                    </Container>
                )}
            </Formik>
        </React.Fragment>
    )
}