import React from 'react';
import planeData from "../json";
import '../table.css';

function filterFlights(viewType, num) {
    if (viewType === "all") {
        return planeData;
    }
    return planeData.filter(currentFlight => {
        switch (viewType) {
            case "depart":
                return currentFlight.direction === "dep";
            case "delay":
                return currentFlight.description === "delay";
            case "arrive":
                return currentFlight.direction === "arr";
            case "custom":
                return currentFlight.flightnum === num;
            default:
                break;
        }
        return null;
    }, []);
}


let AllTable = function ({viewType, num}) {
    var sortedData = filterFlights(viewType, num); // отбираем нужный нам рейсы(вылет/прилет/задержка)
    sortedData.sort(function(a, b) { // сортируем json по возрастанию
        return a.time - b.time;
    });
        if (sortedData.length === 0) {
            return (
                <div className="flights">
                    <p>РЕЙСЫ НЕ НАЙДЕНЫ</p>
                </div>
            )
        }
        var list = sortedData.map(function(flight) {
            return (
                <div className="flightCard">
                    < div>
                        <p className="flightCardTime"> {flight.time} </p>
                    </div>
                    <div>
                        <p className="flightCardCity">  {flight.city} </p>
                    </div>
                    <div>
                        <p className="flightCardFlightNumber"> {flight.flightnum} </p>
                    </div>
                    <div>
                        <p className="flightCardTerminal">  {flight.term} </p>
                    </div>
                    <div>
                        <p className="flightCardInfo">  {flight.description} </p>
                    </div>
                </div>
            )
        });
        return (
            <div className="flights">
                <div className="flightTable">
                    <div className="flightCard">
                        < div>
                            <p className="flightCardTime"> ВРЕМЯ </p>
                        </div>
                        <div>
                            <p className="flightCardCity">  ГОРОД </p>
                        </div>
                        <div>
                            <p className="flightCardFlightNumber"> РЕЙС </p>
                        </div>
                        <div>
                            <p className="flightCardTerminal">  ТЕРМИНАЛ </p>
                        </div>
                        <div>
                            <p className="flightCardInfo">  ИНФО </p>
                        </div>
                    </div>
                    {list}
                </div>
            </div>
        );
    }

export default AllTable;
