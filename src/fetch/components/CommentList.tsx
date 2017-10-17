import * as React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';

interface Props
{
    fetchData: any;
    hasError: any;
    isLoading: any;
    comments: any[];
}

class CommentList extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.fetchData('https://594ecc215fbb1a00117871a4.mockapi.io/comments');
    }

    render() {
        if (this.props.hasError) {
            return <p> error </p>;
        }
        if (this.props.isLoading) {
            return <p> Loading...</p>;
        }

        return (
            <ul>
                {this.props.comments.map((item: any) => (
                    <li key={item.id}>
                        {item.comment}
                    </li>
                ))}
            </ul>
        );
    }
}

// CommentList.propTypes = {
//     fetchData: PropTypes.func.isRequired,
//     comments: PropTypes.array.isRequired,
//     hasError: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

const mapStateToProps = (state: any) => ({
    comments: state.comments,
    hasError: state.getCommentsError,
    isLoading: state.loadComments
});

const mapDispatchToProps= (dispatch: any) => ({
    fetchData: (url: any) => dispatch(fetchComments(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);