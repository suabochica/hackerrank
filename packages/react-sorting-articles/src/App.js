import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const defaultSort = (copy) => copy.sort((a, b) => b.upvotes - a.upvotes);
    const [data, setData] = React.useState(defaultSort(articles))

    const sortByMostUpvoted = () => {
        const copy = [...data];
        const sortedData = copy.sort((a, b) => b.upvotes - a.upvotes);

        setData(sortedData);
    }

    const sortByMostRecent = () => {
        console.log('sort by most recent')
        const copy = [...data];
        const sortedData = copy.sort((a, b) => new Date(b.date) - new Date(a.date));

        setData(sortedData);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => sortByMostUpvoted()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={() => sortByMostRecent()} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={data}/>
        </div>
    );

}

export default App;
