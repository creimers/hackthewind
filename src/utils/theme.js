import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

export const darkBg = '#212121';
export const colorTeal = blue['500'];
export const colorRed = '#E6716D';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: blueGrey,
    error: red
  }
});


class Theme extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default Theme;
