import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';

import AuthLogo from './AuthLogo';
import AuthForm from './AuthForm';
import {getTokens, setTokens} from '../../utils/misc';

// Redux
import {connect} from 'react-redux';
import {autoSignIn} from '../../store/actions/user_actions';
import {bindActionCreators} from 'redux';

class AuthComponent extends Component {
  state = {
    loading: false,
  };

  goNext = () => {
    // this.props.navigation.navigate('App');
    // this.props.navigation.navigate('AppScreens', {screen: 'News'});
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        this.setState({loading: false});
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({loading: false});
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            });
          }
        });
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm goNext={this.goNext} />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D428A',
    padding: 60,
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
)(AuthComponent);
