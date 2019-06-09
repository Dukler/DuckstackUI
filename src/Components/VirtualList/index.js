import React from 'react';
//import logo from './logo.svg';
import './list.css';

//import loremIpsum from 'lorem-ipsum'; 507
import { loremIpsum } from "lorem-ipsum";

import { List, AutoSizer, ScrollSync } from "react-virtualized";
//import VirtualList from './index';

const rowCount = 10000;
const rowHeight = 50;

const list = Array(rowCount).fill().map((val, idx) => {
    return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        }),
    }
});


function VirtualList(props) {
    const renderColumn = ({ index, key, style }) => {
        return (
            <div key={key} style={style} className="row">
                <div className="content">
                    <div>{list[index].id}</div>
                </div>
            </div>
        );
    }

    const renderRow = ({ index, key, style }) => {
        return (
            <div key={key} style={style} className="row">
                <div className="image">
                    <img src={list[index].image} alt="" />
                </div>
                <div className="content">
                    <div>{list[index].name}</div>
                    <div>{list[index].text}</div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header> */}
            <ScrollSync>
                {({ onScroll, scrollTop }) => (
                    <div className="list">
                        <AutoSizer>
                            {({ height, width }) => {
                                return (
                                    <>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                            }}>
                                            <List
                                                className="leftSide"
                                                width={50}
                                                height={height}
                                                rowHeight={rowHeight}
                                                scrollTop={scrollTop}
                                                rowRenderer={renderColumn}
                                                rowCount={list.length}
                                                overscanRowCount={3} />
                                        </div>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 50,
                                            }}>
                                            <List
                                                width={width - 50}
                                                height={height}
                                                rowHeight={rowHeight}
                                                onScroll={onScroll}
                                                rowRenderer={renderRow}
                                                rowCount={list.length}
                                                overscanRowCount={3} />
                                        </div>
                                    </>
                                )
                            }}
                        </AutoSizer>
                    </div>
                )}
            </ScrollSync>
        </>
    );

}

export default VirtualList;