import React, { useEffect, useState } from 'react'
import { getFetch } from '../Api/api';
import City from '../Api/City';

function ApiView() {

	const [data, setData] = useState(null);
	const [country, setCountry] = useState('hu');
	const [zip, setZip] = useState('8360');

	useEffect(() => { getData() }, []);

	const getData = async () => {
		setData(await getFetch(`https://api.zippopotam.us/${country}/${zip}`))
	}

	const dataSearch = () => { getData() }

	return (
		<div style={{ width: 500 }} className="rounded p-4 bg-light shadow">
			<p className="alert alert-primary small">Egy API alapú adatmegjelenítő app.</p>

			<div className="input-group">
				<input value={country} onChange={e => { setCountry(e.target.value) }} type="text" className="form-control" />
				<input value={zip} onChange={e => { setZip(e.target.value) }} type="text" className="form-control" />
				<button onClick={() => dataSearch()} className="btn btn-primary"><i className="fas fa-search"></i></button>
			</div>
			{(data) ? <City data={data} /> : ""}
		</div>
	)
}

export default ApiView