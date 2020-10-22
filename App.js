import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sum: 0,
      time: 0,
      proc: 0,
      bigsum: 0, 
      placeholder: 'Введите значение'
    };
  }
  calcBtn = () =>{
    this.setState({bigsum: this.state.sum*(this.state.proc/100/12)*this.state.time});
    console.log("---", this.state.bigsum);
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.h1}>Расчет вклада</Text>
        <Text style={styles.text}>Сумма (руб.):</Text>
        <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({sum: text})}
            placeholder={this.state.placeholder}
        />

        <Text style={styles.text}>Срок (мес.):</Text>
        <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({time: text})}
            placeholder={this.state.placeholder}
        />

        <Text style={styles.text}>Ставка (%):</Text>
        <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({proc: text})}
            placeholder={this.state.placeholder}
        />

        <Text style={styles.text}>Общая сумма (руб.):</Text>
        <TextInput
            style={styles.textinput}
            onChangeText={(text) => console.log(this.state.text)}
            placeholder={this.state.placeholder}
            value={(this.state.bigsum).toString()}
        />

        <Button
          onPress={this.calcBtn}
          style={styles.btn}
          title="Подсчитать"
          color="#000"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    height: 40,
    textAlign: 'center',
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  h1:{
    fontSize: 24, 
    marginBottom: 20,
  },
  btn:{
    marginTop: 20, 
  }
});
