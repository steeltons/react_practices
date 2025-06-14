import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import GroupGrid from "./components/GroupGrid";
import { countries, types, years } from "./groupdata";

type tSelect = 'Страна' | 'Год' | 'Тип'

const Chart = () => {

    const [group, setGroup] = useState<tSelect>('Страна')
    const [groupData, setGroupData] = useState(countries)

    const handleChange = (event: SelectChangeEvent) => {
        const newGroup: tSelect = event.target.value as tSelect; 
        setGroup(newGroup)
        switch (newGroup) {
            case 'Страна': setGroupData(countries)
                           break;
            case 'Год':    setGroupData(years)
                           break;
            case 'Тип':    setGroupData(types)
                           break;
        }
        console.log(newGroup)
    }

    return (
    <div>
      <Navbar active="3"/>
      <Box sx={{ width: "200px", m: "auto", mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Группировать по</InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Группировать по"
            onChange={ handleChange }
          >
            <MenuItem value="Страна"> Стране </MenuItem>
            <MenuItem value="Год"> Году </MenuItem>
            <MenuItem value="Тип"> Типу </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupGrid data={groupData}/>
    </div>
  );
}

export default Chart