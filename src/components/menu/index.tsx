import React from 'react'
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem, SubItem, LinkStyle, Title } from './MenuStyles';

const Navigation: React.FunctionComponent<{}> = ({ }) => {
    return (
        <header>
            <MenuContainer>
                <MenuItem>
                    <Title><Link to="/troca-talk-hooks"><LinkStyle>Troca Talk Hooks</LinkStyle></Link></Title>
                </MenuItem>
                <MenuItem style={{ justifyContent: "space-between" }}>
                    <SubItem><Link to="/troca-talk-hooks/counter"><LinkStyle>Ejemplo contador</LinkStyle></Link></SubItem>
                    <SubItem  ><Link to="/troca-talk-hooks/post-list"><LinkStyle>Ejemplo lista de posts</LinkStyle></Link></SubItem>
                    <SubItem ><Link to="/troca-talk-hooks/posts-and-users"><LinkStyle>Ejemplo lista de posts y users</LinkStyle></Link></SubItem>
                    <SubItem style={{ marginRight: "60px" }}><Link to="/troca-talk-hooks/counter-status"><LinkStyle>Ejemplo contador de contadores</LinkStyle></Link></SubItem>
                </MenuItem>
            </MenuContainer>
        </header>
    )
}

export default Navigation