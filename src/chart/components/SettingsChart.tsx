import { Checkbox, FormControl, FormControlLabel, FormLabel } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

type tSeries = {
    'Максимальная высота': boolean,
    'Средняя высота': boolean,
    'Минимальная высота': boolean
}

type CheckboxProps = {
    series: tSeries, 
    setSeries: Dispatch<SetStateAction<tSeries>>
}

function SettingsChart({ series, setSeries } : CheckboxProps) {

    const handleChange = ((event: ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked
        })
    })

    return (
        <FormControl>
            <FormLabel id="label-checkbox-group">
                На диаграмме показать
            </FormLabel>
            <FormControlLabel 
                control={ <Checkbox checked={series["Максимальная высота"]} name="Максимальная высота" /> }
                label="максимальную высоту"
                onChange={handleChange}
            />
            <FormControlLabel 
                control={ <Checkbox checked={series["Средняя высота"]} name="Средняя высота" /> }
                label="среднюю высоту"
                onChange={handleChange}
            />
            <FormControlLabel 
                control={ <Checkbox checked={series["Минимальная высота"]} name="Минимальная высота" /> }
                label="минимальную высоту"
                onChange={handleChange}
            />
        </FormControl>
    )
}

export default SettingsChart