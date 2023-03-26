import React, { useEffect, useState } from "react";
class Countdown extends React.Component {
    state = {
        count: 3
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        // setTimeout(() => {

        // }, 1000);

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimesup();
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}




const NewCountdown = (props) => {

    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            props.onTimesup();
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [count])
    return (
        <div>
            {count} hooks
        </div>
    )
}

export { Countdown, NewCountdown };