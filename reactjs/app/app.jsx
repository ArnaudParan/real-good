import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import google from "googleMaps"


const styles = theme => {
  return {
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
    dialog: {
      height: 300,
      marginTop: 160,
    },
    button: {
      margin: theme.spacing(1),
    },
    map: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0
    }
  }
}

const LoginDialog = withStyles(styles)(props => {
  const { classes, onClose, open } = props

  return (
    <Dialog onClose={onClose} open={open}>
    <div className={classes.dialog}>
      <Button variant="contained" color="primary" className={classes.button} onClick={onClose}>Log in with facebook</Button>
    </div>
    </Dialog>
  )
})

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};


class GoogleMapBackground extends React.Component {
  constructor(props) {
    super(props)
    const { classes } = props
    this.classes = classes
    this._ref = React.createRef()
    this.initMap = this.initMap.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  initMap() {
    this.map = new google.maps.Map(
      this._ref.current,
      {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      })
  }

  componentDidMount() {
    this.initMap()
  }

  render () {
    return (
      <div className={this.classes.map} ref={this._ref}></div>
    )
  }
}

GoogleMapBackground = withStyles(styles)(GoogleMapBackground)

function App() {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  return <div><GoogleMapBackground /><LoginDialog onClose={handleClose} open={open} /></div>
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
