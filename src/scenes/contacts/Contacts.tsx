import {Box, useTheme} from "@mui/material";
import {DataGrid, GridColDef, GridToolbar, GridValidRowModel} from "@mui/x-data-grid";
import { tokens } from "../../theme"
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/header/header";
import { ptBR } from '@mui/x-data-grid/locales';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "adress",
            headerName: "Adress",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        }
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for future reference" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            borderBottom: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                        "& .MuiDataGrid-toolbarContainer": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `$(colors.grey[100]} !important`,
                        },
                    }}
            >
                <DataGrid
                    rows={mockDataContacts as GridValidRowModel[]}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                />
            </Box>
        </Box>
    );
};

export default Contacts;