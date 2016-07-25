import React from 'react'
import MainContainer from '../containers/MainContainer'
import Wrapper from './Wrapper'

export default function Main(props) {
	return (
		<div className="out">
			<main className="main">
				<Wrapper>
					<MainContainer />
					{props.children}
				</Wrapper>
			</main>
		</div>
	)
}