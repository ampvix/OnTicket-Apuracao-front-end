// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider, Theme} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {Route, Routes} from "react-router-dom";

import Dashboard from "./scenes/dashboard/Dashboard";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calendar/Calendar";
import FAQ from "./scenes/faq/faq";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";

export default function App() {
const [theme, colorMode] = useMode() as [Theme, { toggleColorMode: () => void }];
    // const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
// function Copyright() {
//     return (
//         <Typography
//             variant="body2"
//             align="center"
//             sx={{
//                 color: 'text.secondary',
//             }}
//         >
//             {'Copyright © '}
//             <Link color="inherit" href="https://fattocs.com/">
//                 Fatto Consultoria e Sistemas
//             </Link>{' '}
//             {new Date().getFullYear()}.
//         </Typography>
//     );
// }