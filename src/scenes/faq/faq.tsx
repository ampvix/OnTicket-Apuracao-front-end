import { Box, useTheme } from "@mui/material";
import Header from "../../components/header/header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this app?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This app is a demo for a dashboard with various features and components.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How do I create a new user?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Navigate to the form page and fill out the required fields.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How do I view my contacts?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Navigate to the contacts page and view your contacts.
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;