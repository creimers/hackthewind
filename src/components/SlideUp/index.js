import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 500;

const baseStyles = {
  transition: `all ${duration}ms`,
  opacity: 0,
  transform: 'translateY(100px)',
  marginTop: '1em'
}


const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(100px)' },
  entered: { opacity: 1, transform: 'translateY(0px)' },
};

class SlideUp extends React.Component {
  state = {
    showList: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({showList: true}), 10)
  }

  render() {
    return (
      <Transition in={this.state.showList} timeout={this.props.timeout || 100}>
        {(state) => (
          <div style={{...baseStyles, ...transitionStyles[state]}}>
            {this.props.children}
          </div>
          )
        }
      </Transition>
    )
  }
}

export default SlideUp
