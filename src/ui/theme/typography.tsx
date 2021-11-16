import styled from "@emotion/styled"

const H1 = (props: any) => <h1 {...props}>{ props.content }</h1>
const P = (props: any) => <p {...props}>{ props.content }</p>

const headingSize = (size: string) => {
    let preferedSize = '20pt';
    
    switch (size) {
        case 'huge':
            preferedSize = '65pt';
            break;
        case 'big':
            preferedSize = '45pt';
            break;
        case 'normal':
            preferedSize = '35pt';
            break;
        case 'small':
            preferedSize = '20pt';
            break;
    
        default:
            preferedSize = '20pt';
            break;
    }

    return preferedSize;
};

const HeadingStyle = styled(H1)`
    font-size: ${props => headingSize(props.size)};
    color: ${props => props.color};
    letter-spacing: 5px;
`;

const ParagraphStyle = styled(P)`
    font-size: 16pt;
    letter-spacing: 1px;
`;

interface IHeading {
    content: string,
    color?: string,
    size: string,
};

interface IText {
    content: string,
    color?: string,
};

export const Heading = ({ content, color, size }: IHeading) => (
    <HeadingStyle content={content} color={color} size={size} />
);

export const Text = ({ content, color }: IText) => (
    <ParagraphStyle content={content} style={{ color: color }} />
);
