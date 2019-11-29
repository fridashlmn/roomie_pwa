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

export const DetailsContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 25px;
	margin-top: 50px;
	padding: 20px;
	letter-spacing: 1.5px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: 25px;
`
export const DashboardContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: -50vh;
	height: 50vh;
	width: 100vw;
	position: absolute;
	background: #fdfdfd;
	z-index: 2;
	border-radius: 25px 25px 0 0;
`

export const ContractContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	margin: 0 30px 20px 30px;
	margin-top: ${props => props.marginTop || 0};
	padding: 15px 30px;
	letter-spacing: 1.5px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
`

export const TeaserSection = styled.div`
	width: ${props => props.width || '300px'};
	margin-bottom: 25px;
	z-index: 3;
	background: ${props => props.background || '#fdfdfd'};
	border-radius: 25px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
