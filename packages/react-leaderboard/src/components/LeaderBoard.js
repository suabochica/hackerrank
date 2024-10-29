import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { response } from '../response';

function LeaderBoard(props) {
	const [data, setData] = useState(response.list)
	const [criteria, setCriteria] = useState('');
	
	function sortByCriteria(criteria) {
		switch (criteria) {
			case 'rank':
				const sortedByRank = [...data].sort((a, b) => a.rank - b.rank);
				setData(sortedByRank);
				setCriteria('rank')
				break;
			case 'name':
				const sortedByName = [...data].sort((a, b) => a.name.localeCompare(b.name));
				setData(sortedByName);
				setCriteria('name')
				break;
			case 'points':
				const sortedByPoints = [...data].sort((a, b) => a.points - b.points);
				setData(sortedByPoints);
				setCriteria('points')
				break;
			case 'age':
				const sortedByAge = [...data].sort((a, b) => a.age - b.age)
				setData(sortedByAge)
				setCriteria('age')
				break;
			default:
				setData(response.list)
		}
	}

	return (
		<div className="text-center mt-50">
			<div>
				<div>
					<Link to={`/rank`}>
						<button onClick={() => sortByCriteria('rank')} data-testid="route-rank" className={criteria === 'rank' ? 'filled' : 'outlined'} type='button'>Rank</button>
					</Link>
					<Link to={'/name'}>
						<button onClick={() => sortByCriteria('name')} data-testid="route-name" className={criteria === 'name' ? 'filled' : 'outlined'} type="button">Name</button>
					</Link>
					<Link to={'/points'}>
						<button onClick={() => sortByCriteria('points')} data-testid="route-points" className={criteria === 'points' ? 'filled' : 'outlined'} type="button">Points</button>
					</Link>
					<Link to={'/age'}>
						<button onClick={() => sortByCriteria('age')} data-testid="route-age" className={criteria === 'age' ? 'fillled' : 'outlined'} type="button">Age</button>
					</Link>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					<tbody data-testid="app-tbody">
						{data.map((element, index) => (
						<tr key={element.rank}>
							<td data-testid={`rank-${index}`}>{element.rank}</td>
							<td data-testid={`name-${index}`}>{element.name}</td>
							<td data-testid={`points-${index}`} className="numeric">{element.points}</td>
							<td data-testid={`age-${index}`} className="numeric">{element.age}</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;