import styled from 'styled-components/macro'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 25px;
	margin-top: 35px;
	padding: 20px;
	letter-spacing: 1.5px;
`

export const ContainerBoxShadow = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 25px;
	margin-top: ${props => props.marginTop};
	padding: ${props => props.padding};
	letter-spacing: 1.5px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: ${props => props.borderRadius};
`

export const DashboardContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: -50vh;
	height: 50vh;
	width: 100vw;
	position: absolute;
	z-index: 2;
	border-radius: 25px 25px 0 0;
`

export const TeaserContainer = styled.section`
	width: ${props => props.width || '300px'};
	margin-bottom: 25px;
	z-index: 3;
	background: ${props => props.background || '#fdfdfd'};
	border-radius: 25px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 25px;
	margin-top: 50px;
	padding: 20px;
	letter-spacing: 1.5px;
`
