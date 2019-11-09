import React from 'react';
import {Link} from 'react-router-dom';

function TodoItem(props) {
    return (
        <tr>
            <td className={props.completed ? '.completed' : ''}>{props.description}</td>
            <td>{props.responsible}</td>
            <td>{props.priority}</td>
            <td>
                <Link to={"/edit/" + props.id}>Edit Item</Link>
            </td>
        </tr>
    )
}

export default TodoItem;