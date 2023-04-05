import React, {Component} from 'react';
import '../css/allPage.css';
import '../css/Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="carousel">
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                    <div className="carousel__face"/>
                </div>
                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                            alt="photo" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>
                            Lorem
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                            alt="photo" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>
                            Lorem
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                            alt="photo" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>
                            Lorem
                        </p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Blog;