import React, {Component} from 'react';

class TableHeader extends Component {
    render() {
        const {displayName} = this.props;
        return <th>{displayName}</th>
    }
}

export default TableHeader;