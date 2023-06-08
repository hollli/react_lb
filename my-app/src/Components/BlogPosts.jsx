import React, {useState, useMemo, useContext} from "react";
import {Alert, Card, Col, ListGroup, Pagination, Form, Button} from "react-bootstrap";
import Numbering from "./Numbering";
import '../css/allPage.css';
import button from "../pages/button";
import {LangContext} from "./LangContext";
import {getDatabase, ref, push, set} from "firebase/database";

function BlogPosts({posts}) {
    const context = useContext(LangContext);
    const [post, setPost] = useState([...posts]);
    const [page, setPages] = useState(1);
    const [tag, setCategory] = useState("");
    const [sortedPosts, setSortedPosts] = useState(post);
    const [sortDirection, setSortDirection] = useState("DESC");
    const [sortTag, setSortTag] = useState("ascending");
    const [commentText, setCommentText] = useState("");
    const listnerPost = useMemo(() => {
        setPost([...posts]);
    }, [posts]);
    const sortPosts = () => {
        let sorted = [...sortedPosts].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (sortDirection === "DESC") {
                return dateB - dateA;
            } else {
                return dateA - dateB;
            }
        });
        setSortedPosts(sorted);
        if (tag !== "") {
            sorted = sorted.filter((value) => value.tag === tag);
        }
        const step = 5;
        const end = page <= 0 ? 0 : page * step;
        return sorted.slice(end - step, end);
    };
    const sortedPost = useMemo(() => sortPosts(), [sortDirection, page, tag, post]);
    const unHide = () => {
        let a = document.getElementById('hide')
        let b = document.getElementById('con1')
        let c = document.getElementById('con2')
        let s = document.getElementById('select')
        if (a.style.display === 'none') {
            a.style.display = 'block'
            b.style.display = 'none'
            c.style.display = 'none'
            s.style.display = 'block'
        } else if (a.style.display === 'block') {
            a.style.display = 'none'
            b.style.display = 'block'
            c.style.display = 'block'
            s.style.display = 'none'
        }
    }
    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };
    const handleSubmitComment = (postId, event) => {
        event.preventDefault();
        if (commentText.trim() !== "") {
            const updatedPosts = post.map((p) => {
                if (p.id === postId) {
                    const updatedComments = [...p.comments, commentText];
                    return {...p, comments: updatedComments};
                }
                return p;
            });
            setPost(updatedPosts);
            setCommentText("");
        }
    };
    const setPage = (number) => {
        const step = 2;
        const start = number <= 0 ? 0 : number * step;
        const arr = [];
        for (let i = start - step; i <= start && i < post.length; i++) {
            arr.push(post[i]);
        }
        setSortedPosts(arr);
    };
    let active = 1;
    let items = [];
    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                className=""
                onClick={(e) => {
                    setPage(number);
                    for (const key of e.target.parentElement.parentElement.children) {
                        key.classList.remove("active");
                    }
                    e.target.parentElement.classList.add("active");
                    active = number;
                }}>
                {number}
            </Pagination.Item>
        );
    }
    // const database = getDatabase();
    // const commentForm = document.getElementById('commentForm');
    // commentForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //
    //     const name = document.getElementById('nameInput').value;
    //     const comment = document.getElementById('commentInput').value;
    //     const newCommentRef = push(ref(database, 'comments'));
    //     const newComment = {
    //         name: name,
    //         comment: comment
    //     };
    //     set(newCommentRef, newComment)
    //         .then(() => {
    //             console.log('Коментар успішно збережено.');
    //             // Clear the form fields
    //             document.getElementById('nameInput').value = '';
    //             document.getElementById('commentInput').value = '';
    //         })
    //         .catch((error) => {
    //             console.log('Помилка при збереженні коментаря: ' + error.message);
    //         });
    // });

    return (
        <>
            <div id="hide" style={{display: 'none', width: "-webkit-fill-available"}}>
                <div>
                    <button id="btn2" onClick={() => {
                        setSortDirection(sortDirection === "DESC" ? "ASC" : "DESC");
                        sortPosts();
                    }}
                            style={{
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                background: "#0d6efd",
                                color: "#000",
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                            className="btn2">
                        {sortDirection === "DESC" ? context.language === "eu" ? "Data ↑" : "Дані ↑" : context.language === "eu" ? "Data ↓" : "Дані ↓"}
                    </button>
                    <Pagination style={{
                        position: "relative"
                    }}>{items}</Pagination>
                </div>
                <ul>
                    {sortedPosts.map((postt) => (
                        <Alert key={postt.id} variant={postt.variant ? postt.variant : "danger"}>
                            <Numbering startRating={postt.rating ? postt.rating : 0} set={(rating) => {
                                postt.rating = rating;
                            }}
                            />
                            <h3>{postt.title}</h3>
                            <button onClick={() => {
                                setSortTag(sortTag === "descending" ? "ascending" : "descending");
                            }}>
                                {postt.tag}
                            </button>
                            <p>{JSON.stringify(new Date(postt.date).toDateString())}</p>
                            <p>{postt.content}</p>
                            <Form

                                onSubmit={(event) => handleSubmitComment(postt.id, event)}>
                                <Form.Control
                                    type="text"
                                    placeholder={context.language === "eu" ? "Add a comment..." : "Додати коментар..."}
                                    value={commentText}
                                    onChange={handleCommentChange}
                                />
                                <Button variant="primary" type="submit">
                                    {context.language === "eu" ? "Submit" : "Відправити"}
                                </Button>
                            </Form>
                            {postt.comments.length > 0 && (
                                <div>
                                    <h5>{context.language === "eu" ? "Comments:" : "Коментарі:"}</h5>
                                    {postt.comments.map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            )}
                        </Alert>
                    ))}
                </ul>

            </div>
            <div id="con1" className="con1">
                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://images.wallpaperscraft.com/image/single/deer_mountains_art_142079_3840x2160.jpg"
                            alt="photo"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>{context.language === "eu" ? "Blog post" : "Допис у блозі"}</h5>
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
                            src="https://images.wallpaperscraft.com/image/single/craft_art_bad_weather_97072_1920x1080.jpg"
                            alt="photo"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>{context.language === "eu" ? "Blog post" : "Допис у блозі"}</h5>
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
                            src="https://images.wallpaperscraft.com/image/single/tree_shine_art_137305_3840x2160.jpg"
                            alt="photo"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>{context.language === "eu" ? "Blog post" : "Допис у блозі"}</h5>
                        <p>
                            Lorem
                        </p>

                    </div>
                </div>
            </div>
            <div id="con2" className="con2">
                <Col md="3"><h5
                    className="text-center mt-5">{context.language === "eu" ? "Categories" : "Категорії"}</h5> <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Dev </ListGroup.Item>
                        <ListGroup.Item>Web </ListGroup.Item>
                        <ListGroup.Item>Js </ListGroup.Item>
                        <ListGroup.Item>BD</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Card className="mt-3 bg-light">
                    <Card.Body>
                        <Card.Title>{context.language === "eu" ? "Slide widget" : "Віджет слайдів"}</Card.Title>
                        <Card.Text> Lorem </Card.Text>
                    </Card.Body> </Card>
            </div>
            <button
                style={{height: '50px', position: 'absolute', top: '-80px',}}
                onClick={unHide}>
                {context.language === "eu" ? "Open blog" : "Відкрити блог"}
            </button>
        </>
    );
}

export default BlogPosts;
