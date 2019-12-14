import React from 'react';

class GoTopButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideTopBtn: true
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            hideTopBtn: window.scrollY === 0
        });
    }

    render() {
        const { hideTopBtn } = this.state;
        return (
            <button
                className="go-top-btn"
                style={{ display: hideTopBtn ? 'none' : 'block' }}
                onClick={() => window.scrollTo(0, 0)}
            >최상단으로 이동</button>
        )
    }
}

export default GoTopButton;