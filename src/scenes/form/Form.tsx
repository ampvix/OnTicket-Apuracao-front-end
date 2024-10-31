import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header/header";

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values: { [key: string]: unknown }) => {
        console.log(values)
    }
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle = "Create a new User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0,1fr))"
                            sx={{
                                "& > div" : { gridColumn: isNonMobile ? undefined : "span 4"},
                                }}
                        >
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="First Name"
                                name="firstName"
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="Email"
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="Contact Number"
                                name="contact"
                                value={values.contact}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="Adress 1"
                                name="adress1"
                                value={values.adress1}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.adress1 && !!errors.adress1}
                                helperText={touched.adress1 && errors.adress1}
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant = "filled"
                                type={"text"}
                                label="Adress 2"
                                name="adress2"
                                value={values.adress2}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.adress2 && !!errors.adress2}
                                helperText={touched.adress2 && errors.adress2}
                                sx={{ gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const phoneRegExp =
    /(^\+\d{2})?(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/;


const checkoutSchema = yup.object().shape ({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Contact is required"),
    adress1: yup.string().required("Adress is required"),
    adress2: yup.string().required("Adress is required"),
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    adress1: "",
    adress2: "",
};

export default Form;