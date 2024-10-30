import {Box, Typography, useTheme} from "@mui/material";
import {DataGrid, GridColDef, GridToolbar, GridValidRowModel} from "@mui/x-data-grid";
import { tokens } from "../../theme"
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/header/header";
import { ptBR } from '@mui/x-data-grid/locales';

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) =>
            <Typography color={colors.greenAccent[500]}>
                R${params.row.cost}
            </Typography>
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoices Balances" />
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
                    rows={mockDataInvoices as GridValidRowModel[]}
                    columns={columns}
                    checkboxSelection={true}
                    slots={{ toolbar: GridToolbar }}
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                />
            </Box>
        </Box>
    );
};

export default Invoices;