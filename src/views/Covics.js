import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";
const Covics = () => {

    //const today = new Date(new Date().setHours(0, 0, 0, 0));
    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(30, 'days').toISOString(true);

    const { data: dataCovic, isLoading, isError }
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true);
    return (
        <>
            <h1>Table covid</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataCovic && dataCovic.length > 0 &&
                        dataCovic.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })}
                    {isLoading === true &&
                        <tr>
                            <td colSpan='5'>Loading....</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan='5'>Something....</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default Covics;