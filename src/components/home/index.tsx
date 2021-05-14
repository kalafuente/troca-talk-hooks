import React from 'react'
import { HomeContainer, SubItem } from './HomeStyles';
import { Link } from 'react-router-dom';

const Home: React.FunctionComponent<{}> = ({ }) => {
    return (
        <HomeContainer>
            <Link to="/troca-talk-hooks/counter">
                <SubItem>
                    <div style={{ display: "flex", flexDirection: "column" }} >
                        <h2 style={{ display: "block" }}>Contador</h2>
                        <div style={{ display: "block" }}>Contador de clicks, ejemplos de clase y de hooks</div>
                    </div>
                </SubItem>
            </Link>
            <Link to="/troca-talk-hooks/post-list">
                <SubItem >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}>Lista de posts</h2>
                        <div style={{ display: "block" }}> Lista de posteos traidos de una API, con hooks</div>
                    </div>
                </SubItem>
            </Link>
            <Link to="/troca-talk-hooks/posts-and-users">
                <SubItem >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}>Lista de posts y users</h2>
                        <div style={{ display: "block" }}> Lista de posteos y users traidos de una API, con hooks</div>
                    </div>
                </SubItem>
            </Link>
            <Link to="/troca-talk-hooks/counter-status">
                <SubItem>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h2 style={{ display: "block" }}>Contador de contadores </h2>
                        <div style={{ display: "block" }}>Contador hecho con un reducer </div>
                    </div>
                </SubItem>
            </Link>
        </HomeContainer>
    )
}

export default Home