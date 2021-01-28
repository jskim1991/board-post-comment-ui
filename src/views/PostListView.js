import React, {Component} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import moment from "moment";

class PostListView extends Component {

    render() {

        const { posts } = this.props;

        return(
            <TableContainer component={Paper} >
                <Table m={3}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Id</TableCell>
                            <TableCell align='center'>Title</TableCell>
                            <TableCell align='center'>Content</TableCell>
                            <TableCell align='center'>Author</TableCell>
                            <TableCell align='center'>Created</TableCell>
                            <TableCell align='center'>Modified</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(posts) && posts.length ?
                                posts.map( b => (
                                    <TableRow key={b.id} hover>
                                        <TableCell>{b.id}</TableCell>
                                        <TableCell>{b.title}</TableCell>
                                        <TableCell>{b.content}</TableCell>
                                        <TableCell>{b.authorId}</TableCell>
                                        <TableCell>{moment(b.creationTime).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                                        <TableCell>{moment(b.modifiedTime).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                                    </TableRow>
                                )) : <TableRow>Empty</TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default PostListView;