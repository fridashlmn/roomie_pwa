import React, { useState } from 'react'
import styled from 'styled-components'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import {
	format,
	startOfMonth,
	endOfMonth,
	isSameMonth,
	addMonths,
	subMonths,
	startOfWeek,
	endOfWeek,
	isSameDay,
	addDays
} from 'date-fns'

import './calendar.scss'
import { AddItemButton, SwitchPagesButton } from '../../components/Buttons'
import { Input } from '../../components/Forms'
import CleaningPlan from './CleaningPlan'

export default function Calendar({ loggedInUser }) {
	const [currentMonth, setCurrentMonth] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [isCalendarShown, setIsCalendarShown] = useState(true)

	function toggleCalendar() {
		setIsCalendarShown(!isCalendarShown)
	}

	function renderHeader() {
		const dateFormat = 'MMMM yyyy'
		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={() => prevMonth()}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>{format(currentMonth, dateFormat)}</span>
				</div>
				<div className="col col-end" onClick={() => nextMonth()}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
		)
	}

	function renderDays() {
		const dateFormat = 'ccc'
		const days = []
		let startDate = startOfWeek(currentMonth)
		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{format(addDays(startDate, i), dateFormat)}
				</div>
			)
		}
		return <div className="days row">{days}</div>
	}

	function renderCells() {
		const monthStart = startOfMonth(currentMonth)
		const monthEnd = endOfMonth(monthStart)
		const startDate = startOfWeek(monthStart)
		const endDate = endOfWeek(monthEnd)

		const dateFormat = 'd'
		const rows = []

		let days = []
		let day = startDate
		let formattedDate = ''

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, dateFormat)
				const cloneDay = day
				days.push(
					<div
						className={`col cell ${
							!isSameMonth(day, monthStart)
								? 'disabled'
								: isSameDay(day, selectedDate)
								? 'selected'
								: ''
						}`}
						key={day}
						onClick={() => onDateClick(cloneDay)}
					>
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
					</div>
				)
				day = addDays(day, 1)
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			)
			days = []
		}
		return <div className="body">{rows}</div>
	}

	function onDateClick(day) {
		setSelectedDate(day)
	}

	function nextMonth() {
		setCurrentMonth(addMonths(currentMonth, 1))
	}

	function prevMonth() {
		setCurrentMonth(subMonths(currentMonth, 1))
	}

	function alertAddItem() {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<section className="custom-ui" style={{ margin: '30px' }}>
						<h1>Hi {loggedInUser.firstName}!</h1>
						<Message>What do you want to add to the calendar?</Message>
						<Input marginTop="10px" placeholder="add a title" />
						<Input marginTop="10px" placeholder="add a description" />
						<Input marginTop="10px" placeholder="endDate" />
						<HorizontalLine />
						<Buttons onClick={onClose}>Cancel</Buttons>
						<Buttons
							onClick={() => {
								this.handleClickDelete()
								onClose()
							}}
						>
							Add it!
						</Buttons>
					</section>
				)
			}
		})
	}
	return (
		<>
			{isCalendarShown ? (
				<div className="calendar">
					{renderHeader()}
					{renderDays()}
					{renderCells()}
				</div>
			) : (
				<CleaningPlan loggedInUser={loggedInUser} />
			)}

			<SwitchPagesButton onClick={() => toggleCalendar()}>
				{isCalendarShown ? '>' : '<'}
			</SwitchPagesButton>
			<AddItemButton onClick={() => alertAddItem()}>&#43;</AddItemButton>
		</>
	)
}

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

const Message = styled.div`
	margin: 10px 0;
`

const HorizontalLine = styled.div`
	align-self: center;
	background: white;
	width: 200px;
	border: 0;
	height: 1px;
	margin: 20px;
`
