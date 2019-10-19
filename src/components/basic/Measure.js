import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

const MeasureWrapper = styled.div`
  flex: 1;
`

class Measure extends React.Component {
  constructor(props) {
    super(props)
    this.measureRef = React.createRef()
  }
  state = { height: 300, width: 100 }
  componentDidMount() {
    this.handleWindowResize()
    if (this.measureRef.current) {
      this.measureRef.current.addEventListener('resize', this.debouncedHandleResize)
    }
  }
  componentWillUnmount() {
    if (this.measureRef.current) {
      this.measureRef.current.removeEventListener('resize', this.debouncedHandleResize)
    }
  }
  debouncedHandleResize = () => debounce(this.handleWindowResize, 300)
  handleWindowResize = () => {
    if (this.measureRef.current) {
      const { clientHeight, clientWidth } = this.measureRef.current
      this.setState({ height: clientHeight, width: clientWidth })
    }
  }
  render() {
    const { className, children } = this.props
    const { height, width } = this.state
    return (
      <MeasureWrapper ref={this.measureRef} className={className}>
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
