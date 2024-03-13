import Container from 'react-bootstrap/Container';


const Section = ({id, className, children}) => {
    return (
        <section id={id} className={"py-5 ".concat(className)}> 
            <Container>
                {children}
            </Container>
        </section>
    );
}

export default Section;