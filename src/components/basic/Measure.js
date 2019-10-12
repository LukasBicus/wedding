import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MeasureWrapper = styled.div`
  flex: 1;
`

class Measure extends React.Component {
  state = { height: 300, width: 100 }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }
  setRef = (el) => {
    this.wrapperEl = el
    const { onSetRef } = this.props
    if (onSetRef) {
      onSetRef(el)
    }
  }
  handleWindowResize = () => {
    const { clientHeight, clientWidth } = this.wrapperEl
    this.setState({ height: clientHeight, width: clientWidth })
  }
  render() {
    const { className, children } = this.props
    const { height, width } = this.state
    return (
      <MeasureWrapper ref={this.setRef} className={className}>
        {children({ availableHeight: height, availableWidth: width })}
      </MeasureWrapper>
    )
  }
}

Measure.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  onSetRef: PropTypes.func
}

export default Measure
