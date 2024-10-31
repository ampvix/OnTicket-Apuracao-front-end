import { Box } from "@mui/material";
import Header from "../../components/header/header"
import GeographyChart from "../../components/geography/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box
                height="75vh"
                border={`1px solid ${colors.grey[100]}`}
            >
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Line;
