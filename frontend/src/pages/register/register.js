// Components
import { Box } from "@mui/material"
import { ClientRegister } from "../../components/ClientRegister/ClientRegister"

export const Register = () => {
    return (
        <Box component='div'>
             <ClientRegister component={ClientRegister} exact />
        </Box>
    )
}