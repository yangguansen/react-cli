import React from 'react';
import styles from './index.module.scss';
import DragItem from './components/dragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropArea from './components/dropArea';

export default class DraggableComponent extends React.Component {

	state = {
		from: [
			{
				id: 1,
				text: 'Write a cool JS library',
			},
			{
				id: 2,
				text: 'Make it generic enough',
			},
			{
				id: 3,
				text: 'Write README',
			},
			{
				id: 4,
				text: 'Create some examples',
			},
			{
				id: 5,
				text:
					'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
			},
			{
				id: 6,
				text: '???',
			},
			{
				id: 7,
				text: 'PROFIT',
			}
		],
		to: [

		]
	};

	handlePush = ( item: never ) => {
		let to = Array.from( this.state.to );
		let newArray = [ ...to, item ];

		this.setState( {
			to: newArray
		} );

	};

	handleSort = ( dragIndex: number, hoverIndex: number ) => {
		console.log( 'sort', dragIndex, hoverIndex );
		let copyTo = Array.from( this.state.to );

		let dragItem = copyTo.splice( dragIndex, 1 );

		copyTo.splice( hoverIndex, 0, dragItem[ 0 ] );

		this.setState( {
			to: copyTo
		} );
	};

	render() {
		return (
			<div className={styles.drag_section}>
				<DndProvider backend={HTML5Backend}>
					<div className={styles.to_section}>
						<DropArea to={this.state.to} handleSort={this.handleSort}></DropArea>
					</div>

					<div className={styles.from_section}>
						{
							this.state.from.map( ( v, i ) => (
								<DragItem key={v.id} name={v.text} id={v.id} from={this.state.from} handlePush={this.handlePush}></DragItem>
							) )
						}
					</div>
				</DndProvider>

			</div>
		);
	}
}