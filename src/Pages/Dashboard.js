import '../App.css';
import '../StatsGraphics/PieGraph'
import PieGraph from '../StatsGraphics/PieGraph';
import LineGraph from '../StatsGraphics/LineGraph';
import StackedBarChart from '../StatsGraphics/StackedBarChart';
import SameDataComposedChart from '../StatsGraphics/SameDataComposedChart'
import ScatterChartWithLabel from '../StatsGraphics/ScatterChartWithLabels'
import SimpleRadialBarChart from '../StatsGraphics/Simple RadialBarChart';

export default function Dashboard () {
    return <>
    <div className='DataBoxOrganizer'>
    <PieGraph/>
    <LineGraph/>
    <StackedBarChart/>
    <SameDataComposedChart/>
    <ScatterChartWithLabel/>
    <SimpleRadialBarChart/>
    </div>
    </>
}