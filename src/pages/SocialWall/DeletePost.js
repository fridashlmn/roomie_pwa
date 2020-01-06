import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default function DeletePost({ postId }) {
	function handleDelete(postId) {
		axios.delete(`/post/${postId}`).catch(err => {
			console.error('Didnt work....', err)
		})
	}

	function alertDelete() {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<section className="custom-ui" style={{ margin: '30px' }}>
						<h1>Oh hey!</h1>
						<Message>Sure you want to delete that?</Message>
						<HorizontalLine />
						<Buttons onClick={onClose}>Cancel</Buttons>
						<Buttons
							onClick={() => {
								handleDelete()
								onClose()
							}}
						>
							Delete
						</Buttons>
					</section>
				)
			}
		})
	}
	return (
		<DeleteButton
			onClick={() => handleDelete(postId)}
			// eslint-disable-next-line react/jsx-no-duplicate-props
			onClick={() => alertDelete()}
		>
			&times;
		</DeleteButton>
	)
}

const DeleteButton = styled.button`
	grid-area: deleteBtn;
	align-self: top;
	justify-self: end;
	margin-bottom: 10px;
	padding: 5px;
	font-size: 24px;
	border: none;
`

const Message = styled.div`
	margin: 10px;
`

const Buttons = styled.div`
	display: inline;
	padding: 15px;
	margin-right: 20px;
	background: #787ff6;
	font-size: 14px;
	font-weight: 500;
	color: #fbfbfb;
	border: none;
	border-radius: 50px;
	cursor: default;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	transition: 0.35s;
`
const HorizontalLine = styled.div`
	align-self: center;
	background: white;
	width: 200px;
	border: 0;
	height: 1px;
	margin: 20px;
`
