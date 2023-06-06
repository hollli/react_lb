import React, {useContext, useState} from 'react';
import '../css/allPage.css';
import '../css/Blog.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogPosts from "../Components/BlogPosts";
import {LangContext} from "../Components/LangContext";
import { getDatabase, onValue, ref, push, set, remove, update } from "firebase/database";
import context from "react-bootstrap/AccordionContext";
const Blog = () => {
    const [posts] = useState([
        {
            id: 1,
            variant: "warning",
            title: "Post",
            date: "2021-05-01T11:11:11.053Z",
            num: "",
            tag: "Aram",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 2,
            variant: "info",
            title: "Post",
            date: "2001-01-01T11:11:11.053Z",
            num: "",
            tag: "sad",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 3,
            variant: "success",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 4,
            variant: "success",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 5,
            variant: "success",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 6,
            variant: "success",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 7,
            variant: "info",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
        {
            id: 8,
            variant: "success",
            title: "Post",
            date: "2021-09-01T11:11:11.053Z",
            num: "",
            tag: "fun",
            content:
                "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
            comments: []
        },
    ]);
    const [sortDirection, setSortDirection] = useState("ASC");
    const [tag, setTag] = useState("");
    const context = useContext(LangContext);
    const sortPosts = () => {
        const sortedPosts = [...posts];
        sortedPosts.sort((a, b) => {
            if (sortDirection === "ASC") {
                return new Date(a.date) - new Date(b.date);
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });
        return sortedPosts;
    };

    const filterPostsByTag = (posts) => {
        if (tag === "") {
            return posts;
        }
        return posts.filter((post) => post.tag === tag);
    };

    const sortedPosts = React.useMemo(() => sortPosts(), [sortDirection, posts]);
    const filteredPosts = React.useMemo(() => filterPostsByTag(sortedPosts), [tag, sortedPosts]);

    const handleSortDirectionChange = () => {
        setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC");
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div id="select" style={{position: "relative", right: "120px", top: "35px", display: 'none'}}>
                    <select
                        onChange={handleTagChange}
                        value={tag}
                        style={{
                            padding: "5px",
                            borderRadius: "5px",
                            fontSize: "18px",
                            position: "absolute",
                            fontWeight: "bold",
                            left: "1200px",
                            top: "-125px"
                        }}
                    >

                        <option value="">{context.language === "eu" ? "All Categories" : "Усі категорії"}</option>
                        <option value="Aram">Aram</option>
                        <option value="fun">fun</option>
                        <option value="sad">sad</option>
                    </select>
                </div>
            </div>
            <BlogPosts posts={filteredPosts} />
        </div>
    );
};

export default Blog;
