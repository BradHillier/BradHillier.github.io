import Container from 'react-bootstrap/Container';


const Section = ({id, className, children}) => {
    return (
        <section id={id} className={"my-5 py-5 ".concat(className)}> 
            <Container>
                {children}
            </Container>
        </section>
    );
}

export default Section;