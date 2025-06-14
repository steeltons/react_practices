import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { tGroup } from "../groupdata"
import { Container } from "@mui/material";
import { ruRU } from "@mui/x-data-grid/locales";

interface GroupProps {
    data: tGroup
}

function GroupGrid({ data } : GroupProps) {

    const rows: GridRowsProp = data
    const columns: GridColDef[] = Object.keys(data[0]).map((header) => {
        return {field: header, flex: 0.5}
    });

    return (
        <Container maxWidth='lg' sx={{ height: '700px', mt: '20px' }}>
            <DataGrid 
                localeText={ ruRU.components.MuiDataGrid.defaultProps.localeText }
                rows={ rows }
                columns={ columns }
                showToolbar={ true }
            />
        </Container>
    )
}

export default GroupGrid