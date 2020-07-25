import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage, ActivityIndicator} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// clear Storage in Console : $reactNative.AsyncStorage.clear()
import {getTokens, setTokens} from './utils/misc';

// Redux
import {connect} from 'react-redux';
import {autoSignIn} from './store/actions/user_actions';
import {bindActionCreators} from 'redux';

// Screens:
import {RootNavigatorAuth} from './routes/routes_auth';
// import {RootNavigatorPrivate} from './routes/routes_private';
import {RootNavigatorPrivate} from './routes/routes_auth';

class App extends Component {
  state = {
    loading: true,
    token: null,
    User: '',
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        this.setState({loading: false, token: '', User: ''});
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({loading: false, token: '', User: ''});
          } else {
            this.setState({
              loading: false,
              token: this.props.User.auth.token,
              User: this.props.User.auth,
            });
          }
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    let User = nextProps.User.auth;
    // console.log(User);
    if (User) {
      this.setState({
        loading: false,
        token: this.props.User.token,
        User: this.props.User,
      });

      setTokens(User, () => {
        this.setState({loading: false});
      });
    }
  }

  render() {
    // console.log(this.state);

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else if (this.props.User.auth && this.props.User.auth.token) {
      return (
        <View style={styles.container}>
          <RootNavigatorPrivate />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <RootNavigatorAuth />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  User: state.User,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({autoSignIn}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
