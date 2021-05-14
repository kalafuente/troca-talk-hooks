import styled from 'styled-components'

export const MenuContainer = styled.nav`
    width: 100%;
    display:flex;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
    }
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #f4cdc4;
`
export const SubItem = styled.div`

`
export const Title = styled.div`
    font-size: 30px;
    margin-left: 20px;
`
export const LinkStyle = styled.a`
    color:#7179e4 !important;
    text-decoration: none !important;
    font-weight: 600;
`
export const MenuItem = styled.div`
    display:flex;
    width: 100%;
    @media (max-width: 768px) {
    flex-direction: column;
    }

`

