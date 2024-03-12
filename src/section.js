import Container from 'react-bootstrap/Container';

const Section = ({id, title, className, children}) => {

    const Title = () => {
        if (title) {
            return (
                <h2>{title}</h2>
            )
        }
    }

    return (
        <section id={id} className={"py-5 ".concat(className)}> 
            <Container>
                {Title()}
                <div className="py-4">
                    {children} 
                </div>
            </Container>
        </section>
    );
}

export default Section;