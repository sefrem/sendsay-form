import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { validateFiles } from '../../redux/files/files.actions'
import DragDropComponent from './DragDropComponent'

class DragDrop extends React.Component {
  state = {
    drag: false,
  }
  dragCounter = null

  dropRef = React.createRef()

  preventDefaultStopPropagation = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDrag = e => {
    this.preventDefaultStopPropagation(e)
  }

  handleDragIn = e => {
    this.preventDefaultStopPropagation(e)
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true })
    }
  }

  handleDragOut = e => {
    this.preventDefaultStopPropagation(e)
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({ drag: false })
    }
  }

  handleDrop = e => {
    this.preventDefaultStopPropagation(e)
    this.setState({ drag: false })
    const { validateFiles } = this.props

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateFiles(e.dataTransfer.files)
    }
    e.dataTransfer.clearData()
    this.dragCounter = 0
  }

  componentDidMount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }

  render() {
    return (
      <div className="drag-drop" ref={this.dropRef}>
        <DragDropComponent drag={this.state.drag} />
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = {
  validateFiles,
}

export default connect(null, mapDispatchToProps)(DragDrop)
