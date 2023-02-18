import React from "react";
import './holiday.css'
import './../App.css'
import Holiday from "./Holiday";
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
function HolidayList({holidayData,year, month,setShowResult}){
    const {item} = holidayData;

    return (
        <div className="list">
            <h3>{year}년 {month}월의 공휴일</h3>
            {item!==undefined && item.length>=0? <span>{item.length}</span>:<span></span>}
            <div className="holiday">
                <BsFillArrowLeftSquareFill className="btnClose" onClick={() => setShowResult(showResult => !showResult)}/>
                <div>
                    <p>2023/09/00 - 추석</p>
                    {item!==undefined? (
                        Array.isArray(item)!==true?
                        <Holiday dateName={item.dateName} locdate={item.locdate}/>:
                        item.map((el)=>
                            <Holiday key={el.datekind}dateName={el.dateName} locdate={el.locdate} />
                        )
                    ) : <div>쉬는 날이 없다니..</div>}
                </div>
            </div>
        </div>
    )
}


export default HolidayList;