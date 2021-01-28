import {Component} from "react";
import {inject, observer} from "mobx-react";
import autobind from "autobind-decorator";
import PostListView from "../views/PostListView";
import axios from "axios";

@inject('postStore')
@autobind
@observer
class PostContainer extends Component {

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts() {
        const id = this.props.match.params.id;

        axios.get('/api/post/all/' + id)
            .then(response => {
                this.props.postStore.setPosts(response.data);
                // this.props.history.push('/posts/' +  id);
            })
            .catch(error => console.log(error));
    }

    render() {

        const { posts } = this.props.postStore;

        return(
            <PostListView posts={posts}
            />
        )
    }
}
export default PostContainer;