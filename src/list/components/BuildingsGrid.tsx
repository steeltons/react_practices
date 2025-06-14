import { Container } from "@mui/material"
import buildings from "../table"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales'

const BuidlingsGrid = () => {
    const rows: GridRowsProp = buildings 

    const columns: GridColDef[] = [
        {field: 'Название', headerName: 'Название', flex: 1},
        {field: 'Тип', flex: 0.5},
        {field: 'Страна', flex: 0.5},
        {field: 'Город', flex: 0.5},
        {field: 'Год'},
        {field: 'Высота'},
    ]

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

export default BuidlingsGrid