import * as React from 'react';
import LayoutStyle from './styles';

interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = (props) => <LayoutStyle>{ props.children }</LayoutStyle>;

export default Layout;