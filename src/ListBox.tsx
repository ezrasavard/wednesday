import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count: number): Array<ITempRowData> => {
  return Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));
}

// a little function to help us with reordering the result
const reorder = <T extends any>(list: Array<T>, startIndex: number, endIndex: number): Array<T> => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

// FIXME: draggableStyle needs a type defined
const getItemStyle = (isDragging: boolean, draggableStyle: any): {} => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

// FIXME: get this stuff from props!
const getListStyle = (isDraggingOver: boolean): {} => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: `80%`,
  margin: `0 auto`,
});

// FIXME: replace with real thing
interface ITempRowData {
    id: string,
    content: string,
}

interface IListBoxProps {
};

interface IListBoxState {
    items: ITempRowData[],
}

export default class ListBox extends React.Component<IListBoxProps, IListBoxState> {
  constructor(props: IListBoxProps) {
    super(props);
    this.state = {
      items: getItems(10),
    };
  }

  private onDragEnd = (result: any): void => { // FIXME: real type
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  public render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
