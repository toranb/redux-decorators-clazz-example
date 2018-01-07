import hbs from 'htmlbars-inline-precompile';
import Component from '@ember/component';
import { connect } from 'ember-redux';
import { action } from 'ember-decorators/object';

const stateToComputed = state => {
  return {
    number: state.number
  };
};

const dispatchToActions = dispatch => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

class MyClazz extends Component {
  get layout() {
    return hbs`
      {{number}}
      <button onclick={{action "add"}}>add</button>
      <button onclick={{action "subtract"}}>subtract</button>
    `
  }

  @action
  subtract() {
    console.log('clazz action works!');
    this.send('add');
  }
}

export default connect(stateToComputed, dispatchToActions)(MyClazz);
