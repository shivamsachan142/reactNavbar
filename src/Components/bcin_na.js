
import React, { useState } from "react";
import "react-pivottable/pivottable.css";
import PivotTableUI from "react-pivottable/PivotTableUI";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
const PlotlyRenderers = createPlotlyRenderers(Plot);

// const response = await fetch('./sample.csv');
var x = require('./csvjson.json');

const Fun_bcin_na = () => {
    const [opts, setOpts] = useState({});
    return(

        <div id="container">
            <br></br>
            <PivotTableUI
                data={x}
                onChange={(e) => {
                    setOpts(e);
                    console.log(e);
                }}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...opts}
            />
        </div>
    )
    
}



export default Fun_bcin_na;

