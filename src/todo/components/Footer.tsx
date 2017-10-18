import * as React from 'react';
import FilterLink from '../containers/FilterLink'

export default class Footer extends React.Component<{}, {}> {

    render() {

        console.log('@@@@ component Footer', this.props);

        return (
            <p>
                Show:
                {' '}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        )
    }
}