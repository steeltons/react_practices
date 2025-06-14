import { Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

type tSeries = {
    'Максимальная высота': boolean,
    'Средняя высота': boolean,
    'Минимальная высота': boolean
}

type CheckboxProps = {
    series: tSeries, 
    setSeries: Dispatch<SetStateAction<tSeries>>,
    isBar: boolean,
    setIsBar: Dispatch<SetStateAction<boolean>>
}

function SettingsChart({ series, setSeries, isBar, setIsBar } : CheckboxProps) {

    const handleChange = ((event: ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked
        })
    })

    const handleDiagramTypeChange = ((newIsBar : boolean) => {
        setIsBar(newIsBar)
    })

    return (
        <Stack
            direction="row"
            justifyContent="center"
            divider={ <Divider orientation="vertical" flexItem /> }
            spacing={ 2 }
            sx={{ m: "20px 0" }}
        >
            {/* Выбор отображения типа тиаграммы */}
            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={ (isBar) ? 'bar' : 'dot' }
                    onChange={ () => handleDiagramTypeChange(!isBar) }
                >
                    <FormControlLabel 
                        control={ <Radio checked={ isBar } /> } 
                        label='Гистограмма' 
                    />
                    <FormControlLabel 
                        control={ <Radio checked={ !isBar } /> } 
                        label='Линейная' 
                    />
                </RadioGroup>
            </FormControl>

            {/* Выбор отображения типа высоты */}
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
        </Stack>
        
    )
}

export default SettingsChart