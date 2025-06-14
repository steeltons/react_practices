import { axisClasses, BarChart, LineChart } from "@mui/x-charts";
import { tGroup } from "../groupdata"
import { Container } from "@mui/material";
import { useState } from "react";
import SettingsChart from "./SettingsChart";

type GroupChartProps = {
    data: tGroup
}

function GroupChart({ data } : GroupChartProps) {
    const chartSetting = {
        yAxis: [
        {
            label: 'Высота(м)',
        },
        ],
        height: 500,
        sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-10px, 0)',
        },
        },
    };

    const [series, setSeries] = useState({
        'Максимальная высота': true,
        'Среднаяя высота': false,
        'Минимальная высота': false
    })

    const [isBar, setIsBar] = useState(true);

    const seriesY = Object.entries(series)
        .filter((item) => item[1] === true)
        .map((item) => {
            return {'dataKey' : item[0], 'label' : item[0]}
        })
    
    const showBarLabel = Object.entries(series)
        .filter((item) => item[1])
        .length === 1

    return (
        <Container maxWidth='lg' >
            {isBar &&
                <BarChart 
                    dataset={ data }
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={ seriesY }
                    barLabel={(showBarLabel) ? "value" : ""}
                    slotProps={{
                        legend: {
                            position: {vertical: 'bottom', horizontal: 'center'}
                        }
                    }}
                    {...chartSetting}
                />
            }
            {!isBar &&
                <LineChart 
                    dataset={ data }
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={ seriesY }
                    slotProps={{
                        legend: {
                            position: {vertical: 'bottom', horizontal: 'center'}
                        }
                    }}
                    {...chartSetting}
                />
            }
            
            <SettingsChart series={ series } setSeries={ setSeries } isBar={ isBar } setIsBar={ setIsBar }/>
        </Container>
    )
}

export default GroupChart