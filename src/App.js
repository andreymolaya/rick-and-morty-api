import { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import { SearchBox } from './components/SearchBox'
import { Card } from './components/Card'

function App() {
	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const getCharacters = async () => {
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character'
				)
				const data = await response.json()
				setPersonajes(data.results)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		getCharacters()
	}, [])

	const CharactersFilter = characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

	return (
		<div className='container'>
			<figure className='logo'>
				<img src={Logo} alt='Logo de Rick & Morty' />
			</figure>
			{/* form filtrar */}
			<SearchBox filter={filter} setFilter={setFilter} />
			{/* form filtrar */}

			{/* section personajes */}
			<section className='characters-list'>
				{loading ? (
					<p>Cargando...</p>
				) : CharactersFilter.length > 0 ? (
					CharactersFilter.map((character) => (
						<Card key={character.id} personaje={character} />
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</section>
			{/* section personajes */}
		</div>
	)
}

export default App